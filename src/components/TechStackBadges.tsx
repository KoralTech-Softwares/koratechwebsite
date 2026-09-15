"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/company-content";
import { TechIconByName } from "./TechIcons";

const CATEGORIES = ["All", "Frontend", "Mobile", "Backend", "Cloud", "Database", "DevOps", "AI"] as const;

const categoryBadgeColors: Record<string, string> = {
  Frontend: "border-blue-500/30 bg-blue-500/10 text-blue-300 group-hover:border-blue-400/60",
  Mobile: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 group-hover:border-cyan-400/60",
  Backend: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 group-hover:border-emerald-400/60",
  Cloud: "border-sky-500/30 bg-sky-500/10 text-sky-300 group-hover:border-sky-400/60",
  Database: "border-purple-500/30 bg-purple-500/10 text-purple-300 group-hover:border-purple-400/60",
  DevOps: "border-amber-500/30 bg-amber-500/10 text-amber-300 group-hover:border-amber-400/60",
  AI: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 group-hover:border-indigo-400/60",
};

export default function TechStackBadges() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTech =
    selectedCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === selectedCategory);

  const row1 = TECH_STACK.slice(0, 6);
  const row2 = TECH_STACK.slice(6);

  return (
    <section className="py-12 overflow-hidden relative bg-white border-t border-slate-200" aria-labelledby="tech-stack-heading">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-b from-blue-50 via-teal-50 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
            Tech Ecosystem &amp; Frameworks
          </p>
          <h2 id="tech-stack-heading" className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Engineered with Modern Technologies
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            High-velocity technology stack battle-tested across enterprise web apps, mobile solutions, cloud infrastructure, and autonomous AI automation.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isCurrent = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isCurrent
                    ? "text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 bg-slate-100 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isCurrent && (
                  <motion.div
                    layoutId="active-tech-pill"
                    className="absolute inset-0 rounded-full bg-blue-600"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {selectedCategory === "All" ? (
        <div className="relative z-10">
          {/* Infinite Scrolling Marquee Track 1 (Left) */}
          <div className="relative w-full overflow-hidden marquee-mask-light py-2">
            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1, ...row1].map((tech, idx) => (
                <div
                  key={`${tech.name}-1-${idx}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-1.5 shadow-sm">
                    <TechIconByName name={tech.name} className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block leading-tight">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infinite Scrolling Marquee Track 2 (Right / Reverse) */}
          <div className="relative w-full overflow-hidden marquee-mask-light py-2 mt-4">
            <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2, ...row2].map((tech, idx) => (
                <div
                  key={`${tech.name}-2-${idx}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-1.5 shadow-sm">
                    <TechIconByName name={tech.name} className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 block leading-tight">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Filtered Interactive Cards Grid */
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6"
            >
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2 shadow-sm">
                    <TechIconByName name={tech.name} className="h-7 w-7 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{tech.name}</h3>
                    <p className="text-xs text-slate-500 font-mono font-semibold">{tech.category} Architecture</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}


