import { Sparkles, Palette, Shield, HandMetal } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import styles from "@/styles/WhyChooseUs.module.css";

const features = [
  {
    icon: <Sparkles />,
    title: "Museum-Quality Cleanliness",
    description:
      "Our professional-grade sanitization process includes hospital-grade disinfection and individual ball washing. Because luxury demands perfection.",
  },
  {
    icon: <Palette />,
    title: "Aesthetic Integration",
    description:
      "Neutral palettes and modern designs that complement your event decor—never clash with it. From minimalist whites to soft pastels.",
  },
  {
    icon: <Shield />,
    title: "Premium Quality Materials",
    description:
      "High-density foam, non-toxic materials, and equipment that meets the highest safety standards. Fully insured and licensed in NYC.",
  },
  {
    icon: <HandMetal />,
    title: "Full-Service Excellence",
    description:
      "Delivery, professional styling, setup, and breakdown included. You focus on hosting; we handle everything else.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>THE LUXE DIFFERENCE</Eyebrow>
          <h2>Why Manhattan&apos;s Elite Choose Us</h2>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Card
              key={index}
              type="feature"
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
