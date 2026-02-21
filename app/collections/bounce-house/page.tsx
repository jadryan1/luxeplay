"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ColorSelector from "@/components/ui/ColorSelector";
import AddToEstimate from "@/components/ui/AddToEstimate";
import { bounceHouses, bounceComboPrice } from "@/lib/products";
import { colorMap } from "@/lib/colors";
import styles from "@/styles/ServicePage.module.css";

export default function BounceHousePage() {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  return (
    <>
      <Header />
      <main className={styles.servicePage}>
        {/* Hero */}
        <section className={styles.hero} style={{ backgroundColor: "#F5EDE8" }}>
          <div className={styles.container}>
            <Eyebrow>BOUNCE HOUSE</Eyebrow>
            <h1>Premium Bounce Houses</h1>
            <p className={styles.heroSubtitle}>
              Bring joy to children of all ages with our premium bounce houses.
              Choose classic bounce or upgrade to our bounce + slide combo.
            </p>
            <p className={styles.heroPrice}>Starting at $1,000</p>
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
              {bounceHouses.map((option) => (
                <div
                  key={option.id}
                  className={`${styles.packageCard} ${option.featured ? styles.featured : ""}`}
                >
                  {option.featured && (
                    <span className={styles.featuredBadge}>Most Popular</span>
                  )}
                  <div
                    className={styles.packageImage}
                    style={{
                      backgroundColor: selectedColors[option.id] ? colorMap[selectedColors[option.id]] : "#F5EDE8",
                      transition: "background-color 0.3s ease"
                    }}
                  >
                    <ImagePlaceholder width="100%" height="100%" borderRadius="0" />
                  </div>
                  <div className={styles.packageContent}>
                    <h3 className={styles.packageName}>{option.name}</h3>
                    <p className={styles.packagePrice}>{option.priceLabel}</p>
                    <p style={{ marginBottom: "20px", fontSize: "0.9375rem" }}>
                      {option.description}
                    </p>
                    <div className={styles.packageDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Size</span>
                        <span className={styles.detailValue}>{option.dimensions}</span>
                      </div>
                    </div>
                    <div style={{ margin: "16px 0" }}>
                      <ColorSelector
                        colors={option.colors}
                        selectedColor={selectedColors[option.id]}
                        onSelect={(color) =>
                          setSelectedColors((prev) => ({ ...prev, [option.id]: color }))
                        }
                      />
                    </div>
                    <AddToEstimate
                      item={{
                        id: option.id,
                        name: option.name,
                        category: option.category,
                        price: option.price,
                        priceLabel: option.priceLabel,
                        selectedColor: selectedColors[option.id],
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

            {/* Combo Note */}
            <div className={styles.comboNote}>
              <h3>Combo with Soft Play</h3>
              <p>
                Add a bounce house to any soft play package for just{" "}
                <span className={styles.comboPrice}>{bounceComboPrice}</span>
              </p>
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
                Start Planning
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
