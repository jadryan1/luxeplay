// =============================================
// Luxe Play NY — Real Product Inventory
// =============================================

export interface Product {
    id: string;
    name: string;
    price: number;
    priceLabel: string;
    category: "ball-pits" | "soft-play" | "bounce-house" | "elite" | "add-on";
    dimensions?: string;
    area?: string;
    ballPitSize?: string;
    colors: string[];
    featured?: boolean;
    includes?: string[];
    savings?: string;
    note?: string;
    description?: string;
}

// ---- BALL PITS ----
export const ballPits: Product[] = [
    {
        id: "deluxe-play",
        name: "Deluxe Play",
        price: 975,
        priceLabel: "$975",
        category: "ball-pits",
        dimensions: "10ft x 6ft",
        colors: ["White", "Blush", "Nude", "Sky Blue", "Lavender"],
    },
    {
        id: "supreme-play",
        name: "Supreme Play",
        price: 1125,
        priceLabel: "$1,125",
        category: "ball-pits",
        dimensions: "11ft x 8ft",
        colors: ["Black", "Hot Pink", "Red"],
    },
    {
        id: "plush-play",
        name: "Plush Play",
        price: 1350,
        priceLabel: "$1,350",
        category: "ball-pits",
        dimensions: "10ft x 13ft",
        colors: ["Pink", "Forest Green", "Cream", "White"],
        featured: true,
    },
    {
        id: "grand-play",
        name: "Grand Play",
        price: 1450,
        priceLabel: "$1,450",
        category: "ball-pits",
        dimensions: "14ft Round",
        colors: ["White", "Lavender"],
    },
];

// ---- SOFT PLAY ----
export const softPlay: Product[] = [
    {
        id: "grand-luxe",
        name: "Grand Luxe",
        price: 1475,
        priceLabel: "$1,475",
        category: "soft-play",
        area: "12ft x 18ft",
        ballPitSize: "10x6 Rectangle",
        colors: ["White", "Nude", "Blush", "Sky Blue", "Lavender"],
    },
    {
        id: "the-celeb",
        name: "The Celeb",
        price: 1675,
        priceLabel: "$1,675",
        category: "soft-play",
        area: "12ft x 24ft",
        ballPitSize: "11x8 Rectangle",
        colors: ["Black", "Hot Pink", "Red"],
        featured: true,
    },
    {
        id: "the-royal",
        name: "The Royal",
        price: 1850,
        priceLabel: "$1,850",
        category: "soft-play",
        area: "13ft x 23ft",
        ballPitSize: "10x13 Rectangle",
        colors: ["White", "Forest Green", "Pink", "Cream"],
    },
    {
        id: "luxe-play",
        name: "Luxe Play",
        price: 1950,
        priceLabel: "$1,950",
        category: "soft-play",
        area: "14ft x 27ft",
        ballPitSize: "14ft Round",
        colors: ["White", "Lavender"],
    },
];

// ---- BOUNCE HOUSES ----
export const bounceHouses: Product[] = [
    {
        id: "luxe-bounce",
        name: "Luxe Bounce",
        price: 1000,
        priceLabel: "$1,000",
        category: "bounce-house",
        dimensions: "13x13x9",
        description: "Our classic bounce house — perfect for active play and endless fun.",
        colors: ["Yellow", "Red", "Navy", "Black", "Tan", "White", "Hot Pink"],
    },
    {
        id: "luxe-bounce-slide",
        name: "Luxe Bounce + Slide",
        price: 1250,
        priceLabel: "$1,250",
        category: "bounce-house",
        dimensions: "15x15x10",
        description: "Take the fun to the next level with our bounce and slide combo.",
        colors: ["Blush", "Baby Blue", "Lavender"],
        featured: true,
    },
];

export const bounceComboPrice = "$650";

// ---- ELITE PACKAGES ----
export const elitePackages: Product[] = [
    {
        id: "mini-elite",
        name: "Mini Elite",
        price: 2450,
        priceLabel: "$2,450",
        category: "elite",
        savings: "Save $100",
        colors: [],
        includes: [
            "5ft Ball Pit",
            "Soft Play",
            "Personalization",
            "Toddler Bounce",
        ],
        note: "Locals Only",
    },
    {
        id: "grand-luxe-elite",
        name: "Grand Luxe Elite",
        price: 2650,
        priceLabel: "$2,650",
        category: "elite",
        savings: "Save $100",
        colors: [],
        includes: [
            "10x6 Ball Pit",
            "Soft Play",
            "Luxe Slide + Arc",
            "Personalization",
            "Toddler Bounce",
        ],
        featured: true,
    },
    {
        id: "the-celeb-elite",
        name: "The Celeb Elite",
        price: 3050,
        priceLabel: "$3,050",
        category: "elite",
        colors: [],
        includes: [
            "10x8 Ball Pit",
            "Soft Play",
            "Double Slides + Arc",
            "Personalization",
            "Toddler Bounce",
        ],
    },
    {
        id: "the-royal-elite",
        name: "The Royal Elite",
        price: 3250,
        priceLabel: "$3,250",
        category: "elite",
        savings: "Save $125",
        colors: [],
        includes: [
            "10x13 Ball Pit",
            "Soft Play",
            "Double Slide + Arc",
            "Personalization",
            "Toddler Bounce",
        ],
    },
];

// ---- ADD-ONS ----
export const addOns: Product[] = [
    { id: "toddler-bounce", name: "Toddler Bounce House", price: 700, priceLabel: "$700", category: "add-on", colors: [] },
    { id: "luxe-slide-arc", name: "Luxe Slide w/ Arc", price: 250, priceLabel: "$250", category: "add-on", colors: [] },
    { id: "double-luxe-slide-arc", name: "Double Luxe Slide w/ Arc", price: 425, priceLabel: "$425", category: "add-on", colors: [] },
    { id: "custom-vinyl", name: "Custom Vinyl Install", price: 250, priceLabel: "Starting at $250", category: "add-on", colors: [] },
    { id: "custom-foam-arcs", name: "Custom Foam Arcs", price: 275, priceLabel: "Starting at $275", category: "add-on", colors: [] },
    { id: "chaperone", name: "Chaperone", price: 150, priceLabel: "$150", category: "add-on", colors: [] },
    { id: "additional-hour", name: "Additional Hour", price: 100, priceLabel: "$100/hr", category: "add-on", colors: [], note: "Hours agreed in advance" },
];
