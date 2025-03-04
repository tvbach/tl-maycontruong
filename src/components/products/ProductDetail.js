const ProductDetail = ({ productId }) => {
  // This would typically come from an API or database
  const product = {
    id: productId,
    name: 'Máy Xúc Đào Doosan DX300LCA',
    category: 'may-xuc',
    images: [
      '/images/maydao1.jpg',
      '/images/maydao2.jpg',
      '/images/maydao3.jpg'
    ],
    description: 'Máy xúc đào bánh xích 30 tấn',
    specifications: [
      { label: 'Model', value: 'DX300LCA' },
      { label: 'Hãng sản xuất', value: 'Doosan' },
      { label: 'Trọng lượng', value: '30 tấn' },
      { label: 'Năm sản xuất', value: '2020' },
      { label: 'Tình trạng', value: 'Hoạt động tốt' },
    ],
    features: [
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Cabin rộng rãi, tầm nhìn tốt',
      'Hệ thống thủy lực hiện đại',
      'Bảo trì dễ dàng'
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Product Images */}
      <div className="aspect-w-16 aspect-h-9 md:aspect-h-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Product Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
        </div>

        {/* Specifications */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Thông số kỹ thuật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex border-b border-gray-200 py-2">
                <span className="font-medium text-gray-600 w-1/2">{spec.label}:</span>
                <span className="text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <a
            href="tel:0386684246"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Liên hệ ngay để có giá tốt
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;