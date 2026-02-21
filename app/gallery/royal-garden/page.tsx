import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "Royal Garden Party Setup | Luxe Play NY",
    description:
        "See our Royal Garden event setup — Every little queen deserves a kingdom. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/Princess Castle Theme/princess1.png",
    "/assets/themes/Princess Castle Theme/princess2.jpg",
    "/assets/themes/Princess Castle Theme/princess3.jpg",
    "/assets/themes/Princess Castle Theme/princess4.jpg",
    "/assets/themes/Princess Castle Theme/princess5.jpg",
    "/assets/themes/Princess Castle Theme/princess6.jpg",
    "/assets/themes/Princess Castle Theme/princess7.jpg",
    "/assets/themes/Princess Castle Theme/princess8.jpg",
];

const featuredItems = [
    "Castle Bounce House",
    "Royal Crown Balloon Arch",
    "Throne Photo Station",
    "Regal Table Settings",
    "Princess Banner Signage",
];

export default function RoyalGardenPage() {
    return (
        <ThemePageContent
            name="Royal Garden"
            tagline="Every little queen deserves a kingdom."
            gender="Girls"
            heroColor="#F2D9DE"
            description="A kingdom built for one afternoon, remembered for years. Crown-topped balloon arches and regal table settings turn any space into a storybook court. Her royal day — designed with the kind of detail that makes parents proud."
            featuredItems={featuredItems}
            images={images}
            ctaBody="Royal Garden is a celebration fit for royalty. We'd love to build this kingdom — or your own custom vision — for your next event."
        />
    );
}
