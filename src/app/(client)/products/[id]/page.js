import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ProductDetail from '@/components/products/ProductDetail';
import { MACHINES, getMachine } from '@/data/machines';
import { ogFor } from '@/data/seo';

// Chỉ các máy trong src/data/machines.js; đường dẫn khác trả về trang 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return MACHINES.map((m) => ({ id: m.slug }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const m = getMachine(id);
  if (!m) return { title: 'Không tìm thấy máy' };
  return {
    title: `${m.name} cho thuê, bán tại Thái Nguyên`,
    description: `${m.name} cho thuê và bán tại Đại Từ, Thái Nguyên. ${m.summary}`,
    alternates: { canonical: `/san-pham/${m.slug}` },
    openGraph: ogFor(`/san-pham/${m.slug}`, {
      title: `${m.name} cho thuê, bán tại Thái Nguyên`,
      description: m.summary,
      image: { url: m.image, alt: m.imageAlt },
    }),
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const machine = getMachine(id);
  if (!machine) notFound();

  return (
    <>
      <PageHeader
        title={machine.name}
        description={machine.type}
        crumbs={[{ name: 'Máy tại bãi', href: '/san-pham' }]}
        path={`/san-pham/${machine.slug}`}
      />
      <ProductDetail machine={machine} />
    </>
  );
}
