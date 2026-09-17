"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-content";
import PortfolioCard from "./PortfolioCard";

const CATEGORY_FILTERS = [
  "All",
  "Healthcare",
  "Logistics",
  "Fintech",
  "Smart Cities",
  "E-Commerce",
];

// Map frontend filter categories to actual data industry names
const CATEGORY_MAP: Record<string, string[]> = {
  Healthcare: ["Healthcare"],
  Logistics: ["Logistics"],
  Fintech: ["Finance", "Revenue & Billing"],
  "Smart Cities": ["Travel & Transport", "Parking Management"],
  "E-Commerce": ["E-Commerce"],
};

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayedStories =
    activeFilter === "All"
      ? PORTFOLIO_PROJECTS.slice(0, 3)
      : PORTFOLIO_PROJECTS.filter((p) =>
          CATEGORY_MAP[activeFilter]?.includes(p.industry)
        ).slice(0, 3);

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
            <span>View All {PORTFOLIO_PROJECTS.length} Projects</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {displayedStories.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
