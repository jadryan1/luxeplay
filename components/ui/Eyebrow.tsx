import styles from "@/styles/Eyebrow.module.css";

interface EyebrowProps {
  children: React.ReactNode;
  color?: "gold" | "dark";
  className?: string;
}

export default function Eyebrow({
  children,
  color = "gold",
  className = "",
}: EyebrowProps) {
  return (
    <span className={`${styles.eyebrow} ${styles[color]} ${className}`}>
      {children}
    </span>
  );
}
