import Eyebrow from "@/components/ui/Eyebrow";
import Accordion from "@/components/ui/Accordion";
import styles from "@/styles/FAQ.module.css";

const faqItems = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks in advance for weekday events and 4-6 weeks for weekend events, especially during peak season (spring and fall). For holiday weekends and December events, we suggest booking 2-3 months ahead. However, we always try to accommodate last-minute requests when our schedule allows.",
  },
  {
    question: "Do you service all of Manhattan and surrounding areas?",
    answer:
      "Yes! We proudly serve all of Manhattan, as well as Brooklyn, Queens, and the Bronx. We also offer service to Westchester and Long Island for an additional travel fee. Our team is familiar with building requirements and logistics throughout the NYC area.",
  },
  {
    question: "What's included in the rental?",
    answer:
      "Every rental includes delivery, professional setup, styling, and breakdown. We arrive early to ensure everything is perfectly positioned and stay until after setup is complete. We return at your designated time for seamless pickup. All equipment is professionally cleaned and sanitized before each event.",
  },
  {
    question: "How do you ensure cleanliness?",
    answer:
      "Cleanliness is our top priority. Every piece of equipment goes through our multi-step sanitization process including individual ball washing, UV sanitization, and hospital-grade surface disinfection. We use only non-toxic, child-safe cleaning products and store all equipment in our climate-controlled facility.",
  },
  {
    question: "Can you match my event's color scheme?",
    answer:
      "Absolutely! Our collections feature neutral and pastel palettes that complement most event aesthetics. We offer various ball pit color options including all-white, blush pink, sage green, and custom mixes. During your consultation, we'll discuss your vision and recommend the perfect combination.",
  },
  {
    question: "What are your cancellation policies?",
    answer:
      "We understand plans can change. Cancellations made 14+ days before your event receive a full refund minus a small processing fee. Cancellations 7-13 days out receive a 50% refund. Within 7 days, we offer credit toward a future booking. We also offer event date changes with no penalty when possible.",
  },
  {
    question: "Do you offer styling services?",
    answer:
      "Yes! Basic styling is included with every rental—we ensure your setup looks Instagram-perfect. For clients wanting an elevated experience, we offer premium styling packages that include custom balloon arrangements, coordinated accessories, and design consultation with our creative team.",
  },
  {
    question: "Is setup and breakdown included?",
    answer:
      "Yes, full-service setup and breakdown are included in every package. Our professional team handles everything from delivery to final placement. We typically need 30-60 minutes for setup depending on the package size. Just tell us your event timeline, and we'll work around it.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>QUESTIONS?</Eyebrow>
          <h2>Everything You Need to Know</h2>
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
