import Link from "next/link";
import styles from "@/styles/BrandStatement.module.css";

export default function BrandStatement() {
  return (
    <section className={styles.section} aria-label="About LuxePlay NY">
      <div className={styles.inner}>

        {/* Eyebrow */}
        <span className={styles.eyebrow}>WELCOME TO LUXEPLAY NY</span>

        {/* Headline — two lines: regular + italic */}
        <h2 className={styles.headline}>
          Let&apos;s elevate your event,
          <span className={styles.headlineItalic}>the luxe way.</span>
        </h2>

        {/* Body copy */}
        <p className={styles.body}>
          LuxePlay NY is the tri-state area&apos;s premier luxury soft play rental
          company, serving New York, New Jersey, Pennsylvania, and Connecticut.
          Founded by two sisters and mothers who refused to compromise on beauty
          or safety, we specialize in luxury soft play setups, ball pits, slides,
          and full event installations designed for children aged 0 to 6.
        </p>

        <p className={styles.body}>
          We are not a venue. We come to you. Whether you are hosting indoors or
          outdoors, in a Manhattan penthouse or a New Jersey backyard, we
          transform your space into a stunning, safe, and unforgettable play
          environment.
        </p>

        <p className={styles.body}>
          Every piece arrives in pristine, showroom condition. Every setup is
          built from scratch around your vision. Every detail is held to one
          standard: would this be good enough for our kids?
        </p>

        <p className={styles.body}>
          At LuxePlay NY, beauty and safety are not a compromise. They are the
          baseline.
        </p>

        {/* Bullet list */}
        <ul className={styles.bullets} aria-label="Our standards">
          <li>▪&nbsp;&nbsp;Immaculate, fresh materials</li>
          <li>▪&nbsp;&nbsp;Showroom-quality presentation</li>
          <li>▪&nbsp;&nbsp;Boutique-level care for every event</li>
          <li>▪&nbsp;&nbsp;Thoughtfully maintained inventory</li>
          <li>▪&nbsp;&nbsp;Bespoke options for high-profile events</li>
        </ul>

        {/* Closing service area line */}
        <p className={styles.closing}>
          Serving New York, New Jersey, Pennsylvania, and Connecticut. Available
          for birthday parties, first birthdays, baby showers, corporate family
          events, and private celebrations.
        </p>

        {/* CTA */}
        <Link href="/contact" className={styles.cta}>
          START PLANNING
        </Link>

      </div>
    </section>
  );
}
