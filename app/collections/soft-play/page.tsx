"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ColorSelector from "@/components/ui/ColorSelector";
import AddToEstimate from "@/components/ui/AddToEstimate";
import { softPlay } from "@/lib/products";
import { colorMap } from "@/lib/colors";
import styles from "@/styles/ServicePage.module.css";

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

export default function SoftPlayPage() {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#F5EDE8" }}>
          <div className={styles.container}>
            <Eyebrow>SOFT PLAY PACKAGES</Eyebrow>
            <h1>The Complete Play Experience</h1>
            <p className={styles.heroSubtitle}>
              Everything you need for an unforgettable event — ball pit, tunnel, slide,
              blocks, and more. Four packages to fit your space and style.
            </p>
            <p className={styles.heroPrice}>Starting at $1,475</p>
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
              {softPlay.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""}`}
                >
                  {pkg.featured && (
                    <span className={styles.featuredBadge}>Most Popular</span>
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
                        <span className={styles.detailLabel}>Area Required</span>
                        <span className={styles.detailValue}>{pkg.area}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Ball Pit Size</span>
                        <span className={styles.detailValue}>{pkg.ballPitSize}</span>
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
