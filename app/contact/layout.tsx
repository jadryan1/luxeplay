import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LuxePlay NY | Get a Free Estimate | NYC, NJ, CT & PA",
  description:
    "Ready to book a luxury soft play, ball pit, or bounce house rental? Contact LuxePlay NY for a free estimate. We serve New York City, New Jersey, Connecticut, and Pennsylvania with premium kids party rentals. We typically respond within 2 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
