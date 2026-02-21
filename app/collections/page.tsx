"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AddToEstimate from "@/components/ui/AddToEstimate";
import { addOns } from "@/lib/products";
import styles from "@/styles/CollectionsPage.module.css";
import Link from "next/link";

const services = [
  {
    id: "soft-play",
    name: "Soft Play Packages",
    tagline: "THE COMPLETE EXPERIENCE",
    price: "Starting at $1,475",
    description:
      "A captivating, safe environment that invites endless imagination and joy. This comprehensive setup features a custom-colored ball pit, soft climbing structures, and aesthetic fencing. Perfectly scaled for energetic toddlers while seamlessly blending into design-conscious celebrations.",
    highlights: [
      "4 package options from $1,475 – $1,950",
      "Areas ranging from 12x18 ft to 14x27 ft",
      "Multiple color palettes available",
      "All equipment included",
    ],
    href: "/collections/soft-play",
  },
  {
    id: "ball-pits",
    name: "Ball Pits",
    tagline: "STANDALONE LUXURY",
    price: "Starting at $975",
    description:
      "A striking, sculptural centerpiece that brings the magic of play to any room. Each pit is styled with your choice of premium ball colors, elegant fencing, and soft landing mats. Designed for stylish minimalists and children of all ages to dive into.",
    highlights: [
      "4 sizes from 10x6 ft to 14 ft round",
      "Prices from $975 – $1,450",
      "Multiple color options",
      "Custom ball colors available",
    ],
    href: "/collections/ball-pits",
  },
  {
    id: "bounce-house",
    name: "Bounce House",
    tagline: "ENDLESS FUN",
    price: "Starting at $1,000",
    description:
      "An architectural showstopper that delivers high-energy thrills in a beautiful silhouette. Available in crisp white or pastel tones, featuring a spacious jumping area and optional slide attachment. Built for spirited children ready to soar and parents who appreciate clean, modern design.",
    highlights: [
      "Luxe Bounce: $1,000 (13x13x9 ft)",
      "Luxe Bounce + Slide: $1,250 (15x15x10 ft)",
      "Multiple color options",
      "Combo with soft play: add $650",
    ],
    href: "/collections/bounce-house",
  },
  {
    id: "elite",
    name: "Elite Packages",
    tagline: "THE ULTIMATE EXPERIENCE",
    price: "Starting at $2,450",
    description:
      "The ultimate, all-encompassing world of play where every detail is flawlessly curated. This premium bundle unites a sweeping soft play landscape, a deluxe ball pit, and a matching boutique bounce house. Curated for the ultimate milestone celebration and the parent who wants an uncompromised, breathtaking impact.",
    highlights: [
      "4 elite packages from $2,450 – $3,250",
      "Save $100–$125 vs. à la carte",
      "Includes personalization",
      "Toddler bounce included",
    ],
    href: "/collections/elite",
  },
];

const bookingTerms = [
  "25% deposit required to secure date",
  "All prices based on 4-hour rental",
  "Taxes & delivery fees NOT included in prices above",
  "Additional hours must be agreed in advance",
];

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className={styles.collectionsPage}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>OUR PACKAGES</Eyebrow>
            <h1>Luxury Play Experiences</h1>
            <p className={styles.heroSubtitle}>
              Four ways to bring magic to your next event — choose your perfect experience
            </p>
          </div>
        </section>

        {/* Services */}
        <section className={styles.collections}>
          <div className={styles.container}>
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`${styles.collectionItem} ${index % 2 === 1 ? styles.reversed : ""
                  }`}
              >
                <Link href={service.href} className={styles.collectionImage}>
                  <ImagePlaceholder
                    width="100%"
                    aspectRatio="4/3"
                    borderRadius="var(--border-radius)"
                  />
                </Link>
                <div className={styles.collectionContent}>
                  <Eyebrow>{service.tagline}</Eyebrow>
                  <h2>{service.name}</h2>
                  <p className={styles.price}>{service.price}</p>
                  <p className={styles.description}>{service.description}</p>
                  <ul className={styles.highlights}>
                    {service.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <a href={service.href} className={styles.viewLink}>
                    View Packages →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className={styles.addOns}>
          <div className={styles.container}>
            <div className={styles.addOnsHeader}>
              <Eyebrow>ENHANCE YOUR EVENT</Eyebrow>
              <h2>Add-Ons</h2>
              <p className={styles.addOnsSubtext}>
                Customize your package with these premium additions
              </p>
            </div>
            <div className={styles.addOnsGrid}>
              {addOns.map((addOn) => (
                <div key={addOn.id} className={styles.addOnCard}>
                  <div>
                    <h3>{addOn.name}</h3>
                    <p className={styles.addOnPrice}>{addOn.priceLabel}</p>
                  </div>
                  <AddToEstimate
                    item={{
                      id: addOn.id,
                      name: addOn.name,
                      category: addOn.category,
                      price: addOn.price,
                      priceLabel: addOn.priceLabel,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Terms */}
        <section className={styles.bookingTerms}>
          <div className={styles.container}>
            <div className={styles.termsContent}>
              <Eyebrow>GOOD TO KNOW</Eyebrow>
              <h2>Booking Terms</h2>
              <ul className={styles.termsList}>
                {bookingTerms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
              <a href="/contact" className={styles.viewLink} style={{ marginTop: "24px", display: "inline-block" }}>
                Start Planning →
              </a>
            </div>
          </div>
        </section>

        {/* Custom CTA */}
        <section className={styles.customCta}>
          <div className={styles.container}>
            <h2>Need Something Custom?</h2>
            <p>
              We love creating bespoke experiences. Tell us your vision and
              we&apos;ll design a custom package just for you.
            </p>
            <a href="/contact" className={styles.viewLink}>
              Start Planning →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
