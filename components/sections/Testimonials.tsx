"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import styles from "@/styles/Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Amazing entertainment for my family and friends! Thank you so much luxe play for an unforgettable experience!! Highly recommended",
    author: "Amy Lynn",
    event: "Deluxe Play",
  },
  {
    quote:
      "From the moment my son saw the ball pit he went INSANE. A four hour long party and the kids were too entertained to even eat...I'm very delighted with my experience and really can't express how great this service was!",
    author: "Yaritza Diaz",
    event: "Blue Mini Play",
  },
  {
    quote:
      "We had an amazing time, the kids were thrilled to have a ball pit in the party. It was all the entertainment they needed.",
    author: "Vanessa Fiallos",
    event: "Deluxe Ball Pit",
  },
  {
    quote:
      "Absolutely wonderful! The team, and the quality of the playset and everything about the Luxe mini was perfect. The dedication to their customer service and quality was outstanding! Can't wait to use them again.",
    author: "Alexandra Monteleone",
    event: "Luxe Mini",
  },
  {
    quote:
      "I love love love luxe play! Back in March I celebrated my daughters first birthday party and while planning I seen a few different soft play areas for rent but I knew I had to have luxe for play. It gives that chic look, they were super prompt and professional from the start...",
    author: "Tiara Austin",
    event: "Deluxe Play Upgraded",
  },
  {
    quote:
      "We hired Luxe Play for my daughters birthday and everything was amazing! They were very professional and took the time to add every small detail to make my daughters birthday special! I recommend using Luxe Play for your next event! You won't regret it!",
    author: "Neethu Mavumkal",
    event: "Luxe Play",
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
          <Eyebrow>CLIENT LOVE</Eyebrow>
          <h2>Trusted by the Tri-State Area&apos;s Coolest  Families</h2>
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
