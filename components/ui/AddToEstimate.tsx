"use client";

import { useState } from "react";
import { useCart, type CartItem } from "@/lib/CartContext";
import styles from "@/styles/AddToEstimate.module.css";

interface AddToEstimateProps {
    item: Omit<CartItem, "selectedColor"> & { selectedColor?: string };
    requiresColor?: boolean;
}

export default function AddToEstimate({ item, requiresColor = false }: AddToEstimateProps) {
    const { addItem, isInCart, removeItem } = useCart();
    const [justAdded, setJustAdded] = useState(false);
    const inCart = isInCart(item.id);

    const handleClick = () => {
        if (inCart) {
            removeItem(item.id);
            return;
        }

        if (requiresColor && !item.selectedColor) return;

        addItem(item as CartItem);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1500);
    };

    const disabled = requiresColor && !item.selectedColor && !inCart;

    return (
        <button
            className={`${styles.button} ${inCart ? styles.inCart : ""} ${justAdded ? styles.added : ""}`}
            onClick={handleClick}
            disabled={disabled}
            type="button"
        >
            {inCart ? "Added ✓" : justAdded ? "Added ✓" : "Add to Estimate"}
        </button>
    );
}
