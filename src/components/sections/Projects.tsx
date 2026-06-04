"use client";
import { ExternalLink, Github, Tag } from "lucide-react";

const projects = [
  {
    title: "Trustwave Bank",
    tagline: "Online Banking Application",
    image: "/projects/Trustwave Bank.png",
    description:
      "Secure digital banking platform featuring account management, fund transfers, transaction history, authentication, and a modern banking dashboard.",
    tags: ["Next.js", "Laravel", "Tailwind CSS", "JWT"],
    color: "from-blue-500 to-purple-600",
    accent: "cyan",
    githubUrl: "https://github.com/Adebayoisreal122/Banking",
    liveUrl: "https://trustwave-bank.vercel.app",
  },

  {
    title: "KingBs Auto",
    tagline: "Vehicle Marketplace",
    image: "/projects/kingbs.png",
    description:
      "Modern automobile marketplace showcasing premium new and used vehicles with advanced filtering and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    color: "from-orange-500 to-yellow-500",
    accent: "orange",
    githubUrl: "https://github.com/yourusername/kingbs-auto",
    liveUrl: "https://kingbs.vercel.app",
  },

  {
    title: "PASAM Mobile Store",
    tagline: "Food Package Delivery Platform",
    image: "/projects/Pasam.png",
    description:
      "Food delivery and e-commerce platform with authentication, order tracking, image uploads, analytics, and payment integration.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "from-green-500 to-red-500",
    accent: "green",
    githubUrl: "https://github.com/Adebayoisreal122/Pasam_front",
    liveUrl: "https://pasam-dusky.vercel.app",
  },

  {
    title: "Medicore",
    tagline: "Hospital Management System",
    image: "/projects/Medicore.png",
    description:
      "Comprehensive hospital management platform handling patients, appointments, doctors, medical records, and administration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-purple-700 to-blue-600",
    accent: "purple",
    githubUrl: "https://github.com/Adebayoisreal122/Hospital-Management",
    liveUrl: "https://hospital-management-sigma-brown.vercel.app",
  },

  {
    title: "The Call Global",
    tagline: "Raising Kingdom Voices Globally",
    image: "/projects/thecall.png",
    description:
      "Modern ministry website featuring events, sermons, media content, donation systems, and community engagement.",
    tags: ["Next.js", "Tailwind CSS"],
    color: "from-blue-700 to-cyan-500",
    accent: "blue",
    githubUrl: "https://github.com/yourusername/the-call-global",
    liveUrl: "https://the-call-global.vercel.app",
  },

  {
    title: "Technova Pulse",
    tagline: "Technology Blog Platform",
    image: "/projects/technova.png",
    description:
      "Content-driven technology blog featuring articles, categories, search functionality, and modern responsive layouts.",
    tags: ["Next.js", "CMS", "SEO"],
    color: "from-pink-500 to-purple-600",
    accent: "pink",
    githubUrl: "https://github.com/yourusername/technova-pulse",
    liveUrl: "https://blog-six-rouge-10.vercel.app",
  },
];

const accentBorder: Record<string, string> = {
  cyan: "hover:border-cyan-400/40",
  pink: "hover:border-pink-400/40",
  green: "hover:border-green-400/40",
  orange: "hover:border-orange-400/40",
  blue: "hover:border-blue-400/40",
  purple: "hover:border-purple-400/40",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#060f1e] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              PROJECTS
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Real solutions built for real businesses — production-grade,
            performant, and built to scale.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project) => (
    <div
      key={project.title}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1527] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${accentBorder[project.accent]}`}
    >
      {/* Top Accent */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${project.color}`}
      />

      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#08101f] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08101f] via-black/30 to-transparent" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Github size={18} />
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Project Name on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-black text-2xl">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
          >
            View Project
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}
