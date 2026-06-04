"use client";
import { ArrowRight, Code2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1a]"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />

      {/* Floating code snippets */}
      <div className="absolute top-24 left-6 md:left-16 opacity-30 text-cyan-400 text-xs font-mono leading-relaxed hidden sm:block">
        <div>&lt;html&gt;</div>
        <div className="pl-3">&lt;div class="website"&gt;</div>
        <div className="pl-6">&lt;h1&gt;Isrealight Tech Solutions&lt;/h1&gt;</div>
        <div className="pl-6">&lt;p&gt;Your Vision. Our Code. Your Success.&lt;/p&gt;</div>
        <div className="pl-3">&lt;/div&gt;</div>
        <div>&lt;/html&gt;</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider mb-6">
              <Rocket size={12} />
              SMART WEB SOLUTIONS FOR YOUR BUSINESS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              NEED A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                WEBSITE
              </span>
              <br />
              THAT WORKS
              <br />
              <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold">
                FOR YOUR BUSINESS?
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              We build powerful, professional, and results-driven web solutions that help your business grow and thrive online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cyan-500/40 text-cyan-400 font-bold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
              >
                <Code2 size={16} />
                View Services
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-center lg:justify-start mt-10">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-cyan-400">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device mockup */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Laptop mockup */}
              <div className="relative z-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] shadow-2xl shadow-cyan-500/20 overflow-hidden p-4">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 h-5 rounded bg-[#0a1628] border border-white/10 flex items-center px-2">
                    <span className="text-slate-500 text-xs">isrealighttech.com</span>
                  </div>
                </div>
                {/* Mock site preview */}
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#050d1a] to-[#0a1f3d] p-4">
                  <div className="text-cyan-400 text-xs font-bold mb-1">ISREALIGHT TECH</div>
                  <div className="text-white text-sm font-black mb-2 leading-tight">We Build Modern Websites<br/>for Your Business</div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold">
                    Get Started
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {["#1a3a5c", "#0d2d4a", "#142b4a"].map((bg, i) => (
                      <div key={i} className="h-8 rounded-lg" style={{ backgroundColor: bg }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0a1628] border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">Modern. Fast. Secure.</span>
              </div>

              {/* Glow behind card */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-500/5 blur-2xl scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1a] to-transparent" />
    </section>
  );
}
