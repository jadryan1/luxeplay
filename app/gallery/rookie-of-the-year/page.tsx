import type { Metadata } from "next";
import ThemePageContent from "@/components/sections/ThemePageContent";

export const metadata: Metadata = {
    title: "Rookie of the Year Party Setup | Luxe Play NY",
    description:
        "See our Rookie of the Year event setup — Big league energy for your littlest all-star. Custom luxury children's party rentals by Luxe Play NY, serving NYC and surrounding areas.",
};

const images = [
    "/assets/themes/Baseball Theme/baseball1.jpg",
    "/assets/themes/Baseball Theme/baseball2.jpg",
    "/assets/themes/Baseball Theme/baseball3.jpg",
    "/assets/themes/Baseball Theme/baseball4.jpg",
    "/assets/themes/Baseball Theme/baseball5.jpg",
    "/assets/themes/Baseball Theme/baseball6.jpg",
    "/assets/themes/Baseball Theme/baseball7.jpg",
    "/assets/themes/Baseball Theme/baseball8.jpg",
];

const featuredItems = [
    "Baseball Diamond Bounce House",
    "Home Run Balloon Arch",
    "Stadium-Style Table Settings",
    "Personalized Jersey Signage",
    "All-Star Trophy Display",
];

export default function RookieOfTheYearPage() {
    return (
        <ThemePageContent
            name="Rookie of the Year"
            tagline="Big league energy for your littlest all-star."
            gender="Boys"
            heroColor="#D6E1EA"
            description="Game day, but make it beautiful. Oversized baseballs, dusty blue balloon arches, and jersey-inspired signage build a ballpark that feels custom stitched. For little sluggers with big-league dreams — and parents who want every inning styled."
            featuredItems={featuredItems}
            images={images}
            ctaBody="Rookie of the Year is a home run every time. Let us bring this setup — or your own custom vision — to your next event."
        />
    );
}
