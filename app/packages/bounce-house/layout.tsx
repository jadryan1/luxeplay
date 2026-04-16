import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bounce House Rentals | LuxePlay NY | NYC, NJ, CT & PA",
  description:
    "Rent a premium bounce house for your child's birthday party or event. LuxePlay NY delivers and sets up luxury bounce houses across New York, New Jersey, Connecticut, and Pennsylvania. Starting at $1,000. Slide combos available.",
};

export default function BounceHouseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
