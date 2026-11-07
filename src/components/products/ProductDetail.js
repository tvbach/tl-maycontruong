import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/data/site';
import { MACHINES } from '@/data/machines';
import { MachineCard } from '@/components/products/MachineCard';
import { IconPhone, IconCheck } from '@/components/landing/icons';

const ProductDetail = ({ machine }) => {
  const others = MACHINES.filter((m) => m.slug !== machine.slug).slice(0, 3);
  const ask = `/lien-he?may=${encodeURIComponent(machine.name)}#bao-gia`;

  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-navy-100">
              <Image src={machine.image} alt={machine.imageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              {machine.illustrative ? 'Ảnh minh họa cùng dòng máy.' : 'Ảnh chụp tại bãi máy Thanh Lịch.'}
            </figcaption>
            </figure>

            {machine.realPhotos?.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl">Ảnh thực tế</h2>
                <p className="mt-1 text-sm text-muted">Ảnh chụp máy thật của Thanh Lịch. Nhắn Zalo để xin thêm ảnh.</p>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {machine.realPhotos.map((src, i) => (
                    <li key={src} className="relative aspect-[3/2] overflow-hidden rounded-md bg-navy-100">
                      <Image src={src} alt={`Ảnh thực tế ${machine.name} của Thanh Lịch, ảnh ${i + 1}`} fill sizes="(min-width: 1024px) 29vw, 50vw" className="object-cover" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed">{machine.summary}</p>

            <dl className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
              {machine.specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-6 py-3">
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-right font-semibold text-navy-800">{s.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 py-3">
                <dt className="text-muted">Hình thức</dt>
                <dd className="text-right font-semibold text-navy-800">Cho thuê hoặc bán</dd>
              </div>
            </dl>

            <h2 className="mt-10 text-xl">Phù hợp cho</h2>
            <ul className="mt-4 space-y-3">
              {machine.uses.map((u) => (
                <li key={u} className="flex gap-3 text-navy-800">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-md bg-mist p-6">
              <p className="font-semibold text-navy-800">Giá thuê, giá bán và lịch trống của máy này</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={`tel:${SITE.phone}`} className="btn btn-gold">
                  <IconPhone className="h-5 w-5" />
                  Gọi {SITE.phoneDisplay}
                </a>
                <Link href={ask} className="btn btn-ghost-dark">Gửi yêu cầu báo giá</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section aria-labelledby="may-khac" className="bg-mist py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-6">
              <h2 id="may-khac" className="text-3xl sm:text-4xl">Máy khác tại bãi</h2>
              <Link href="/san-pham" className="text-link inline-flex min-h-11 items-center">Xem tất cả</Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((m) => <MachineCard key={m.slug} machine={m} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
