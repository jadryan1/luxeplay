"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ThemePage.module.css";

interface ThemePageContentProps {
    name: string;
    tagline: string;
    gender: "Boys" | "Girls";
    description: string;
    featuredItems: string[];
    images: string[];
    ctaBody: string;
    heroColor: string;
}

export default function ThemePageContent({
    name,
    tagline,
    gender,
    description,
    featuredItems,
    images,
    ctaBody,
    heroColor,
}: ThemePageContentProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const altText = `${name} luxury children's party setup by Luxe Play NY`;

    return (
        <>
            <Header />
            <main className={styles.themePage}>
                {/* Back Navigation */}
                <nav className={styles.backNav}>
                    <div className={styles.container}>
                        <Link href="/gallery" className={styles.backLink}>
                            ← All Themes
                        </Link>
                    </div>
                </nav>

                {/* Hero — solid pastel color block */}
                <section
                    className={styles.hero}
                    style={{ backgroundColor: heroColor }}
                >
                    <div className={styles.heroContent}>
                        <span
                            className={`${styles.genderBadge} ${gender === "Boys" ? styles.boys : styles.girls}`}
                        >
                            {gender}
                        </span>
                        <h1 className={styles.heroTitle}>{name}</h1>
                        <p className={styles.heroTagline}>{tagline}</p>
                    </div>
                </section>

                {/* Copy Block — description + featured tags */}
                <section className={styles.copyBlock}>
                    <div className={styles.container}>
                        <p className={styles.descriptionText}>{description}</p>
                        <div className={styles.featuredInline}>
                            <span className={styles.featuredLabel}>What Was Featured</span>
                            <div className={styles.tags}>
                                {featuredItems.map((item) => (
                                    <span key={item} className={styles.tag}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className={styles.gallerySection}>
                    <div className={styles.container}>
                        <div className={styles.galleryGrid}>
                            {images.map((src, i) => (
                                <div
                                    key={i}
                                    className={styles.galleryItem}
                                    onClick={() => setLightboxIndex(i)}
                                >
                                    <Image
                                        src={src}
                                        alt={altText}
                                        width={800}
                                        height={600}
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className={styles.bottomCta}>
                    <div className={styles.container}>
                        <h2>Bring This Theme to Life</h2>
                        <p className={styles.bottomCtaBody}>{ctaBody}</p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Request a Quote
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className={styles.lightbox}
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        className={styles.lightboxClose}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(null);
                        }}
                        aria-label="Close lightbox"
                    >
                        ✕
                    </button>
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(
                                lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
                            );
                        }}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={images[lightboxIndex]}
                        alt={altText}
                        className={styles.lightboxImage}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(
                                lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1
                            );
                        }}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
}
