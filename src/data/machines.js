// Danh sách máy hiển thị trên trang chủ và trang Sản phẩm.
// Thêm máy mới: chép một mục, đổi slug (dùng làm đường dẫn /san-pham/<slug>), ảnh và thông tin.
// Chỉ ghi những thông số đã chắc chắn; để trống thì trang sẽ tự ẩn dòng đó.
// Ảnh hiện là ảnh minh họa cùng dòng máy (illustrative: true). Khi có ảnh thật đẹp, đổi `image` và xóa `illustrative`.
import { IMAGES } from './images';

export const CATEGORIES = [
  { id: 'banh-lop', name: 'Máy xúc bánh lốp' },
  { id: 'banh-xich', name: 'Máy xúc bánh xích' },
  { id: 'lu', name: 'Máy lu' },
];

export const MACHINES = [
  {
    slug: 'komatsu-pc200',
    name: 'Komatsu PC200',
    category: 'banh-xich',
    type: 'Máy xúc đào bánh xích',
    image: IMAGES.banhXich.src,
    illustrative: true,
    realPhotos: ['/images/may/komatsu-pc200.jpg'], // ảnh chụp thực tế
    imageAlt: 'Máy xúc bánh xích Komatsu màu vàng trên công trường',
    summary: 'Máy xích hạng 20 tấn bền bỉ, đứng vững trên nền đất yếu, lầy.',
    uses: ['Đào móng, san lấp mặt bằng', 'Khai thác đất, đá', 'Nạo vét ao hồ, kênh mương'],
    specs: [
      { label: 'Hãng', value: 'Komatsu' },
      { label: 'Loại', value: 'Máy xúc đào bánh xích' },
      { label: 'Hạng máy', value: '20 tấn' },
    ],
  },
  {
    slug: 'doosan-140w',
    name: 'Doosan Solar 140W',
    category: 'banh-lop',
    type: 'Máy xúc đào bánh lốp',
    image: IMAGES.banhLop.src,
    illustrative: true,
    realPhotos: ['/images/doosan.jpeg'], // ảnh chụp thực tế
    imageAlt: 'Máy xúc đào bánh lốp có lưỡi ủi đang xúc cát',
    summary: 'Di chuyển nhanh trên đường nhựa, không cần xe chở. Gắn được gầu hoặc kẹp gỗ, kẹp mía.',
    uses: ['Đào mương, rãnh thoát nước', 'Bốc xếp mía, gỗ, phế liệu', 'Công trình dân dụng trong khu dân cư'],
    specs: [
      { label: 'Hãng', value: 'Doosan' },
      { label: 'Loại', value: 'Máy xúc đào bánh lốp' },
      { label: 'Hạng máy', value: '14 tấn' },
    ],
  },
  {
    slug: 'doosan-210w',
    name: 'Doosan Solar 210W',
    category: 'banh-lop',
    type: 'Máy xúc đào bánh lốp',
    image: IMAGES.banhLopLon.src,
    illustrative: true,
    realPhotos: ['/images/may/doosan-210w.jpg'], // ảnh chụp thực tế
    imageAlt: 'Máy xúc đào bánh lốp cỡ lớn làm việc tại mỏ đá',
    summary: 'Máy lốp cỡ lớn, tầm với xa, phù hợp công trình cần di chuyển giữa nhiều điểm.',
    uses: ['Đào đắp nền đường', 'Bốc xúc vật liệu lên xe', 'Thi công hạ tầng khu dân cư'],
    specs: [
      { label: 'Hãng', value: 'Doosan' },
      { label: 'Loại', value: 'Máy xúc đào bánh lốp' },
      { label: 'Hạng máy', value: '21 tấn' },
    ],
  },
  {
    slug: 'lu-rung-sakai',
    name: 'Lu rung Sakai',
    category: 'lu',
    type: 'Máy lu rung một quả',
    image: IMAGES.lu.src,
    illustrative: true,
    realPhotos: ['/images/may/lu-rung-sakai.jpg'], // ảnh chụp thực tế
    imageAlt: 'Máy lu rung một quả màu vàng đỏ trên nền đất',
    summary: 'Lu rung bánh thép phía trước, lốp phía sau. Lèn chặt nền đất, cấp phối trước khi rải mặt.',
    uses: ['Lu lèn nền đường', 'Lu sân bãi, mặt bằng nhà xưởng', 'Đầm chặt đất đắp'],
    specs: [
      { label: 'Hãng', value: 'Sakai' },
      { label: 'Loại', value: 'Lu rung một quả' },
    ],
  },
];

export const OTHER_MACHINES = ['Máy ủi', 'Máy xúc lật', 'Máy cẩu'];

export const getMachine = (slug) => MACHINES.find((m) => m.slug === slug);
