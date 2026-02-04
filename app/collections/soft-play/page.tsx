import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Soft Play Packages | Luxe Play NY",
  description:
    "Complete luxury soft play packages including ball pit, tunnel, slide, blocks, and more. Starting at $1,450. Perfect for Manhattan events.",
};

const packages = [
  {
    id: "grand-luxe",
    name: "Grand Luxe",
    price: "$1,450",
    area: "12 ft x 18 ft",
    ballPitSize: "10x6 rectangle",
    colors: ["White", "Nude", "Blush", "Sky Blue", "Lavender"],
  },
  {
    id: "the-celeb",
    name: "The Celeb",
    price: "$1,650",
    area: "12 ft x 24 ft",
    ballPitSize: "11x8 rectangle",
    colors: ["Black", "Hot Pink", "Red"],
    featured: true,
  },
  {
    id: "the-royal",
    name: "The Royal",
    price: "$1,800",
    area: "13 ft x 23 ft",
    ballPitSize: "10x13 rectangle",
    colors: ["White", "Forest Green", "Pink", "Cream", "Silver"],
  },
  {
    id: "luxe-play",
    name: "Luxe Play",
    price: "$1,900",
    area: "14 ft x 27 ft",
    ballPitSize: "14 ft round",
    colors: ["White", "Lavender"],
  },
];

const included = [
  "Ball pit with white & clear balls",
  "Tunnel with steps",
  "Slide",
  "Building blocks",
  "3 hoppers",
  "Rocker",
  "Safety mats",
  "Fencing",
];

const colorMap: Record<string, string> = {
  White: "#FFFFFF",
  Nude: "#E8D4C4",
  Blush: "#FFB5D5",
  "Sky Blue": "#87CEEB",
  Lavender: "#E6E6FA",
  Black: "#000000",
  "Hot Pink": "#FF69B4",
  Red: "#DC143C",
  "Forest Green": "#228B22",
  Pink: "#FFC0CB",
  Cream: "#FFFDD0",
  Silver: "#C0C0C0",
};

export default function SoftPlayPage() {
  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "var(--color-primary-bg)" }}>
          <div className={styles.container}>
            <Eyebrow>SOFT PLAY PACKAGES</Eyebrow>
            <h1>The Complete Play Experience</h1>
            <p className={styles.heroSubtitle}>
              Everything you need for an unforgettable event—ball pit, tunnel, slide,
              blocks, and more. Four packages to fit your space and style.
            </p>
            <p className={styles.heroPrice}>Starting at $1,450</p>
          </div>
        </section>

        {/* Packages */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.packagesHeader}>
              <Eyebrow>CHOOSE YOUR PACKAGE</Eyebrow>
              <h2>Soft Play Packages</h2>
              <p className={styles.packagesSubtext}>
                Each package includes all equipment for a complete play experience
              </p>
            </div>
            <div className={styles.packagesGrid}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
                >
                  {pkg.featured && (
                    <span className={styles.featuredBadge}>Most Popular</span>
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
                    <p className={styles.packagePrice}>{pkg.price}</p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Area Required</span>
                        <span className={styles.detailValue}>{pkg.area}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Ball Pit Size</span>
                        <span className={styles.detailValue}>{pkg.ballPitSize}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Color Options</span>
                        <div className={styles.colorOptions}>
                          {pkg.colors.map((color) => (
                            <span
                              key={color}
                              className={styles.colorDot}
                              style={{ backgroundColor: colorMap[color] }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
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

        {/* What's Included */}
        <section className={styles.included}>
          <div className={styles.container}>
            <div className={styles.includedContent}>
              <div className={styles.includedText}>
                <Eyebrow>WHAT&apos;S INCLUDED</Eyebrow>
                <h2>Everything You Need</h2>
                <p>
                  All of our soft play packages come fully equipped with premium
                  play elements. Delivery, setup, styling, and breakdown are all included.
                </p>
                <ul className={styles.includedList}>
                  {included.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
            <h2>Ready to Book?</h2>
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
