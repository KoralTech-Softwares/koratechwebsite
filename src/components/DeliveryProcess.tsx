"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DELIVERY_PROCESS } from "@/lib/company-content";

const STAGE_ICONS = ["🔍", "📋", "⚡", "🚀", "🛡️"];

const STAGE_DELIVERABLES = [
  ["Stakeholder Workshops", "Domain Entity Modeling", "AI Feasibility Analysis", "SRS Document"],
  ["User Story Mapping", "Sprint Backlog", "Database Schema", "Azure Architecture Plan"],
  ["Next.js / React Web", "React Native Apps", "Node.js Microservices", "CI/CD Setup"],
  ["Azure Production Deploy", "Automated Load Testing", "Security Audits", "Production Cutover"],
  ["24/7 Monitoring & SLA", "Performance Tuning", "AI Engine Updates", "Incident Response"],
];

export default function DeliveryProcess() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="process-heading">
      {/* Background glow highlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[450px] w-[850px] rounded-full bg-gradient-to-b from-teal-accent/15 via-koral-blue/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
            AI-Augmented Engineering Methodology
          </div>
          <h2 id="process-heading" className="section-heading mt-3">
            Structured 5-Stage Delivery Lifecycle
          </h2>
          <p className="section-subheading mx-auto">
            From initial business discovery workshops to production CI/CD and continuous SLA maintenance — embedding AI tools at every milestone.
          </p>
        </header>

        {/* 5 Step Connected Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-5">
          {DELIVERY_PROCESS.map((step, index) => {
            const isSelected = activeStage === index;

            return (
              <motion.button
                key={step.phase}
                type="button"
                onClick={() => setActiveStage(index)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative flex flex-col justify-between text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "border-teal-accent/60 bg-gradient-to-b from-obsidian-800/95 via-obsidian-900/95 to-obsidian-950/98 shadow-xl shadow-teal-accent/15 ring-1 ring-teal-accent/40"
                    : "border-white/10 bg-obsidian-800/60 hover:border-koral-blue/40 hover:bg-obsidian-800/90"
                }`}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-teal-accent to-koral-blue text-white shadow-lg shadow-teal-accent/30 scale-110"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-2xl">{STAGE_ICONS[index] || "⚡"}</span>
                  </div>

                  <h3
                    className={`mt-4 text-base sm:text-lg font-bold transition-colors ${
                      isSelected ? "text-teal-glow" : "text-white"
                    }`}
                  >
                    {step.phase}
                  </h3>

                  <p className="mt-1 text-[11px] font-semibold text-koral-blue-light font-mono">
                    {step.question}
                  </p>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>

                {/* Stage Status Tag */}
                <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Stage 0{index + 1}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-teal-glow">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-ping" />
                      Active Focus
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Stage Deliverables Deep Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-2xl border border-white/15 bg-obsidian-950/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-glow font-semibold">
                  Stage 0{activeStage + 1} Deliverables &amp; Artifacts
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {DELIVERY_PROCESS[activeStage].phase} &mdash;{" "}
                  <span className="text-slate-300 font-normal text-base">
                    {DELIVERY_PROCESS[activeStage].question}
                  </span>
                </h4>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-teal-accent/15 border border-teal-accent/30 px-3 py-1 text-xs font-mono text-teal-glow">
                AI Integrated Gate
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STAGE_DELIVERABLES[activeStage].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-medium text-slate-200"
                >
                  <span className="text-teal-accent font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


