import {
  MessageCircle,
  Palette,
  CalendarCheck,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/styles/Process.module.css";

const steps = [
  {
    icon: <MessageCircle />,
    title: "Inquire",
    description: "Share your vision, date, and venue details",
  },
  {
    icon: <Palette />,
    title: "Customize",
    description: "Receive a custom proposal within 24 hours",
  },
  {
    icon: <CalendarCheck />,
    title: "Reserve",
    description: "Secure your date with a 50% deposit",
  },
  {
    icon: <Sparkles />,
    title: "Prepare",
    description: "We sanitize and style your collection",
  },
  {
    icon: <PartyPopper />,
    title: "Celebrate",
    description: "We deliver, set up, style, and break down",
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2>From Inquiry to Unforgettable</h2>
          <p className={styles.subtext}>
            Our seamless process ensures a stress-free experience
          </p>
        </div>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
