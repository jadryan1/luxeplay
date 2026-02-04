import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Hygiene.module.css";

const hygienePoints = [
  "Individual ball washing and UV sanitization",
  "Hospital-grade disinfection of all surfaces",
  "Fresh, allergen-free materials",
  "Climate-controlled storage",
  "Single-use option available for high-profile events",
];

export default function Hygiene() {
  return (
    <section className={styles.hygiene}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <ImagePlaceholder
            width="100%"
            height="500px"
            borderRadius="var(--border-radius)"
          />
        </div>
        <div className={styles.content}>
          <Eyebrow>SQUEAKY CLEAN GUARANTEE</Eyebrow>
          <h2 className={styles.title}>Cleanliness is Our Love Language</h2>
          <p className={styles.body}>
            We understand that luxury means peace of mind. That&apos;s why we&apos;ve
            invested in professional-grade sanitization equipment and created a
            dedicated cleaning protocol that goes beyond industry standards.
          </p>
          <ul className={styles.list}>
            {hygienePoints.map((point, index) => (
              <li key={index}>
                <span className={styles.sparkle}>✨</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
