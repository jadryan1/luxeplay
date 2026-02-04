"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/GalleryPage.module.css";

const categories = [
  "All",
  "Birthdays",
  "Baby Showers",
  "Corporate Events",
  "Holiday Parties",
];

const galleryItems = [
  { id: 1, category: "Birthdays", height: "400px" },
  { id: 2, category: "Baby Showers", height: "300px" },
  { id: 3, category: "Birthdays", height: "350px" },
  { id: 4, category: "Corporate Events", height: "300px" },
  { id: 5, category: "Holiday Parties", height: "350px" },
  { id: 6, category: "Birthdays", height: "400px" },
  { id: 7, category: "Baby Showers", height: "300px" },
  { id: 8, category: "Birthdays", height: "350px" },
  { id: 9, category: "Corporate Events", height: "400px" },
  { id: 10, category: "Baby Showers", height: "300px" },
  { id: 11, category: "Holiday Parties", height: "350px" },
  { id: 12, category: "Birthdays", height: "300px" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <Header />
      <main className={styles.galleryPage}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>OUR WORK</Eyebrow>
            <h1>Styled to Perfection</h1>
            <p className={styles.heroSubtitle}>
              See how we transform Manhattan&apos;s most exclusive venues into
              magical play spaces
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filters}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterButton} ${
                    activeFilter === category ? styles.active : ""
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className={styles.gallery}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {filteredItems.map((item) => (
                <div key={item.id} className={styles.gridItem}>
                  <ImagePlaceholder
                    width="100%"
                    height={item.height}
                    borderRadius="var(--border-radius)"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>Want to See Your Event Here?</h2>
            <p>
              Book your consultation today and let&apos;s create something beautiful
              together.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Book Your Event
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
