import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collections from "@/components/sections/Collections";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Hygiene from "@/components/sections/Hygiene";
import Testimonials from "@/components/sections/Testimonials";
import FounderStory from "@/components/sections/FounderStory";
import FinalCTA from "@/components/sections/FinalCTA";
import ServiceAreaSEO from "@/components/ui/ServiceAreaSEO";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <Collections />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Hygiene />
        <Testimonials />
        <FounderStory />
        <FinalCTA />
        <ServiceAreaSEO />
      </main>
      <Footer />
    </>
  );
}
