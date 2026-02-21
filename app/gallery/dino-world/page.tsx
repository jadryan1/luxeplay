import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "Dino World Party Setup | Luxe Play NY",
    description:
        "See our Dino World event setup — A prehistoric adventure, refined. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/Jurassic Theme/jurassic1.jpg",
    "/assets/themes/Jurassic Theme/jurassic2.jpg",
    "/assets/themes/Jurassic Theme/jurassic3.jpg",
    "/assets/themes/Jurassic Theme/jurassic4.jpg",
    "/assets/themes/Jurassic Theme/jurassic5.jpg",
    "/assets/themes/Jurassic Theme/jurassic6.jpg",
    "/assets/themes/Jurassic Theme/jurassic7.jpg",
    "/assets/themes/Jurassic Theme/jurassic8.jpg",
    "/assets/themes/Jurassic Theme/jurassic9.jpg",
    "/assets/themes/Jurassic Theme/jurassic10.jpg",
];

const featuredItems = [
    "Custom Bounce House",
    "Balloon Garland",
    "Themed Table Wraps",
    "Personalized Signage",
    "Custom Balloon Arch",
];

export default function DinoWorldPage() {
    return (
        <ThemePageContent
            name="Dino World"
            tagline="A prehistoric adventure, refined."
            gender="Boys"
            heroColor="#C8D8C4"
            description="Step inside a lost world where every detail roars. Stone-textured backdrops and hand-built balloon canopies turn any space into a prehistoric expedition. Made for little explorers — and parents who want the adventure to look editorial."
            featuredItems={featuredItems}
            images={images}
            ctaBody="Dino World is one of our most requested setups. We'd love to build it — or something entirely your own — for your next event."
        />
    );
}
