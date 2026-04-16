import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Ball Pit Rentals | LuxePlay NY | NYC, NJ, CT & PA",
  description:
    "Rent a premium ball pit for your next kids party or event. LuxePlay NY offers luxury standalone ball pits in four sizes with custom ball colors. Serving New York City, New Jersey, Connecticut, and Pennsylvania. Starting at $975.",
};

export default function BallPitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
