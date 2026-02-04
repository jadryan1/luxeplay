import styles from "@/styles/ImagePlaceholder.module.css";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  aspectRatio?: string;
  borderRadius?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width = "100%",
  height,
  aspectRatio,
  borderRadius = "var(--border-radius)",
  className = "",
}: ImagePlaceholderProps) {
  const style: React.CSSProperties = {
    width,
    height: height || (aspectRatio ? undefined : "400px"),
    aspectRatio: aspectRatio,
    borderRadius,
  };

  return <div className={`${styles.placeholder} ${className}`} style={style} />;
}
