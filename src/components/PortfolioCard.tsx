"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioProject } from "@/lib/portfolio-content";
import { getProjectSvgData } from "@/components/ProjectGallerySvgs";

export const PROJECT_THEMES: Record<
  string,
  {
    bgGradient: string;
    badgeBg: string;
    badgeText: string;
    borderHover: string;
    glow: string;
  }
> = {
  sevanun: {
    bgGradient: "from-cyan-50/50 via-white to-white",
    badgeBg: "bg-cyan-50 border-cyan-200/80",
    badgeText: "text-cyan-800",
    borderHover: "hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]",
    glow: "bg-cyan-400/20",
  },
  parkese: {
    bgGradient: "from-purple-50/50 via-white to-white",
    badgeBg: "bg-purple-50 border-purple-200/80",
    badgeText: "text-purple-800",
    borderHover: "hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)]",
    glow: "bg-purple-400/20",
  },
  "cold-chain": {
    bgGradient: "from-sky-50/50 via-white to-white",
    badgeBg: "bg-sky-50 border-sky-200/80",
    badgeText: "text-sky-800",
    borderHover: "hover:border-sky-400 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]",
    glow: "bg-sky-400/20",
  },
  "hiring-management": {
    bgGradient: "from-teal-50/40 via-white to-white",
    badgeBg: "bg-teal-50 border-teal-200/80",
    badgeText: "text-teal-800",
    borderHover: "hover:border-teal-400 hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)]",
    glow: "bg-teal-400/20",
  },
  dnp: {
    bgGradient: "from-amber-50/40 via-white to-white",
    badgeBg: "bg-amber-50 border-amber-200/80",
    badgeText: "text-amber-800",
    borderHover: "hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)]",
    glow: "bg-amber-400/20",
  },
  tbta: {
    bgGradient: "from-indigo-50/40 via-white to-white",
    badgeBg: "bg-indigo-50 border-indigo-200/80",
    badgeText: "text-indigo-800",
    borderHover: "hover:border-indigo-400 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]",
    glow: "bg-indigo-400/20",
  },
  fliber: {
    bgGradient: "from-blue-50/40 via-white to-white",
    badgeBg: "bg-blue-50 border-blue-200/80",
    badgeText: "text-blue-800",
    borderHover: "hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(0,118,228,0.15)]",
    glow: "bg-blue-400/20",
  },
  "native-special": {
    bgGradient: "from-emerald-50/40 via-white to-white",
    badgeBg: "bg-emerald-50 border-emerald-200/80",
    badgeText: "text-emerald-800",
    borderHover: "hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    glow: "bg-emerald-400/20",
  },
  "ride-sharing": {
    bgGradient: "from-sky-50/40 via-white to-white",
    badgeBg: "bg-sky-50 border-sky-200/80",
    badgeText: "text-sky-800",
    borderHover: "hover:border-sky-400 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]",
    glow: "bg-sky-400/20",
  },
  "snap-m": {
    bgGradient: "from-rose-50/40 via-white to-white",
    badgeBg: "bg-rose-50 border-rose-200/80",
    badgeText: "text-rose-800",
    borderHover: "hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.15)]",
    glow: "bg-rose-400/20",
  },
  "learning-management": {
    bgGradient: "from-violet-50/40 via-white to-white",
    badgeBg: "bg-violet-50 border-violet-200/80",
    badgeText: "text-violet-800",
    borderHover: "hover:border-violet-400 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)]",
    glow: "bg-violet-400/20",
  },
};

export const formatCardTitle = (title: string) => {
  if (title.includes(" - ")) return title.split(" - ")[1].trim();
  if (title.includes(" – ")) return title.split(" – ")[1].trim();
  return title;
};

export default function PortfolioCard({
  project,
  variant = "featured",
}: {
  project: PortfolioProject;
  variant?: "featured" | "compact";
}) {
  const theme = PROJECT_THEMES[project.id] || {
    bgGradient: "from-blue-50/50 via-white to-white",
    badgeBg: "bg-blue-50 border-blue-200/80",
    badgeText: "text-blue-800",
    borderHover: "hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(0,118,228,0.15)]",
    glow: "bg-blue-400/20",
  };

  const svgData = getProjectSvgData(project.id);
  const isCompact = variant === "compact";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${theme.bgGradient} border border-slate-200/90 ${
        isCompact ? "p-5" : "p-6"
      } shadow-[0_6px_24px_rgba(0,0,0,0.03)] ${theme.borderHover} transition-all duration-400 hover:-translate-y-2`}
    >
      {/* Glowing Top Edge Highlight - Only for featured */}
      {!isCompact && (
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold shadow-sm ${theme.badgeBg} ${theme.badgeText}`}
          >
            {!isCompact && <span>{project.categoryIcon || "✨"}</span>}
            <span>{project.industry}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] sm:text-xs font-bold text-emerald-700 font-mono shadow-sm">
            {!isCompact && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
            <span>Active Production</span>
          </span>
        </div>

        {/* Visual Mockup Showcase Box */}
        <div
          className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 border border-blue-100/90 ${
            isCompact ? "h-44 sm:h-48 p-1.5 mb-3.5 shadow-inner" : "h-64 sm:h-72 lg:h-80 p-2 sm:p-3 my-3 shadow-[inset_0_2px_14px_rgba(0,118,228,0.08)]"
          } flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50/80 transition-all`}
        >
          {/* Ambient device glow */}
          {!isCompact && <div className="absolute inset-0 bg-radial from-blue-400/10 to-transparent blur-xl pointer-events-none" />}

          {svgData?.MainImg ? (
            <div className={`w-full h-full flex items-center justify-center transition-transform duration-500 scale-110 sm:scale-110 group-hover:scale-[1.15]`}>
              <svgData.MainImg className={`w-full h-full object-cover filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] select-none ${isCompact ? "rounded-lg" : "rounded-xl"}`} />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105 ${isCompact ? "rounded-lg" : "rounded-xl"}`}
            />
          )}
        </div>

        {/* Project Title */}
        <h3 className={`font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors leading-snug ${isCompact ? "text-base mt-2" : "text-xl mt-4"}`}>
          <Link href={`/our-work/${project.id}`}>
            {formatCardTitle(project.title)}
          </Link>
        </h3>

        {/* Short Description */}
        <p className={`mt-2 text-slate-600 leading-relaxed line-clamp-2 ${isCompact ? "text-xs" : "text-xs sm:text-sm"}`}>
          {project.description}
        </p>

        {/* Tech Badges - Only for featured */}
        {!isCompact && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => {
              const techName = typeof tech === "string" ? tech : tech.name;
              return (
                <span
                  key={techName}
                  className="rounded-lg bg-white/95 border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-700 font-mono shadow-sm group-hover:bg-blue-50 group-hover:text-blue-800 group-hover:border-blue-200 transition-colors"
                >
                  {techName}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Catchy Action Link Footer */}
      <div className={`border-t border-slate-100 flex items-center justify-between ${isCompact ? "mt-4 pt-3" : "mt-6 pt-4"}`}>
        <Link
          href={`/our-work/${project.id}`}
          className={
            isCompact
              ? "inline-flex items-center gap-1.5 text-xs font-bold text-[#0076e4] group-hover:text-blue-800 transition-colors"
              : "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/35 transition-all group-hover:scale-105 active:scale-95"
          }
        >
          <span>View Case Study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1 font-black">
            →
          </span>
        </Link>

        {isCompact ? (
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        ) : (
          <span className="text-[11px] font-mono text-slate-400 font-bold">
            Verified Case Study
          </span>
        )}
      </div>
    </motion.article>
  );
}
