"use client";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#060f1e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] p-8 md:p-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LET'S BRING YOUR BUSINESS ONLINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">TOUCH</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Ready to build something great? Reach out — we'd love to hear about your project and how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2349068918017"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20b955] text-white font-bold text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-200"
            >
              <MessageCircle size={18} />
              WhatsApp: 09068918017
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email */}
            <a
              href="mailto:adebayooluwaferanmi112@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
            >
              <Mail size={18} />
              Send an Email
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Info row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "09068918017",
              href: "https://wa.me/2349068918017",
              color: "text-green-400",
              bg: "bg-green-500/10",
            },
            {
              icon: Mail,
              label: "Email",
              value: "adebayooluwaferanmi112@gmail.com",
              href: "mailto:adebayooluwaferanmi112@gmail.com",
              color: "text-cyan-400",
              bg: "bg-cyan-500/10",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Oyo State, Nigeria",
              href: "#",
              color: "text-blue-400",
              bg: "bg-blue-500/10",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] hover:border-cyan-500/20 transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className={item.color} />
                </div>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                <div className="text-slate-300 text-xs text-center break-all">{item.value}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
