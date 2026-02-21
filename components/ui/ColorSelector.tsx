"use client";

import { useState } from "react";
import { colorMap } from "@/lib/colors";
import styles from "@/styles/ColorSelector.module.css";

interface ColorSelectorProps {
    colors: string[];
    selectedColor?: string;
    onSelect: (color: string) => void;
}

export default function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
    if (colors.length === 0) return null;

    return (
        <div className={styles.selector}>
            <span className={styles.label}>Color</span>
            <div className={styles.dots}>
                {colors.map((color) => (
                    <button
                        key={color}
                        className={`${styles.dot} ${selectedColor === color ? styles.selected : ""}`}
                        style={{ backgroundColor: colorMap[color] || "#CCC" }}
                        onClick={() => onSelect(color)}
                        title={color}
                        aria-label={`Select ${color}`}
                        type="button"
                    />
                ))}
            </div>
            {selectedColor && <span className={styles.colorName}>{selectedColor}</span>}
        </div>
    );
}
