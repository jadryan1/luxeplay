import styles from "@/styles/Card.module.css";
import ImagePlaceholder from "./ImagePlaceholder";
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
      <div className={styles.collectionImageWrap}>
        {props.imageSrc ? (
          <div style={{ position: "relative", width: "100%", height: props.imageHeight || "400px" }}>
            <Image
              src={props.imageSrc}
              alt={props.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          <ImagePlaceholder
            width="100%"
            height={props.imageHeight || "400px"}
            borderRadius="0"
          />
        )}
      </div>
      <div className={styles.collectionContent}>
        <h3 className={styles.collectionTitle}>{props.title}</h3>
        <p className={styles.collectionPrice}>{props.price}</p>
        <p className={styles.collectionFeatures}>{props.features}</p>
        <a href={props.href || "#"} className={styles.viewLink}>
          View Details →
        </a>
      </div>
    </div>
  );
}
