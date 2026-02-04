import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Ball Pits | Luxe Play NY",
  description:
    "Luxury standalone ball pits in various sizes and colors. Starting at $950. Perfect for smaller spaces or as the centerpiece of your Manhattan event.",
};

const packages = [
  {
    id: "deluxe-play",
    name: "Deluxe Play",
    price: "$950",
    size: "10 ft x 8 ft",
    colors: ["White", "Blush", "Nude", "Sky Blue", "Lavender"],
  },
  {
    id: "supreme-play",
    name: "Supreme Play",
    price: "$1,100",
    size: "11 ft x 8 ft",
    colors: ["Black", "Hot Pink", "Red"],
  },
  {
    id: "plush-play",
    name: "Plush Play",
    price: "$1,300",
    size: "10 ft x 13 ft",
    colors: ["Pink", "Forest Green", "Cream", "White"],
    featured: true,
  },
  {
    id: "grand-play",
    name: "Grand Play",
    price: "$1,400",
    size: "14 ft round",
    colors: ["White", "Lavender"],
  },
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
};

export default function BallPitsPage() {
  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#FFECD2" }}>
          <div className={styles.container}>
            <Eyebrow>BALL PITS</Eyebrow>
            <h1>Standalone Luxury Ball Pits</h1>
            <p className={styles.heroSubtitle}>
              Perfect for smaller spaces or as the stunning centerpiece of your event.
              All ball pits filled with white & clear balls.
            </p>
            <p className={styles.heroPrice}>Starting at $950</p>
          </div>
        </section>

        {/* Packages */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.packagesHeader}>
              <Eyebrow>CHOOSE YOUR SIZE</Eyebrow>
              <h2>Ball Pit Options</h2>
              <p className={styles.packagesSubtext}>
                Four sizes to fit any space—from intimate gatherings to grand celebrations
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
                    <p className={styles.packagePrice}>{pkg.price}</p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Size</span>
                        <span className={styles.detailValue}>{pkg.size}</span>
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

        {/* Note about custom colors */}
        <section className={styles.note}>
          <div className={styles.container}>
            <div className={styles.noteContent}>
              <Eyebrow>CUSTOMIZE YOUR EXPERIENCE</Eyebrow>
              <h2>Custom Ball Colors Available</h2>
              <p>
                All ball pits come filled with white and clear balls for an elegant look.
                Want to match your event theme? Ask about our color chart for additional
                ball color options to create your perfect aesthetic.
              </p>
              <Button variant="secondary" href="/contact">
                Inquire About Custom Colors
              </Button>
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
