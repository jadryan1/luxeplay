"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import ServiceAreaSEO from "@/components/ui/ServiceAreaSEO";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
        <ServiceAreaSEO />
      </main>
      <Footer />
    </>
  );
}
