const steps = [
  { title: 'Gọi hoặc nhắn Zalo', desc: 'Cho biết loại việc, địa điểm công trình và thời gian cần máy.' },
  { title: 'Nhận tư vấn và báo giá', desc: 'Thợ kỹ thuật chọn máy phù hợp, báo giá thuê từng khoản: ca máy, vận chuyển, thợ lái.' },
  { title: 'Ký hợp đồng', desc: 'Hợp đồng ghi rõ giá, thời hạn và trách nhiệm hai bên.' },
  { title: 'Giao máy tại công trình', desc: 'Máy được chở đến nơi, kiểm tra và bàn giao ngay tại chỗ.' },
];

const Process = () => {
  return (
    <section id="quy-trinh" aria-labelledby="quy-trinh-title" className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 id="quy-trinh-title" className="max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
          Thuê máy trong bốn bước
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li key={s.title} className="relative lg:pr-10">
              <div className="flex items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-navy-800 font-display text-2xl font-extrabold text-navy-800">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span className="ml-4 hidden h-0.5 flex-1 bg-gold-500 lg:block" aria-hidden="true" />}
              </div>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
