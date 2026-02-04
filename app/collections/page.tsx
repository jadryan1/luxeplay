import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/CollectionsPage.module.css";

export const metadata: Metadata = {
  title: "Our Services | Luxe Play NY",
  description:
    "Explore our luxury soft play packages, ball pits, bounce houses, and elite packages. Find the perfect play experience for your Manhattan event.",
};

const services = [
  {
    id: "soft-play",
    name: "Soft Play Packages",
    tagline: "THE COMPLETE EXPERIENCE",
    price: "Starting at $1,450",
    description:
      "Our signature soft play packages include everything you need for an unforgettable event. Each package features a ball pit, tunnel with steps and slide, building blocks, hoppers, rocker, mats, and fencing.",
    highlights: [
      "4 package options from $1,450 - $1,900",
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
    price: "Starting at $950",
    description:
      "Perfect for smaller spaces or as the centerpiece of your event. Our ball pits come filled with white and clear balls, with custom color options available.",
    highlights: [
      "4 sizes from 10x8 ft to 14 ft round",
      "Prices from $950 - $1,400",
      "Multiple color options",
      "Custom ball colors available",
    ],
    href: "/collections/ball-pits",
  },
  {
    id: "bounce-house",
    name: "Bounce House",
    tagline: "ENDLESS FUN",
    price: "Starting at $875",
    description:
      "Our premium bounce houses bring joy to children of all ages. Choose from classic bounce or upgrade to our bounce + slide combo for extra excitement.",
    highlights: [
      "Luxe Bounce: $875 (13x13x9 ft)",
      "Luxe Bounce + Slide: $1,000 (15x15x10 ft)",
      "Multiple color options",
      "Combo with soft play available",
    ],
    href: "/collections/bounce-house",
  },
  {
    id: "elite",
    name: "Elite Packages",
    tagline: "THE ULTIMATE EXPERIENCE",
    price: "Starting at $2,400",
    description:
      "Get the all-exclusive Luxe Play experience with our Elite packages. Combining soft play, ball pits, personalization, and toddler bounce—all at special bundled pricing.",
    highlights: [
      "4 elite packages from $2,400 - $3,225",
      "Save $100-$150 vs. à la carte",
      "Includes personalization",
      "Toddler bounce included",
    ],
    href: "/collections/elite",
  },
];

const addOns = [
  { name: "Toddler Bounce House", price: "$700" },
  { name: "Luxe Slide w/ Arc", price: "$250" },
  { name: "Double Luxe Slide w/ Arc", price: "$425" },
  { name: "Custom Vinyl Install", price: "Starting at $225" },
  { name: "Custom Foam Arcs", price: "Starting at $275" },
  { name: "Chaperone", price: "$150" },
  { name: "Additional Hour", price: "$100/hr" },
];

const bookingTerms = [
  "25% deposit required to secure date",
  "All prices based on 4-hour rental",
  "Taxes & delivery fees NOT included in prices above",
  "Additional hours must be agreed in advance",
];

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className={styles.collectionsPage}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>OUR SERVICES</Eyebrow>
            <h1>Luxury Play Experiences</h1>
            <p className={styles.heroSubtitle}>
              Four ways to bring magic to your next event—choose your perfect experience
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
                className={`${styles.collectionItem} ${
                  index % 2 === 1 ? styles.reversed : ""
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
                  <Button variant="primary" href={service.href}>
                    View Packages
                  </Button>
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
              {addOns.map((addOn, index) => (
                <div key={index} className={styles.addOnCard}>
                  <h3>{addOn.name}</h3>
                  <p className={styles.addOnPrice}>{addOn.price}</p>
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
              <Button variant="primary" href="/contact">
                Book Your Event
              </Button>
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
            <Button variant="primary" href="/contact">
              Request Custom Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
