import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Tagline */}
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Luxe Play</span>
              <span className={styles.logoAccent}>NY</span>
            </Link>
            <p className={styles.tagline}>Manhattan&apos;s Luxury Play Experience</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/collections">Collections</Link>
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

          {/* Column 3: Services */}
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

          {/* Column 4: Connect */}
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
                <a href="mailto:hello@luxeplayny.com">
                  <Mail size={18} />
                  <span>hello@luxeplayny.com</span>
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
              Service Area: Manhattan & Boroughs
            </p>
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
          <p className={styles.licensed}>Fully Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
