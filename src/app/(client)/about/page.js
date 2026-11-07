import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import QuoteForm from '@/components/landing/QuoteForm';
import { IMAGES } from '@/data/images';
import { ogFor } from '@/data/seo';

const description = 'Công ty TNHH Thanh Lịch: hơn 20 năm cho thuê, mua bán máy công trình tại Đại Từ, Thái Nguyên.';

export const metadata = {
  title: 'Giới thiệu',
  description,
  alternates: { canonical: '/gioi-thieu' },
  openGraph: ogFor('/gioi-thieu', { title: 'Giới thiệu Công ty TNHH Thanh Lịch', description }),
};

const stats = [
  { number: '20+', label: 'năm kinh nghiệm' },
  { number: '100+', label: 'máy công trình' },
  { number: '500+', label: 'khách hàng' },
  { number: '50+', label: 'thành viên' },
];

const values = [
  { title: 'Chất lượng', desc: 'Cam kết cung cấp máy móc chất lượng cao, kiểm tra kỹ trước khi giao, kèm dịch vụ sửa chữa, bảo dưỡng.' },
  { title: 'Đổi mới', desc: 'Liên tục cập nhật và đầu tư vào máy móc hiện đại.' },
  { title: 'Chính trực', desc: 'Minh bạch về giá cả và tình trạng máy, xây dựng niềm tin với khách hàng.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Về Thanh Lịch"
        path="/gioi-thieu"
        description="Hơn 20 năm cho thuê và mua bán máy công trình ở Thái Nguyên, phục vụ các đội thi công khắp miền Bắc."
      />

      <section className="bg-white py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-4xl leading-[1.08] sm:text-5xl">Bắt đầu từ năm 2003</h2>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed">
              <p>
                Thanh Lịch được thành lập năm 2003 tại Đại Từ, Thái Nguyên. Bãi máy hiện có máy xúc bánh lốp,
                bánh xích, máy lu, máy ủi của các hãng Doosan, Komatsu, Hyundai, Sakai.
              </p>
              <p>
                Ngoài cho thuê và mua bán, chúng tôi bảo dưỡng định kỳ và hỗ trợ kỹ thuật 24/7, để máy của khách
                hàng luôn chạy và công trình không phải dừng.
              </p>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image src={IMAGES.about.src} alt={IMAGES.about.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </figure>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
          <dl className="grid grid-cols-2 gap-y-10 border-t-4 border-gold-500 pt-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse pr-4">
                <dt className="mt-1 text-muted">{s.label}</dt>
                <dd className="font-display text-5xl font-extrabold text-navy-800 [font-stretch:110%]">{s.number}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-md bg-navy-100">
              <Image src="/images/ceo.jpeg" alt="Ông Nguyễn Văn Thanh, giám đốc Thanh Lịch" fill sizes="(min-width: 1024px) 30vw, 384px" className="object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-8 lg:pt-4">
            <h2 className="text-4xl leading-[1.08] sm:text-5xl">Người đứng sau bãi máy</h2>
            <p className="mt-6 text-2xl font-semibold text-navy-800">Nguyễn Văn Thanh</p>
            <p className="text-muted">Giám đốc, người sáng lập</p>

            <h3 className="mt-14 text-2xl">Giá trị chúng tôi giữ</h3>
            <dl className="mt-6 grid gap-8 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="border-t-2 border-navy-800 pt-4">
                  <dt className="font-display text-xl font-bold text-navy-800">{v.title}</dt>
                  <dd className="mt-2 leading-relaxed">{v.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
