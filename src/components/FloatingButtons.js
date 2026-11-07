"use client";

import { usePathname } from 'next/navigation';
import { SITE } from '@/data/site';
import { IconPhone, IconFile } from '@/components/landing/icons';

// Pages that render the quote form (#bao-gia) further down.
const PAGES_WITH_FORM = ['/', '/san-pham', '/gioi-thieu', '/lien-he'];

const Bubble = ({ href, color, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_6px_16px_rgb(11_26_51/0.25)]"
    style={{ background: color }}
  >
    <img src={icon} alt="" className="h-8 w-8" />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-navy-950 px-3 py-1.5 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  </a>
);

// Desktop: two chat bubbles bottom-right, labelled on hover/focus.
// Mobile: a fixed bottom bar, because that is where thumbs are and calling is the main action.
const FloatingButtons = () => {
  const pathname = usePathname();
  const quoteHref = PAGES_WITH_FORM.includes(pathname) ? '#bao-gia' : '/lien-he#bao-gia';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <Bubble href={SITE.zalo} color="#0068ff" icon="/images/zalo-icon.svg" label="Nhắn Zalo" />
        <Bubble href={SITE.messenger} color="#0099ff" icon="/images/messenger-icon.svg" label="Nhắn Messenger" />
      </div>

      <nav
        aria-label="Liên hệ nhanh"
        className="on-dark fixed inset-x-0 bottom-0 z-40 grid h-[calc(4rem+env(safe-area-inset-bottom))] grid-cols-3 bg-navy-950 pb-[env(safe-area-inset-bottom)] text-white md:hidden"
      >
        <a href={`tel:${SITE.phone}`} className="flex flex-col items-center justify-center gap-1 bg-gold-500 text-sm font-semibold text-navy-950">
          <IconPhone className="h-5 w-5" />
          Gọi ngay
        </a>
        <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-sm font-semibold">
          <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
          Zalo
        </a>
        <a href={quoteHref} className="flex flex-col items-center justify-center gap-1 border-l border-white/15 text-sm font-semibold">
          <IconFile className="h-5 w-5" />
          Báo giá
        </a>
      </nav>
    </>
  );
};

export default FloatingButtons;
