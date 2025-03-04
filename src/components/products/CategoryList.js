const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { id: 'all', name: 'Tất cả sản phẩm' },
    { id: 'may-xuc', name: 'Máy xúc đào' },
    { id: 'may-ui', name: 'Máy ủi' },
    { id: 'may-lu', name: 'Máy lu' },
    { id: 'may-xuc-lat', name: 'Máy xúc lật' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Danh Mục</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;