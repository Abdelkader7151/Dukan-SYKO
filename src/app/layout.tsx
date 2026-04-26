import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const bebas = Bebas_Neue({
  variable: "--font-brand",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sykobrooklyn.com"),
  title: "SYKO Brooklyn | Syrian & Korean Restaurant and Dukan Marketplace",
  description:
    "Premium Syrian-Korean restaurant and neighborhood marketplace experience in Brooklyn, Park Slope and Windsor Terrace.",
  keywords: [
    "SYKO Brooklyn",
    "Syrian Korean restaurant Brooklyn",
    "Windsor Terrace restaurant",
    "Park Slope halal food",
    "Dukan SYKO marketplace",
    "Syrian Korean food Brooklyn",
  ],
  openGraph: {
    title: "SYKO | Syrian & Korean Cuisine + Marketplace",
    description:
      "Two cultures. One Brooklyn neighborhood destination. SYKO Restaurant and Dukan SYKO Marketplace.",
    type: "website",
    locale: "en_US",
    url: "https://www.sykobrooklyn.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYKO Brooklyn",
    description: "Syrian and Korean flavors meet in Brooklyn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${bebas.variable} h-full`}>
      <body className="min-h-full bg-[#050505] text-[#fafaf8] antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
