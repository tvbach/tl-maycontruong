import PageHeader from '@/components/PageHeader';
import ProductsLayout from '@/components/layouts/ProductsLayout';
import QuoteForm from '@/components/landing/QuoteForm';
import { ogFor } from '@/data/seo';

const title = 'Máy xúc, máy lu cho thuê và bán tại bãi';
const description =
  'Máy xúc bánh lốp, bánh xích, máy lu Doosan, Komatsu, Sakai đang có tại bãi Thanh Lịch, Đại Từ, Thái Nguyên. Cho thuê và bán, gọi để biết giá.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/san-pham' },
  openGraph: ogFor('/san-pham', { title, description }),
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Máy tại bãi"
        path="/san-pham"
        description="Tất cả máy dưới đây đều có thể thuê hoặc mua. Gọi để biết lịch trống, giá thuê và giá bán của từng máy."
      />
      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProductsLayout />
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
