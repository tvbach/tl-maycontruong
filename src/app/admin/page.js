"use client";

import { useEffect, useMemo, useState } from 'react';
import { collection, doc, limit, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { db, QUOTES } from '@/lib/firebase';
import { IconPhone, IconPin } from '@/components/landing/icons';

const STATUSES = [
  { id: 'moi', name: 'Mới', badge: 'bg-gold-500 text-navy-950' },
  { id: 'da_goi', name: 'Đã gọi', badge: 'bg-navy-100 text-navy-800' },
  { id: 'xong', name: 'Xong', badge: 'bg-mist text-muted ring-1 ring-navy-100' },
];
const statusOf = (id) => STATUSES.find((s) => s.id === id) || STATUSES[0];

const fmtTime = (ts) => {
  if (!ts) return 'Vừa gửi';
  const d = ts.toDate();
  return d.toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
};

export default function QuotesPage() {
  const [items, setItems] = useState(null); // null = loading
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('moi');

  useEffect(() => {
    const q = query(collection(db, QUOTES), orderBy('createdAt', 'desc'), limit(300));
    return onSnapshot(
      q,
      (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (err) =>
        setError(
          err.code === 'permission-denied'
            ? 'Tài khoản này chưa có quyền xem yêu cầu. Thêm email của bạn vào hàm isAdmin() trong firestore.rules rồi Publish lại.'
            : 'Không tải được danh sách. Kiểm tra mạng rồi tải lại trang.'
        )
    );
  }, []);

  const counts = useMemo(() => {
    const c = { all: items?.length || 0 };
    STATUSES.forEach((s) => (c[s.id] = items?.filter((i) => (i.status || 'moi') === s.id).length || 0));
    return c;
  }, [items]);

  const shown = items?.filter((i) => filter === 'all' || (i.status || 'moi') === filter) || [];

  const setStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, QUOTES, id), { status });
    } catch {
      setError('Không đổi được trạng thái. Thử lại.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl">Yêu cầu báo giá</h1>
      <p className="mt-2 text-muted">Yêu cầu khách gửi từ form trên website, cập nhật ngay khi có yêu cầu mới.</p>

      <div role="group" aria-label="Lọc theo trạng thái" className="mt-8 flex flex-wrap gap-2">
        {[...STATUSES, { id: 'all', name: 'Tất cả' }].map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFilter(s.id)}
            aria-pressed={filter === s.id}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy-400 bg-white px-5 font-semibold text-navy-800 hover:border-navy-800 aria-pressed:border-navy-800 aria-pressed:bg-navy-800 aria-pressed:text-white"
          >
            {s.name}
            <span className="text-sm opacity-75">{counts[s.id]}</span>
          </button>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-6 rounded-md border-2 border-danger bg-red-50 px-4 py-3 font-medium text-danger">
          {error}
        </p>
      )}

      {items === null && !error && <p role="status" className="mt-10 text-muted">Đang tải…</p>}

      {items && shown.length === 0 && (
        <p className="mt-10 rounded-md border border-dashed border-navy-400 bg-white px-6 py-10 text-center text-muted">
          {filter === 'moi' ? 'Không có yêu cầu mới. Yêu cầu khách gửi sẽ hiện ở đây.' : 'Chưa có yêu cầu nào ở mục này.'}
        </p>
      )}

      <ul className="mt-6 space-y-4">
        {shown.map((r) => {
          const st = statusOf(r.status);
          return (
            <li key={r.id} className="rounded-md border border-navy-100 bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-sans text-xl font-bold tracking-normal [font-stretch:100%]">{r.name}</h2>
                    <span className={`rounded-full px-3 py-0.5 text-sm font-semibold ${st.badge}`}>{st.name}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {fmtTime(r.createdAt)}
                    {r.source ? ` · gửi từ trang ${r.source}` : ''}
                  </p>
                </div>
                <label className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                  Trạng thái
                  <select
                    value={r.status || 'moi'}
                    onChange={(e) => setStatus(r.id, e.target.value)}
                    className="min-h-11 cursor-pointer rounded-sm border border-navy-400 bg-white px-3 text-base font-normal"
                  >
                    {STATUSES.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a href={`tel:${r.phone}`} className="btn btn-gold btn-sm">
                    <IconPhone className="h-5 w-5" />
                    {r.phone}
                  </a>
                  <a href={`https://zalo.me/${r.phone}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark btn-sm">
                    <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
                    Zalo
                  </a>
                </div>
                <p className="text-navy-800">
                  <span className="font-semibold">{r.mode} máy:</span> {r.machine}
                </p>
                {r.location && (
                  <p className="flex gap-2 text-navy-800">
                    <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                    {r.location}
                  </p>
                )}
                {r.note && <p className="whitespace-pre-line sm:col-span-2">{r.note}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
