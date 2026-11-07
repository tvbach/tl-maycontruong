import { Saira, Be_Vietnam_Pro } from 'next/font/google';
import AdminShell from '@/components/admin/AdminShell';
import '../globals.css';

const display = Saira({ subsets: ['latin', 'vietnamese'], axes: ['wdth'], variable: '--font-display-face', display: 'swap' });
const body = Be_Vietnam_Pro({ subsets: ['latin', 'vietnamese'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

export const metadata = {
  title: 'Quản trị | Thanh Lịch',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
