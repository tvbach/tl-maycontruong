const ProductList = ({ category }) => {
  const products = [
    {
      id: 1,
      name: 'Máy Xúc Đào Doosan DX300LCA',
      category: 'may-xuc',
      image: '/images/maydao1.jpg',
      description: 'Máy xúc đào bánh xích 30 tấn',
    },
    {
      id: 2,
      name: 'Máy Xúc Đào Doosan DX300LCA',
      category:'may-xuc',
      image: '/images/maydao2.jpg',
      description: 'Máy xúc đào bánh xích 30 tấn',
    },
    {
      id: 3,
      name: 'Máy Xúc Đào Doosan DX300LCA',
      category:'may-xuc',
      image: '/images/maydao3.jpg',
      description: 'Máy xúc đào bánh xích 30 tấn',
    },
    // Add more products here
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
            <a
              href={`/products/${product.id}`}
              className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Chi tiết
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;