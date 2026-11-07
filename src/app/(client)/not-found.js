import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata = { title: 'Không tìm thấy trang', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="font-display text-6xl font-extrabold text-navy-200 [font-stretch:115%]">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Không tìm thấy trang này</h1>
        <p className="mt-5 text-lg">Đường dẫn có thể đã đổi hoặc máy đã được bán. Xem các máy đang có tại bãi, hoặc gọi để hỏi trực tiếp.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/san-pham" className="btn btn-navy">Xem máy tại bãi</Link>
          <a href={`tel:${SITE.phone}`} className="btn btn-gold">Gọi {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
