import { DISPATCH } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About Us | Silver State Waste Solutions",
  description:
    "Silver State Waste Solutions is a local, family-owned dumpster rental company proudly serving Las Vegas, North Las Vegas, and Henderson, NV.",
};

const values = [
  {
    title: "Reliable Communication",
    desc: "We answer calls and texts promptly. You'll always know what's happening with your delivery.",
  },
  {
    title: "On-Time Delivery",
    desc: "We show up when we say we will. Your project timeline matters to us.",
  },
  {
    title: "Local Knowledge",
    desc: "We know Las Vegas. Our team understands the local regulations, neighborhoods, and logistics.",
  },
  {
    title: "Honest Pricing",
    desc: "No hidden fees. We give you a straight quote and stand behind it.",
  },
  {
    title: "Clean & Professional",
    desc: "Our trucks and containers are maintained to professional standards. We take pride in our work.",
  },
  {
    title: "Family Owned",
    desc: "We're a local business built on community trust. Every customer matters to us personally.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ssws-navy py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-ssws-skyline font-heading font-semibold uppercase tracking-widest text-sm mb-3">
            About Us
          </p>
          <h1 className="font-heading text-5xl font-bold text-white uppercase tracking-tight max-w-2xl leading-tight">
            A Las Vegas Company{" "}
            <span className="text-ssws-skyline">You Can Count On</span>
          </h1>
          <p className="mt-6 text-ssws-ice text-lg leading-relaxed max-w-2xl">
            Silver State Waste Solutions is a locally owned and operated dumpster rental company
            serving homeowners, contractors, and businesses across Las Vegas, North Las Vegas, and
            Henderson.
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
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight mb-6">
                Built on <span className="text-ssws-blue">Dependability</span>
              </h2>
              <div className="space-y-4 text-ssws-steel leading-relaxed">
                <p>
                  Silver State Waste Solutions was built from the ground up by four hardworking,
                  blue-collar men who understand what it truly takes to run a job site. With
                  backgrounds rooted in hands-on labor, construction, and real-world operations, we
                  know that time, reliability, and efficiency aren&apos;t luxuries — they&apos;re
                  necessities.
                </p>
                <p>
                  We started this company with a simple mission: provide dependable, no-nonsense
                  waste solutions for people who get the job done. From active construction sites
                  and commercial projects to roofing jobs and large-scale demolition, we built our
                  business around the contractors and crews who need a partner they can count on —
                  not just another vendor.
                </p>
                <p>
                  What we&apos;ve learned working alongside crews across Las Vegas: contractors need
                  a company that shows up on time, communicates without the runaround, and keeps job
                  sites moving without interruption. We&apos;re not a corporate call center —
                  we&apos;re a team that values hard work, accountability, and doing things right
                  the first time.
                </p>
              </div>
              <div className="mt-8 border-l-4 border-ssws-blue pl-5">
                <p className="font-heading text-xl font-bold text-ssws-navy uppercase tracking-wide">
                  Built For Jobs That Don&apos;t Stop.
                </p>
              </div>
            </div>

            {/* Photo grid — swap divs with next/image when client photos arrive */}
            <div className="grid grid-cols-2 gap-3">
              {/* Fleet Photo */}
              <div className="col-span-2 relative h-52 overflow-hidden">
                <Image
                  src="/images/construction-site.png"
                  alt="Construction project in the Las Vegas area"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Team Photo */}
              <div className="bg-gradient-to-br from-ssws-blue to-ssws-navy h-36 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} aria-hidden />
                <svg viewBox="0 0 40 40" width="40" fill="none" className="relative z-10 mb-2" aria-hidden>
                  <circle cx="14" cy="12" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <circle cx="26" cy="12" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                  <path d="M4 34 Q4 24 14 24 Q20 24 20 24 Q20 24 26 24 Q36 24 36 34" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                </svg>
                <span className="text-white/60 text-xs font-heading uppercase tracking-widest relative z-10">Team Photo</span>
              </div>
              {/* Job Site Photo */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src="/images/home-renovation.png"
                  alt="Home renovation project"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ssws-mist py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
              Our <span className="text-ssws-blue">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 flex gap-4">
                <CheckCircle size={22} className="text-ssws-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-ssws-charcoal uppercase tracking-wide text-sm mb-1">
                    {v.title}
                  </h3>
                  <p className="text-ssws-steel text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Let's Work Together"
        subline="Reach out today for a fast, honest quote."
      />
    </>
  );
}
