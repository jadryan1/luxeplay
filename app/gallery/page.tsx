import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/GalleryPage.module.css";

export const metadata: Metadata = {
  title:
    "Event Theme Lookbook | Luxe Play NY – Luxury Children's Party Rentals NYC",
  description:
    "Browse Luxe Play NY's themed event lookbook. From Dino World to Royal Garden, every setup is custom-built for your child's celebration. Serving the tri-state area (NY, NJ, CT, PA).",
};

const themes = [
  {
    name: "Dino World",
    slug: "dino-world",
    tagline: "A prehistoric adventure, refined.",
    gender: "Boys" as const,
    cover: "/assets/themes/Jurassic Theme/jurassic11.jpg",
  },
  {
    name: "First Lap",
    slug: "first-lap",
    tagline: "Speed, style, and a celebration worth remembering.",
    gender: "Boys" as const,
    cover: "/assets/themes/Race Theme/race2.jpg",
  },
  {
    name: "Rookie of the Year",
    slug: "rookie-of-the-year",
    tagline: "Big league energy for your littlest all-star.",
    gender: "Boys" as const,
    cover: "/assets/themes/Baseball Theme/baseball3.jpg",
  },
  {
    name: "Enchanted Garden",
    slug: "enchanted-garden",
    tagline: "Butterflies, blooms, and the softest kind of magic.",
    gender: "Girls" as const,
    cover: "/assets/themes/Fairy Theme/fairy2.jpg",
  },
  {
    name: "Riviera",
    slug: "riviera",
    tagline: "Effortlessly sun-kissed. Undeniably luxe.",
    gender: "Girls" as const,
    cover: "/assets/themes/BeachClub Theme/beach9.jpg",
  },
  {
    name: "Royal Garden",
    slug: "royal-garden",
    tagline: "Every little queen deserves a kingdom.",
    gender: "Girls" as const,
    cover: "/assets/themes/Princess Castle Theme/princess6.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className={styles.galleryPage}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>OUR WORK</Eyebrow>
            <h1>Event Theme Lookbook</h1>
            <p className={styles.heroBody}>
              Each event we create is built from scratch around your vision.
              Scroll through our past setups to spark ideas, discover
              what&apos;s possible, and picture it at your next celebration.
            </p>
          </div>
        </section>

        {/* Theme Cards */}
        <section className={styles.themesSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {themes.map((theme) => (
                <article key={theme.slug} className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={theme.cover}
                      alt={`${theme.name} luxury children's party setup by Luxe Play NY`}
                      width={600}
                      height={750}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      className={`${styles.genderBadge} ${theme.gender === "Boys" ? styles.boys : styles.girls
                        }`}
                    >
                      {theme.gender}
                    </span>
                  </div>
                  <div className={styles.cardContent}>
                    <h2>{theme.name}</h2>
                    <p className={styles.tagline}>{theme.tagline}</p>
                    <Link
                      href={`/gallery/${theme.slug}`}
                      className={styles.cardCta}
                    >
                      Explore This Theme →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className={styles.closingCta}>
          <div className={styles.container}>
            <h2>Have Something in Mind?</h2>
            <p className={styles.closingCtaBody}>
              We build every setup from scratch. Tell us your vision and
              we&apos;ll handle everything else.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start Planning
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
