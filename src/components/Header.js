"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/data/site';
import { IconPhone, IconMenu, IconClose } from '@/components/landing/icons';
import Brand from '@/components/Brand';

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  // Close the mobile menu with Esc (focus back on the toggle) or by tapping outside the header.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const isActive = (href) => !href.includes('#') && pathname === href;

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-navy-100 bg-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Thanh Lịch, về trang chủ" className="rounded-sm">
          <Brand />
        </Link>

        <nav aria-label="Menu chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="relative inline-flex min-h-11 items-center rounded-sm px-3 font-medium text-navy-800 transition-colors hover:text-navy-700 aria-[current=page]:font-semibold after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:scale-x-0 after:bg-gold-500 after:transition-transform hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phone}`} className="btn btn-gold hidden !px-4 sm:inline-flex">
            <IconPhone className="h-5 w-5" />
            {SITE.phoneDisplay}
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-di-dong"
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm text-navy-800 hover:bg-mist lg:hidden"
          >
            <span className="sr-only">{open ? 'Đóng menu' : 'Mở menu'}</span>
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-di-dong" aria-label="Menu chính" className="border-t border-navy-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="flex min-h-12 items-center border-b border-navy-100 text-lg font-medium text-navy-800 aria-[current=page]:font-bold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-3 pb-2 pt-4 sm:flex-row">
              <a href={`tel:${SITE.phone}`} className="btn btn-gold">
                <IconPhone className="h-5 w-5" />
                Gọi {SITE.phoneDisplay}
              </a>
              <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
                <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
                Nhắn Zalo
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
