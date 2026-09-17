"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioProject } from "@/lib/portfolio-content";
import { TechIconByName } from "@/components/TechIcons";
import { getProjectSvgData } from "@/components/ProjectGallerySvgs";

interface CaseStudyDetailViewProps {
  project: PortfolioProject;
  prevProject: PortfolioProject;
  nextProject: PortfolioProject;
}

const TABS = [
  { id: "overview", label: "Overview", icon: "📑" },
  { id: "challenges", label: "Challenges", icon: "🎯" },
  { id: "solution", label: "Solution", icon: "💡" },
  { id: "key-features", label: "Key Features", icon: "⚙️" },
  { id: "technology", label: "Technology", icon: "💻" },
  { id: "results", label: "Results", icon: "📊" },
  { id: "gallery", label: "Gallery", icon: "📱" },
];

export default function CaseStudyDetailView({
  project,
  prevProject,
  nextProject,
}: CaseStudyDetailViewProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "web" | "mobile">("all");

  const svgData = getProjectSvgData(project.id);
  const allScreens = svgData?.allScreens || [];
  const currentScreen = allScreens[activeScreenIndex] || allScreens[0];

  const filteredScreens =
    galleryFilter === "all"
      ? allScreens
      : allScreens.filter((s) => s.type === galleryFilter);

  const handleNextScreen = () => {
    if (allScreens.length > 0) {
      setActiveScreenIndex((prev) => (prev + 1) % allScreens.length);
    }
  };

  const handlePrevScreen = () => {
    if (allScreens.length > 0) {
      setActiveScreenIndex((prev) => (prev - 1 + allScreens.length) % allScreens.length);
    }
  };

  const centerImage =
    project.id === "fliber"
      ? "/assets/images/casestudycard/fliber_bg.png"
      : project.id === "sevanun"
      ? "/assets/images/casestudycard/sevanun_bg.png"
      : project.id === "hiring-management"
      ? "/assets/images/casestudycard/hiring_mng_bg.png"
      : project.id === "dnp"
      ? "/assets/images/casestudycard/dnp_bg.png"
      : project.id === "cold-chain"
      ? "/assets/images/casestudycard/coldchain_bg.png"
      : project.id === "parkese"
      ? "/assets/images/casestudycard/parkese_bg.png"
      : project.id === "ride-sharing"
      ? "/assets/images/casestudycard/rideshare_bg.png"
      : project.id === "snap-m"
      ? "/assets/images/casestudycard/snapm_bg.png"
      : project.id === "learning-management"
      ? "/assets/images/casestudycard/learning_mng_bg.png"
      : project.id === "native-special"
      ? "/assets/images/casestudycard/native_spl_bg.png"
      : project.id === "tbta"
      ? "/assets/images/casestudycard/tbtwa_bg.png"
      : project.image;

  return (
    <div className="min-h-screen bg-[#edf4fb] pt-16 sm:pt-20 pb-16 w-full">
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* 2. Hero Section - Tightened Top Spacing & Larger, High-Contrast Mockup */}
        <section
          id="overview-hero"
          className="relative overflow-hidden rounded-3xl bg-[url('/assets/images/casestudycard/casestudy_viewheader_bg.png')] bg-cover bg-center bg-no-repeat border border-blue-200/90 p-5 sm:p-7 lg:p-8 shadow-xl mb-6 sm:mb-8"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-12 items-center">
            {/* Left Column: Badges, Title, Subtitle, 4 Quick Stats */}
            <div className="lg:col-span-6 text-left self-start lg:mt-1">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mb-6"
              >
                <span>←</span>
                <span>All Case Studies</span>
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-800 shadow-sm">
                  <span>{project.categoryIcon || "⭐"}</span>
                  <span>{project.industry}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Production</span>
                </span>
                <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-mono font-medium text-slate-600">
                  {project.type}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#0b192c] tracking-tight leading-[1.3] sm:leading-[1.4] mb-3">
                {project.title.includes("–") ? (
                  <>
                    {project.title.split("–")[0]}– <span className="text-blue-600">{project.title.split("–").slice(1).join("–").trim()}</span>
                  </>
                ) : project.title.includes("-") ? (
                  <>
                    {project.title.split("-")[0]}- <span className="text-blue-600">{project.title.split("-").slice(1).join("-").trim()}</span>
                  </>
                ) : (
                  project.title
                )}
              </h1>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                {project.description}
              </p>

              {/* 4 Hero Stats - 4-column layout on one line */}
              <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {project.heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col xl:flex-row items-start xl:items-center gap-1.5 xl:gap-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 p-2 sm:px-2.5 sm:py-2 shadow-sm hover:border-blue-300 transition-all"
                  >
                    <span className="text-lg sm:text-xl shrink-0">{stat.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-black text-[#0076e4] leading-none font-mono">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight mt-0.5 sm:whitespace-normal break-words">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Device Mockup Showcase - Blended transparently with background */}
            <div className="lg:col-span-4 flex items-center justify-center px-6 sm:px-10 lg:px-12">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[500px] h-[280px] sm:h-[320px] lg:h-[350px] mx-auto flex items-center justify-center group"
              >
                {svgData?.MainImg ? (
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-500 scale-[1.38] sm:scale-[1.45] group-hover:scale-[1.52] p-1">
                    <svgData.MainImg className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)] select-none" />
                  </div>
                ) : (
                  <Image
                    src={centerImage}
                    alt={project.title}
                    fill
                    priority
                    className={`object-contain select-none ${
                      project.id === "tbta" ? "mix-blend-multiply scale-95" : "filter drop-shadow-xl"
                    }`}
                  />
                )}
              </motion.div>
            </div>

            {/* Right Stack of 4 Highlight Chips */}
            <div className="lg:col-span-2 space-y-2">
              {project.verticalChips.map((chip) => (
                <div
                  key={chip.title}
                  className="flex items-start gap-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-2.5 sm:p-3 shadow-sm transition-all hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-sm sm:text-base">
                    {chip.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#0b192c] leading-tight">
                      {chip.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                      {chip.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Interactive Filtering Tabs Bar */}
        <div className="sticky top-20 z-30 mb-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-2 shadow-sm">
          <div className="flex items-center lg:justify-between w-full gap-2 sm:gap-3 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex lg:flex-1 shrink-0 justify-center items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-[15px] font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. DYNAMIC CONTENT RENDERING BASED ON ACTIVE TAB */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            {/* OVERVIEW TAB: Shows 4 Rich Cards + Authentic Application Screens Gallery + Tech/Impact */}
            {activeTab === "overview" && (
              <motion.div
                key="overview-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* 4 Rich Colorful Cards with Fully Visible Text */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Card 1: Project Overview (Blue Theme) */}
                  <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-blue-50/60 via-white to-white border border-blue-200/80 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-base shadow-sm">
                          📄
                        </span>
                        <h2 className="text-base font-extrabold text-[#0b192c]">Project Overview</h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.overview.description}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2.5 pt-4 border-t border-blue-100">
                      {project.overview.points.map((pt) => (
                        <div
                          key={pt.title}
                          className="rounded-xl bg-blue-50/70 p-2.5 border border-blue-100/90 text-center shadow-2xs flex flex-col justify-between"
                        >
                          <span className="text-base">{pt.icon}</span>
                          <p className="text-[11px] font-bold text-slate-900 leading-tight mt-1">{pt.title}</p>
                          <p className="text-[10px] text-slate-600 leading-snug mt-0.5 whitespace-normal">{pt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card 2: The Challenge (Rose Theme) */}
                  <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-rose-50/60 via-white to-white border border-rose-200/80 p-6 shadow-sm hover:shadow-xl hover:border-rose-400 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-100 text-rose-700 text-base shadow-sm">
                          🎯
                        </span>
                        <h2 className="text-base font-extrabold text-[#0b192c]">The Challenge</h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.challenge.description}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2.5 pt-4 border-t border-rose-100" role="list">
                      {project.challenge.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold mt-0.5">
                            ✖
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 3: Our Solution (Emerald Theme) */}
                  <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-emerald-50/60 via-white to-white border border-emerald-200/80 p-6 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 text-base shadow-sm">
                          💡
                        </span>
                        <h2 className="text-base font-extrabold text-[#0b192c]">Our Solution</h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.solution.description}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2.5 pt-4 border-t border-emerald-100" role="list">
                      {project.solution.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold mt-0.5">
                            ✔
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 4: Key Features (Violet Theme) */}
                  <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-purple-50/60 via-white to-white border border-purple-200/80 p-6 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700 text-base shadow-sm">
                          ⚙️
                        </span>
                        <h2 className="text-base font-extrabold text-[#0b192c]">Key Features</h2>
                      </div>

                      <div className="space-y-3 mt-4">
                        {project.keyFeatures.map((feat) => (
                          <div key={feat.title} className="flex items-start gap-2.5">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-700 text-xs mt-0.5">
                              {feat.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold text-slate-800 leading-tight">{feat.title}</p>
                              <p className="text-[11px] text-slate-600 leading-snug mt-0.5 whitespace-normal">{feat.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Gallery + Tech/Impact Row */}
                <div className="grid gap-6 lg:grid-cols-12">
                  {/* Left: Application Screens with Authentic SVGs */}
                  <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <h2 className="text-lg font-black text-[#0b192c]">Project Screen Gallery</h2>
                        <div className="h-[2px] w-12 bg-blue-400 rounded-full" />
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrevScreen}
                          aria-label="Scroll screens left"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={handleNextScreen}
                          aria-label="Scroll screens right"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* Active Screen Authentic SVG Spotlight */}
                    {currentScreen && (
                      <div className="mb-5 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-50/30 border border-blue-100 p-4 shadow-sm flex flex-col items-center">
                        <div className="w-full flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-blue-100 text-blue-700 px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase">
                              {currentScreen.type === "web" ? "🖥️ Web Screen" : "📱 Mobile Screen"}
                            </span>
                            <span className="text-xs font-bold text-slate-800">
                              {currentScreen.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 font-semibold">
                            {activeScreenIndex + 1} / {allScreens.length}
                          </span>
                        </div>

                        <div className="w-full max-w-[560px] h-56 sm:h-64 lg:h-72 mx-auto flex items-center justify-center overflow-hidden p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
                          {currentScreen.Component ? (
                            <div className="w-full h-full flex items-center justify-center scale-[1.12] sm:scale-[1.18] transition-transform">
                              <currentScreen.Component className="max-w-full max-h-full w-auto h-auto object-contain filter drop-shadow-sm select-none" />
                            </div>
                          ) : (
                            <div className="text-center text-slate-400">
                              <span className="text-4xl">📱</span>
                              <p className="text-xs mt-1 font-medium">{currentScreen.title}</p>
                            </div>
                          )}
                        </div>
                        <p className="mt-2.5 text-xs text-slate-600 text-center leading-relaxed max-w-lg">
                          {currentScreen.desc}
                        </p>
                      </div>
                    )}

                    {/* Screen Selector Thumbnails */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {allScreens.map((screen, idx) => {
                        const isSelected = activeScreenIndex === idx;
                        return (
                          <button
                            key={screen.id || idx}
                            onClick={() => setActiveScreenIndex(idx)}
                            type="button"
                            className={`flex flex-col items-center rounded-2xl p-2 text-center transition-all ${
                              isSelected
                                ? "bg-blue-50 border-2 border-blue-600 shadow-md scale-102"
                                : "bg-slate-50/80 border border-slate-200/80 hover:border-blue-300"
                            }`}
                          >
                            <div className="relative h-14 w-full rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center overflow-hidden shadow-2xs mb-1">
                              {screen.Component ? (
                                <screen.Component className="w-full h-full object-contain max-h-[48px]" />
                              ) : (
                                <span className="text-lg">📱</span>
                              )}
                            </div>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight w-full truncate">
                              {screen.title.split("–")[0].trim()}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: Tech & Impact with Authentic Brand SVGs */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-blue-600 text-base">💻</span>
                        <h3 className="text-base font-extrabold text-[#0b192c]">Technology Stack</h3>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-300 to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {project.technologies.map((tech) => {
                          const techName = typeof tech === 'string' ? tech : tech.name;
                          return (
                            <span
                              key={techName}
                              className="inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/90 px-3.5 py-2 text-xs font-bold text-slate-800 font-mono shadow-sm hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                            >
                              <TechIconByName name={techName} className="h-4 w-4 shrink-0" />
                              <span>{techName}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-emerald-600 text-base">📊</span>
                        <h3 className="text-base font-extrabold text-[#0b192c]">Business Impact</h3>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-300 to-transparent" />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {project.businessImpact.map((item) => (
                          <div key={item.label} className="rounded-2xl bg-slate-50 border border-slate-100 p-2.5 text-center flex flex-col justify-between">
                            <span className="text-base">{item.icon}</span>
                            <p className="text-sm sm:text-base font-black text-[#0076e4] font-mono leading-tight mt-1">
                              {item.value}
                            </p>
                            <p className="text-[10px] font-bold text-slate-700 leading-snug mt-0.5 whitespace-normal">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CHALLENGES TAB: Dedicated Expanded Challenges View */}
            {activeTab === "challenges" && (
              <motion.div
                key="challenges-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-rose-50/70 via-white to-white border border-rose-200 p-6 sm:p-10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 text-2xl shadow-sm">
                    🎯
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                      The Core Engineering &amp; Operational Challenges
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-rose-600 mt-0.5">
                      Problem identification, bottleneck root-causes &amp; legacy limitations
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
                  {project.challenge.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.challenge.points.map((pt, idx) => (
                    <div
                      key={pt}
                      className="flex items-start gap-3.5 rounded-2xl bg-white border border-rose-100 p-5 shadow-sm hover:border-rose-300 hover:shadow-md transition-all"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 text-sm font-black mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{pt}</p>
                        <p className="text-xs text-slate-500 mt-1">
                          Key pain point solved through dedicated engineering workflows.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* SOLUTION TAB: Dedicated Expanded Solution View */}
            {activeTab === "solution" && (
              <motion.div
                key="solution-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-emerald-50/70 via-white to-white border border-emerald-200 p-6 sm:p-10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 text-2xl shadow-sm">
                    💡
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                      Architected Solution &amp; Innovation
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-0.5">
                      Modular architecture, automated workflows, and modern cloud deployment
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
                  {project.solution.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.solution.points.map((pt) => (
                    <div
                      key={pt}
                      className="flex items-start gap-3.5 rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-black mt-0.5">
                        ✓
                      </span>
                      <div>
                        <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{pt}</p>
                        <p className="text-xs text-slate-500 mt-1">
                          Engineered for maximum reliability, speed, and real-time responsiveness.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* KEY FEATURES TAB: Dedicated Expanded Features View with Highlight SVG */}
            {activeTab === "key-features" && (
              <motion.div
                key="features-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-purple-50/70 via-white to-white border border-purple-200 p-6 sm:p-10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 text-2xl shadow-sm">
                    ⚙️
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                      Core Capabilities &amp; Key Features
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-purple-600 mt-0.5">
                      Comprehensive platform functionality designed for enterprise operations
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-12 items-center">
                  {/* Left Feature Cards */}
                  <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                    {project.keyFeatures.map((feat) => (
                      <div
                        key={feat.title}
                        className="flex items-start gap-3.5 rounded-2xl bg-white border border-purple-100 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition-all"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 text-lg shadow-sm mt-0.5">
                          {feat.icon}
                        </span>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{feat.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Authentic Highlight SVG Illustration */}
                  {svgData?.HighlightImg && (
                    <div className="lg:col-span-5 rounded-3xl bg-white border border-purple-100 p-4 sm:p-5 shadow-sm flex flex-col items-center justify-center">
                      <span className="text-xs font-mono font-bold text-purple-700 uppercase mb-2">
                        System Highlights &amp; Architecture
                      </span>
                      <div className="w-full max-w-[340px] h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                        <svgData.HighlightImg className="max-w-full max-h-full w-auto h-auto object-contain select-none" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TECHNOLOGY TAB: Dedicated Expanded Tech Stack View with Tech SVG */}
            {activeTab === "technology" && (
              <motion.div
                key="technology-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-blue-50/70 via-white to-white border border-blue-200 p-6 sm:p-10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 text-2xl shadow-sm">
                    💻
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                      Engineered Technology Stack
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                      Modern frameworks, cloud microservices, and high-performance databases
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-12 items-center">
                  {/* Left: Technology Stack Badges */}
                  <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                    {project.technologies.map((tech) => {
                      const techName = typeof tech === 'string' ? tech : tech.name;
                      const techDesc = typeof tech === 'string' ? "Production Architecture" : tech.description;
                      return (
                        <div
                          key={techName}
                          className="flex items-start gap-3.5 rounded-2xl bg-white border border-blue-100 p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                            <TechIconByName name={techName} className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm sm:text-base font-bold text-slate-900 font-mono leading-tight">{techName}</p>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{techDesc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: Authentic Tech Illustration SVG */}
                  {svgData?.TechImg && (
                    <div className="lg:col-span-5 rounded-3xl bg-white border border-blue-100 p-4 sm:p-5 shadow-sm flex flex-col items-center justify-center">
                      <span className="text-xs font-mono font-bold text-blue-700 uppercase mb-2">
                        Cloud &amp; Framework Blueprint
                      </span>
                      <div className="w-full max-w-[340px] h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                        <svgData.TechImg className="max-w-full max-h-full w-auto h-auto object-contain select-none" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* RESULTS TAB: Dedicated Expanded Results View */}
            {activeTab === "results" && (
              <motion.div
                key="results-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-emerald-50/70 via-white to-white border border-emerald-200 p-6 sm:p-10 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 text-2xl shadow-sm">
                    📊
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                      Measurable Results &amp; Quantifiable Business Outcomes
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 mt-0.5">
                      Verified operational ROI, user scale, and system performance milestones
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {project.businessImpact.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center rounded-3xl bg-white border border-emerald-100 p-6 text-center shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <span className="text-3xl mb-2">{item.icon}</span>
                      <p className="text-3xl sm:text-4xl font-black text-[#0076e4] font-mono leading-tight">
                        {item.value}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-2 leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* GALLERY TAB: Dedicated Full Application Screens & Authentic SVGs Walkthrough */}
            {activeTab === "gallery" && (
              <motion.div
                key="gallery-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-gradient-to-b from-blue-50/70 via-white to-white border border-blue-200 p-6 sm:p-10 shadow-lg space-y-8"
              >
                {/* Header & Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 text-2xl shadow-sm">
                      📱
                    </span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#0b192c]">
                        Project Gallery &amp; Application Screens
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                        High-definition vector mockups and module walkthrough
                      </p>
                    </div>
                  </div>

                  {/* Filter Tabs if both Web & Mobile exist */}
                  {svgData && svgData.webScreens.length > 0 && svgData.mobScreens.length > 0 && (
                    <div className="flex items-center gap-1.5 rounded-2xl bg-white border border-slate-200 p-1 shadow-sm">
                      <button
                        type="button"
                        onClick={() => setGalleryFilter("all")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                          galleryFilter === "all"
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        All Screens ({allScreens.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setGalleryFilter("web")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                          galleryFilter === "web"
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Web Screens ({svgData.webScreens.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setGalleryFilter("mobile")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                          galleryFilter === "mobile"
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Mobile Screens ({svgData.mobScreens.length})
                      </button>
                    </div>
                  )}
                </div>

                {/* Spotlight Active Screen Viewer */}
                {currentScreen && (
                  <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-bold font-mono uppercase">
                          {currentScreen.type === "web" ? "🖥️ Web Application" : "📱 Mobile Application"}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0b192c]">
                          {currentScreen.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrevScreen}
                          aria-label="Previous screen"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          ←
                        </button>
                        <span className="text-xs font-mono font-bold text-slate-500 px-1.5">
                          {activeScreenIndex + 1} of {allScreens.length}
                        </span>
                        <button
                          type="button"
                          onClick={handleNextScreen}
                          aria-label="Next screen"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
                        >
                          →
                        </button>
                      </div>
                    </div>

                    {/* SVG Vector Render Container - Clean Controlled Dimensions */}
                    <div className="relative w-full max-w-[580px] h-[220px] sm:h-[280px] md:h-[320px] mx-auto rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-50/20 border border-slate-200/90 p-3 sm:p-4 flex items-center justify-center overflow-hidden shadow-inner">
                      {currentScreen.Component ? (
                        <currentScreen.Component className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-md select-none" />
                      ) : (
                        <div className="text-center text-slate-400">
                          <span className="text-4xl">📱</span>
                          <p className="text-sm mt-2 font-bold">{currentScreen.title}</p>
                        </div>
                      )}
                    </div>

                    <p className="mt-3.5 text-xs sm:text-sm text-slate-600 text-center leading-relaxed font-medium max-w-lg mx-auto">
                      {currentScreen.desc}
                    </p>
                  </div>
                )}

                {/* Complete Responsive Screen Grid with Authentic SVGs */}
                <div>
                  <h3 className="text-base font-extrabold text-[#0b192c] mb-4">
                    All Application Screen Modules ({filteredScreens.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredScreens.map((screen, idx) => {
                      const isSelected = currentScreen?.id === screen.id;
                      return (
                        <div
                          key={screen.id || idx}
                          onClick={() => {
                            const foundIdx = allScreens.findIndex((s) => s.id === screen.id);
                            if (foundIdx >= 0) setActiveScreenIndex(foundIdx);
                          }}
                          className={`cursor-pointer group flex flex-col justify-between rounded-3xl p-4 sm:p-5 transition-all duration-300 ${
                            isSelected
                              ? "bg-blue-50/90 border-2 border-blue-600 shadow-lg scale-101"
                              : "bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2.5">
                              <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase">
                                {screen.type === "web" ? "🖥️ Web Screen" : "📱 Mobile Screen"}
                              </span>
                              <span className="text-[11px] font-mono font-bold text-blue-600">
                                View Screen →
                              </span>
                            </div>

                            <div className="relative w-full h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 p-2.5 flex items-center justify-center overflow-hidden shadow-inner mb-3">
                              {screen.Component ? (
                                <screen.Component className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300 select-none" />
                              ) : (
                                <span className="text-3xl">📱</span>
                              )}
                            </div>

                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {screen.title}
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {screen.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 5. UNIFIED 1-ROW BOTTOM FOOTER: Prev Project + Center Blue CTA Banner + Next Project */}
        <section aria-label="Project navigation and consultation">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left: Previous Case Study Card */}
            <Link
              href={`/our-work/${prevProject.id}`}
              className="lg:col-span-3 group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1 text-left"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase font-mono group-hover:text-blue-600 transition-colors">
                <span>←</span>
                <span>Previous Case Study</span>
              </span>
              <div className="mt-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {prevProject.title}
                </p>
                <span className="mt-1 inline-block text-[11px] font-medium text-slate-500 font-mono">
                  {prevProject.industry}
                </span>
              </div>
            </Link>

            {/* Center: Blue CTA Banner on the SAME ROW */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 p-5 sm:p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-extrabold leading-tight">
                  Ready to Build Your Solution?
                </h3>
                <p className="text-xs text-blue-100 mt-1 max-w-md">
                  Let Koraltech Softwares engineer your software platform with precision.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-white text-blue-700 px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Schedule a Consultation →
                </Link>
              </div>
            </div>

            {/* Right: Next Case Study Card */}
            <Link
              href={`/our-work/${nextProject.id}`}
              className="lg:col-span-3 group flex flex-col justify-between text-right rounded-3xl bg-white border border-slate-200/90 p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <span className="inline-flex items-center justify-end gap-1.5 text-[11px] font-bold text-slate-400 uppercase font-mono group-hover:text-blue-600 transition-colors">
                <span>Next Case Study</span>
                <span>→</span>
              </span>
              <div className="mt-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {nextProject.title}
                </p>
                <span className="mt-1 inline-block text-[11px] font-medium text-slate-500 font-mono">
                  {nextProject.industry}
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
