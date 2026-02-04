import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Elite Packages | Luxe Play NY",
  description:
    "Get the all-exclusive Luxe Play experience. Ball pit, soft play, personalization, and toddler bounce bundled together. Save up to $150. Starting at $2,400.",
};

const packages = [
  {
    id: "mini-elite",
    name: "Mini Elite",
    price: "$2,400",
    savings: "$100",
    includes: [
      "5 ft ball pit",
      "Soft play set",
      "Personalization",
      "Toddler bounce",
    ],
    note: "Locals only",
  },
  {
    id: "grand-luxe-elite",
    name: "Grand Luxe Elite",
    price: "$2,800",
    savings: "$100",
    includes: [
      "10x6 ball pit",
      "Soft play set",
      "Luxe slide + arc",
      "Personalization",
      "Toddler bounce",
    ],
    featured: true,
  },
  {
    id: "the-celeb-elite",
    name: "The Celeb Elite",
    price: "$3,000",
    savings: "$150",
    includes: [
      "10x8 ball pit",
      "Soft play set",
      "Double slides + arc",
      "Personalization",
      "Toddler bounce",
    ],
  },
  {
    id: "the-royal-elite",
    name: "The Royal Elite",
    price: "$3,225",
    savings: "$150",
    includes: [
      "10x13 ball pit",
      "Soft play set",
      "Double slide + arc",
      "Personalization",
      "Toddler bounce",
    ],
  },
];

export default function ElitePackagesPage() {
  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#E8F5E9" }}>
          <div className={styles.container}>
            <Eyebrow>ELITE PACKAGES</Eyebrow>
            <h1>The All-Exclusive Experience</h1>
            <p className={styles.heroSubtitle}>
              Get the full Luxe Play experience at special bundled pricing.
              Ball pit, soft play, personalization, and toddler bounce—all included.
            </p>
            <p className={styles.heroPrice}>Starting at $2,400 • Save up to $150</p>
          </div>
        </section>

        {/* Packages */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.packagesHeader}>
              <Eyebrow>CHOOSE YOUR ELITE PACKAGE</Eyebrow>
              <h2>Elite Packages</h2>
              <p className={styles.packagesSubtext}>
                Save money and get the complete Luxe Play experience
              </p>
            </div>
            <div className={styles.packagesGrid}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
                >
                  {pkg.featured && (
                    <span className={styles.featuredBadge}>Best Value</span>
                  )}
                  <div className={styles.packageImage}>
                    <ImagePlaceholder
                      width="100%"
                      height="100%"
                      borderRadius="0"
                    />
                  </div>
                  <div className={styles.packageContent}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packagePrice}>
                      {pkg.price}
                      <span className={styles.savingsBadge}>SAVE {pkg.savings}</span>
                    </p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>What&apos;s Included</span>
                        <span className={styles.detailValue}></span>
                      </div>
                      {pkg.includes.map((item, i) => (
                        <div key={i} className={styles.detailRow}>
                          <span className={styles.detailValue} style={{ paddingLeft: "8px" }}>
                            ✓ {item}
                          </span>
                        </div>
                      ))}
                      {pkg.note && (
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel} style={{ fontStyle: "italic" }}>
                            {pkg.note}
                          </span>
                        </div>
                      )}
                    </div>
                    <Button variant="primary" href="/contact" fullWidth>
                      Book {pkg.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Elite */}
        <section className={styles.included}>
          <div className={styles.container}>
            <div className={styles.includedContent}>
              <div className={styles.includedText}>
                <Eyebrow>WHY GO ELITE?</Eyebrow>
                <h2>The Complete Package</h2>
                <p>
                  Our Elite packages bundle together our most popular services at special
                  pricing. You get the ball pit, soft play equipment, personalized touches,
                  and toddler bounce house—all in one seamless booking.
                </p>
                <ul className={styles.includedList}>
                  <li>Save $100-$150 vs. booking separately</li>
                  <li>One booking, one delivery, one setup</li>
                  <li>Custom personalization included</li>
                  <li>Perfect for milestone celebrations</li>
                  <li>Toddler-safe bounce house included</li>
                  <li>Premium styling and setup</li>
                </ul>
              </div>
              <div className={styles.includedImage}>
                <ImagePlaceholder
                  width="100%"
                  aspectRatio="4/3"
                  borderRadius="var(--border-radius)"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready for the Elite Experience?</h2>
            <p>
              Contact us to check availability and secure your date.
              Most inquiries answered within 2 hours.
            </p>
            <div className={styles.ctaButtons}>
              <Button variant="primary" href="/contact">
                Book Your Event
              </Button>
              <Button variant="secondary" href="/collections">
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
