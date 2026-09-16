"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectSvgData } from "@/components/ProjectGallerySvgs";

interface FeaturedStory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryIcon: string;
  statValue: string;
  statLabel: string;
  techStack: string[];
  link: string;
  cardTheme: {
    bgGradient: string;
    borderHover: string;
    glowBg: string;
    badgeBg: string;
    badgeText: string;
    accentText: string;
    btnGradient: string;
  };
}

const FEATURED_STORIES: FeaturedStory[] = [
  {
    id: "sevanun",
    title: "Sevanun – Remote Healthcare Monitoring",
    subtitle:
      "Real-time BLE patient vitals telemetry, teleconsultation & clinical alerts",
    category: "Healthcare",
    categoryIcon: "💚",
    statValue: "60K+",
    statLabel: "Active Patients",
    techStack: ["React Native", "BLE IoT", "Firebase", "Node.js"],
    link: "/our-work/sevanun",
    cardTheme: {
      bgGradient: "from-cyan-50/70 via-sky-50/30 to-white",
      borderHover:
        "hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.18)]",
      glowBg: "bg-cyan-400/10",
      badgeBg: "bg-cyan-100/90 border-cyan-200/80",
      badgeText: "text-cyan-800",
      accentText: "text-cyan-600",
      btnGradient: "from-cyan-600 to-blue-600",
    },
  },
  {
    id: "cold-chain",
    title: "Cold Chain Logistics & Reefer Telematics",
    subtitle:
      "Automated multi-zone temperature tracking, GPS route geo-fencing & GDP compliance",
    category: "Logistics",
    categoryIcon: "🚚",
    statValue: "45K+",
    statLabel: "Reefer Telemetry",
    techStack: ["Flutter", "Azure IoT", "TypeScript", "PostgreSQL"],
    link: "/our-work/cold-chain",
    cardTheme: {
      bgGradient: "from-teal-50/70 via-emerald-50/30 to-white",
      borderHover:
        "hover:border-teal-400 hover:shadow-[0_20px_40px_rgba(20,184,166,0.18)]",
      glowBg: "bg-teal-400/10",
      badgeBg: "bg-teal-100/90 border-teal-200/80",
      badgeText: "text-teal-800",
      accentText: "text-teal-600",
      btnGradient: "from-teal-600 to-emerald-600",
    },
  },
  {
    id: "fliber",
    title: "Fliber – Wealth & Financial Planning",
    subtitle:
      "Comprehensive wealth tracking, retirement goal planner & tax optimization engine",
    category: "Fintech",
    categoryIcon: "💎",
    statValue: "₹1.2B+",
    statLabel: "Assets Managed",
    techStack: ["React", "Node.js", "REST API", "AWS"],
    link: "/our-work/fliber",
    cardTheme: {
      bgGradient: "from-indigo-50/70 via-purple-50/30 to-white",
      borderHover:
        "hover:border-indigo-400 hover:shadow-[0_20px_40px_rgba(99,102,241,0.18)]",
      glowBg: "bg-indigo-400/10",
      badgeBg: "bg-indigo-100/90 border-indigo-200/80",
      badgeText: "text-indigo-800",
      accentText: "text-indigo-600",
      btnGradient: "from-indigo-600 to-purple-600",
    },
  },
  {
    id: "parkese",
    title: "Parkese – Smart Parking & ALPR Telemetry",
    subtitle:
      "AI computer vision license plate recognition, live slot booking & cashless billing",
    category: "Smart Cities",
    categoryIcon: "🅿️",
    statValue: "120K+",
    statLabel: "Slots Tracked",
    techStack: ["React Native", "ALPR Vision", "Node.js", "Azure"],
    link: "/our-work/parkese",
    cardTheme: {
      bgGradient: "from-purple-50/70 via-fuchsia-50/30 to-white",
      borderHover:
        "hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(168,85,247,0.18)]",
      glowBg: "bg-purple-400/10",
      badgeBg: "bg-purple-100/90 border-purple-200/80",
      badgeText: "text-purple-800",
      accentText: "text-purple-600",
      btnGradient: "from-purple-600 to-pink-600",
    },
  },
  {
    id: "native-special",
    title: "Native Special – D2C E-Commerce Marketplace",
    subtitle:
      "High-volume authentic regional food platform with live tracking & rapid dispatch",
    category: "E-Commerce",
    categoryIcon: "🛒",
    statValue: "250K+",
    statLabel: "Orders Delivered",
    techStack: ["React Native", "Sequelize", "REST API", "Node.js"],
    link: "/our-work/native-special",
    cardTheme: {
      bgGradient: "from-emerald-50/70 via-green-50/30 to-white",
      borderHover:
        "hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.18)]",
      glowBg: "bg-emerald-400/10",
      badgeBg: "bg-emerald-100/90 border-emerald-200/80",
      badgeText: "text-emerald-800",
      accentText: "text-emerald-600",
      btnGradient: "from-emerald-600 to-teal-600",
    },
  },
  {
    id: "snap-m",
    title: "Snap-M – Smart Media & Privacy Vault",
    subtitle:
      "AI image organization, document scanner to PDF & scheduled auto-deletion security",
    category: "Media",
    categoryIcon: "📸",
    statValue: "500K+",
    statLabel: "Docs Scanned",
    techStack: ["React Native", "AI Vision", "Firebase", "Figma"],
    link: "/our-work/snap-m",
    cardTheme: {
      bgGradient: "from-blue-50/70 via-sky-50/30 to-white",
      borderHover:
        "hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]",
      glowBg: "bg-blue-400/10",
      badgeBg: "bg-blue-100/90 border-blue-200/80",
      badgeText: "text-blue-800",
      accentText: "text-blue-600",
      btnGradient: "from-blue-600 to-sky-600",
    },
  },
];

