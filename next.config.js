/** @type {import('next').NextConfig} */
module.exports = {
  // Ảnh minh họa lấy từ Unsplash (xem src/data/images.js)
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  async rewrites() {
    return [
      {
        source: '/san-pham',
        destination: '/products',
      },
      {
        source: '/san-pham/:id',
        destination: '/products/:id',
      },
      { source: '/gioi-thieu', destination: '/about' },
      { source: '/lien-he', destination: '/contact' },
    ]
  },

  async redirects() {
    // Trang quản trị đang tắt: mọi đường dẫn /admin chuyển về trang chủ.
    // Bật lại: thêm NEXT_PUBLIC_ENABLE_ADMIN=true vào .env.local rồi chạy lại `npm run dev`.
    const adminOff = process.env.NEXT_PUBLIC_ENABLE_ADMIN !== 'true';
    return [
      ...(adminOff
        ? [
            { source: '/admin', destination: '/', permanent: false },
            { source: '/admin/:path*', destination: '/', permanent: false },
          ]
        : []),
      { source: '/about', destination: '/gioi-thieu', permanent: true },
      { source: '/contact', destination: '/lien-he', permanent: true },
      {
        source: '/products',
        destination: '/san-pham',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/products/:id',
        destination: '/san-pham/:id',
        permanent: true,
      },
    ]
  },
};

// permanent: true => This indicates that the redirect is permanent (HTTP status code 301). This is important for SEO as it tells search engines that the page has moved permanently.