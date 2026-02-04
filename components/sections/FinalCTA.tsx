import { Mail, Phone, Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "@/styles/FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Create Magic?</h2>
        <p className={styles.subtitle}>
          Let&apos;s design the perfect play experience for your event
        </p>
        <div className={styles.cta}>
          <Button variant="primary" size="large" href="/contact">
            Book Your Consultation
          </Button>
        </div>
        <p className={styles.responseTime}>
          Most inquiries answered within 2 hours
        </p>
        <div className={styles.contactInfo}>
          <a href="mailto:hello@luxeplayny.com" className={styles.contactLink}>
            <Mail size={18} />
            <span>hello@luxeplayny.com</span>
          </a>
          <a href="tel:+12125551234" className={styles.contactLink}>
            <Phone size={18} />
            <span>(212) 555-1234</span>
          </a>
          <a
            href="https://instagram.com/luxeplayny"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <Instagram size={18} />
            <span>@luxeplayny</span>
          </a>
        </div>
      </div>
    </section>
  );
}
