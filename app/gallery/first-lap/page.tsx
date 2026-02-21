import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "First Lap Party Setup | Luxe Play NY",
    description:
        "See our First Lap event setup — Speed, style, and a celebration worth remembering. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/Race Theme/race1.jpg",
    "/assets/themes/Race Theme/race2.jpg",
    "/assets/themes/Race Theme/race3.jpg",
    "/assets/themes/Race Theme/race4.jpg",
    "/assets/themes/Race Theme/race5.jpg",
    "/assets/themes/Race Theme/race6.jpg",
    "/assets/themes/Race Theme/race7.jpg",
    "/assets/themes/Race Theme/race8.jpg",
    "/assets/themes/Race Theme/race9.jpg",
    "/assets/themes/Race Theme/race10.jpg",
];

const featuredItems = [
    "Custom Race Car Bounce House",
    "Checkered Flag Balloon Garland",
    "Racing-Themed Table Decor",
    "Personalized Pit Stop Signage",
    "Winner's Podium Display",
];

export default function FirstLapPage() {
    return (
        <ThemePageContent
            name="First Lap"
            tagline="Speed, style, and a celebration worth remembering."
            gender="Boys"
            heroColor="#D4E5ED"
            description="The starting line of something unforgettable. Custom checkered arches and a powder-blue pit lane set the tone — fast, sleek, and impossibly polished. Speed he'll remember, style you'll want to frame."
            featuredItems={featuredItems}
            images={images}
            ctaBody="First Lap is built for speed and style. We'd love to bring this setup — or something entirely custom — to your next celebration."
        />
    );
}
