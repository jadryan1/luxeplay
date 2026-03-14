import Link from "next/link";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Minimal text content — centered */}
      <div className={styles.content}>
        <span className={styles.eyebrow}>WELCOME TO LUXEPLAY NY</span>
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
