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
  title: "Luxe Play NY | Luxury Soft Play & Party Rentals in the Tri-State Area",
  description:
    "Premier luxury soft play rental company serving New York City, New York State, New Jersey, and Pennsylvania. Instagram-worthy play experiences for high-end events, birthdays, and celebrations.",
  keywords: [
    "luxury soft play rentals",
    "tri-state party rentals",
    "NYC birthday party",
    "soft play rental NYC",
    "luxury event rentals",
    "ball pit rental tri-state area",
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
