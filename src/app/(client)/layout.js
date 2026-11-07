import { Saira, Be_Vietnam_Pro } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { businessJsonLd } from '@/data/seo';
import JsonLd from '@/components/seo/JsonLd';
import '../globals.css';

// Saira is variable on weight and width; the wide cut echoes the THANHLICH wordmark.
const display = Saira({
  subsets: ['latin', 'vietnamese'],
  axes: ['wdth'],
  variable: '--font-display-face',
  display: 'swap',
});

const body = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Cho thuê, mua bán máy xúc, máy lu tại Thái Nguyên | Thanh Lịch',
    template: '%s | Máy công trình Thanh Lịch',
  },
  description:
    'Cho thuê máy xúc, máy lu theo ca, ngày, tháng và mua bán máy công trình đã qua sử dụng tại Đại Từ, Thái Nguyên. Giao máy tận công trình, kỹ thuật 24/7. Gọi ' +
    SITE.phoneDisplay +
    '.',
  applicationName: 'Thanh Lịch',
  alternates: { canonical: '/' },
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Máy công trình Thanh Lịch',
    url: '/',
    title: 'Cho thuê, mua bán máy công trình tại Thái Nguyên | Thanh Lịch',
    description: 'Máy xúc bánh lốp, bánh xích, máy lu sẵn tại bãi Đại Từ. Giao tận công trình, báo giá rõ ràng.',
    images: [{ url: IMAGES.hero.src, width: 2400, height: 1600, alt: IMAGES.hero.alt }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  // Mã xác minh Google Search Console (phương thức "Thẻ HTML"), đặt trong biến môi trường.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = { themeColor: '#14305a', viewportFit: 'cover' };

export default function ClientLayout({ children }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-800"
        >
          Chuyển đến nội dung chính
        </a>
        <JsonLd data={businessJsonLd} />
        <Header />
        <main id="noi-dung">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
