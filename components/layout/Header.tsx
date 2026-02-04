"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import styles from "@/styles/Header.module.css";

// TikTok icon component (not in lucide-react)
const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const aboutSubmenu = [
  { href: "/about#team", label: "Our Team" },
  { href: "/about#process", label: "Our Process" },
];

const collectionsSubmenu = [
  { href: "/collections/soft-play", label: "Soft Play" },
  { href: "/collections/ball-pits", label: "Ball Pits" },
  { href: "/collections/bounce-house", label: "Bounce Houses" },
  { href: "/collections/elite", label: "Elite Packages" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setAboutOpen(false);
    setCollectionsOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          {/* Social Icons - Left */}
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com/luxeplayny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://facebook.com/luxeplayny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://tiktok.com/@luxeplayny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a href="mailto:hello@luxeplayny.com" aria-label="Email">
              <Mail />
            </a>
            <a href="tel:+12125551234" aria-label="Phone">
              <Phone />
            </a>
          </div>

          {/* Logo - Center */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <span className={styles.logoLuxe}>LUXE</span>
              <span className={styles.logoPlay}>PLAY</span>
            </div>
          </Link>

          {/* Book Now Button & Mobile Toggle - Right */}
          <div className={styles.headerCta}>
            <Link href="/contact" className={styles.bookNowBtn}>
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={styles.navBarContainer}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                HOME
              </Link>
            </li>
            <li
              className={styles.hasDropdown}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className={styles.navLink}>
                ABOUT US <ChevronDown size={14} />
              </span>
              <ul className={`${styles.dropdown} ${aboutOpen ? styles.dropdownOpen : ""}`}>
                {aboutSubmenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.dropdownLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={styles.hasDropdown}
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <span className={styles.navLink}>
                COLLECTIONS <ChevronDown size={14} />
              </span>
              <ul className={`${styles.dropdown} ${collectionsOpen ? styles.dropdownOpen : ""}`}>
                {collectionsSubmenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.dropdownLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/gallery" className={styles.navLink}>
                GALLERIES
              </Link>
            </li>
            <li>
              <Link href="/#faq" className={styles.navLink}>
                FAQS
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}>
        <div className={styles.mobileNavContentWrapper}>
          <button className={styles.mobileCloseBtn} onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </button>

          <div className={styles.mobileNavContent}>
            {/* Mobile Social Icons */}
            <div className={styles.mobileSocialIcons}>
              <a href="https://instagram.com/luxeplayny" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/luxeplayny" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://tiktok.com/@luxeplayny" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
              </a>
              <a href="mailto:hello@luxeplayny.com">
                <Mail size={24} />
              </a>
              <a href="tel:+12125551234">
                <Phone size={24} />
              </a>
            </div>

            {/* Mobile Menu Items */}
            <ul className={styles.mobileNavList}>
              <li>
                <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  ABOUT US <ChevronDown size={16} className={aboutOpen ? styles.rotated : ""} />
                </button>
                {aboutOpen && (
                  <ul className={styles.mobileSubmenu}>
                    {aboutSubmenu.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => setCollectionsOpen(!collectionsOpen)}
                >
                  COLLECTIONS <ChevronDown size={16} className={collectionsOpen ? styles.rotated : ""} />
                </button>
                {collectionsOpen && (
                  <ul className={styles.mobileSubmenu}>
                    {collectionsSubmenu.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href="/gallery" className={styles.mobileNavLink} onClick={closeMenu}>
                  GALLERIES
                </Link>
              </li>
              <li>
                <Link href="/#faq" className={styles.mobileNavLink} onClick={closeMenu}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Main Book Now Button is in Header, but we also kept one here just in case?
                The design says "Keep Book Now button (right side, smaller)" so it's in the top bar.
                Should I remove it from here to avoid duplication?
                "Mobile menu: ... Include social icons at top ... All menu items stacked"
                It doesn't explicitly ask for Book Now inside the menu, but it's common.
                However, since it's on the fixed header, it might be redundant or crowded.
                The previous code had it. I'll keep it as an extra CTA, or remove if it feels too much.
                I'll leave it since the user didn't explicitly say "Remove Book Now from mobile menu".
             */}
          </div>
        </div>
      </div>
    </header>
  );
}
