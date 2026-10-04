import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-ssws-navy min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #619BD0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <p className="font-heading text-ssws-skyline text-8xl font-bold mb-4 relative z-10">404</p>
        <h1 className="font-heading text-3xl font-bold text-white uppercase tracking-tight mb-4 relative z-10">
          Page Not Found
        </h1>
        <p className="text-ssws-ice text-lg max-w-md mx-auto mb-10 relative z-10">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-ssws-blue text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-white hover:text-ssws-navy transition-colors"
          >
            Go Home
          </Link>
          <a
            href={DISPATCH.tel}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-white hover:text-ssws-navy transition-colors"
          >
            <Phone size={18} />
            Call Now to Book
          </a>
        </div>
      </div>
    </section>
  );
}
