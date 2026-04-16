import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Party Rental Packages | LuxePlay NY | NYC, NJ, CT & PA",
  description:
    "Browse all luxury kids party rental packages from LuxePlay NY. We offer soft play sets, ball pits, bounce houses, and elite all-inclusive packages for birthdays and events across New York, New Jersey, Connecticut, and Pennsylvania. Compare options and get a free estimate.",
};

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
