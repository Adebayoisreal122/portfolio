"use client";
import { Globe, ShoppingCart, Code2, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that showcase your brand, attract customers, and drive real business growth.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Full-featured online stores with seamless checkout, product management, and payment integrations.",
    color: "from-purple-500 to-blue-500",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Tailor-made web apps built to solve your unique business challenges — scalable and production-ready.",
    color: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/20",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that look and perform beautifully on every screen size and device.",
    color: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Fast & Secure",
    description:
      "Optimized performance with best-in-class security practices to protect your business and users.",
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#050d1a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">SERVICES</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Everything you need to establish a powerful digital presence and grow your business online.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl border border-white/5 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] p-6 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.glow} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
