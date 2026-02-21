"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "@/styles/Accordion.module.css";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
        >
          <button
            className={styles.trigger}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            <span className={styles.question}>{item.question}</span>
            <ChevronDown className={styles.icon} />
          </button>
          <div className={styles.content}>
            <p className={styles.answer} style={{ paddingLeft: "16px", paddingRight: "16px" }}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
