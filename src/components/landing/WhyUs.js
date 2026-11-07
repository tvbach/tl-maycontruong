import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { IconShield, IconClock, IconFile } from './icons';

const reasons = [
  {
    icon: IconShield,
    title: 'Máy được kiểm tra trước khi giao',
    desc: 'Thợ kiểm tra động cơ, hệ thủy lực và các bộ phận an toàn trước khi máy rời bãi.',
  },
  {
    icon: IconClock,
    title: 'Có người nghe máy cả ngoài giờ',
    desc: 'Máy gặp sự cố buổi tối hay ngày nghỉ vẫn có thợ xử lý, công trình không phải chờ.',
  },
  {
    icon: IconFile,
    title: 'Báo giá rõ, hợp đồng gọn',
    desc: 'Giá thuê, phí vận chuyển và tiền thợ lái tách riêng từng dòng. Không có khoản phát sinh sau.',
  },
];

const brands = ['Doosan', 'Komatsu', 'Hyundai', 'Sakai'];

const WhyUs = () => {
  return (
    <section id="ve-chung-toi" aria-labelledby="why-title" className="bg-mist py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <figure className="flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:min-h-[28rem] lg:flex-1">
            <Image
              src={IMAGES.whyUs.src}
              alt={IMAGES.whyUs.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_50%]"
            />
          </div>
        </figure>

        <div>
          <h2 id="why-title" className="text-4xl leading-[1.08] sm:text-5xl">{SITE.slogan}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Thanh Lịch cho thuê và mua bán máy công trình ở Thái Nguyên từ năm 2003, với bãi máy đa dạng và đội
            thợ kỹ thuật làm việc lâu năm.
          </p>

          <ul className="mt-10 space-y-7">
            {reasons.map(({ icon: Icon, ...r }) => (
              <li key={r.title} className="flex gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-navy-800 ring-1 ring-navy-100">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-normal [font-stretch:100%]">{r.title}</h3>
                  <p className="mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-navy-100 pt-8">
            <p className="text-muted">Hãng máy tại bãi</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {brands.map((b) => (
                <li key={b} className="font-display text-2xl font-extrabold text-navy-500 [font-stretch:115%]">{b}</li>
              ))}
            </ul>
          </div>
          <Link href="/gioi-thieu" className="text-link mt-8 inline-flex min-h-11 items-center">
            Tìm hiểu về Thanh Lịch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
