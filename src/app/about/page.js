"use client";

import Image from 'next/image';

const AboutPage = () => {
  const companyStats = [
    { number: '20+', label: 'Năm Kinh Nghiệm' },
    { number: '100+', label: 'Máy Công Trình' },
    { number: '500+', label: 'Khách Hàng Hài Lòng' },
    { number: '50+', label: 'Thành Viên' },
  ];

  const teamMembers = [
    {
      name: 'Nguyễn Văn Thanh',
      position: 'CEO & Founder',
      image: '/images/ceo.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Về Chúng Tôi"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Thanh Lịch</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Đơn vị hàng đầu trong lĩnh vực mua bán và cho thuê máy công trình xây dựng tại Việt Nam
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-gray-600 mb-4">
              Được thành lập vào năm 2003, Thanh Lịch đã trở thành đơn vị uy tín hàng đầu trong lĩnh vực 
              mua bán và cho thuê máy công trình. Với đa dạng các loại máy móc từ máy xúc, máy ủi, 
              xe lu đến các thiết bị chuyên dụng, chúng tôi tự hào mang đến giải pháp toàn diện cho 
              mọi dự án xây dựng.
            </p>
            <p className="text-gray-600">
              Với hơn 20 năm kinh nghiệm, chúng tôi không chỉ cung cấp máy móc chất lượng cao mà còn 
              đảm bảo dịch vụ hậu mãi chuyên nghiệp, bảo trì định kỳ và hỗ trợ kỹ thuật 24/7 cho 
              khách hàng trên toàn quốc.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/company-history.jpg"
              alt="Lịch Sử Công Ty"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Đội Ngũ Lãnh Đạo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
              <div className="relative h-[400px] w-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 300px) 100vw, 300px"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Chất Lượng</h3>
              <p className="text-gray-600">
                Cam kết cung cấp máy móc chất lượng cao và dịch vụ đạt tiêu chuẩn quốc tế.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Đổi Mới</h3>
              <p className="text-gray-600">
                Liên tục cập nhật và đầu tư vào công nghệ mới, máy móc hiện đại.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Chính Trực</h3>
              <p className="text-gray-600">
                Minh bạch trong giá cả và chất lượng, xây dựng niềm tin với khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;