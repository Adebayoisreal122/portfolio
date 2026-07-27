"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Services", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/95 backdrop-blur-sd border-b border-cyan-700/20 shadow-lg shadow-cyan-500/5"
          : "bg-transparent-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="./icon.png" alt="logo" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              ISREALIGHT <span className="text-cyan-400">TECH</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#050d1a]/98 backdrop-blur-md border-t border-cyan-500/20 px-4 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
