import { SITE } from '@/data/site';
import { IconKey, IconTag, IconWrench } from './icons';

const services = [
  {
    icon: IconKey,
    title: 'Cho thuê máy',
    desc: 'Thuê theo ca, theo ngày, theo tháng hoặc trọn dự án. Có thợ vận hành đi kèm nếu bạn chưa có người lái.',
    points: ['Báo giá trước, không phát sinh', 'Máy hỏng giữa chừng được đổi máy khác'],
    href: '#bao-gia',
    cta: 'Hỏi giá thuê',
  },
  {
    icon: IconTag,
    title: 'Mua bán máy cũ',
    desc: 'Máy đã qua sử dụng của Doosan, Komatsu, Hyundai, Sakai. Đến xem máy trực tiếp tại bãi trước khi mua.',
    points: ['Kiểm tra động cơ, thủy lực trước khi bán', 'Thu mua, đổi máy cũ của bạn'],
    href: '/san-pham',
    cta: 'Xem máy tại bãi',
  },
  {
    icon: IconWrench,
    title: 'Sửa chữa, bảo dưỡng',
    desc: 'Thợ có mặt tại công trình khi máy gặp sự cố, kể cả ngoài giờ, để công việc không phải dừng lâu.',
    points: ['Bảo dưỡng định kỳ theo giờ máy', 'Hỗ trợ sự cố ngoài giờ'],
    href: `tel:${SITE.phone}`,
    cta: 'Gọi thợ kỹ thuật',
  },
];

const Services = () => {
  return (
    <section id="dich-vu" aria-labelledby="dich-vu-title" className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 id="dich-vu-title" className="text-4xl leading-[1.08] sm:text-5xl">
            Thuê, mua hay sửa máy, gọi một số là xong
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Từ một ca máy đào cho nhà dân đến cả đội máy cho công trình kéo dài nhiều tháng.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-navy-100">
          {services.map(({ icon: Icon, ...s }, i) => (
            <article key={s.title} className={`flex flex-col ${i > 0 ? 'md:pl-10' : ''} ${i < services.length - 1 ? 'md:pr-10' : ''}`}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-gold-50 text-navy-800">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-navy-800">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={s.href} className="text-link mt-auto inline-flex min-h-11 items-center self-start pt-6">
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
