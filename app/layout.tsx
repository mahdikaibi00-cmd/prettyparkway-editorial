import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prettyparkway.com"),
  title: "Pretty Parkway | Luxury Speakeasy Spa & Salon Suites | Frisco, TX",
  description: "Frisco's premier speakeasy spa & salon suites founded by dual-licensed lash & esthetics educator Tempest Pierce. Bespoke Eyelash Extensions, Brow Lamination, Custom Facials, Makeup, and Beauty Academy in Frisco, Texas.",
  keywords: [
    "Pretty Parkway",
    "Lash Extensions Frisco TX",
    "Brow Lamination Frisco TX",
    "Facials Frisco",
    "Tempest Pierce",
    "Speakeasy Salon Suites Frisco",
    "Waxing Frisco",
    "Beauty Academy Frisco"
  ],
  openGraph: {
    title: "Pretty Parkway | Luxury Speakeasy Spa & Salon Suites | Frisco, TX",
    description: "Where beauty meets innovation and purpose. Luxury lashes, bespoke skin therapy, brow architecture, and speakeasy salon suites in Frisco, Texas.",
    images: ["/logo_header.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo_alt.png",
  },
};

export const viewport = {
  themeColor: "#0C0908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jakarta.variable} scroll-smooth bg-[#0C0908]`}>
      <body className="min-h-screen bg-[#0C0908] text-[#1A1514] font-sans antialiased selection:bg-[#EBDCD5] selection:text-[#1A1514]">
        {children}
      </body>
    </html>
  );
}
