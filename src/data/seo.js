import { SITE } from './site';
import { IMAGES } from './images';

export const abs = (path) => (path.startsWith('http') ? path : `${SITE.url}${path}`);

// Next.js không gộp sâu openGraph giữa layout và page: mỗi trang dùng hàm này để có đủ trường.
export const ogFor = (path, { title, description, image } = {}) => ({
  type: 'website',
  locale: 'vi_VN',
  siteName: 'Máy công trình Thanh Lịch',
  url: path,
  ...(title && { title }),
  ...(description && { description }),
  images: [image || { url: IMAGES.hero.src, width: 2400, height: 1600, alt: IMAGES.hero.alt }],
});

// Doanh nghiệp địa phương: tên, địa chỉ, số điện thoại phải khớp với Google Business Profile.
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: 'Máy công trình Thanh Lịch',
  slogan: SITE.slogan,
  description: 'Cho thuê theo ca, ngày, tháng và mua bán máy xúc, máy lu, máy ủi đã qua sử dụng tại Thái Nguyên.',
  url: SITE.url,
  telephone: '+84' + SITE.phone.slice(1),
  logo: abs('/images/logo.png'),
  image: [IMAGES.hero.src],
  foundingDate: '2003',
  address: { '@type': 'PostalAddress', ...SITE.postal },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  hasMap: SITE.mapLink,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Thái Nguyên' },
    { '@type': 'Country', name: 'Việt Nam' },
  ],
  sameAs: [SITE.messenger],
};

// crumbs = [{ name, path }] tính từ trang chủ, phần tử cuối là trang hiện tại.
export const breadcrumbJsonLd = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Trang chủ', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});
