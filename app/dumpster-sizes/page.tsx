import { dumpsters, PRICING } from "@/lib/dumpsters";
import { DISPATCH } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Truck, CalendarDays, Scale } from "lucide-react";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Dumpster Sizes | Roll-Off Dumpster Rental Las Vegas",
  description:
    "Choose from 20 yard dumpsters from $425 and 40 yard dumpsters from $525. Silver State Waste Solutions has the right size for every project in Las Vegas, NV. Contact dispatch to book.",
};



export default function DumpsterSizesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ssws-navy py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight">
            Dumpster Sizes{" "}
            <span className="text-ssws-skyline">For Every Project</span>
          </h1>
          <p className="mt-4 text-ssws-ice text-lg max-w-2xl">
            From home cleanouts and construction sites to large-scale cleanouts, we have the right
            dumpster for your job. Two container types — built for work that doesn&apos;t stop.
          </p>
        </div>
      </section>

      {/* Size cards */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dumpsters.map((d) => (
              <div
                key={d.id}
                id={d.id}
                className={`bg-white border-2 ${
                  d.featured ? "border-ssws-blue shadow-xl" : "border-gray-200"
                } flex flex-col scroll-mt-24`}
              >
                {d.id === "20-yard" && <span id="lowboy" className="scroll-mt-24" />}
                {d.featured && (
                  <div className="bg-ssws-blue text-white text-center py-1.5 text-xs font-heading font-semibold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                {/* Dumpster photo */}
                <div className="relative h-44 border-b border-gray-100 overflow-hidden bg-ssws-navy">
                  {d.id === "20-yard" ? (
                    <Image
                      src="/images/home-renovation.png"
                      alt="Home renovation project"
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <Image
                      src="/images/dumpster-40yard.png"
                      alt="Silver State Waste Solutions 40 yard roll-off dumpster"
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h2 className="font-heading text-3xl font-bold text-ssws-blue uppercase">
                    {d.name}
                  </h2>
                  <p className="text-3xl font-bold text-ssws-charcoal">${d.price}</p>
                  <p className="text-xs text-ssws-steel">Extra days: ${d.extraDayRate}/day · Over {d.includedTons} tons: ${PRICING.overagePerTon}/ton.<br />Plus {PRICING.fuelEnvironmentalPercent}% fuel/environmental fee and sales tax.</p>

                  <div className="space-y-1.5 text-ssws-steel text-sm border-b border-gray-100 pb-4">
                    <p className="flex items-center gap-1.5"><Truck size={14} className="text-ssws-skyline" />Delivery &amp; pickup included</p>
                    <p className="flex items-center gap-1.5"><CalendarDays size={14} className="text-ssws-skyline" />{d.rentalDays}-day rental</p>
                    <p className="flex items-center gap-1.5"><Scale size={14} className="text-ssws-skyline" />{d.includedTons} tons included</p>
                  </div>

                  <div>
                    <p className="text-xs font-heading font-semibold text-ssws-blue uppercase tracking-wide mb-2">
                      Ideal For:
                    </p>
                    <ul className="space-y-1.5">
                      {d.idealFor.map((item) => (
                        <li key={item} className="text-sm text-ssws-charcoal flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ssws-blue flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {d.note && (
                    <p className="text-xs text-ssws-steel italic border-t border-gray-100 pt-3">
                      {d.note}
                    </p>
                  )}

                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-center gap-2 bg-ssws-blue text-white py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
                  >
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-12 bg-white border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ssws-mist border-2 border-ssws-blue flex items-center justify-center">
                <Phone size={18} className="text-ssws-blue" />
              </div>
              <div>
                <p className="font-heading font-semibold text-ssws-charcoal uppercase tracking-wide text-sm">
                  Not Sure What Size You Need?
                </p>
                <p className="text-ssws-steel text-xs">
                  Our team is happy to help you choose the right dumpster.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href={DISPATCH.tel}
                className="inline-flex items-center gap-2 bg-ssws-blue text-white px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
              >
                <Phone size={15} />
                Call Now to Book
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-ssws-blue text-ssws-blue px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-mist transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTABand
        headline="Ready to Get Started?"
        subline="Fast, reliable dumpster rentals — call dispatch today!"
      />
    </>
  );
}
