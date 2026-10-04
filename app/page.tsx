import type { Metadata } from "next";
import HeroHome from "@/components/sections/HeroHome";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCards from "@/components/sections/ServiceCards";
import DumpsterSizePreview from "@/components/sections/DumpsterSizePreview";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dumpster Rental Las Vegas | Silver State Waste Solutions",
  description:
    "Reliable dumpster rental in Las Vegas, North Las Vegas, and Henderson. 20 yard and 40 yard containers available. Call or text {DISPATCH.display} for a fast quote.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroHome />
      <TrustBar />
      <ServiceCards />
      <DumpsterSizePreview />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <CTABand />
    </>
  );
}
