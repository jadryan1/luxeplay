import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite All-Inclusive Party Packages | LuxePlay NY | NYC, NJ, CT & PA",
  description:
    "LuxePlay NY's Elite packages bundle ball pit, soft play, toddler bounce, and personalization into one seamless booking. The best value for luxury kids party rentals in New York, New Jersey, Connecticut, and Pennsylvania. Starting at $2,450, saving up to $125.",
};

export default function EliteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
