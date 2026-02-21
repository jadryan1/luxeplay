"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ColorSelector from "@/components/ui/ColorSelector";
import AddToEstimate from "@/components/ui/AddToEstimate";
import { ballPits } from "@/lib/products";
import { colorMap } from "@/lib/colors";
import styles from "@/styles/ServicePage.module.css";

export default function BallPitsPage() {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#F5EDE8" }}>
          <div className={styles.container}>
            <Eyebrow>BALL PITS</Eyebrow>
            <h1>Standalone Luxury Ball Pits</h1>
            <p className={styles.heroSubtitle}>
              Perfect for smaller spaces or as the stunning centerpiece of your event.
              All ball pits filled with white &amp; clear balls.
            </p>
            <p className={styles.heroPrice}>Starting at $975</p>
          </div>
        </section>

        {/* Packages */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.packagesHeader}>
              <Eyebrow>CHOOSE YOUR SIZE</Eyebrow>
              <h2>Ball Pit Options</h2>
              <p className={styles.packagesSubtext}>
                Four sizes to fit any space — from intimate gatherings to grand celebrations
              </p>
            </div>
            <div className={styles.packagesGrid}>
              {ballPits.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
                >
                  {pkg.featured && (
                    <span className={styles.featuredBadge}>Best Value</span>
                  )}
                  <div
                    className={styles.packageImage}
                    style={{
                      backgroundColor: selectedColors[pkg.id] ? colorMap[selectedColors[pkg.id]] : "#F5EDE8",
                      transition: "background-color 0.3s ease"
                    }}
                  >
                    <ImagePlaceholder width="100%" height="100%" borderRadius="0" />
                  </div>
                  <div className={styles.packageContent}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packagePrice}>{pkg.priceLabel}</p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Size</span>
                        <span className={styles.detailValue}>{pkg.dimensions}</span>
                      </div>
                    </div>
                    <div style={{ margin: "16px 0" }}>
                      <ColorSelector
                        colors={pkg.colors}
                        selectedColor={selectedColors[pkg.id]}
                        onSelect={(color) =>
                          setSelectedColors((prev) => ({ ...prev, [pkg.id]: color }))
                        }
                      />
                    </div>
                    <AddToEstimate
                      item={{
                        id: pkg.id,
                        name: pkg.name,
                        category: pkg.category,
                        price: pkg.price,
                        priceLabel: pkg.priceLabel,
                        selectedColor: selectedColors[pkg.id],
                      }}
                      requiresColor
                    />
                    <div style={{ marginTop: "16px", textAlign: "center" }}>
                      <a href="/contact" className={styles.viewLink} style={{ fontSize: "0.8125rem", textTransform: "none", letterSpacing: "normal" }}>
                        Not sure? Start Planning →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Colors Note */}
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
              <a href="/contact" className={styles.ctaLinkSecondary} style={{ marginTop: "24px", display: "inline-block" }}>
                Inquire About Custom Colors
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Ready for the Luxe Experience?</h2>
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
