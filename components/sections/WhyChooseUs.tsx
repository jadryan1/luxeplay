import { Sparkles, Palette, Shield, HandMetal } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import styles from "@/styles/WhyChooseUs.module.css";

const features = [
  {
    icon: <Sparkles />,
    title: "Impeccably Curated",
    description:
      "An environment that feels as beautiful as it looks. We meticulously prepare every piece so your event space remains pristine. Enjoy peace of mind while they play in luxury.",
  },
  {
    icon: <Palette />,
    title: "Seamless Aesthetics",
    description:
      "Play spaces designed to elevate, never compromise. Our neutral palettes and modern silhouettes blend flawlessly with your carefully chosen decor. A stunning backdrop for every memory.",
  },
  {
    icon: <Shield />,
    title: "Thoughtful Details",
    description:
      "Every element is chosen with intention. From high-density foam to buttery soft finishes, we bring the boutique experience directly to you. An elevated standard of play.",
  },
  {
    icon: <HandMetal />,
    title: "Effortless Hosting",
    description:
      "The ultimate luxury is your time. Our team handles every detail from white-glove delivery to meticulous styling and breakdown. You simply arrive and celebrate.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>THE LUXE DIFFERENCE</Eyebrow>
          <h2>Why the Tri-State Area&apos;s Most Celebrated Families Choose Us</h2>
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
