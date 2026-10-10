"use client";

import { dumpsters, PRICING } from "@/lib/dumpsters";
import { DISPATCH } from "@/lib/site";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const [small, large] = dumpsters;
const faqs = [
  { q: "Which size do I need: 20 yard or 40 yard?", a: `The 20 yard ($${small.price}, ${small.rentalDays.residential} days residential or ${small.rentalDays.commercial} days commercial, ${small.includedTons} tons included) fits home cleanouts, remodels, and small jobs. The 40 yard ($${large.price}, ${large.rentalDays.residential} days residential or ${large.rentalDays.commercial} days commercial, ${large.includedTons} tons included) suits large construction, demolition, and commercial cleanouts. The 20 yard is not for concrete, dirt, rock, asphalt, or other heavy materials. Contact dispatch about materials and size before booking.` },
  { q: "How much does a dumpster rental cost?", a: `20 yard: $${small.price}, with ${small.includedTons} tons included. Rental period: ${small.rentalDays.residential} days residential, ${small.rentalDays.commercial} days commercial. 40 yard: $${large.price}, with ${large.includedTons} tons included. Rental period: ${large.rentalDays.residential} days residential, ${large.rentalDays.commercial} days commercial. Delivery and pickup are included. A ${PRICING.fuelEnvironmentalPercent}% fuel/environmental fee and Clark County sales tax apply.` },
  { q: "What can I put in a dumpster?", a: "Household junk, furniture, yard waste, wood, roofing materials, and general construction and cleanout debris are typical uses. Hazardous materials, tires, batteries, and electronics cannot go in. Contact dispatch to confirm appliances and any other material before loading. The 20 yard is not for concrete, dirt, rock, or asphalt; ask dispatch about these materials for other containers." },
  { q: "How long is the rental period?", a: `Residential: ${small.rentalDays.residential} days for the 20 yard and ${large.rentalDays.residential} days for the 40 yard. Commercial: ${small.rentalDays.commercial} days for the 20 yard and ${large.rentalDays.commercial} days for the 40 yard.` },
  { q: "Can I extend my rental?", a: `Call dispatch before your pickup date to arrange an extension. Extra days cost $${small.extraDayRate}/day for the 20 yard and $${large.extraDayRate}/day for the 40 yard.` },
  { q: "Is delivery and pickup included in the price?", a: `Yes, one delivery and one pickup are included. Weight above the included allowance costs $${PRICING.overagePerTon}/ton. Extra days, the ${PRICING.fuelEnvironmentalPercent}% fuel/environmental fee, and sales tax also apply. Dispatch will confirm any situational charges before booking.` },
  { q: "What areas do you serve?", a: "Las Vegas, North Las Vegas, Henderson, Summerlin, Spring Valley, Enterprise, Whitney, Paradise, and surrounding areas in the Las Vegas Valley. Contact dispatch to confirm your address." },
  { q: "How much notice do you need for delivery?", a: "Same-day or next-day delivery may be available depending on the schedule. Call dispatch early and schedule 24 hours ahead when possible." },
  { q: "Where can the dumpster be placed?", a: "Driveways and suitable private property surfaces are typical locations. Street placement may require a municipal permit. Tell dispatch your placement location when booking to confirm requirements." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            Frequently Asked <span className="text-ssws-blue">Questions</span>
          </h2>
          <p className="mt-3 text-ssws-steel">
            Still have questions? Call dispatch at{" "}
            <a href={DISPATCH.tel} className="text-ssws-blue font-semibold hover:underline">
              {DISPATCH.display}
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-ssws-charcoal uppercase tracking-wide text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-ssws-blue transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="pb-4 pr-8">
                  <p className="text-ssws-steel text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
