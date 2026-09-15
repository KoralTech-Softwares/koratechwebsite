"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/company-content";
import { TechIconByName } from "./TechIcons";

const CATEGORIES = ["All", "Frontend", "Mobile", "Backend", "Cloud", "Database", "DevOps", "AI"] as const;

export default function TechStackBadges() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTech =
    selectedCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === selectedCategory);

  const row1 = TECH_STACK.slice(0, 6);
  const row2 = TECH_STACK.slice(6);

  return (
    <section className="py-20 lg:py-24 overflow-hidden relative" aria-labelledby="tech-stack-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>TECH ECOSYSTEM &amp; FRAMEWORKS</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="tech-stack-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Engineered with Modern Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            High-velocity technology stack battle-tested across enterprise web apps, mobile solutions, cloud infrastructure, and autonomous AI automation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isCurrent = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isCurrent
                    ? "text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isCurrent && (
                  <motion.div
                    layoutId="active-tech-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-500"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {selectedCategory === "All" ? (
        <>
          {/* Scrolling Marquee Track 1 */}
          <div className="relative w-full overflow-hidden marquee-mask py-2">
            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1, ...row1].map((tech, idx) => (
                <div
                  key={`${tech.name}-1-${idx}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 hover:border-blue-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100/60 p-1.5 shadow-inner">
                    <TechIconByName name={tech.name} className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0b192c] block leading-tight">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Marquee Track 2 */}
          <div className="relative w-full overflow-hidden marquee-mask py-2 mt-3">
            <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2, ...row2].map((tech, idx) => (
                <div
                  key={`${tech.name}-2-${idx}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 hover:border-blue-200"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100/60 p-1.5 shadow-inner">
                    <TechIconByName name={tech.name} className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0b192c] block leading-tight">{tech.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Filtered Grid */
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
            >
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-105 hover:border-blue-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 p-2 shadow-inner">
                    <TechIconByName name={tech.name} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b192c] leading-snug">{tech.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{tech.category} Architecture</p>
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
