import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Main Content with Left Text, Center Logo, Right Text */}
        <div className={styles.mainContent}>
          {/* Left Side */}
          <div className={styles.contentGroup}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>About Us</h4>
              <p className={styles.tagline}>The Tri-State Area&apos;s Luxury Play Experience</p>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/collections">Packages</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/#process">Process</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Centered Logo */}
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                src="/assets/logos/Alternate-LOGO.svg"
                alt="Luxe Play NY"
                width={140}
                height={140}
                className={styles.footerLogo}
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className={styles.contentGroup}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/collections/soft-play">Soft Play Packages</Link>
                </li>
                <li>
                  <Link href="/collections/ball-pits">Ball Pits</Link>
                </li>
                <li>
                  <Link href="/collections/bounce-house">Bounce House</Link>
                </li>
                <li>
                  <Link href="/collections/elite">Elite Packages</Link>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <ul className={styles.contactList}>
                <li>
                  <a
                    href="https://instagram.com/luxeplayny"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} />
                    <span>@luxeplayny</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@luxeplayny.com">
                    <Mail size={18} />
                    <span>info@luxeplayny.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+12125551234">
                    <Phone size={18} />
                    <span>(212) 555-1234</span>
                  </a>
                </li>
              </ul>
              <p className={styles.serviceArea}>
                Service Area: NYC · NY State · NJ · PA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>&copy; 2026 Luxe Play NY. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <p className={styles.licensed}>Fully Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
