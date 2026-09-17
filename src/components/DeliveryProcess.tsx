"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DELIVERY_PROCESS } from "@/lib/company-content";

const STAGE_ICONS = ["🔍", "📋", "⚡", "🚀", "🛡️"];

const STAGE_DELIVERABLES = [
  [
    "Stakeholder Workshops",
    "Domain Entity Modeling",
    "AI Feasibility Analysis",
    "SRS Document",
  ],
  [
    "User Story Mapping",
    "Sprint Backlog",
    "Database Schema",
    "Azure Architecture Plan",
  ],
  [
    "Next.js / React Web",
    "React Native Apps",
    "Node.js Microservices",
    "CI/CD Setup",
  ],
  [
    "Azure Production Deploy",
    "Automated Load Testing",
    "Security Audits",
    "Production Cutover",
  ],
  [
    "24/7 Monitoring & SLA",
    "Performance Tuning",
    "AI Engine Updates",
    "Incident Response",
  ],
];

export default function DeliveryProcess() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="about"
      className="pt-10 pb-6 lg:pt-12 lg:pb-6 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background glow highlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[450px] w-[850px] rounded-full bg-gradient-to-b from-blue-400/15 via-sky-300/10 to-transparent blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            AI-Augmented Engineering Methodology
          </div>
          <h2 id="process-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 tracking-tight mt-4">
            Structured 5-Stage Delivery Lifecycle
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed mx-auto max-w-2xl">
            From initial business discovery workshops to production CI/CD and
            continuous SLA maintenance — embedding AI tools at every milestone.
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
                className={`relative flex flex-col justify-between text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "border-blue-300 bg-gradient-to-b from-white via-blue-50/50 to-sky-50 shadow-xl shadow-blue-500/15 ring-1 ring-blue-400/40"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 hover:shadow-md"
                }`}
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/30 scale-110"
                          : "bg-slate-100 border border-slate-200 text-slate-500"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-2xl">
                      {STAGE_ICONS[index] || "⚡"}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 text-base sm:text-lg font-bold transition-colors ${
                      isSelected ? "text-blue-700" : "text-[#0b192c]"
                    }`}
                  >
                    {step.phase}
                  </h3>

                  <p className="mt-1 text-[11px] font-semibold text-sky-600 font-mono">
                    {step.question}
                  </p>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Stage Status Tag */}
                <div className="mt-5 border-t border-slate-200 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Stage 0{index + 1}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-blue-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
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
            className="mt-5 rounded-2xl border border-blue-200/90 bg-white p-5 sm:p-6 shadow-lg backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs lg:text-sm font-mono uppercase tracking-wider text-blue-600 font-semibold">
                  Stage 0{activeStage + 1} Deliverables &amp; Artifacts
                </span>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0b192c] mt-1">
                  {DELIVERY_PROCESS[activeStage].phase} &mdash;{" "}
                  <span className="text-slate-500 font-normal text-[15px] lg:text-lg">
                    {DELIVERY_PROCESS[activeStage].question}
                  </span>
                </h4>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs lg:text-sm font-mono text-blue-700">
                AI Integrated Gate
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5 lg:gap-3">
              {STAGE_DELIVERABLES[activeStage].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 lg:gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 lg:px-4 py-2 lg:py-2.5 text-xs sm:text-sm lg:text-[15px] font-medium text-slate-700 hover:border-blue-300 transition-colors"
                >
                  <span className="text-emerald-500 font-black lg:text-lg">✓</span>
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
