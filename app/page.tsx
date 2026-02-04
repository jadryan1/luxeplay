import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collections from "@/components/sections/Collections";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Hygiene from "@/components/sections/Hygiene";
import Testimonials from "@/components/sections/Testimonials";
import FounderStory from "@/components/sections/FounderStory";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Hygiene />
        <Testimonials />
        <FounderStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
