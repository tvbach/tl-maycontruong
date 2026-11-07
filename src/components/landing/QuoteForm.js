"use client";

import { useEffect, useState } from 'react';
import { SITE } from '@/data/site';
import { MACHINES } from '@/data/machines';
import { db, firebaseReady, QUOTES } from '@/lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { IconPhone, IconCheck } from './icons';

const MACHINE_TYPES = [
  'Máy xúc đào bánh lốp',
  'Máy xúc đào bánh xích',
  'Máy lu',
  'Máy ủi',
  'Máy xúc lật',
  'Máy cẩu',
  'Chưa rõ, cần tư vấn',
];
const PHONE_RE = /^(0|\+84)\d{9,10}$/;

const field =
  'mt-2 block w-full min-h-12 rounded-sm border bg-white px-4 py-3 text-base text-navy-950 placeholder:text-navy-400 transition-colors focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500';

const typeOf = (name) => {
  const m = MACHINES.find((x) => x.name === name);
  if (!m) return '';
  if (m.category === 'banh-lop') return 'Máy xúc đào bánh lốp';
  if (m.category === 'banh-xich') return 'Máy xúc đào bánh xích';
  if (m.category === 'lu') return 'Máy lu';
  return '';
};

// Phones and tablets get an SMS (every phone has it); desktops get an email.
const isPhone = () =>
  typeof navigator !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform)));

