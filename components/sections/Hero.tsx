import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Side - Text */}
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>WELCOME TO LUXE PLAY NY</span>
            <h1 className={styles.headline}>Let's Have a Ball!</h1>
            <p className={styles.subheadline}>add a touch of magic to your event</p>
            <p className={styles.tagline}>your Architects of Luxury Fun!</p>

            <p className={styles.bodyText}>
              Welcome to Luxe Play NY, Manhattan's premier destination for luxury
              soft play and party rentals. We specialize in creating Instagram-worthy
              play experiences for children aged 0 to 6 years old. Our services bring
              the fun directly to you—transforming your Manhattan home or venue into
              a magical playground that seamlessly integrates with your event's aesthetic.
            </p>

            <div className={styles.ctaWrapper}>
              <Link href="/contact" className={styles.heroBtn}>
                I'M READY!
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholderBox}>
              <Image
                src="/assets/images/cardi.png"
                alt="Luxe Play Experience"
                fill
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
