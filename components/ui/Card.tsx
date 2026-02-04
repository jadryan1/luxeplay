import styles from "@/styles/Card.module.css";
import ImagePlaceholder from "./ImagePlaceholder";
import Button from "./Button";
import Image from "next/image";

interface FeatureCardProps {
  type: "feature";
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CollectionCardProps {
  type: "collection";
  title: string;
  price: string;
  features: string;
  imageHeight?: string;
  href?: string;
  imageSrc?: string;
}

type CardProps = FeatureCardProps | CollectionCardProps;

export default function Card(props: CardProps) {
  if (props.type === "feature") {
    return (
      <div className={styles.featureCard}>
        <div className={styles.iconWrapper}>{props.icon}</div>
        <h3 className={styles.featureTitle}>{props.title}</h3>
        <p className={styles.featureDescription}>{props.description}</p>
      </div>
    );
  }

  return (
    <div className={styles.collectionCard}>
      {props.imageSrc ? (
        <div style={{ position: "relative", width: "100%", height: props.imageHeight || "400px" }}>
          <Image
            src={props.imageSrc}
            alt={props.title}
            fill
            style={{ objectFit: "cover", borderRadius: "var(--border-radius) var(--border-radius) 0 0" }}
          />
        </div>
      ) : (
        <ImagePlaceholder
          width="100%"
          height={props.imageHeight || "400px"}
          borderRadius="var(--border-radius) var(--border-radius) 0 0"
        />
      )}
      <div className={styles.collectionContent}>
        <h3 className={styles.collectionTitle}>{props.title}</h3>
        <p className={styles.collectionPrice}>{props.price}</p>
        <p className={styles.collectionFeatures}>{props.features}</p>
        <Button variant="secondary" size="small" href={props.href || "#"}>
          View Details
        </Button>
      </div>
    </div>
  );
}
