import Image from "next/image";
import Header from "@/components/Header";
import Banner from '@/components/home/Banner';
import AboutCompany from '@/components/home/AboutCompany';
import NewProducts from '@/components/home/NewProducts';
import ProductCategories from '@/components/home/ProductCategories';
import ProminentBrands from '@/components/home/ProminentBrands';
import CompanyLocation from '@/components/home/CompanyLocation';

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutCompany />
      <NewProducts />
      <ProductCategories />
      <ProminentBrands />
      <CompanyLocation />
    </main>
  );
}
