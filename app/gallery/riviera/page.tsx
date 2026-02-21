import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "Riviera Party Setup | Luxe Play NY",
    description:
        "See our Riviera event setup — Effortlessly sun-kissed. Undeniably luxe. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/BeachClub Theme/beach1.jpg",
    "/assets/themes/BeachClub Theme/beach2.jpg",
    "/assets/themes/BeachClub Theme/beach3.jpg",
    "/assets/themes/BeachClub Theme/beach4.jpg",
    "/assets/themes/BeachClub Theme/beach5.jpg",
    "/assets/themes/BeachClub Theme/beach6.jpg",
    "/assets/themes/BeachClub Theme/beach7.jpg",
    "/assets/themes/BeachClub Theme/beach8.jpg",
    "/assets/themes/BeachClub Theme/beach9.jpg",
    "/assets/themes/BeachClub Theme/beach10.jpg",
    "/assets/themes/BeachClub Theme/beach11.jpg",
    "/assets/themes/BeachClub Theme/beach12.jpg",
];

const featuredItems = [
    "Coastal-Themed Bounce House",
    "Tropical Balloon Garland",
    "Beach Cabana Seating",
    "Sun-Kissed Table Decor",
    "Seaside Photo Wall",
];

export default function RivieraPage() {
    return (
        <ThemePageContent
            name="Riviera"
            tagline="Effortlessly sun-kissed. Undeniably luxe."
            gender="Girls"
            heroColor="#F5DDE0"
            description="Somewhere between a rosé lunch and a sunset swim. Blush florals, coral balloon walls, and cabana-style seating create a resort world that feels five-star. Coastal magic she'll play in — effortless taste you'll recognize."
            featuredItems={featuredItems}
            images={images}
            ctaBody="Riviera is effortless luxury. We'd love to bring this coastal-chic setup — or your own custom vision — to your next event."
        />
    );
}
