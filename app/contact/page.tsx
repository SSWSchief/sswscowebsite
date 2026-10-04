import { dumpsters } from "@/lib/dumpsters";
import { DISPATCH } from "@/lib/site";
import type { Metadata } from "next";
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare, Briefcase } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Get a Dumpster Quote in Las Vegas",
  description:
    "Contact Silver State Waste Solutions to get a fast dumpster rental quote in Las Vegas, North Las Vegas, or Henderson. Contact dispatch to book.",
};

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "By Appointment" },
];

const serviceAreaCities = [
  "Las Vegas",
  "North Las Vegas",
  "Henderson",
  "Summerlin",
  "Spring Valley",
  "Enterprise",
  "Whitney",
  "Paradise",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Header */}
      <section className="bg-ssws-navy py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-ssws-skyline font-heading font-semibold uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>
          <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight">
            Get a Fast Quote
          </h1>
          <p className="mt-4 text-ssws-ice text-lg max-w-xl">
            Fill out the form below and we&apos;ll get back to you quickly. Rather talk? Call or
            dispatch at{" "}
            <a href={DISPATCH.tel} className="text-white font-semibold hover:text-ssws-ice underline">
              {DISPATCH.display}
            </a>.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2 bg-white shadow-sm p-8">
              <h2 className="font-heading text-2xl font-bold text-ssws-charcoal uppercase tracking-tight mb-6">
                Request a Dumpster Quote
              </h2>
              <QuoteForm variant="full" formType="general" />
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="bg-ssws-navy text-white p-6">
                <h3 className="font-heading font-bold uppercase tracking-wide text-ssws-skyline mb-4 text-sm">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={DISPATCH.tel}
                      className="flex items-start gap-3 hover:text-ssws-ice transition-colors"
                    >
                      <Phone size={18} className="flex-shrink-0 mt-0.5 text-ssws-skyline" />
                      <div>
                        <p className="text-xs text-ssws-silver mb-0.5">Dispatch</p>
                        <p className="font-semibold">{DISPATCH.display}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@sswsco.com"
                      className="flex items-start gap-3 hover:text-ssws-ice transition-colors"
                    >
                      <Mail size={18} className="flex-shrink-0 mt-0.5 text-ssws-skyline" />
                      <div>
                        <p className="text-xs text-ssws-silver mb-0.5">Email</p>
                        <p className="font-semibold">info@sswsco.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sswsco.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:text-ssws-ice transition-colors"
                    >
                      <Globe size={18} className="flex-shrink-0 mt-0.5 text-ssws-skyline" />
                      <div>
                        <p className="text-xs text-ssws-silver mb-0.5">Website</p>
                        <p className="font-semibold">SSWSCO.com</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5 text-ssws-skyline" />
                    <div>
                      <p className="text-xs text-ssws-silver mb-0.5">Service Area</p>
                      <p className="font-semibold text-sm leading-relaxed">
                        Las Vegas, North Las Vegas, Henderson &amp; surrounding areas
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <h3 className="font-heading font-bold uppercase tracking-wide text-ssws-charcoal mb-3 text-sm">
                  Dumpster Sizes Available
                </h3>
                <ul className="space-y-2">
                  {dumpsters.map((size) => (
                    <li key={size.id} className="flex items-center gap-2 text-ssws-steel text-sm">
                      <span className="w-2 h-2 rounded-full bg-ssws-blue flex-shrink-0" />
                      {size.name} — ${size.price}
                    </li>
                  ))}
                </ul>
                <p className="text-ssws-silver text-xs mt-3">
                  Not sure what size? We&apos;ll help you pick the right one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Email routing */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl font-bold text-ssws-charcoal uppercase tracking-tight mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-ssws-mist border-2 border-ssws-blue flex items-center justify-center flex-shrink-0">
                <MessageSquare size={18} className="text-ssws-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-ssws-charcoal uppercase tracking-wide text-sm mb-1">
                  General Questions
                </h3>
                <p className="text-ssws-steel text-sm leading-relaxed mb-3">
                  Have more questions or need extra info? Send us an email and we&apos;ll get back to you.
                </p>
                <a
                  href="mailto:info@sswsco.com"
                  className="inline-flex items-center gap-2 text-ssws-blue font-semibold text-sm hover:underline"
                >
                  <Mail size={14} />
                  info@sswsco.com
                </a>
              </div>
            </div>
            <div className="border-2 border-ssws-navy p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-ssws-navy flex items-center justify-center flex-shrink-0">
                <Briefcase size={18} className="text-ssws-skyline" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-ssws-charcoal uppercase tracking-wide text-sm mb-1">
                  Larger Contracts & Partnerships
                </h3>
                <p className="text-ssws-steel text-sm leading-relaxed mb-3">
                  Have a bigger contract you&apos;d like to discuss? Reach our growth team directly.
                </p>
                <a
                  href="mailto:growth@sswsco.com"
                  className="inline-flex items-center gap-2 text-ssws-blue font-semibold text-sm hover:underline"
                >
                  <Mail size={14} />
                  growth@sswsco.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Service Area */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Business Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-ssws-mist border-2 border-ssws-blue flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-ssws-blue" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-ssws-charcoal uppercase tracking-tight">
                  Business Hours
                </h2>
              </div>
              <div className="border border-gray-200 divide-y divide-gray-100">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between px-5 py-3.5">
                    <span className="text-ssws-charcoal font-medium text-sm">{day}</span>
                    <span className="text-ssws-steel text-sm">{time}</span>
                  </div>
                ))}
              </div>
              <p className="text-ssws-silver text-xs mt-3">
                * Hours subject to confirmation — client to verify before launch.
              </p>
            </div>

            {/* Service Area */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-ssws-mist border-2 border-ssws-blue flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-ssws-blue" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-ssws-charcoal uppercase tracking-tight">
                  Service Area
                </h2>
              </div>
              <p className="text-ssws-steel text-sm leading-relaxed mb-5">
                We serve the entire Las Vegas Valley. If you don&apos;t see your city below, give us
                a call — we likely cover your area.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreaCities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-ssws-charcoal text-sm py-2 border-b border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-ssws-blue flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-ssws-silver text-xs mt-4">
                Google Maps embed will be added once Google Business Profile is live.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
