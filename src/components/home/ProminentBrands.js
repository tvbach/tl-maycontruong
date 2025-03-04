const ProminentBrands = () => {
  const brands = [
    {
      name: 'Doosan',
      logo: '/images/brands/doosan.png'
    },
    {
      name: 'Komatsu',
      logo: '/images/brands/komatsu.png'
    },
    {
      name: 'HAMM',
      logo: '/images/brands/hamm.png'
    },
    {
      name: 'SDLG',
      logo: '/images/brands/sdlg.png'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Thương Hiệu Nổi Bật
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="w-[200px] h-[200px] bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <div className="h-32 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mt-4">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProminentBrands;