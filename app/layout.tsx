import type { Metadata, Viewport } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const bodyFont = Lora({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hijabi Hadicha — hijob va qulaylik",
  description:
    "Zamonaviy hijoblar, Oʻzbekiston boʻylab BTS orqali yetkazib berish. Telegram orqali buyurtma.",
  openGraph: {
    title: "Hijabs by Hadicha",
    description: "Uslub va qulaylik — har bir mijoz uchun.",
    locale: "uz_UZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc2d1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz-Latn" className={`${display.variable} ${bodyFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
