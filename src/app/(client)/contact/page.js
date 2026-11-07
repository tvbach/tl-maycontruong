import PageHeader from '@/components/PageHeader';
import QuoteForm from '@/components/landing/QuoteForm';
import Location from '@/components/landing/Location';
import { SITE } from '@/data/site';
import { ogFor } from '@/data/seo';

const description = `Gọi ${SITE.phoneDisplay} hoặc gửi yêu cầu báo giá thuê, mua máy công trình. Địa chỉ: ${SITE.address}.`;

export const metadata = {
  title: 'Liên hệ, báo giá thuê máy',
  description,
  alternates: { canonical: '/lien-he' },
  openGraph: ogFor('/lien-he', { title: 'Liên hệ Thanh Lịch: báo giá thuê, mua máy công trình', description }),
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Liên hệ"
        path="/lien-he"
        description={`Gọi hoặc nhắn Zalo ${SITE.phoneDisplay} để được báo giá nhanh nhất. Hoặc để lại thông tin, chúng tôi gọi lại.`}
      />
      <QuoteForm title="Gửi yêu cầu báo giá" />
      <Location />
    </>
  );
}
