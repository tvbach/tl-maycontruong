import ProductDetail from "@/components/products/ProductDetail";

export default function ProductDetailPage({ params }) {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetail productId={params.id} />
      </div>
    </main>
  );
}