import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/FounderStory.module.css";

export default function FounderStory() {
  return (
    <section className={styles.founderStory}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <ImagePlaceholder
            width="100%"
            aspectRatio="4/5"
            borderRadius="50% 50% var(--border-radius) var(--border-radius)"
          />
        </div>
        <div className={styles.content}>
          <Eyebrow>MEET THE FOUNDER</Eyebrow>
          <h2 className={styles.title}>
            From Tri-State Area Mom to Luxury Play Curator
          </h2>
          <div className={styles.body}>
            <p>
              Hi! I&apos;m [Founder Name], and I started Luxe Play NY because I
              couldn&apos;t find party rentals that matched the aesthetic of my
              tri-state area home and lifestyle. As a mother hosting events in our
              [neighborhood] apartment, I knew there had to be a better
              way—beautiful equipment that&apos;s safe, clean, and sophisticated.
            </p>
            <p>
              What began as a personal frustration became a mission: to provide
              tri-state area families with party rentals worthy of their
              celebrations. Today, we&apos;re proud to serve the city&apos;s most
              discerning hosts, from celebrity events to intimate family
              gatherings.
            </p>
            <p>
              Every setup is treated like it&apos;s for my own child, because I
              understand what matters most: creating magical moments in spaces
              you&apos;re proud of.
            </p>
          </div>
          <p className={styles.signature}>— [Founder Name]</p>
        </div>
      </div>
    </section>
  );
}
