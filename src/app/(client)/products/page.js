import ProductsLayout from "@/components/layouts/ProductsLayout";

export default function ProductsPage() {
  return (
    <div>
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sản Phẩm</h1>
          <ProductsLayout />
        </div>
      </main>
    </div>
  );
}