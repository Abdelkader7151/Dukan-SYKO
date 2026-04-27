import type { Metadata } from "next";
import { StreetExperience } from "@/components/street-experience";
import { dukanInfo, restaurantInfo, sharedContact } from "@/content/site-content";

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
        streetAddress: sharedContact.streetAddress,
        addressLocality: sharedContact.addressLocality,
        addressRegion: sharedContact.addressRegion,
        postalCode: sharedContact.postalCode,
        addressCountry: sharedContact.addressCountry,
      },
      telephone: sharedContact.phoneE164,
      email: restaurantInfo.email,
      url: "https://www.sykobrooklyn.com/restaurant",
    },
    {
      "@type": "Store",
      name: "Dukan SYKO Marketplace",
      address: {
        "@type": "PostalAddress",
        streetAddress: sharedContact.streetAddress,
        addressLocality: sharedContact.addressLocality,
        addressRegion: sharedContact.addressRegion,
        postalCode: sharedContact.postalCode,
        addressCountry: sharedContact.addressCountry,
      },
      telephone: sharedContact.phoneE164,
      email: dukanInfo.email,
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
