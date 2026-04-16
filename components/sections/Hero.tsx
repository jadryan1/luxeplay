import styles from "@/styles/Hero.module.css";

const slides = [
  "/assets/images/heros/hero1.jpg",
  "/assets/images/heros/hero2.jpg",
  "/assets/images/heros/hero3.jpg",
  "/assets/images/heros/hero4.jpg",
  "/assets/images/heros/hero5.jpg",
  "/assets/images/heros/hero6.jpg",
];

// Each slide: 5s display + 1.5s fade = 6.5s per slide; total cycle = 39s
const DELAY_PER_SLIDE = 6.5;

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Slideshow image layers only — no text, no overlay */}
      {slides.map((src, i) => (
        <div
          key={src}
          className={styles.slide}
          style={{
            backgroundImage: `url('${src}')`,
            animationDelay: `${i * DELAY_PER_SLIDE}s`,
          }}
        />
      ))}
    </section>
  );
}
