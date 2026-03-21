import type { Metadata } from "next";
import { 
  Playfair_Display, 
  Inter, 
  Noto_Sans_Devanagari,
  Noto_Serif,
  Newsreader,
  Plus_Jakarta_Sans,
  Rozha_One
} from "next/font/google";
import "@/app/globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-headline",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-label",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  variable: "--font-hindi",
  weight: ["400"],
  subsets: ["latin", "devanagari"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "MaruWood",
    template: "%s | MaruWood",
  },
  description:
    "MaruWood – Premium handcrafted wooden furniture inspired by Rajasthani craftsmanship. Explore beds, tables, chairs, and custom woodwork made with traditional artistry.",

  keywords: [
    "MaruWood",
    "wooden furniture",
    "Rajasthani furniture",
    "handcrafted furniture",
    "solid wood furniture",
    "Indian furniture store",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${notoSansDevanagari.variable} ${notoSerif.variable} ${newsreader.variable} ${plusJakartaSans.variable} ${rozhaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