const CATEGORY_FILTERS = [
  "All",
  "Healthcare",
  "Logistics",
  "Fintech",
  "Smart Cities",
  "E-Commerce",
];

const PROJECT_ILLUSTRATIONS: Record<string, string> = {
  "art-learning-platform": "/assets/svg/Projectone.svg",
  "smart-parking-system": "/assets/svg/Flows.svg",
  "supply-chain-logistics": "/assets/svg/Offerings.svg",
  "healthcare-referral-app": "/assets/svg/Aboutusillus.svg",
  "multimodal-transport-portal": "/assets/svg/Banner.svg",
  "ecommerce-retail-engine": "/assets/svg/Ourvaluesillus.svg",
};

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayedStories =
    activeFilter === "All"
      ? FEATURED_STORIES.slice(0, 3)
      : FEATURED_STORIES.filter((s) => s.category === activeFilter);

  return (
    <section
      id="our-work"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden scroll-mt-20 w-full"
      aria-labelledby="portfolio-heading"
    >
      {/* Background soft ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-32 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span>FEATURED CASE STUDIES &amp; PORTFOLIO</span>
              <span className="h-0.5 w-8 bg-sky-400 rounded-full inline-block" />
            </p>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] mt-2.5 leading-[1.15]"
            >
              Discover Our Success Stories
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Explore how Koraltech Softwares has engineered production-grade
              software architectures that deliver measurable efficiency,
              scalability, and impact for global enterprises.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white hover:bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-600 shadow-sm transition-all hover:border-blue-300 hover:shadow-md hover:scale-105 active:scale-95 shrink-0 group self-start lg:self-end"
          >
            <span>View All 12 Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-black">
              →
            </span>
          </Link>
        </div>

        {/* Quick Industry Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 scale-102"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:bg-blue-50/50 hover:text-blue-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 High-Impact Colorful Case Study Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedStories.map((project) => {
              const svgData = getProjectSvgData(project.id);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b ${project.cardTheme.bgGradient} ${project.cardTheme.borderHover}`}
                >
                  <div>
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold shadow-2xs ${project.cardTheme.badgeBg} ${project.cardTheme.badgeText}`}
                      >
                        <span>{project.categoryIcon}</span>
                        <span>{project.category}</span>
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Production</span>
                      </span>
                    </div>

                    {/* Attractive Authentic SVG Mockup Box - Significantly Bigger, Clearer & Edge-to-Edge */}
                    <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 border border-blue-100/90 p-2 sm:p-3 flex items-center justify-center my-3 shadow-[inset_0_2px_14px_rgba(0,118,228,0.08)] group-hover:border-blue-300 group-hover:bg-blue-50/80 transition-all">
                      {/* Ambient device glow */}
                      <div className="absolute inset-0 bg-radial from-blue-400/10 to-transparent blur-xl pointer-events-none" />

                      {svgData?.MainImg ? (
                        <div className="w-full h-full flex items-center justify-center transition-transform duration-500 scale-[1.38] sm:scale-[1.45] group-hover:scale-[1.52]">
                          <svgData.MainImg className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] select-none" />
                        </div>
                      ) : (
                        <span className="text-5xl">💻</span>
                      )}
                    </div>

                    {/* Quick Metric Chip */}
                    <div className="mt-3 flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-2xs">
                      <span className="text-sm font-black text-[#0076e4] font-mono">
                        {project.statValue}
                      </span>
                      <span className="text-[11px] font-bold text-slate-600">
                        {project.statLabel}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-3 text-lg font-extrabold text-[#0b192c] group-hover:text-blue-600 transition-colors leading-snug">
                      <Link href={project.link}>{project.title}</Link>
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-white/95 border border-slate-200/90 px-2 py-0.5 text-[10px] font-bold text-slate-700 font-mono shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={project.link}
                      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${project.cardTheme.btnGradient} px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 group-hover:shadow-lg transition-all group-hover:scale-105 active:scale-95`}
                    >
                      <span>Explore Case Study</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 font-black">
                        →
                      </span>
                    </Link>

                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      Verified Case Study
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
