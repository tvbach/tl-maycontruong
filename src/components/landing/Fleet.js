import Link from 'next/link';
import { MACHINES } from '@/data/machines';
import { MachineCard, OtherMachinesCard } from '@/components/products/MachineCard';

const Fleet = () => {
  return (
    <section id="may-tai-bai" aria-labelledby="fleet-title" className="bg-mist py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="fleet-title" className="text-4xl leading-[1.08] sm:text-5xl">Máy đang có tại bãi</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Mỗi máy đều có thể thuê hoặc mua. Gọi hoặc nhắn Zalo để biết lịch trống, giá và nhận ảnh, video thực tế của máy.
            </p>
          </div>
          <Link href="/san-pham" className="btn btn-ghost-dark self-start md:self-auto">
            Xem tất cả máy
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MACHINES.map((m, i) => (
            <MachineCard key={m.slug} machine={m} large={i === 0} />
          ))}
          <OtherMachinesCard className="sm:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  );
};

export default Fleet;
