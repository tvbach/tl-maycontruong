import Image from 'next/image';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { IconPhone, IconCalendar, IconUser, IconTruck, IconWrench } from './icons';

const facts = [
  { icon: IconCalendar, text: 'Thuê theo ca, ngày, tháng hoặc trọn dự án' },
  { icon: IconUser, text: 'Có thợ vận hành đi kèm máy khi cần' },
  { icon: IconTruck, text: 'Vận chuyển máy đến tận công trình' },
  { icon: IconWrench, text: 'Kỹ thuật hỗ trợ sửa chữa 24/7' },
];

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="on-dark bg-navy-800 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7 motion-safe:animate-rise">
            <p className="font-medium text-gold-400">Cho thuê, mua bán máy công trình tại Đại Từ, Thái Nguyên</p>
            <h1
              id="hero-title"
              className="mt-4 text-[2.25rem] leading-[1.04] sm:mt-5 sm:text-6xl lg:text-[4.5rem]"
            >
              Máy xúc, máy lu sẵn tại bãi, giao tận công trình
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-2 motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
            <p className="max-w-md leading-relaxed text-navy-100 sm:text-lg">
              Máy xúc bánh lốp, bánh xích, máy lu của Doosan, Komatsu, Sakai. Máy được thợ kiểm tra trước khi
              giao, báo giá rõ ràng trước khi ký.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a href={`tel:${SITE.phone}`} className="btn btn-gold">
                <IconPhone className="h-5 w-5" />
                Gọi {SITE.phoneDisplay}
              </a>
              <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
                Nhắn Zalo
              </a>
            </div>
            <p className="mt-5 text-navy-200">
              Hoặc{' '}
              <a href="#bao-gia" className="font-semibold text-white underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-white">
                gửi yêu cầu báo giá
              </a>
              , chúng tôi gọi lại trong giờ làm việc.
            </p>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-md sm:aspect-[2/1] lg:aspect-[2.35/1]">
            <Image
              src={IMAGES.hero.src}
              alt={IMAGES.hero.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </div>

      {/* Signature: bucket-teeth edge from the logo, carrying the four things every caller asks first. */}
      <div className="teeth relative -mt-[26px]" aria-hidden="true" />
      <div className="bg-gold-500 text-navy-950">
        <ul className="mx-auto grid max-w-7xl gap-x-8 gap-y-4 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {facts.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 font-semibold leading-snug">
              <Icon className="h-6 w-6 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
