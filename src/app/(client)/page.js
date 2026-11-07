import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Fleet from '@/components/landing/Fleet';
import Process from '@/components/landing/Process';
import WhyUs from '@/components/landing/WhyUs';
import QuoteForm from '@/components/landing/QuoteForm';
import Location from '@/components/landing/Location';



export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <Process />
      <WhyUs />
      <QuoteForm />
      <Location />
    </>
  );
}
