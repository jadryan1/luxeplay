import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Full-viewport background image */}
      <Image
        src="/assets/images/cardi.png"
        alt="Luxe Play Experience"
        fill
        priority
        className={styles.heroImage}
      />

      {/* Subtle brand-tinted overlay */}
      <div className={styles.overlay} />

      {/* Minimal text overlay */}
      <div className={styles.content}>
        <span className={styles.eyebrow}>WELCOME TO LUXE PLAY NY</span>
        <h1 className={styles.headline}>Let&apos;s Have a Ball!</h1>
        <p className={styles.heroSubheading}>
          Design-forward play experiences that elevate your celebration. Effortless for you, unforgettable for them.
        </p>
        <Link href="/contact" className={styles.ctaBtn}>
          START PLANNING
        </Link>
      </div>
    </section>
  );
}
