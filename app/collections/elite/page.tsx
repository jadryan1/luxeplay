"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AddToEstimate from "@/components/ui/AddToEstimate";
import { elitePackages } from "@/lib/products";
import styles from "@/styles/ServicePage.module.css";

export default function ElitePackagesPage() {
  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#F5EDE8" }}>
          <div className={styles.container}>
            <Eyebrow>ELITE PACKAGES</Eyebrow>
            <h1>The All-Exclusive Experience</h1>
            <p className={styles.heroSubtitle}>
              Get the full Luxe Play experience at special bundled pricing.
              Ball pit, soft play, personalization, and toddler bounce — all included.
            </p>
            <p className={styles.heroPrice}>Starting at $2,450 • Save up to $125</p>
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
              {elitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
                >
                  {pkg.featured && (
                    <span className={styles.featuredBadge}>Best Value</span>
                  )}
                  <div className={styles.packageImage}>
                    <ImagePlaceholder width="100%" height="100%" borderRadius="0" />
                  </div>
                  <div className={styles.packageContent}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packagePrice}>
                      {pkg.priceLabel}
                      {pkg.savings && (
                        <span className={styles.savingsBadge}>{pkg.savings}</span>
                      )}
                    </p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>What&apos;s Included</span>
                        <span className={styles.detailValue}></span>
                      </div>
                      {pkg.includes?.map((item, i) => (
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
                    <div style={{ marginTop: "16px" }}>
                      <AddToEstimate
                        item={{
                          id: pkg.id,
                          name: pkg.name,
                          category: pkg.category,
                          price: pkg.price,
                          priceLabel: pkg.priceLabel,
                        }}
                      />
                      <div style={{ marginTop: "16px", textAlign: "center" }}>
                        <a href="/contact" className={styles.viewLink} style={{ fontSize: "0.8125rem", textTransform: "none", letterSpacing: "normal" }}>
                          Not sure? Start Planning →
                        </a>
                      </div>
                    </div>
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
                  and toddler bounce house — all in one seamless booking.
                </p>
                <ul className={styles.includedList}>
                  <li>Save $100-$125 vs. booking separately</li>
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
            <h2>Ready to Experience Elite?</h2>
            <p>
              Let&apos;s design the perfect play experience for your event.
              Most inquiries answered within 2 hours.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaLink}>
                Get a Free Estimate
              </a>
              <a href="/collections" className={styles.ctaLinkSecondary}>
                Start Planning
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
