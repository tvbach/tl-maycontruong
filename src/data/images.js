// Ảnh dùng trên website. Ảnh từ Unsplash (giấy phép Unsplash: dùng miễn phí cho mục đích thương mại, không bắt buộc ghi nguồn).
// Khi có ảnh thực tế đẹp của máy tại bãi, chép vào public/images/ rồi đổi `src` thành đường dẫn '/images/...'.
const u = (id, w = 2000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: {
    src: u('photo-1764422743505-97c9ea0e43f2', 2400),
    alt: 'Hai máy xúc đào đang xúc đá tại công trường khai thác',
    credit: 'https://unsplash.com/photos/n6dpoztQ2FY',
  },
  whyUs: {
    src: u('photo-1768085091650-e8e89ef57b76'),
    alt: 'Máy xúc đào bánh xích màu vàng nâng gầu dưới trời xanh',
    credit: 'https://unsplash.com/photos/OyI1n2iR52c',
  },
  about: {
    src: u('photo-1630288214173-a119cf823388'),
    alt: 'Máy xúc đào bánh xích làm việc trên đồi đất',
    credit: 'https://unsplash.com/photos/nkxB5Ab-ONY',
  },
  // Ảnh minh họa theo dòng máy
  banhXich: { src: u('photo-1649807533255-bbc9c9fb7d77', 1400), credit: 'https://unsplash.com/photos/3xaxYYv1_PI' },
  banhLop: { src: u('photo-1685555809025-0fe60ab6df46', 1400), credit: 'https://unsplash.com/photos/9xZDwua_etc' },
  banhLopLon: { src: u('photo-1505833464198-4993b36cdfab', 1400), credit: 'https://unsplash.com/photos/1je5j4aN2RI' },
  lu: { src: u('photo-1640723559855-c27b649ad231', 1400), credit: 'https://unsplash.com/photos/3cTpEK08lwg' },
};
