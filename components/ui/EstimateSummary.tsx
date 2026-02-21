"use client";

import { useCart } from "@/lib/CartContext";
import styles from "@/styles/EstimateSummary.module.css";
import { X } from "lucide-react";

export default function EstimateSummary() {
    const { items, removeItem, clearCart, total } = useCart();

    if (items.length === 0) return null;

    const formatTotal = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

    return (
        <div className={styles.summary}>
            <div className={styles.header}>
                <h3 className={styles.title}>Your Estimate</h3>
                <button className={styles.clearBtn} onClick={clearCart} type="button">
                    Clear All
                </button>
            </div>
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <div className={styles.itemInfo}>
                            <span className={styles.itemName}>{item.name}</span>
                            {item.selectedColor && (
                                <span className={styles.itemColor}>{item.selectedColor}</span>
                            )}
                        </div>
                        <div className={styles.itemRight}>
                            <span className={styles.itemPrice}>{item.priceLabel}</span>
                            <button
                                className={styles.removeBtn}
                                onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.name}`}
                                type="button"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.total}>
                <span>Estimated Total</span>
                <span className={styles.totalAmount}>{formatTotal}</span>
            </div>
            <p className={styles.disclaimer}>
                Final pricing may vary based on location, customization, and event details.
            </p>
        </div>
    );
}
