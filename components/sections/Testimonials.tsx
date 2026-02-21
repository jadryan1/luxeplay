"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Absolutely stunning! The soft play matched our pastel theme perfectly and the service was impeccable. Worth every penny.",
    author: "Alexandra M.",
    event: "Upper East Side Birthday Celebration",
  },
  {
    quote:
      "As an event planner, I have high standards. Luxe Play NY exceeded them. The equipment is museum-quality and the team is professional.",
    author: "Jennifer K.",
    event: "Luxury Event Planner",
  },
  {
    quote:
      "Finally, a rental company that understands aesthetic! The neutral tones blended beautifully with our baby shower decor.",
    author: "Sarah P.",
    event: "Tribeca Baby Shower",
  },
  {
    quote:
      "The attention to detail is remarkable. From the pristine equipment to the seamless setup, everything was perfect for my daughter's first birthday.",
    author: "Michelle R.",
    event: "SoHo First Birthday Party",
  },
  {
    quote:
      "We've used Luxe Play NY for three events now. Consistent quality, reliable service, and always a hit with the kids and parents alike.",
    author: "David & Emma T.",
    event: "Central Park West Family",
  },
];

const clientLogos = [1, 2, 3, 4, 5, 6];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Eyebrow>KIND WORDS</Eyebrow>
          <h2>Trusted by the Tri-State Area&apos;s Most Celebrated Families</h2>
        </div>

        <div className={styles.carousel}>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>

          <div className={styles.testimonialCard}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="var(--color-gold)" />
              ))}
            </div>
            <blockquote className={styles.quote}>
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            <div className={styles.author}>
              <span className={styles.authorName}>
                {testimonials[currentIndex].author}
              </span>
              <span className={styles.authorEvent}>
                {testimonials[currentIndex].event}
              </span>
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.clients}>
          <p className={styles.clientsText}>
            Trusted by top event planners and venues across the tri-state area
          </p>
          <div className={styles.clientLogos}>
            {clientLogos.map((_, index) => (
              <ImagePlaceholder
                key={index}
                width="100px"
                height="100px"
                borderRadius="var(--border-radius-small)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
