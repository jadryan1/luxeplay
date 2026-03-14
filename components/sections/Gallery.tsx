import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/styles/Gallery.module.css";

const galleryImages = [
  { src: "/assets/Themes/Fairy Theme/fairy2.jpg", alt: "Fairy themed celebration" },
  { src: "/assets/Themes/Baseball Theme/baseball3.jpg", alt: "Baseball themed party setup" },
  { src: "/assets/Themes/BeachClub Theme/beach9.jpg", alt: "Beach club themed event" },
  { src: "/assets/Themes/Jurassic Theme/jurassic11.jpg", alt: "Jurassic themed play experience" },
  { src: "/assets/Themes/Princess Castle Theme/princess6.jpg", alt: "Princess castle celebration" },
  { src: "/assets/Themes/Race Theme/race2.jpg", alt: "Race themed party setup" },
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
          {galleryImages.map((img, index) => (
            <div key={index} className={styles.gridItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={700}
                height={500}
                sizes="(max-width: 767px) 50vw, 33vw"
                className={styles.gridImage}
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
