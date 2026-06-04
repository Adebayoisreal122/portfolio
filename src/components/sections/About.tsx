"use client";
import { Smartphone, Zap, ShieldCheck, HeadphonesIcon, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Every site we build is fully responsive and optimized for mobile-first users.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Optimized code and modern architecture ensure lightning-fast page speeds.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Industry-standard security practices to keep your site and users safe.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Dedicated support to ensure your site keeps running smoothly, always.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const highlights = [
  "Production-grade code built to scale",
  "SEO-optimized from the ground up",
  "Seamless third-party integrations",
  "Clean, maintainable codebase",
  "On-time delivery, every time",
  "Post-launch support & maintenance",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#050d1a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              BUILDING THE FUTURE,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                TOGETHER
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              At Isrealight Tech, we don't just build websites — we craft digital experiences that help businesses stand out and succeed. Every project is treated as our own.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
              <p className="text-white font-bold text-lg italic">
                "Your Vision. Our Code. Your Success."
              </p>
              <p className="text-slate-400 text-sm mt-1">— Isrealight Tech</p>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/5 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] p-5 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={feature.color} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
