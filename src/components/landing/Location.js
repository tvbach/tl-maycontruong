import { SITE } from '@/data/site';
import { IconPhone, IconPin } from './icons';

const Location = ({ as: Heading = 'h2', title = 'Đến xem máy tại bãi' }) => {
  return (
    <section id="dia-chi" aria-labelledby="dia-chi-title" className="bg-white py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Heading id="dia-chi-title" className="text-4xl leading-[1.08] sm:text-5xl">{title}</Heading>
          <p className="mt-5 text-lg leading-relaxed">Gọi trước khi đến để chúng tôi sắp xếp người dẫn xem máy.</p>

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <dt><IconPin className="h-6 w-6 text-navy-800" /><span className="sr-only">Địa chỉ</span></dt>
              <dd>
                <p className="font-semibold text-navy-800">{SITE.address}</p>
                <p className="text-sm text-muted">({SITE.addressOld})</p>
                <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="text-link mt-1 inline-flex min-h-11 items-center">
                  Chỉ đường bằng Google Maps
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt><IconPhone className="h-6 w-6 text-navy-800" /><span className="sr-only">Điện thoại và Zalo</span></dt>
              <dd>
                <a href={`tel:${SITE.phone}`} className="font-semibold text-navy-800 hover:underline">{SITE.phoneDisplay}</a>
                <span className="text-muted"> (gọi hoặc Zalo)</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="h-[360px] overflow-hidden rounded-md border border-navy-100 bg-mist sm:h-[460px] lg:col-span-7 lg:h-auto lg:min-h-[460px]">
          <iframe
            title={`Bản đồ đến ${SITE.legalName}`}
            src={SITE.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
