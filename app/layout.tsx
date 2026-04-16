import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { CartProvider } from "@/lib/CartContext";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuxePlay NY | Best Luxury Soft Play Rentals in NYC, NJ, CT & PA",
  description:
    "LuxePlay NY is the top-rated luxury soft play and kids party rental company serving New York City, New Jersey, Connecticut, and Pennsylvania. We deliver, set up, and style premium ball pits, soft play equipment, and bounce houses for birthdays and celebrations across the tri-state area. Safe, sanitized, and Instagram-worthy.",
  keywords: [
    "luxury soft play rental NYC",
    "kids party rental New Jersey",
    "best luxury kids party rentals tri-state area",
    "toddler party rental near NYC",
    "safe soft play rental NYC NJ CT PA",
    "ball pit rental New York New Jersey",
    "luxury children party setup company",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
