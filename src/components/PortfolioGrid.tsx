"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_INTRO,
  CATEGORIES_LIST,
} from "@/lib/portfolio-content";
import PortfolioCard from "./PortfolioCard";

const CATEGORY_ICONS: Record<string, string> = {
  All: "✨",
  Healthcare: "🩺",
  Logistics: "🚚",
  Finance: "📈",
  "E-Commerce": "🛍️",
  Education: "🎓",
  "Media & Entertainment": "🎬",
  "Travel & Transport": "🚗",
};

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const formatCardTitle = (title: string) => {
    if (title.includes(" – ")) return title.split(" – ")[1].trim();
    if (title.includes(" - ")) return title.split(" - ")[1].trim();
    return title;
  };

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => {
          if (activeCategory === "Healthcare")
            return p.industry === "Healthcare";
          if (activeCategory === "Logistics") return p.industry === "Logistics";
          if (activeCategory === "Finance")
            return (
              p.industry === "Finance" || p.industry === "Revenue & Billing"
            );
          if (activeCategory === "E-Commerce")
            return p.industry === "E-Commerce";
          if (activeCategory === "Education") return p.industry === "Education";
          if (activeCategory === "Media & Entertainment")
            return (
              p.industry === "Media & Entertainment" || p.industry === "Media"
            );
          if (activeCategory === "Travel & Transport")
            return (
              p.industry === "Travel & Transport" ||
              p.industry === "Parking Management"
            );
          return p.industry
            .toLowerCase()
            .includes(activeCategory.toLowerCase());
        });

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const moreSuccessStories = filteredProjects.filter((p) => !p.isFeatured);

  const displayFeatured =
    featuredProjects.length > 0
      ? featuredProjects
      : filteredProjects.slice(0, 3);
  const displayStories =
    moreSuccessStories.length > 0
      ? moreSuccessStories
      : filteredProjects.slice(3);

  return (
    <div className="min-h-screen bg-[#edf4fb] pt-24 sm:pt-28 pb-20 w-full">
      {/* Full-width clean container with balanced edge padding */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* 1. Hero Header Section - Left-to-Right Balanced Layout */}
        <section
          className="pt-4 sm:pt-6 pb-8"
          aria-labelledby="case-studies-heading"
        >
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{PORTFOLIO_INTRO.tag}</span>
              </div>

              <h1
                id="case-studies-heading"
                className="mt-4 text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0b192c] leading-[1.15]"
              >
                {PORTFOLIO_INTRO.heading}
                <span className="block mt-3 sm:mt-4 text-[#0076e4]">
                  {PORTFOLIO_INTRO.headingBlue}
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                {PORTFOLIO_INTRO.subheading}
              </p>
            </motion.div>

            {/* Right Top Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[540px] drop-shadow-[0_16px_36px_rgba(0,118,228,0.18)]"
              >
                <Image
                  src="/assets/images/case-studies-hero.png"
                  alt="Koraltech Live Telemetry Dashboard &amp; Innovative Solutions"
                  width={560}
                  height={340}
                  priority
                  className="w-full h-auto object-contain select-none"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Category Filter Pills Bar - Full Left-to-Right Stretch with No Cut-Off */}
        <section
          className="py-4 w-full"
          aria-label="Filter case studies by industry"
        >
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 w-full">
            {CATEGORIES_LIST.map((category) => {
              const isActive = activeCategory === category;
              const icon = CATEGORY_ICONS[category] || "📁";

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-500/30 scale-[1.03] border border-blue-400/40"
                      : "bg-white text-slate-700 border border-slate-200/90 shadow-sm hover:bg-blue-50/60 hover:border-blue-300 hover:text-blue-700 hover:shadow"
                  }`}
                >
                  <span className="text-base">{icon}</span>
                  <span className="whitespace-nowrap">{category}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. Section 1: Featured Case Studies (Full Left to Right 3-Column Grid) */}
        <section
          className="mt-10 sm:mt-12 w-full"
          aria-labelledby="featured-heading"
        >
          {/* Sleek Modern Header with Pulse Badge & Gradient Line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 mb-6 w-full">
            <div className="flex items-center gap-3.5">
              <span className="flex h-3 w-3 shrink-0 rounded-full bg-blue-600 animate-ping" />
              <h2
                id="featured-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b192c] tracking-tight whitespace-nowrap"
              >
                Featured Case Studies
              </h2>
            </div>
            <span className="shrink-0 rounded-full bg-blue-100/90 text-blue-700 font-mono text-xs font-black px-3 py-1 border border-blue-200 shadow-sm whitespace-nowrap">
              {displayFeatured.length} Flagship Systems
            </span>
            <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-blue-400 via-sky-200 to-transparent rounded-full" />
          </div>

          {/* 3 Catchy High-Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {displayFeatured.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. Section 2: More Success Stories (Full Left to Right 4-Column Grid) */}
        <section
          className="mt-14 sm:mt-16 w-full"
          aria-labelledby="stories-heading"
        >
          {/* Sleek Modern Header with Pulse Badge & Gradient Line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 mb-6 w-full">
            <div className="flex items-center gap-3.5">
              <span className="flex h-3 w-3 shrink-0 rounded-full bg-emerald-500 animate-ping" />
              <h2
                id="stories-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b192c] tracking-tight whitespace-nowrap"
              >
                More Success Stories
              </h2>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-100/90 text-emerald-800 font-mono text-xs font-black px-3 py-1 border border-emerald-200 shadow-sm whitespace-nowrap">
              {displayStories.length} Solutions Deployed
            </span>
            <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-200 to-transparent rounded-full" />
          </div>

          {/* More Success Stories 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {displayStories.map((project) => (
                <PortfolioCard key={project.id} project={project} variant="compact" />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* 5. Section 3: Bottom Impact CTA Banner */}
        <section
          className="mt-16 sm:mt-20 w-full"
          aria-label="Consultation call to action"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-white border border-blue-200/80 p-6 sm:p-8 lg:p-12 shadow-xl w-full">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-400/15 blur-2xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-sky-400/15 blur-2xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
              {/* Left Content */}
              <div className="lg:col-span-8 text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-xs font-black uppercase tracking-wider text-sky-700 font-mono">
                  <span>🚀</span>
                  <span>READY TO BUILD SOMETHING IMPACTFUL?</span>
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b192c] tracking-tight">
                  Let&apos;s Create Your Next{" "}
                  <span className="text-[#0076e4]">Success Story</span>
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  Partner with Koraltech Softwares and turn your vision into a
                  real-world, high-performance solution.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0076e4] hover:bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Schedule a Consultation</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Bullseye Graphic & Checklist */}
              <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
                <div className="flex items-center gap-5 rounded-3xl bg-white/95 border border-blue-200/90 p-5 sm:p-6 shadow-xl backdrop-blur-md">
                  {/* Bullseye Icon Graphic */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-3xl text-blue-600 shadow-inner">
                    🎯
                  </div>

                  {/* Checklist */}
                  <div className="space-y-1.5 text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Ideas</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
