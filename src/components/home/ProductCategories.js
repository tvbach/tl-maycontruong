const ProductCategories = () => {
  const categories = [
    {
      title: 'Máy Cẩu',
      image: '/images/maycau.jpg',
      description: 'Đa dạng các loại máy cẩu với tải trọng khác nhau',
      href: '/products/may-cau'
    },
    {
      title: 'Máy Ủi',
      image: '/images/mayui.jpg',
      description: 'Máy ủi chất lượng cao, phù hợp mọi công trình',
      href: '/products/may-ui'
    },
    {
      title: 'Máy Lu',
      image: '/images/maylu.jpg',
      description: 'Máy lu đa dạng kích thước và công suất',
      href: '/products/may-lu'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Danh Mục Sản Phẩm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;