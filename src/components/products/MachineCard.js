import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/data/site';
import { OTHER_MACHINES } from '@/data/machines';
import { IconPhone } from '@/components/landing/icons';

export const MachineCard = ({ machine, large = false }) => {
  const href = `/san-pham/${machine.slug}`;
  return (
    <article className={`group flex flex-col overflow-hidden rounded-md border border-navy-100 bg-white ${large ? 'lg:col-span-2' : ''}`}>
      <Link href={href} tabIndex={-1} aria-hidden="true" className={`relative block overflow-hidden bg-navy-100 ${large ? 'aspect-[3/2] lg:aspect-[2/1]' : 'aspect-[3/2]'}`}>
        <Image
          src={machine.image}
          alt=""
          fill
          sizes={large ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {machine.illustrative && (
          <span className="absolute bottom-3 left-3 rounded-sm bg-navy-950/75 px-2 py-0.5 text-xs font-medium text-white">Ảnh minh họa</span>
        )}
      </Link>
      <div className={`flex flex-1 flex-col ${large ? 'p-6 sm:p-8' : 'p-6'}`}>
        <p className="text-sm font-medium text-muted">{machine.type}</p>
        <h3 className={`mt-1 ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
          <Link href={href} className="hover:underline hover:decoration-gold-500 hover:decoration-2 hover:underline-offset-4">
            {machine.name}
          </Link>
        </h3>
        <p className={`mt-3 leading-relaxed ${large ? 'max-w-xl' : ''}`}>{machine.summary}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <a href={`/lien-he?may=${encodeURIComponent(machine.name)}#bao-gia`} className="btn btn-navy btn-sm">
            Hỏi giá
          </a>
          <a href={SITE.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark btn-sm" aria-label={`Nhắn Zalo hỏi về ${machine.name}`}>
            <img src="/images/zalo-icon.svg" alt="" className="h-5 w-5" />
            Zalo
          </a>
          <Link href={href} className="text-link ml-auto inline-flex min-h-11 items-center">
            Chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
};

// Lays itself out by its own width (container query), so it fits whatever grid gap it fills.
export const OtherMachinesCard = ({ className = '' }) => (
  <article className={`on-dark @container rounded-md bg-navy-800 text-white ${className}`}>
    <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8 @xl:flex-row @xl:items-center">
      <div className="max-w-md">
        <h3 className="text-2xl">Cần {OTHER_MACHINES.map((m) => m.toLowerCase()).join(', ')}?</h3>
        <p className="mt-3 leading-relaxed text-navy-100">
          Máy ra vào bãi thường xuyên nên không phải máy nào cũng có ảnh ở đây. Gọi để kiểm tra máy đang rảnh và giá thuê.
        </p>
      </div>
      <a href={`tel:${SITE.phone}`} className="btn btn-gold shrink-0 self-start @xl:self-auto">
        <IconPhone className="h-5 w-5" />
        {SITE.phoneDisplay}
      </a>
    </div>
  </article>
);
