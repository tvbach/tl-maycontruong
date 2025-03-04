const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Công ty TNHH Thanh Lịch</h3>
            <p className="mb-6 text-white/90">
              Chuyên cho thuê máy công trình với đội ngũ nhân viên chuyên nghiệp và park máy đa dạng, hiện đại.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-gray-200 transition-colors">Trang chủ</a></li>
              <li><a href="/about" className="hover:text-gray-200 transition-colors">Về chúng tôi</a></li>
              <li><a href="/products" className="hover:text-gray-200 transition-colors">Sản phẩm</a></li>
              <li><a href="/contact" className="hover:text-gray-200 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>283 Thị trấn Hùng Sơn - Huyện Đại Từ - Tỉnh Thái Nguyên</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0386-684-246</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@thanhlich.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/90">
          <p>&copy; {new Date().getFullYear()} Công ty TNHH Thanh Lịch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;