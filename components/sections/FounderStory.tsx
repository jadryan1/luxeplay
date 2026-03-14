import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/styles/FounderStory.module.css";

export default function FounderStory() {
  return (
    <section className={styles.founderStory}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/founders/founders_in_pit.jpeg"
            alt="Gabriela and Anny, founders of LuxePlay NY"
            width={800}
            height={1000}
            className={styles.founderImage}
            sizes="(max-width: 767px) 100vw, 400px"
          />
        </div>
        <div className={styles.content}>
          <Eyebrow>MEET THE FOUNDERS</Eyebrow>
          <h2 className={styles.title}>
            Two Sisters. Four Kids. One Vision.
          </h2>
          <div className={styles.body}>
            <p>
              Gabriela and Anny didn&apos;t set out to build a business — they set out to
              build the kind of celebrations their own children deserved. The kind
              where every detail is intentional, every corner is beautiful, and every
              child feels like the star of the show.
            </p>
            <p>
              As mothers, they know what it means to want perfect for your child. As
              creatives, they know how to deliver it. Every setup is held to one
              standard: would this be good enough for our kids? If the answer isn&apos;t
              an immediate yes, it gets elevated until it is.
            </p>
            <p>
              LuxePlay NY was born from that obsession — and it shows in every
              celebration they touch.
            </p>
          </div>
          <p className={styles.signature}>— Gabriela &amp; Anny</p>
        </div>
      </div>
    </section>
  );
}
