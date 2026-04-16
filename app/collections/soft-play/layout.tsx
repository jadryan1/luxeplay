import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soft Play Package Rentals | LuxePlay NY | NYC, NJ, CT & PA",
  description:
    "Rent a complete luxury soft play setup for your next kids party in New York, New Jersey, Connecticut, or Pennsylvania. LuxePlay NY delivers, sets up, and styles premium ball pits, tunnels, slides, and soft play equipment for birthdays and events. Starting at $1,475.",
};

export default function SoftPlayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
