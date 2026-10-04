"use client";

import { DISPATCH } from "@/lib/site";
import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

interface QuoteFormProps {
  variant?: "short" | "full";
  formType?: "residential" | "commercial" | "general";
  className?: string;
}

const dumpsterOptions = ["20 Yard", "40 Yard", "Not Sure"];
const projectTypes = [
  "Home Cleanout",
  "Garage Cleanout",
  "Yard Waste",
  "Small Renovation",
  "Roofing Project",
  "Construction / Demo",
  "Commercial Cleanout",
  "General Cleanout",
  "Other",
];

export default function QuoteForm({
  variant = "short",
  formType = "general",
  className = "",
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us by email.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 py-10 text-center ${className}`}>
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="font-heading text-xl font-semibold text-ssws-navy">
          Quote Request Received!
        </h3>
        <p className="text-ssws-steel text-sm max-w-xs">
          We&apos;ll get back to you shortly. For a faster response, call dispatch at{" "}
          <a href={DISPATCH.tel} className="text-ssws-blue font-semibold">
            {DISPATCH.display}
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      {/* Row 1: Name + Phone */}
      <div className={variant === "full" ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-1 gap-3"}>
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-ssws-charcoal mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Full Name"
            className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal placeholder-gray-400 focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-ssws-charcoal mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(702) 555-0123"
            className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal placeholder-gray-400 focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
          />
        </div>
      </div>

      {/* Email — always shown */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-ssws-charcoal mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal placeholder-gray-400 focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
        />
      </div>

      {/* Full form extra fields */}
      {variant === "full" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="address" className="block text-xs font-semibold text-ssws-charcoal mb-1">
                Service Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Job Site or Home Address"
                className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal placeholder-gray-400 focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
              />
            </div>
            <div>
              <label htmlFor="deliveryDate" className="block text-xs font-semibold text-ssws-charcoal mb-1">
                Preferred Delivery Date
              </label>
              <input
                id="deliveryDate"
                name="deliveryDate"
                type="date"
                className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
              />
            </div>
          </div>
        </>
      )}

      {/* Row 2: Dumpster size + Project type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="dumpsterSize" className="block text-xs font-semibold text-ssws-charcoal mb-1">
            Dumpster Size
          </label>
          <select
            id="dumpsterSize"
            name="dumpsterSize"
            className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal bg-white focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
          >
            <option value="">Select Size</option>
            {dumpsterOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-ssws-charcoal mb-1">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal bg-white focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
          >
            <option value="">Select Project</option>
            {projectTypes.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional details */}
      <div>
        <label htmlFor="details" className="block text-xs font-semibold text-ssws-charcoal mb-1">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="Tell us about your project and any specific needs..."
          className="w-full border border-gray-300 px-3 py-2.5 text-sm text-ssws-charcoal placeholder-gray-400 resize-none focus:outline-none focus:border-ssws-blue focus:ring-1 focus:ring-ssws-blue"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-ssws-blue text-white py-3.5 font-heading font-semibold uppercase tracking-wide hover:bg-ssws-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {loading ? "Sending..." : "Get My Quote"}
      </button>

      <p className="text-center text-xs text-ssws-steel">
        or call dispatch at{" "}
        <a href={DISPATCH.tel} className="text-ssws-blue font-semibold hover:underline">
          {DISPATCH.display}
        </a>
      </p>
    </form>
  );
}
