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
    <section id="process" className="py-20 lg:py-24 relative overflow-hidden bg-white/60 scroll-mt-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>ENGINEERING METHODOLOGY</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Structured 5-Stage Delivery Lifecycle
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
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
                    ? "border-blue-500 bg-blue-50/60 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/30"
                    : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/30 scale-110"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-2xl">{STAGE_ICONS[index] || "⚡"}</span>
                  </div>

                  <h3
                    className={`mt-4 text-base sm:text-lg font-bold transition-colors ${
                      isSelected ? "text-blue-600" : "text-[#0b192c]"
                    }`}
                  >
                    {step.phase}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-sky-600 font-mono">
                    {step.question}
                  </p>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    Stage 0{index + 1}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-blue-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                      Active
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
            className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                  Stage 0{activeStage + 1} Deliverables &amp; Artifacts
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0b192c] mt-1">
                  {DELIVERY_PROCESS[activeStage].phase} &mdash;{" "}
                  <span className="text-slate-600 font-normal text-base">
                    {DELIVERY_PROCESS[activeStage].question}
                  </span>
                </h4>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-600">
                AI Integrated Gate
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STAGE_DELIVERABLES[activeStage].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs font-semibold text-slate-800 shadow-sm"
                >
                  <span className="text-blue-600 font-bold">✓</span>
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
