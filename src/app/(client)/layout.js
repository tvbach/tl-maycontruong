"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import '../globals.css';

export default function RootLayout({ children }) {
  // Set document title and meta tags dynamically
  useEffect(() => {
    document.title = 'ThanhLich - Mua, bán, cho thuê máy công trình';

    // Set favicon
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/svg+xml';
    favicon.rel = 'shortcut icon';
    favicon.href = '/images/logo.svg';
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
