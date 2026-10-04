import { Phone, Truck, Calendar } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Call Dispatch",
    desc: "Reach out by call dispatch to get a quick quote and pick your dumpster size.",
  },
  {
    num: "2",
    icon: Truck,
    title: "Choose Your Size",
    desc: "We'll help you pick the right 20 yard or 40 yard for your project.",
  },
  {
    num: "3",
    icon: Calendar,
    title: "Schedule Delivery",
    desc: "We deliver on your schedule, pick up when you're done, and handle the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-ssws-charcoal uppercase tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-ssws-steel max-w-lg mx-auto">
            Getting a dumpster delivered is simple. We take care of everything from first call
            to final pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines on desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-0.5 bg-ssws-blue/30 border-t-2 border-dashed border-ssws-blue/40 z-0" />

          {steps.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="flex flex-col items-center text-center gap-4 z-10">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-ssws-blue flex items-center justify-center shadow-lg">
                  <Icon size={28} className="text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-ssws-navy text-white text-xs font-heading font-bold flex items-center justify-center border-2 border-white">
                  {num}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-ssws-charcoal uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-ssws-steel text-sm leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
