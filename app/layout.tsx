import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-subheading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Play NY | Luxury Soft Play & Party Rentals in Manhattan",
  description:
    "Manhattan's premier luxury soft play rental company. Instagram-worthy play experiences for high-end events, birthdays, and celebrations. Serving Manhattan and surrounding boroughs.",
  keywords: [
    "luxury soft play rentals",
    "Manhattan party rentals",
    "NYC birthday party",
    "soft play rental NYC",
    "luxury event rentals",
    "ball pit rental Manhattan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
