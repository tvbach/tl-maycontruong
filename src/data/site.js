// Thông tin liên hệ dùng chung cho toàn bộ website. Sửa ở đây, mọi trang tự cập nhật.
export const SITE = {
  // Tên miền chính thức (không có dấu / ở cuối). Đặt NEXT_PUBLIC_SITE_URL trên Vercel nếu khác.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://thanhlich.com').replace(/\/$/, ''),
  name: 'Thanh Lịch',
  legalName: 'Công ty TNHH Thanh Lịch',
  slogan: 'Uy tín làm nên thương hiệu',
  phone: '0386684246',
  phoneDisplay: '0386 684 246',
  zalo: 'https://zalo.me/0386684246',
  messenger: 'https://www.facebook.com/thanh.lich.830842',
  // Chưa có email theo tên miền. Khi có, thêm lại `email: '...'` rồi hiện trong Footer và Location.
  // Địa chỉ theo đơn vị hành chính mới từ 1/7/2025 (Nghị quyết 1683/NQ-UBTVQH15):
  // thị trấn Hùng Sơn, huyện Đại Từ cũ nay thuộc xã Đại Phúc, tỉnh Thái Nguyên.
  address: 'Số 283, xã Đại Phúc, tỉnh Thái Nguyên',
  addressOld: 'trước đây là thị trấn Hùng Sơn, huyện Đại Từ',
  addressShort: 'xã Đại Phúc, Thái Nguyên',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2774.1217481939593!2d105.65070307133658!3d21.63608259574661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM4JzEwLjEiTiAxMDXCsDM5JzAyLjYiRQ!5e1!3m2!1sen!2s!4v1740894574524!5m2!1sen!2s',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=21.636082,105.650703',
  geo: { lat: 21.636082, lng: 105.650703 },
  // Địa chỉ dạng có cấu trúc cho Google (phải khớp từng chữ với Google Business Profile).
  postal: {
    streetAddress: 'Số 283',
    addressLocality: 'Xã Đại Phúc',
    addressRegion: 'Thái Nguyên',
    addressCountry: 'VN',
  },
};

export const NAV = [
  { name: 'Dịch vụ', href: '/#dich-vu' },
  { name: 'Máy tại bãi', href: '/san-pham' },
  { name: 'Quy trình thuê', href: '/#quy-trinh' },
  { name: 'Giới thiệu', href: '/gioi-thieu' },
  { name: 'Liên hệ', href: '/lien-he' },
];
