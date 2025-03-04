const AboutCompany = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Giới thiệu về công ty
          </h2>
          <p className="text-xl sm:text-2xl text-orange-500 font-semibold">
            Uy Tín - Cam Kết - Tận Tâm
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Công ty TNHH Thanh Lịch tự hào là đơn vị hàng đầu trong lĩnh vực cho thuê máy công trình tại khu vực miền Bắc. Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng những giải pháp tốt nhất với đội ngũ nhân viên chuyên nghiệp và park máy đa dạng, hiện đại.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Đa dạng các loại máy công trình hiện đại</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Đội ngũ kỹ thuật chuyên nghiệp 24/7</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Giá cả cạnh tranh, thủ tục nhanh gọn</span>
              </li>
            </ul>
            <div className="pt-6">
              <a
                href="/about"
                className="inline-block px-8 py-4 text-lg bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Xem thêm
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
            <a href="/about" className="block h-full">
              <img
                src="/images/mayctr.jpg"
                alt="Công ty TNHH Thanh Lịch"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;