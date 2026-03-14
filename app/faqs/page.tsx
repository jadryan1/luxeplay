import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import styles from "@/styles/FAQPage.module.css";

const faqItems = [
    {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 2-3 weeks in advance for weekday events and 4-6 weeks for weekend events, especially during peak season (spring and fall). For holiday weekends and December events, we suggest booking 2-3 months ahead. However, we always try to accommodate last-minute requests when our schedule allows.",
    },
    {
        question: "What is your service area?",
        answer: "New York City, Westchester, Long Island, New Jersey, Connecticut, and eastern Pennsylvania — anywhere within a 3-hour radius of Fairfield, NJ.",
    },
    {
        question: "What's included in the rental?",
        answer: "Every rental includes delivery, professional setup, styling, and breakdown. We arrive early to ensure everything is perfectly positioned and stay until after setup is complete. We return at your designated time for seamless pickup. All equipment is professionally cleaned and sanitized before each event.",
    },
    {
        question: "How do you ensure cleanliness?",
        answer: "Cleanliness is our top priority. Every piece of equipment goes through our multi-step sanitization process including individual ball washing, UV sanitization, and hospital-grade surface disinfection. We use only non-toxic, child-safe cleaning products and store all equipment in our climate-controlled facility.",
    },
    {
        question: "Can you match my event's color scheme?",
        answer: "Absolutely! Our packages feature neutral and pastel palettes that complement most event aesthetics. We offer various ball pit color options including all-white, blush pink, sage green, and custom mixes. During your consultation, we'll discuss your vision and recommend the perfect combination.",
    },
    {
        question: "What are your cancellation policies?",
        answer: "We understand plans can change. Cancellations made 14+ days before your event receive a full refund minus a small processing fee. Cancellations 7-13 days out receive a 50% refund. Within 7 days, we offer credit toward a future booking. We also offer event date changes with no penalty when possible.",
    },
    {
        question: "Do you offer styling services?",
        answer: "Yes! Basic styling is included with every rental—we ensure your setup looks Instagram-perfect. For clients wanting an elevated experience, we offer premium styling packages that include custom balloon arrangements, coordinated accessories, and design consultation with our creative team.",
    },
    {
        question: "Is setup and breakdown included?",
        answer: "Yes, full-service setup and breakdown are included in every package. Our professional team handles everything from delivery to final placement. We typically need 30-60 minutes for setup depending on the package size. Just tell us your event timeline, and we'll work around it.",
    },
];

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pt-[120px]">
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.label}>
                            FAQS
                        </span>
                        <h1 className={styles.title}>
                            EVERYTHING YOU NEED TO KNOW
                        </h1>
                        <p className={styles.subtitle}>
                            Quick answers to our most common questions — if you don't see yours, reach out directly.
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className={styles.faqContainer}>
                        <Accordion items={faqItems} />
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className={styles.cta}>
                    <div className={styles.ctaContainer}>
                        <h2 className={styles.ctaTitle}>
                            STILL HAVE QUESTIONS?
                        </h2>
                        <Button href="/contact" variant="primary">
                            START PLANNING
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
