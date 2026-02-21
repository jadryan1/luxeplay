import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Gallery.module.css";

const galleryItems = [
  { height: "400px" },
  { height: "300px" },
  { height: "350px" },
  { height: "300px" },
  { height: "350px" },
  { height: "400px" },
  { height: "300px" },
  { height: "350px" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>RECENT EVENTS</Eyebrow>
          <h2>Styled to Perfection</h2>
          <p className={styles.subtext}>
            See how we transform the tri-state area&apos;s most exclusive venues
          </p>
        </div>
        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              <ImagePlaceholder
                width="100%"
                height={item.height}
                borderRadius="var(--border-radius)"
              />
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Button variant="secondary" href="/gallery">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
