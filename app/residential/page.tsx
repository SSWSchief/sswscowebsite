import { DISPATCH } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";
import CTABand from "@/components/sections/CTABand";
import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "Residential Dumpster Rental Las Vegas | Silver State Waste Solutions",
  description:
    "Dumpster rental for homeowners in Las Vegas, North Las Vegas, and Henderson. Home cleanouts, renovations, yard waste, and more. Contact dispatch to book.",
};

const services = [
  "Home & Garage Cleanouts",
  "Moving & Estate Cleanouts",
  "Yard Waste & Landscaping",
  "Small Renovations",
  "Roofing Projects",
  "Furniture Removal",
  "Hardwood Flooring Removal",
  "Attic & Basement Cleanouts",
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ssws-navy overflow-hidden py-16">
        <Image
          src="/images/residential-hero.png"
          alt="Silver State Waste Solutions dumpster in residential Las Vegas driveway"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ssws-navy via-ssws-navy/90 to-ssws-navy/50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-xl">
              <p className="text-ssws-skyline font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                Residential Services
              </p>
              <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                Dumpster Rental{" "}
                <span className="text-ssws-skyline">for Your Home</span>
              </h1>
              <p className="mt-6 text-ssws-ice text-lg leading-relaxed">
                Whether you&apos;re cleaning out a garage, finishing a renovation, or clearing
                yard waste, we make dumpster rental simple for Las Vegas homeowners.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={DISPATCH.tel}
                  className="inline-flex items-center gap-2 bg-ssws-blue text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-action transition-colors"
                >
                  <Phone size={18} />
                  Call Now to Book
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-white/10 transition-colors"
                >
                  Get a Residential Quote
                </Link>
              </div>
            </div>

            {/* Quote form */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="bg-white shadow-xl">
                <div className="bg-ssws-blue px-6 py-4">
                  <h2 className="font-heading text-white font-semibold uppercase tracking-wide text-center">
                    Get a Residential Quote
                  </h2>
                </div>
                <div className="px-6 py-5">
                  <QuoteForm variant="full" formType="residential" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services list + photo */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight mb-3">
                Common <span className="text-ssws-blue">Residential Uses</span>
              </h2>
              <p className="text-ssws-steel mb-8">
                Our residential dumpster rentals handle any home project — big or small.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="bg-white border border-gray-200 p-4 flex items-center gap-3">
                    <CheckCircle size={20} className="text-ssws-blue flex-shrink-0" />
                    <span className="text-ssws-charcoal font-medium text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 lg:h-[480px] overflow-hidden">
              <Image
                src="/images/home-renovation.png"
                alt="Las Vegas home mid-renovation with open walls and natural light"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="Ready to Get Started?"
        subline="Call dispatch today for fast, friendly residential service."
      />
    </>
  );
}