/*
  Gửi yêu cầu:
  - Có cấu hình Firebase (.env.local): lưu vào Firestore, xem trong /admin.
  - Chưa có, hoặc lưu thất bại: soạn sẵn trong Tin nhắn (điện thoại) hoặc Email (máy tính) để khách bấm Gửi.
*/
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
const QuoteForm = ({ title = 'Cần máy cho công trình?', as: Heading = 'h2' }) => {
  const [form, setForm] = useState({ name: '', phone: '', machine: '', mode: 'Thuê', location: '', note: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null); // null | { via: 'saved' | 'sms' | 'email', text }
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(null); // null | text of the request that could not be saved
  const [trap, setTrap] = useState(''); // honeypot: người thật không thấy ô này
  const [copied, setCopied] = useState(false);

  // /lien-he?may=Komatsu%20PC200#bao-gia pre-fills the request from a machine card or product page.
  useEffect(() => {
    const may = new URLSearchParams(window.location.search).get('may');
    if (!may) return;
    setForm((f) => ({ ...f, machine: typeOf(may) || f.machine, note: `Hỏi giá máy ${may}. ` }));
    document.getElementById('bao-gia')?.scrollIntoView({ block: 'start' });
  }, []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Nhập họ tên để chúng tôi biết gọi ai.';
    if (!PHONE_RE.test(form.phone.replace(/[\s.-]/g, ''))) er.phone = 'Số điện thoại chưa đúng. Ví dụ: 0386 684 246.';
    if (!form.machine) er.machine = 'Chọn loại máy, hoặc chọn "Chưa rõ, cần tư vấn".';
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(`q-${Object.keys(er)[0]}`)?.focus();
      return;
    }
    const text = [
      `Yêu cầu báo giá ${form.mode.toLowerCase()} ${form.machine.toLowerCase()}`,
      `Họ tên: ${form.name}`,
      `Điện thoại: ${form.phone}`,
      form.location && `Địa điểm thi công: ${form.location}`,
      form.note && `Ghi chú: ${form.note.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

    setFailed(null);
    if (trap) {
      setSent({ via: 'saved', text });
      return;
    }
    if (firebaseReady) {
      setSending(true);
      try {
        await withTimeout(
          addDoc(collection(db, QUOTES), {
            name: form.name.trim().slice(0, 100),
            phone: form.phone.replace(/[\s.-]/g, ''),
            machine: form.machine,
            mode: form.mode,
            location: form.location.trim().slice(0, 200),
            note: form.note.trim().slice(0, 1000),
            source: window.location.pathname.slice(0, 200),
            status: 'moi',
            createdAt: serverTimestamp(),
          }),
          12000
        );
        setSent({ via: 'saved', text });
      } catch {
        setFailed(text);
      } finally {
        setSending(false);
      }
      return;
    }
    openApp(text);
  };

  const openApp = (text) => {
    const via = isPhone() ? 'sms' : 'email';
    window.location.href =
      via === 'sms'
        ? `sms:${SITE.phone}?&body=${encodeURIComponent(text)}`
        : `mailto:${SITE.email}?subject=${encodeURIComponent(`Yêu cầu báo giá ${form.machine} - ${form.name}`)}&body=${encodeURIComponent(text)}`;
    setCopied(false);
    setSent({ via, text });
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sent.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const err = (k) =>
    errors[k] && (
      <p id={`q-${k}-err`} className="mt-2 text-sm font-medium text-danger">
        {errors[k]}
      </p>
    );
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `q-${k}-err` : undefined });
  const border = (k) => (errors[k] ? 'border-danger' : 'border-navy-400');

  return (
    <section id="bao-gia" aria-labelledby="bao-gia-title" className="on-dark bg-navy-800 py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Heading id="bao-gia-title" className="text-4xl leading-[1.08] sm:text-5xl">
            {title}
          </Heading>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-navy-100">
            Để lại số điện thoại, thợ kỹ thuật sẽ gọi lại tư vấn loại máy và gửi báo giá chi tiết.
          </p>

          <div className="mt-10 border-l-4 border-gold-500 pl-6">
            <p className="text-navy-200">Cần máy gấp, gọi thẳng:</p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-1 inline-flex min-h-12 items-center gap-3 font-display text-3xl font-extrabold text-white [font-stretch:110%] hover:text-gold-400 sm:text-4xl"
            >
              <IconPhone className="h-7 w-7 text-gold-400" />
              {SITE.phoneDisplay}
            </a>
            <p className="mt-3 text-navy-200">
              hoặc{' '}
              <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-gold-500 decoration-2 underline-offset-4">
                nhắn Zalo cùng số này
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="on-light rounded-md bg-white p-6 sm:p-10">
            {sent ? (
              <div className="py-6 text-center" role="status">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 text-navy-800">
                  <IconCheck className="h-8 w-8" />
                </span>
                {sent.via === 'saved' ? (
                  <>
                    <h3 className="mt-6 text-3xl">Đã gửi yêu cầu báo giá</h3>
                    <p className="mx-auto mt-3 max-w-md">
                      Thợ kỹ thuật sẽ gọi lại số <strong className="text-navy-800">{form.phone}</strong> trong giờ làm việc.
                      Cần gấp hơn, gọi thẳng cho chúng tôi.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="mt-6 text-3xl">Còn một bước: bấm Gửi</h3>
                    <p className="mx-auto mt-3 max-w-md">
                      {sent.via === 'sms'
                        ? 'Ứng dụng Tin nhắn vừa mở với nội dung yêu cầu gửi tới số của Thanh Lịch. Bấm Gửi trong tin nhắn để hoàn tất.'
                        : 'Ứng dụng email vừa mở với nội dung yêu cầu. Bấm Gửi trong email để hoàn tất.'}
                    </p>
                    <p className="mx-auto mt-3 max-w-md text-muted">
                      Không thấy ứng dụng nào mở? Sao chép nội dung rồi dán vào Zalo, hoặc gọi thẳng cho chúng tôi.
                    </p>
                  </>
                )}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  {sent.via !== 'saved' && (
                    <>
                      <button type="button" onClick={copy} className="btn btn-navy">
                        {copied ? 'Đã sao chép' : 'Sao chép nội dung'}
                      </button>
                      <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
                        <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
                        Mở Zalo
                      </a>
                    </>
                  )}
                  <a href={`tel:${SITE.phone}`} className="btn btn-gold">
                    <IconPhone className="h-5 w-5" />
                    Gọi ngay
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSent(null)}
                  className="mt-6 inline-flex min-h-11 items-center font-semibold text-navy-800 underline underline-offset-4"
                >
                  {sent.via === 'saved' ? 'Gửi thêm yêu cầu khác' : 'Sửa lại thông tin'}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="relative grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-name" className="font-semibold text-navy-800">Họ tên</label>
                  <input id="q-name" autoComplete="name" value={form.name} onChange={set('name')} {...a11y('name')}
                    className={`${field} ${border('name')}`} placeholder="Nguyễn Văn A" />
                  {err('name')}
                </div>
                <div>
                  <label htmlFor="q-phone" className="font-semibold text-navy-800">Số điện thoại</label>
                  <input id="q-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} {...a11y('phone')}
                    className={`${field} ${border('phone')}`} placeholder="09xx xxx xxx" />
                  {err('phone')}
                </div>
                <div>
                  <label htmlFor="q-machine" className="font-semibold text-navy-800">Loại máy</label>
                  <select id="q-machine" value={form.machine} onChange={set('machine')} {...a11y('machine')}
                    className={`${field} cursor-pointer ${border('machine')}`}>
                    <option value="">Chọn loại máy</option>
                    {MACHINE_TYPES.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  {err('machine')}
                </div>
                <fieldset>
                  <legend className="font-semibold text-navy-800">Bạn cần</legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {['Thuê', 'Mua'].map((m) => (
                      <label
                        key={m}
                        className={`flex min-h-12 cursor-pointer items-center justify-center rounded-sm border-2 font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-navy-800 ${
                          form.mode === m ? 'border-navy-800 bg-navy-800 text-white' : 'border-navy-400 text-navy-800 hover:border-navy-800'
                        }`}
                      >
                        <input type="radio" name="mode" value={m} checked={form.mode === m} onChange={set('mode')} className="sr-only" />
                        {m} máy
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="q-location" className="font-semibold text-navy-800">
                    Địa điểm thi công <span className="font-normal text-muted">(không bắt buộc)</span>
                  </label>
                  <input id="q-location" value={form.location} onChange={set('location')} className={`${field} border-navy-400`} placeholder="Ví dụ: xã Phú Lạc, Đại Từ" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="q-note" className="font-semibold text-navy-800">
                    Ghi chú <span className="font-normal text-muted">(không bắt buộc)</span>
                  </label>
                  <textarea id="q-note" rows={3} value={form.note} onChange={set('note')} className={`${field} border-navy-400`} placeholder="Thời gian cần máy, khối lượng công việc..." />
                </div>
                {/* Honeypot chống spam: ẩn với người dùng và trình đọc màn hình */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="q-website">Website</label>
                  <input id="q-website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
                </div>

                {failed && (
                  <div role="alert" className="rounded-md border-2 border-danger bg-red-50 p-4 sm:col-span-2">
                    <p className="font-semibold text-danger">Chưa gửi được yêu cầu, có thể do mạng yếu.</p>
                    <p className="mt-1 text-navy-800">Bấm gửi lại, hoặc gửi cùng nội dung qua tin nhắn, hoặc gọi thẳng cho chúng tôi.</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <button type="button" onClick={() => openApp(failed)} className="btn btn-navy btn-sm">
                        Gửi qua tin nhắn
                      </button>
                      <a href={`tel:${SITE.phone}`} className="btn btn-ghost-dark btn-sm">
                        <IconPhone className="h-5 w-5" />
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button type="submit" disabled={sending} aria-busy={sending} className="btn btn-gold w-full !min-h-14 text-lg disabled:cursor-wait disabled:opacity-70">
                    {sending ? 'Đang gửi…' : firebaseReady ? 'Gửi yêu cầu báo giá' : 'Soạn yêu cầu báo giá'}
                  </button>
                  <p className="mt-3 text-center text-sm text-muted">
                    {firebaseReady
                      ? 'Số điện thoại của bạn chỉ dùng để gọi lại báo giá.'
                      : 'Yêu cầu sẽ mở trong ứng dụng Tin nhắn (điện thoại) hoặc Email (máy tính) để bạn bấm gửi.'}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
