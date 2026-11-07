import { SITE } from '@/data/site';

// Sinh /robots.txt. Bản preview trên Vercel (không phải tên miền chính) bị chặn index để tránh trùng nội dung.
export default function robots() {
  const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';
  return {
    rules: isProduction ? [{ userAgent: '*', allow: '/', disallow: ['/admin'] }] : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
