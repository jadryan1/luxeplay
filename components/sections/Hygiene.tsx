import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Hygiene.module.css";

const hygienePoints = [
  "Immaculate, fresh materials",
  "Showroom-quality presentation",
  "Boutique-level care for every event",
  "Thoughtfully maintained inventory",
  "Bespoke options for high-profile events",
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
          <Eyebrow>PRISTINE PLAY</Eyebrow>
          <h2 className={styles.title}>A Flawless Foundation</h2>
          <p className={styles.body}>
            Every piece arrives in pristine, showroom condition so you can relax
            knowing the environment is as beautiful as it is immaculate. An elevated
            standard of play, delivered flawlessly.
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
