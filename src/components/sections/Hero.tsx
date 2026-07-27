"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Mail,
  Code2,
  Sparkles,
  MapPin,
  Briefcase,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const technologies = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "Laravel",
    "PHP",
    "Node.js",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative z-0 min-h-screen overflow-hidden bg-[#030712] flex items-center pt-24 md:pt-28"
    >
      {/* ==========================================
            BACKGROUND
      =========================================== */}

      <div className="absolute inset-0 z-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Aurora */}

        <div className="absolute top-20 left-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000" />

        <div className="absolute left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* Floating Code */}
{/* 
      <div className="hidden lg:block absolute left-8 top-32 text-cyan-400/40 font-mono text-xs leading-7">

{`const developer = {
   name: "Adebayo Isreal",
   role: "Full Stack Developer",

   stack: [
      "React",
      "Angular",
      "Next.js",
      "Laravel",
      "PHP"
   ],

   passion:
      "Building scalable
       web applications."
};`}

      </div> */}

      {/* ==========================================
              CONTENT
      =========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ==========================================
                    LEFT
          =========================================== */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm font-semibold">

              <Sparkles size={16} />

              Available for Remote & Full-Time Opportunities

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

              Hi, I'm

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">

                Adebayo Isreal

              </span>

            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-200">

              Full-Stack Web Developer

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              I build fast, scalable and modern web applications using
              React, Angular, Next.js, Laravel and PHP.

              I enjoy transforming ideas into digital products that
              provide exceptional user experiences and solve real business
              problems.

            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/Adebayo_Isreal_Oluwaferanmi_Premium_ATS_Resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Download size={18} />

                Download Resume

              </Link>

              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/30 px-7 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Social */}

            <div className="mt-10 flex flex-wrap items-center gap-6 text-slate-400">

              <a
                href="https://github.com/Adebayoisreal122"
                target="_blank"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Github size={18} />

                GitHub
              </a>

              <a
                href="mailto:adebayooluwaferanmi112@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Mail size={18} />

                Email
              </a>

              <div className="flex items-center gap-2">

                <MapPin size={18} />

                Ibadan, Nigeria

              </div>

            </div>

            {/* Tech Stack */}

            <div className="mt-12">

              <h3 className="text-sm uppercase tracking-widest text-slate-500">

                Tech Stack

              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-slate-900/60 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md hover:border-cyan-400 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            {/* Availability */}

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-emerald-400">

                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                Open to Full-Time Roles

              </div>

              <div className="flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-300">

                <Briefcase size={16} />

                Remote Friendly

              </div>

            </div>

          </div>

          {/* ==========================================
                    RIGHT
          =========================================== */}

          <div className="relative flex items-center justify-center">

            {/* Floating Achievement Card */}

            <div className="absolute -top-8 left-0 z-20 rounded-2xl border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl px-5 py-4 shadow-xl shadow-cyan-500/10 animate-bounce">

              <p className="text-3xl font-black text-cyan-400">

                15+

              </p>

              <p className="text-xs text-slate-400">

                Applications Built

              </p>

            </div>

            {/* Main Laptop */}

            <div className="relative w-full max-w-xl">

              <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/90 to-slate-950 overflow-hidden shadow-2xl shadow-cyan-500/20">

                {/* Browser */}

                <div className="flex items-center gap-2 border-b border-slate-700 px-5 py-4">

                  <div className="w-3 h-3 rounded-full bg-red-400" />

                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 flex-1 rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-500">

                    https://isrealight-tech.vercel.app

                  </div>

                </div>

                {/* Screen */}

                <div className="p-8">

                  <div className="rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-900 p-8">

                    <h3 className="text-3xl font-black text-white">

                      Full-Stack Developer

                    </h3>

                    <p className="mt-3 text-cyan-100 leading-7">

                      Building modern digital experiences with scalable
                      architecture, clean code and exceptional user
                      experience.

                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">

                      {/* Card */}

                      <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">

                        <p className="text-xs uppercase text-cyan-200">

                          Latest Project

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                          TrustWave Bank

                        </h4>

                        <p className="mt-2 text-xs text-cyan-100">

                          React • PHP • MySQL

                        </p>

                      </div>

                      <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">

                        <p className="text-xs uppercase text-cyan-200">

                          Healthcare

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                          Hospital System

                        </h4>

                        <p className="mt-2 text-xs text-cyan-100">

                          Angular

                        </p>

                      </div>

                      <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">

                        <p className="text-xs uppercase text-cyan-200">

                          Food Delivery

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                          PASAM

                        </h4>

                        <p className="mt-2 text-xs text-cyan-100">

                          Next.js

                        </p>

                      </div>

                      <div className="rounded-xl bg-white/10 backdrop-blur-md p-4">

                        <p className="text-xs uppercase text-cyan-200">

                          Ministry

                        </p>

                        <h4 className="mt-2 font-bold text-white">

                          The Call Global

                        </h4>

                        <p className="mt-2 text-xs text-cyan-100">

                          React

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Card */}

              <div className="absolute -right-6 top-20 rounded-2xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl px-5 py-4 shadow-xl">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                  <div>

                    <h4 className="font-bold text-white">

                      Available

                    </h4>

                    <p className="text-xs text-slate-400">

                      Open for Hiring

                    </p>

                  </div>

                </div>

              </div>

              {/* Tech Stack */}

              <div className="absolute -bottom-8 left-6 rounded-2xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl px-6 py-5 shadow-xl">

                <div className="flex flex-wrap gap-2">

                  {[
                    "React",
                    "Angular",
                    "Next.js",
                    "Laravel",
                    "PHP",
                    "Node.js",
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 border border-cyan-500/20"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Glow */}

              <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10 blur-[100px]" />

            </div>

          </div>

        </div>

      </div>
                {/* Floating Decorations */}

          <div className="absolute top-10 right-20 h-4 w-4 rounded-full bg-cyan-400 animate-ping opacity-60" />

          <div className="absolute bottom-24 left-20 h-3 w-3 rounded-full bg-blue-500 animate-pulse opacity-70" />

          <div className="absolute top-1/3 right-0 h-2 w-2 rounded-full bg-cyan-300 animate-bounce" />

          <div className="absolute bottom-12 right-1/4 h-3 w-3 rounded-full bg-indigo-400 animate-pulse delay-700" />

      {/* ==========================================
              SCROLL INDICATOR
      =========================================== */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <span className="mb-3 text-xs tracking-[0.3em] uppercase text-slate-500">

          Scroll Down

        </span>

        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-cyan-500/30">

          <ChevronDown
            size={18}
            className="mt-2 animate-bounce text-cyan-400"
          />

        </div>

      </div>

      {/* ==========================================
              BOTTOM FADE
      =========================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      {/* ==========================================
              CORNER DECORATIONS
      =========================================== */}

      <div className="pointer-events-none absolute top-20 right-20 h-72 w-72 rounded-full border border-cyan-500/10" />

      <div className="pointer-events-none absolute bottom-20 left-20 h-56 w-56 rounded-full border border-blue-500/10" />

      <div className="pointer-events-none absolute top-40 left-1/3 h-24 w-24 rounded-full border border-cyan-400/20 animate-pulse" />

      <div className="pointer-events-none absolute bottom-32 right-1/3 h-16 w-16 rounded-full border border-indigo-500/20 animate-pulse delay-1000" />

    </section>
  );
}