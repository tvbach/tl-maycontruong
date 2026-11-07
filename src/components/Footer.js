import Link from 'next/link';
import { NAV, SITE } from '@/data/site';
import Brand from '@/components/Brand';
import { IconPhone, IconPin } from '@/components/landing/icons';

const Footer = () => {
  return (
    <footer className="on-dark bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Brand light />
          <p className="mt-6 max-w-sm leading-relaxed">
            {SITE.legalName}. Cho thuê, mua bán và sửa chữa máy công trình tại Thái Nguyên và các tỉnh miền Bắc.
          </p>
          <p className="mt-4 font-display text-lg font-bold text-gold-400 [font-stretch:105%]">{SITE.slogan}</p>
        </div>

        <nav aria-label="Liên kết cuối trang" className="md:col-span-3">
          <h2 className="font-display text-base font-bold text-white">Trang</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
            <li><Link href="/" className="inline-flex min-h-11 items-center hover:text-white">Trang chủ</Link></li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-white">{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-display text-base font-bold text-white">Liên hệ</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-3">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <a href={`tel:${SITE.phone}`} className="font-semibold text-white hover:text-gold-400">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <img src="/images/zalo-icon.svg" alt="" className="mt-0.5 h-5 w-5 shrink-0" />
              <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-white">Zalo {SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white">
                {SITE.address}
                <span className="block text-sm text-navy-300">({SITE.addressOld})</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-navy-300 sm:px-8">
          © {new Date().getFullYear()} {SITE.legalName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
