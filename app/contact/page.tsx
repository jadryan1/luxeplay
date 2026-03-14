"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[160px] md:pt-[160px]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
