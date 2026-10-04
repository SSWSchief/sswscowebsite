import { DISPATCH } from "./site";
import { dumpsters } from "./dumpsters";
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sswsco.com",
  name: "Silver State Waste Solutions",
  description:
    "Reliable dumpster rental and waste solutions for homeowners, contractors, and businesses across Las Vegas, North Las Vegas, and Henderson, NV.",
  url: "https://sswsco.com",
  telephone: DISPATCH.e164,
  email: "info@sswsco.com",
  priceRange: `$${dumpsters[0].price}–$${dumpsters[1].price}`,
  image: "https://sswsco.com/images/logo.png",
  logo: "https://sswsco.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Henderson" },
    { "@type": "Place", name: "Summerlin" },
    { "@type": "Place", name: "Spring Valley" },
    { "@type": "Place", name: "Enterprise" },
    { "@type": "Place", name: "Whitney" },
    { "@type": "Place", name: "Paradise" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dumpster Rental Services",
    itemListElement: dumpsters.map((d) => ({ "@type": "Offer", price: String(d.price), priceCurrency: "USD", itemOffered: { "@type": "Service", name: `${d.name} Dumpster Rental` } })),
  },
};
