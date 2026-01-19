import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProduct";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
     
     <section> <Banner />
      <FeaturedProducts />
      <Categories />
      <Promotions />
      <Testimonials />
      <HowItWorks />
      <Newsletter /></section>
    </div>
  );
}
