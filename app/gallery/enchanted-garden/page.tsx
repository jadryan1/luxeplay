import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "Enchanted Garden Party Setup | Luxe Play NY",
    description:
        "See our Enchanted Garden event setup — Butterflies, blooms, and the softest kind of magic. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/Fairy Theme/fairy1.jpg",
    "/assets/themes/Fairy Theme/fairy2.jpg",
    "/assets/themes/Fairy Theme/fairy3.jpg",
    "/assets/themes/Fairy Theme/fairy4.jpg",
    "/assets/themes/Fairy Theme/fairy5.jpg",
    "/assets/themes/Fairy Theme/fairy6.jpg",
    "/assets/themes/Fairy Theme/fairy7.jpg",
    "/assets/themes/Fairy Theme/fairy8.jpg",
    "/assets/themes/Fairy Theme/fairy9.jpg",
];

const featuredItems = [
    "Enchanted Bounce House",
    "Floral Balloon Garland",
    "Butterfly Table Decor",
    "Garden Arch Entrance",
    "Fairy Wing Photo Backdrop",
];

export default function EnchantedGardenPage() {
    return (
        <ThemePageContent
            name="Enchanted Garden"
            tagline="Butterflies, blooms, and the softest kind of magic."
            gender="Girls"
            heroColor="#E4D5E8"
            description="A garden that exists only in her imagination — until now. Trailing lavender balloons, butterfly-dusted table settings, and a fairy arch that shimmers with gold. Pure magic for her, pure taste for you."
            featuredItems={featuredItems}
            images={images}
            ctaBody="Enchanted Garden is pure magic. Let us create this setup — or something uniquely yours — for your next celebration."
        />
    );
}
