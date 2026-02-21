import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Accordion from "@/components/ui/Accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Luxe Play NY",
    description: "Got questions? We have answers. Learn more about Luxe Play NY's soft play and ball pit rentals, service areas, and booking process.",
};

const faqs = [
    { q: "What is Soft Play?", a: "Soft Play is foam-padded play equipment that creates a structured, stimulating and safe interactive environment for young children ages 0-5 years old. Allows for exploration, learning, independence and encourages social and physical development." },
    { q: "What ages are appropriate for your Soft Play and Ball Pit Rentals?", a: "The recommended ages for our softplay set-ups are 0-5 years. Our ball pit rentals come in different sizes suitable for crawlers up to young adults." },
    { q: "How often and what do you use to clean your equipment?", a: "Each piece of equipment is carefully cleansed and sanitized before and after your event. We use an eco-friendly disinfectant product that kills up to 99.9% of viruses (EPA-approved to kill novel corona virus), bacteria and fungus with pure non-toxic, no chemical residue and natural ingredients that are safe for all children." },
    { q: "What areas do you deliver to and is there a delivery fee?", a: "We service New York City, Westchester, Long Island, New Jersey, Connecticut, and eastern Pennsylvania — anywhere within a 3-hour radius of Fairfield, NJ. Delivery fee will be determined once we confirm your event location and logistical needs." },
    { q: "Are your soft play rentals for indoor only?", a: "Our Soft Play rentals are commercial grade for both indoor and outdoor use. Outdoor events are possible with weather permitting, as well as leveled outdoor ground." },
    { q: "How do I start planning?", a: "Use the Start Planning flow on our website to submit your event details. From there, we'll reach out to confirm everything on a quick call." },
    { q: "Do you require a deposit?", a: "Yes, a 25% deposit of your grand total is required to secure your event date. Due to high demand, we do not hold dates." },
    { q: "Do you assemble and break down the equipment?", a: "Yes, we provide White Glove assembly and breakdown on the day of your event. We coordinate appropriate time frames with the client. Assembly and breakdown each require 30-90 minutes depending on package size." },
    { q: "How many hours can I book?", a: "Rentals are based on a standard 4-hour single day rental. Additional hours start at $75/hr." },
    { q: "Which payment methods do you accept?", a: "We accept Zelle, Venmo, PayPal, Apple Pay, Credit Cards, and cash." },
    { q: "When is the final balance due?", a: "Final balance is required 48 hours prior to your event date by 6pm." },
    { q: "Is Luxe Play licensed and insured?", a: "Yes, we are both licensed and insured." },
];

export default function FAQPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh", backgroundColor: "#FFFFFF", paddingTop: "100px" }}>
                {/* Header Block */}
                <section className="w-full py-16 text-center" style={{ backgroundColor: '#F5EDE8' }}>
                    <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#C4909A', fontFamily: 'Raleway', fontWeight: 400 }}>
                        Got Questions
                    </p>
                    <h1 className="text-4xl md:text-5xl tracking-[0.1em] uppercase" style={{ color: '#3D2E2E', fontFamily: 'Raleway', fontWeight: 500 }}>
                        We Have Answers
                    </h1>
                </section>

                {/* FAQ Content */}
                <section style={{ padding: "80px 24px" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <Accordion items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
