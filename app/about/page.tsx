import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import styles from "@/styles/AboutPage.module.css";

export const metadata: Metadata = {
  title: "About Us | Luxe Play NY",
  description:
    "Learn about Luxe Play NY, Manhattan's premier luxury soft play rental company. Our story, mission, and commitment to creating magical play experiences.",
};

const values = [
  {
    title: "Safety First",
    description:
      "Every piece of equipment meets the highest safety standards. We're fully insured and licensed in NYC.",
  },
  {
    title: "Pristine Cleanliness",
    description:
      "Hospital-grade sanitization and individual ball washing ensure every event is spotlessly clean.",
  },
  {
    title: "Aesthetic Excellence",
    description:
      "Our collections are designed to complement, never clash with, the most sophisticated event spaces.",
  },
  {
    title: "White-Glove Service",
    description:
      "From consultation to cleanup, we handle everything so you can focus on what matters most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Eyebrow>OUR STORY</Eyebrow>
            <h1>Creating Magic, One Event at a Time</h1>
            <p className={styles.heroSubtitle}>
              Manhattan&apos;s premier luxury soft play rental company, founded by a
              mom who knew there had to be a better way.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyImage}>
                <ImagePlaceholder
                  width="100%"
                  aspectRatio="4/5"
                  borderRadius="var(--border-radius)"
                />
              </div>
              <div className={styles.storyContent}>
                <h2>The Beginning</h2>
                <p>
                  Luxe Play NY was born from a simple frustration: finding party
                  rentals that matched the aesthetic of a Manhattan home. As a
                  mother planning my daughter&apos;s first birthday in our Upper East
                  Side apartment, I searched everywhere for soft play equipment
                  that was beautiful, safe, and clean.
                </p>
                <p>
                  What I found were primary-colored ball pits that clashed with
                  everything, equipment of questionable cleanliness, and service
                  that left much to be desired. I knew other parents must feel
                  the same way—and Luxe Play NY was born.
                </p>
                <p>
                  Today, we serve Manhattan&apos;s most discerning families, from
                  celebrity birthdays to intimate milestone celebrations. Every
                  setup is treated as if it were for my own child, because I
                  understand what matters most: creating magical moments in
                  spaces you&apos;re proud of.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className={styles.container}>
            <div className={styles.valuesHeader}>
              <Eyebrow>WHAT WE STAND FOR</Eyebrow>
              <h2>Our Core Values</h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <div className={styles.missionContent}>
              <Eyebrow>OUR MISSION</Eyebrow>
              <h2>Luxury Should Never Mean Compromise</h2>
              <p>
                We believe that beautiful design, rigorous safety standards, and
                pristine cleanliness should come standard—not as a premium
                add-on. Our mission is to provide Manhattan families with party
                rentals that are worthy of their celebrations and their homes.
              </p>
              <Button variant="primary" href="/contact">
                Work With Us
              </Button>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className={styles.press}>
          <div className={styles.container}>
            <Eyebrow>AS SEEN IN</Eyebrow>
            <div className={styles.pressLogos}>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <ImagePlaceholder
                  key={index}
                  width="150px"
                  height="60px"
                  borderRadius="var(--border-radius-small)"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
