import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import { Phone, FileText } from "lucide-react";
import QuoteForm from "@/components/ui/QuoteForm";

export default function HeroHome() {
  return (
    <section className="relative bg-ssws-navy overflow-hidden min-h-[580px] flex items-center">
      {/* Fleet photo background */}
      <Image
        src="/images/construction-site.png"
        alt="Construction project in the Las Vegas area"
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      {/* Gradient overlay to keep text readable */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ssws-navy via-ssws-navy/85 to-ssws-navy/50"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: headline + CTAs */}
          <div className="flex-1 max-w-xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight uppercase tracking-tight">
              Built for Jobs{" "}
              <span className="text-ssws-skyline">That Don&apos;t Stop.</span>
            </h1>
            <p className="mt-6 text-ssws-ice text-lg leading-relaxed">
              Reliable dumpster rental and waste solutions for homeowners, contractors, and
              businesses across Las Vegas, North Las Vegas, and Henderson.
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
                <FileText size={18} />
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right: inline quote form */}
          <div className="w-full lg:w-[440px] flex-shrink-0">
            <div className="bg-white shadow-2xl">
              <div className="bg-ssws-navy px-6 py-4">
                <h2 className="font-heading text-white font-semibold uppercase tracking-wide text-center">
                  Get a Fast Quote
                </h2>
              </div>
              <div className="px-6 py-5">
                <QuoteForm variant="short" formType="general" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
