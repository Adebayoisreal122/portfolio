import { Instagram, Github, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050d1a] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center text-white font-black text-sm shadow-lg ">
              <img src="./icon.png" alt="logo" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">
                ISREALIGHT <span className="text-cyan-400">TECH</span>
              </div>
              <div className="text-slate-600 text-xs">
                Your Vision. Our Code. Your Success.
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/isrealight_tech",
                label: "Instagram",
              },
              {
                icon: Github,
                href: "https://github.com/Adebayoisreal122",
                label: "GitHub",
              },
              {
                icon: MessageCircle,
                href: "https://wa.me/2349068918017",
                label: "WhatsApp",
              },
              {
                icon: Mail,
                href: "mailto:adebayooluwaferanmi112@gmail.com",
                label: "Email",
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs text-center md:text-right">
            &copy; {year} Isrealight Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
