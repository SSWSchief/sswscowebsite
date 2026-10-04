"use client";

import { DISPATCH } from "@/lib/site";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, ChevronDown, FileText } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Dumpster Sizes",
    href: "/dumpster-sizes",
    children: [
      { label: "20 Yard", href: "/dumpster-sizes#20-yard" },
      { label: "40 Yard", href: "/dumpster-sizes#40-yard" },
    ],
  },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-ssws-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
          <a
            href={DISPATCH.tel}
            className="flex items-center gap-1.5 hover:text-ssws-ice transition-colors font-semibold whitespace-nowrap"
          >
            <Phone size={14} />
            {DISPATCH.display}
          </a>
          <span className="flex items-center gap-1.5 text-ssws-ice text-xs">
            <MapPin size={13} />
            <span className="hidden sm:inline">Serving Las Vegas, North Las Vegas &amp; Henderson</span>
            <span className="sm:hidden">Las Vegas, NV</span>
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Silver State Waste Solutions"
              width={320}
              height={100}
              className="h-20 md:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 font-body text-sm font-medium transition-colors border-b-2 ${
                      isActive
                        ? "text-ssws-blue border-ssws-blue"
                        : "text-ssws-charcoal border-transparent hover:text-ssws-blue"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </Link>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-ssws-blue min-w-44 py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-ssws-charcoal hover:bg-ssws-mist hover:text-ssws-blue transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 font-body text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? "text-ssws-blue border-ssws-blue"
                      : "text-ssws-charcoal border-transparent hover:text-ssws-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-ssws-blue text-white px-5 py-2.5 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-navy transition-colors"
            >
              <FileText size={15} />
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ssws-charcoal hover:text-ssws-blue transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-ssws-charcoal font-medium border-b border-gray-100 hover:text-ssws-blue transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 bg-ssws-mist">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2.5 text-sm text-ssws-steel hover:text-ssws-blue transition-colors border-b border-gray-200 last:border-0"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={DISPATCH.tel}
                className="flex items-center justify-center gap-2 bg-ssws-blue text-white py-3 font-heading font-semibold uppercase tracking-wide text-sm"
              >
                <Phone size={16} />
                Call Now to Book
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-ssws-blue text-ssws-blue py-3 font-heading font-semibold uppercase tracking-wide text-sm hover:bg-ssws-mist transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <FileText size={16} />
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
