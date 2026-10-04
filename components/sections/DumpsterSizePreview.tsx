import { dumpsters, PRICING } from "@/lib/dumpsters";
import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, CalendarDays, Scale } from "lucide-react";



export default function DumpsterSizePreview() {
  return (
    <section className="bg-ssws-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            Popular Dumpster Sizes
          </h2>
          <p className="mt-3 text-ssws-steel">
            Two container types built for the job — from home cleanouts to large-scale construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {dumpsters.map((d) => (
            <div
              key={d.id}
              className={`bg-white border-2 ${
                d.featured ? "border-ssws-blue shadow-xl" : "border-gray-200"
              } flex flex-col`}
            >
              {d.featured && (
                <div className="bg-ssws-blue text-white text-center py-1.5 text-xs font-heading font-semibold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              {/* Dumpster image */}
              <div className="relative h-36 border-b border-gray-100 overflow-hidden bg-ssws-navy">
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
                <h3 className="font-heading text-2xl font-bold text-ssws-blue uppercase">
                  {d.name}
                </h3>
                  <p className="text-3xl font-bold text-ssws-charcoal">${d.price}</p>
                  <p className="text-xs text-ssws-steel">Extra days: ${d.extraDayRate}/day · Over {d.includedTons} tons: ${PRICING.overagePerTon}/ton.<br />Plus {PRICING.fuelEnvironmentalPercent}% fuel/environmental fee and sales tax.</p>
                <div className="flex flex-col gap-1.5 text-ssws-steel text-sm">
                  <span className="flex items-center gap-1.5"><Truck size={14} className="text-ssws-skyline" />Delivery &amp; pickup included</span>
                  <span className="flex items-center gap-1.5"><CalendarDays size={14} className="text-ssws-skyline" />{d.rentalDays}-day rental</span>
                  <span className="flex items-center gap-1.5"><Scale size={14} className="text-ssws-skyline" />{d.includedTons} tons included</span>
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-ssws-blue uppercase tracking-wide mb-2">
                    Ideal For:
                  </p>
                  <ul className="space-y-1">
                    {d.idealFor.map((item) => (
                      <li key={item} className="text-sm text-ssws-charcoal flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-ssws-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

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

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-ssws-steel text-sm">Not sure what size you need?</p>
          <a
            href={DISPATCH.tel}
            className="inline-flex items-center gap-2 bg-ssws-blue text-white px-6 py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
          >
            Call Now to Book
          </a>
          <Link
            href="/dumpster-sizes"
            className="inline-flex items-center gap-1.5 text-ssws-blue font-semibold text-sm hover:underline"
          >
            View All Details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
