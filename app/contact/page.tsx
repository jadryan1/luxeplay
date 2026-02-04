import { Metadata } from "next";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/styles/ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Luxe Play NY",
  description:
    "Get in touch with Luxe Play NY. Book your luxury soft play rental for your Manhattan event. We respond to most inquiries within 2 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h1>Let&apos;s Create Magic Together</h1>
            <p className={styles.heroSubtitle}>
              Ready to book or have questions? We&apos;re here to help plan your
              perfect event.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Form */}
              <div className={styles.formSection}>
                <h2>Send Us a Message</h2>
                <p className={styles.formIntro}>
                  Fill out the form below and we&apos;ll get back to you within 2
                  hours during business hours.
                </p>
                <form className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="eventDate">Event Date *</label>
                    <input type="date" id="eventDate" name="eventDate" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="eventType">Event Type *</label>
                    <select id="eventType" name="eventType" required>
                      <option value="">Select an option</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="babyshower">Baby Shower</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="holiday">Holiday Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="collection">Interested Collection</label>
                    <select id="collection" name="collection">
                      <option value="">Not sure yet</option>
                      <option value="luxe-mini">The Luxe Mini</option>
                      <option value="manhattan">The Manhattan</option>
                      <option value="penthouse">The Penthouse</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Tell Us About Your Event *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share details about your venue, guest count, theme, and any special requests..."
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="hearAbout">How Did You Hear About Us?</label>
                    <select id="hearAbout" name="hearAbout">
                      <option value="">Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="event-planner">Event Planner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Send Inquiry
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <h3>Contact Information</h3>
                  <div className={styles.infoList}>
                    <a href="mailto:hello@luxeplayny.com" className={styles.infoItem}>
                      <Mail size={20} />
                      <span>hello@luxeplayny.com</span>
                    </a>
                    <a href="tel:+12125551234" className={styles.infoItem}>
                      <Phone size={20} />
                      <span>(212) 555-1234</span>
                    </a>
                    <a
                      href="https://instagram.com/luxeplayny"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoItem}
                    >
                      <Instagram size={20} />
                      <span>@luxeplayny</span>
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <h3>Service Area</h3>
                  <div className={styles.infoItem}>
                    <MapPin size={20} />
                    <div>
                      <p>Manhattan & All Boroughs</p>
                      <p className={styles.subtext}>
                        Westchester & Long Island available with travel fee
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <h3>Response Time</h3>
                  <div className={styles.infoItem}>
                    <Clock size={20} />
                    <div>
                      <p>Within 2 hours</p>
                      <p className={styles.subtext}>
                        During business hours (9am-6pm EST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.bookingTips}>
                  <h3>Booking Tips</h3>
                  <ul>
                    <li>Book 2-4 weeks ahead for weekday events</li>
                    <li>Book 4-6 weeks ahead for weekend events</li>
                    <li>Holiday weekends fill up fast—book early!</li>
                    <li>50% deposit secures your date</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
