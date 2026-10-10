import { DISPATCH } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import { Phone, Globe, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Dumpster Sizes", href: "/dumpster-sizes" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceAreas = ["Las Vegas", "North Las Vegas", "Henderson", "Summerlin", "Spring Valley"];

export default function Footer() {
  return (
    <footer className="bg-ssws-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Silver State Waste Solutions"
                width={240}
                height={76}
                className="h-20 w-auto object-contain brightness-0 invert mb-5"
              />
            </Link>
            <p className="text-ssws-ice text-sm leading-relaxed mb-4">
              Proudly serving Las Vegas, North Las Vegas &amp; Henderson with reliable dumpster
              rental and waste solutions.
            </p>
            <div className="flex gap-1 -ml-2.5">
              <a
                href="https://www.facebook.com/SSWSCO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Silver State Waste Solutions on Facebook"
                className="p-2.5 text-ssws-ice hover:text-white transition-colors"
              >
                {/* Facebook icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/silverstatewastesolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Silver State Waste Solutions on Instagram"
                className="p-2.5 text-ssws-ice hover:text-white transition-colors"
              >
                {/* Instagram icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold uppercase tracking-wide text-sm text-ssws-skyline mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ssws-ice text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-heading font-semibold uppercase tracking-wide text-sm text-ssws-skyline mb-4">
              Serving Las Vegas
            </h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-ssws-ice text-sm flex items-center gap-1.5">
                  <MapPin size={13} className="text-ssws-skyline flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold uppercase tracking-wide text-sm text-ssws-skyline mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={DISPATCH.tel}
                  className="flex items-center gap-2 text-ssws-ice text-sm hover:text-white transition-colors"
                >
                  <Phone size={15} className="flex-shrink-0" />
                  {DISPATCH.display}
                </a>
              </li>
              <li>
                <a
                  href="https://sswsco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ssws-ice text-sm hover:text-white transition-colors"
                >
                  <Globe size={15} className="flex-shrink-0" />
                  SSWSCO.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sswsco.com"
                  className="flex items-center gap-2 text-ssws-ice text-sm hover:text-white transition-colors"
                >
                  <Mail size={15} className="flex-shrink-0" />
                  info@sswsco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-ssws-steel text-xs">
          <p>© {new Date().getFullYear()} Silver State Waste Solutions. All rights reserved.</p>
          <p>Licensed &amp; Insured | Las Vegas, NV</p>
        </div>
      </div>
    </footer>
  );
}
