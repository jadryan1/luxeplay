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
    title: "Curated Environments",
    description:
      "Spaces that invite boundless imagination while maintaining flawless, showroom-ready presentation.",
  },
  {
    title: "Seamless Aesthetics",
    description:
      "Neutral palettes and modern silhouettes designed to elevate, rather than compete with, your event's atmosphere.",
  },
  {
    title: "Bespoke Service",
    description:
      "From initial vision to final installation, we handle every detail so your only job is to celebrate.",
  },
  {
    title: "Uncompromising Details",
    description:
      "Outfitted with the finest, thoughtfully sourced materials for a truly boutique playtime experience.",
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
              The tri-state area&apos;s premier luxury soft play rental company, founded by a
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
                  Luxe Play NY was born from a desire for something better. As a
                  mother planning celebrated moments in the tri-state area, I searched for
                  play experiences that matched the elegance of our home. I wanted
                  joy without the visual compromise.
                </p>
                <p>
                  What began as a personal pursuit quickly evolved into a definitive
                  standard. Today, we curate play spaces for the city&apos;s most
                  discerning families, delivering environments that engage children
                  and delight parents.
                </p>
                <p>
                  Every landscape we create is treated as a masterpiece. We understand
                  what matters most: creating magical, uninhibited moments in spaces
                  you are proud to share.
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
                We believe a high-end celebration shouldn&apos;t pause for playtime.
                Our mission is to provide tri-state area families with flawlessly designed
                play landscapes. Experiences worthy of your most cherished milestones
                and sophisticated spaces.
              </p>
              <Button variant="primary" href="/contact">
                Start Planning
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
