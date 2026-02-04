import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Bounce House | Luxe Play NY",
  description:
    "Premium bounce houses for Manhattan events. Classic bounce or bounce + slide combo. Starting at $875. Multiple color options available.",
};

const options = [
  {
    id: "luxe-bounce",
    name: "Luxe Bounce",
    price: "$875",
    size: "13 x 13 x 9 ft",
    description: "Our classic bounce house—perfect for active play and endless fun.",
    colors: ["Yellow", "Red", "Navy", "Black", "Tan", "White", "Hot Pink"],
  },
  {
    id: "luxe-bounce-slide",
    name: "Luxe Bounce + Slide",
    price: "$1,000",
    size: "15 x 15 x 10 ft",
    description: "Take the fun to the next level with our bounce and slide combo.",
    colors: ["Blush", "Baby Blue", "Lavender"],
    featured: true,
  },
];

const colorMap: Record<string, string> = {
  Yellow: "#FFD700",
  Red: "#DC143C",
  Navy: "#000080",
  Black: "#000000",
  Tan: "#D2B48C",
  White: "#FFFFFF",
  "Hot Pink": "#FF69B4",
  Blush: "#FFB5D5",
  "Baby Blue": "#89CFF0",
  Lavender: "#E6E6FA",
};

export default function BounceHousePage() {
  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#E0F4FF" }}>
          <div className={styles.container}>
            <Eyebrow>BOUNCE HOUSE</Eyebrow>
            <h1>Premium Bounce Houses</h1>
            <p className={styles.heroSubtitle}>
              Bring joy to children of all ages with our premium bounce houses.
              Choose classic bounce or upgrade to our bounce + slide combo.
            </p>
            <p className={styles.heroPrice}>Starting at $875</p>
          </div>
        </section>

        {/* Options */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.packagesHeader}>
              <Eyebrow>CHOOSE YOUR STYLE</Eyebrow>
              <h2>Bounce House Options</h2>
              <p className={styles.packagesSubtext}>
                Two premium options for endless fun
              </p>
            </div>
            <div className={styles.bounceOptions}>
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`${styles.packageCard} ${option.featured ? styles.featured : ""}`}
                >
                  {option.featured && (
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
                    <h3 className={styles.packageName}>{option.name}</h3>
                    <p className={styles.packagePrice}>{option.price}</p>
                    <p style={{ marginBottom: "20px", fontSize: "0.9375rem" }}>
                      {option.description}
                    </p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Size</span>
                        <span className={styles.detailValue}>{option.size}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Color Options</span>
                        <div className={styles.colorOptions}>
                          {option.colors.map((color) => (
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
                      Book {option.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Combo Note */}
            <div className={styles.comboNote}>
              <h3>Combo with Soft Play</h3>
              <p>
                Add a bounce house to any soft play package for just{" "}
                <span className={styles.comboPrice}>$500</span>
              </p>
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
