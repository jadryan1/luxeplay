import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Eyebrow>WELCOME TO LUXE PLAY NY</Eyebrow>
          <h2 className={styles.title}>Where Luxury Meets Play</h2>
          <div className={styles.body}>
            <p>
              As Manhattan&apos;s premier luxury soft play rental company, we
              specialize in creating Instagram-worthy play experiences for
              high-end events. From intimate birthday celebrations in Upper East
              Side penthouses to grand corporate family days in Tribeca lofts,
              our curated collection seamlessly integrates with your event&apos;s
              aesthetic.
            </p>
            <p>
              Founded by a Manhattan mom who understands that luxury isn&apos;t just
              about looks—it&apos;s about safety, cleanliness, and creating memories
              that last. Every piece in our collection is meticulously
              sanitized, professionally styled, and designed to complement even
              the most sophisticated spaces.
            </p>
          </div>
          <Button variant="secondary" href="/collections">
            View Our Collections
          </Button>
        </div>
        <div className={styles.imageWrapper}>
          <ImagePlaceholder
            width="100%"
            aspectRatio="1/1"
            borderRadius="var(--border-radius)"
          />
        </div>
      </div>
    </section>
  );
}
