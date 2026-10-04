import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sswsco.com"),
  title: {
    default: "Silver State Waste Solutions | Dumpster Rental Las Vegas",
    template: "%s | Silver State Waste Solutions",
  },
  description:
    "Reliable dumpster rental and waste solutions for homeowners, contractors, and businesses across Las Vegas, North Las Vegas, and Henderson. Contact dispatch to book.",
  keywords: [
    "dumpster rental Las Vegas",
    "roll off dumpster Las Vegas",
    "dumpster rental Henderson",
    "dumpster rental North Las Vegas",
    "construction dumpster rental Las Vegas",
    "waste solutions Las Vegas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Silver State Waste Solutions",
    images: [{ url: "/images/logo.png", width: 240, height: 76, alt: "Silver State Waste Solutions" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
