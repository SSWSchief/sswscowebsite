import { DISPATCH } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HardHat, Wrench, Building2, Hammer, Phone, ArrowRight } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";
import CTABand from "@/components/sections/CTABand";
import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "Commercial Dumpster Rental Las Vegas | Silver State Waste Solutions",
  description:
    "Commercial dumpster rentals for contractors, builders, property managers, and roofers in Las Vegas. Reliable service for construction, demolition, and cleanouts. Contact dispatch to book.",
};

const commercialServices = [
  {
    icon: HardHat,
    title: "Construction",
    desc: "Job site debris removal for new construction projects. We keep your site clean and your timeline on track.",
  },
  {
    icon: Hammer,
    title: "Demolition",
    desc: "Efficient removal of demolition debris with our 20 and 40 yard containers.",
  },
  {
    icon: Wrench,
    title: "Roofing Projects",
    desc: "Keep your job site clean with dumpsters sized for roofing tear-offs and shingle debris.",
  },
  {
    icon: Building2,
    title: "Commercial Cleanouts",
    desc: "Ideal for office, retail, property management, and business cleanouts of any scale.",
  },
];

const partners = [
  "General Contractors",
  "Property Managers",
  "Roofing Companies",
  "Builders & Developers",
  "Demolition Crews",
  "Commercial Tenants",
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ssws-navy overflow-hidden py-16">
        <Image
          src="/images/construction-site.png"
          alt="Silver State Waste Solutions dumpster at Las Vegas construction site"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ssws-navy via-ssws-navy/90 to-ssws-navy/50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-xl">
              <p className="text-ssws-skyline font-heading font-semibold uppercase tracking-widest text-sm mb-3">
                Commercial Services
              </p>
              <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                Commercial Dumpster{" "}
                <span className="text-ssws-skyline">Solutions Built for You</span>
              </h1>
              <p className="mt-6 text-ssws-ice text-lg leading-relaxed">
                Reliable dumpster rentals for contractors, property managers, builders, and
                businesses. We keep your projects clean, your timeline on track, and your
                business moving forward.
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
                  Get a Commercial Quote
                </Link>
              </div>
            </div>

            {/* Commercial quote form */}
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="bg-white shadow-xl">
                <div className="bg-ssws-blue px-6 py-4">
                  <h2 className="font-heading text-white font-semibold uppercase tracking-wide text-center">
                    Get a Commercial Quote
                  </h2>
                </div>
                <div className="px-6 py-5">
                  <QuoteForm variant="full" formType="commercial" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Solutions */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
              Solutions for <span className="text-ssws-blue">Your Business</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-gray-200 p-6 hover:border-ssws-blue transition-colors group">
                <div className="w-12 h-12 bg-ssws-mist flex items-center justify-center mb-4 group-hover:bg-ssws-blue transition-colors">
                  <Icon size={24} className="text-ssws-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-ssws-charcoal font-bold uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-ssws-steel text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-ssws-blue text-xs font-semibold uppercase tracking-wide hover:text-ssws-navy transition-colors"
                >
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In action photos */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-ssws-charcoal uppercase tracking-tight text-center mb-8">
            Silver State <span className="text-ssws-blue">On the Job</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/roofing-project.png"
                alt="Roofers tossing shingles into Silver State Waste Solutions dumpster"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ssws-navy/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading font-bold text-white uppercase tracking-wide text-sm">
                Roofing Projects
              </p>
            </div>
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/commercial-cleanout.png"
                alt="Workers loading commercial cleanout debris into Silver State dumpster"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ssws-navy/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading font-bold text-white uppercase tracking-wide text-sm">
                Commercial Cleanouts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl font-bold text-ssws-charcoal uppercase tracking-tight text-center mb-8">
            Who We <span className="text-ssws-blue">Partner With</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="bg-ssws-mist border border-ssws-ice text-ssws-charcoal text-sm font-medium px-4 py-2"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Ready to Get Started?"
        subline="Fast, reliable service for your business. Call dispatch today."
      />
    </>
  );
}
