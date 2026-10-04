import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

interface CTABandProps {
  headline?: string;
  subline?: string;
}

export default function CTABand({
  headline = "Ready to Get Started?",
  subline = "Call dispatch today for fast, friendly service.",
}: CTABandProps) {
  return (
    <section className="bg-ssws-navy py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                {headline}
              </h2>
            </div>
            <p className="text-ssws-ice text-sm">{subline}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-white/10 transition-colors"
            >
              <FileText size={16} />
              Get a Quote
            </Link>
            <a
              href={DISPATCH.tel}
              className="inline-flex items-center justify-center gap-2 bg-white text-ssws-navy px-8 py-3.5 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-ice transition-colors"
            >
              <Phone size={16} />
              Call Now to Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
