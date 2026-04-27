import type { Metadata } from "next";
import { StreetExperience } from "@/components/street-experience";

export const metadata: Metadata = {
  title: "SYKO",
  description:
    "Walk the street where Syrian and Korean food culture meet in Brooklyn. SYKO Restaurant and Dukan SYKO Marketplace — two worlds, one neighborhood.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      name: "SYKO Restaurant",
      servesCuisine: ["Syrian", "Korean", "Halal", "Middle Eastern"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "214a Prospect Park W",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11215",
        addressCountry: "US",
      },
      telephone: "+1-929-441-4306",
      email: "brooklynsyko@gmail.com",
      url: "https://www.sykobrooklyn.com/restaurant",
    },
    {
      "@type": "Store",
      name: "Dukan SYKO Marketplace",
      address: {
        "@type": "PostalAddress",
        streetAddress: "214a Prospect Park W",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        postalCode: "11215",
        addressCountry: "US",
      },
      telephone: "+1-929-441-4306",
      email: "brooklyndukan@gmail.com",
      url: "https://www.sykobrooklyn.com/dukan",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <StreetExperience />
    </>
  );
}
