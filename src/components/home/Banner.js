"use client";

import { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/doosan.jpeg',
      title: 'Máy Công Trình Chất Lượng Cao',
      description: 'Đa dạng các loại máy công trình với chất lượng đảm bảo'
    },
    {
      image: '/images/doosan.jpeg',
      title: 'Dịch Vụ Cho Thuê Uy Tín',
      description: 'Giải pháp cho thuê máy công trình linh hoạt'
    },
    {
      image: '/images/doosan.jpeg',
      title: 'Hỗ Trợ Kỹ Thuật 24/7',
      description: 'Đội ngũ kỹ thuật chuyên nghiệp luôn sẵn sàng hỗ trợ'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;