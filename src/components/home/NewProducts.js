"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const NewProducts = () => {
  const products = [
    {
      name: 'Máy Xúc Đào Doosan DX300LCA',
      image: '/images/maydao1.jpg',
      description: 'Máy xúc đào bánh xích 30 tấn',
      href: '/products/may-xuc-dao-1'
    },
    {
      name: 'Máy Lu Rung HAMM 3520',
      image: '/images/maylu1.jpg',
      description: 'Máy lu rung 20 tấn',
      href: '/products/may-lu-1'
    },
    {
      name: 'Máy Ủi KOMATSU D85',
      image: '/images/mayui1.jpg',
      description: 'Máy ủi công suất lớn',
      href: '/products/may-ui-1'
    },
    {
      name: 'Máy Xúc Lật SDLG 956L',
      image: '/images/mayxuc1.jpg',
      description: 'Máy xúc lật 5 tấn',
      href: '/products/may-xuc-1'
    },
    {
        name: 'Máy Xúc Lật SDLG 956L',
        image: '/images/mayxuc1.jpg',
        description: 'Máy xúc lật 5 tấn',
        href: '/products/may-xuc-1'
      },
      {
        name: 'Máy Xúc Lật SDLG 956L',
        image: '/images/mayxuc1.jpg',
        description: 'Máy xúc lật 5 tấn',
        href: '/products/may-xuc-1'
      },    
      {
        name: 'Máy Xúc Lật SDLG 956L',
        image: '/images/mayxuc1.jpg',
        description: 'Máy xúc lật 5 tấn',
        href: '/products/may-xuc-1'
      },
    // Add more products as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Sản Phẩm Mới
        </h2>

        <div className="relative px-12 [&_.swiper-button-next]:scale-50 [&_.swiper-button-prev]:scale-50 [&_.swiper-button-next]:text-orange-500 [&_.swiper-button-prev]:text-orange-500 [&_.swiper-button-next]:right-0 [&_.swiper-button-prev]:left-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="!pb-12"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <a href={product.href} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-12 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;