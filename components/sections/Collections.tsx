import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import styles from "@/styles/Collections.module.css";

const services = [
  {
    title: "Soft Play Packages",
    price: "Starting at $1,450",
    features: "Complete soft play setups with ball pit, tunnel, slide & more",
    href: "/collections/soft-play",
    imageSrc: "/assets/images/truck_softplay.png",
  },
  {
    title: "Ball Pits",
    price: "Starting at $950",
    features: "Standalone luxury ball pits in various sizes and colors",
    href: "/collections/ball-pits",
    imageSrc: "/assets/images/pinkballpit.png",
  },
  {
    title: "Bounce House",
    price: "Starting at $875",
    features: "Premium bounce houses with optional slide combos",
    href: "/collections/bounce-house",
    imageSrc: "/assets/images/matos_bouncehouse.png",
  },
  {
    title: "Elite Packages",
    price: "Starting at $2,400",
    features: "All-inclusive Luxe Play experience with maximum savings",
    href: "/collections/elite",
    imageSrc: "/assets/images/pink_elitepack.png",
  },
];

export default function Collections() {
  return (
    <section className={styles.collections}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2 className={styles.sectionTitle}>Luxury Play Experiences</h2>
          <p className={styles.subtext}>
            Four ways to bring magic to your next event—choose your perfect experience
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Card
              key={index}
              type="collection"
              title={service.title}
              price={service.price}
              features={service.features}
              imageHeight="350px"
              href={service.href}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        <div className={styles.cta}>
          <Button variant="secondary" href="/collections">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
