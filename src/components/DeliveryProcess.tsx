"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DELIVERY_PROCESS } from "@/lib/company-content";

const STAGE_THEMES = [
  {
    icon: "🔍",
    gradientBar: "from-cyan-500 via-sky-500 to-blue-500",
    theme: "from-cyan-50/60 via-white to-white border-cyan-200/90 text-cyan-800",
    badge: "bg-cyan-100/90 text-cyan-800 border-cyan-200",
    activeRing: "border-cyan-500 bg-cyan-50/70 ring-2 ring-cyan-400/50 shadow-[0_12px_28px_rgba(6,182,212,0.2)]",
    numBadge: "from-cyan-600 to-blue-600",
    titleColor: "text-cyan-700",
  },
  {
    icon: "📋",
    gradientBar: "from-indigo-500 via-purple-500 to-violet-500",
    theme: "from-indigo-50/60 via-white to-white border-indigo-200/90 text-indigo-800",
    badge: "bg-indigo-100/90 text-indigo-800 border-indigo-200",
    activeRing: "border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-400/50 shadow-[0_12px_28px_rgba(99,102,241,0.2)]",
    numBadge: "from-indigo-600 to-purple-600",
    titleColor: "text-indigo-700",
  },
  {
    icon: "⚡",
    gradientBar: "from-blue-500 via-sky-500 to-teal-500",
    theme: "from-blue-50/60 via-white to-white border-blue-200/90 text-blue-800",
    badge: "bg-blue-100/90 text-blue-800 border-blue-200",
    activeRing: "border-blue-500 bg-blue-50/70 ring-2 ring-blue-400/50 shadow-[0_12px_28px_rgba(0,118,228,0.2)]",
    numBadge: "from-blue-600 to-sky-600",
    titleColor: "text-blue-700",
  },
  {
    icon: "🛡️",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    theme: "from-emerald-50/60 via-white to-white border-emerald-200/90 text-emerald-800",
    badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    activeRing: "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-400/50 shadow-[0_12px_28px_rgba(16,185,129,0.2)]",
    numBadge: "from-emerald-600 to-teal-600",
    titleColor: "text-emerald-700",
  },
  {
    icon: "🚀",
    gradientBar: "from-amber-500 via-orange-500 to-rose-500",
    theme: "from-amber-50/60 via-white to-white border-amber-200/90 text-amber-800",
    badge: "bg-amber-100/90 text-amber-800 border-amber-200",
    activeRing: "border-amber-500 bg-amber-50/70 ring-2 ring-amber-400/50 shadow-[0_12px_28px_rgba(217,119,6,0.2)]",
    numBadge: "from-amber-600 to-orange-600",
    titleColor: "text-amber-700",
  },
];

const STAGE_DELIVERABLES = [
  [
    { title: "Stakeholder Discovery Workshops", desc: "Aligning business objectives and scope" },
    { title: "Domain Entity & Logic Modeling", desc: "Data schemas and workflow blueprints" },
    { title: "AI Feasibility & ROI Analysis", desc: "Automated tooling and model selection" },
    { title: "Comprehensive SRS Document", desc: "Clear specifications and acceptance criteria" },
  ],
  [
    { title: "User Story Mapping & Epics", desc: "Iterative sprint backlog prioritization" },
    { title: "Sprint Backlog & Milestones", desc: "Timeboxed 2-week deliverables roadmap" },
    { title: "Database & Microservice Schema", desc: "Scalable PostgreSQL / Redis architectures" },
    { title: "Azure Cloud Infrastructure Plan", desc: "Secure multi-region topology design" },
  ],
  [
    { title: "Next.js / React Enterprise Web", desc: "High-performance reactive frontend interfaces" },
    { title: "Cross-Platform React Native Apps", desc: "Native iOS & Android mobile applications" },
    { title: "Node.js & Python AI Microservices", desc: "Clean RESTful & GraphQL API endpoints" },
    { title: "Automated CI/CD Pipeline Setup", desc: "Continuous testing and zero-downtime builds" },
  ],
  [
    { title: "Azure Production Cutover", desc: "Staging to live zero-downtime deployment" },
    { title: "Automated Load & Stress Testing", desc: "Validating 10,000+ concurrent user spikes" },
    { title: "OWASP Top-10 Security Audits", desc: "Penetration testing and vulnerability scans" },
    { title: "Production Data Migration", desc: "Lossless database synchronization" },
  ],
  [
    { title: "24/7 Global SLA Monitoring", desc: "Proactive uptime alerts and real-time logs" },
    { title: "Continuous Performance Tuning", desc: "Query caching, CDN and query speedups" },
    { title: "AI Model & Engine Updates", desc: "Iterative prompt tuning and model updates" },
    { title: "Rapid Incident Response Protocol", desc: "15-minute critical incident resolution" },
  ],
];

export default function DeliveryProcess() {
  const [activeStage, setActiveStage] = useState(0);
  const currentTheme = STAGE_THEMES[activeStage] || STAGE_THEMES[0];

  return (
    <section
      id="process"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden scroll-mt-20 w-full"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>ABOUT US &bull; ENGINEERING METHODOLOGY</span>
          </div>

          <h2
            id="process-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
          >
            Structured 5-Stage <span className="text-[#0076e4]">Delivery Lifecycle</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
            From initial business discovery workshops to production CI/CD and continuous SLA maintenance — embedding AI tools at every milestone.
          </p>
        </div>

        {/* 5 Step Themed Interactive Cards */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full">
          {DELIVERY_PROCESS.map((step, index) => {
            const isSelected = activeStage === index;
            const theme = STAGE_THEMES[index] || STAGE_THEMES[0];

            return (
              <motion.button
                key={step.phase}
                type="button"
                onClick={() => setActiveStage(index)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`group relative flex flex-col justify-between text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? theme.activeRing
                    : `border-slate-200/90 bg-gradient-to-b ${theme.theme} hover:shadow-lg`
                }`}
              >
                {/* Glowing Top Edge Highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.gradientBar} transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl text-xs font-black transition-all font-mono shadow-sm ${
                        isSelected
                          ? `bg-gradient-to-r ${theme.numBadge} text-white shadow-md scale-105`
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-2xl drop-shadow-sm">{theme.icon}</span>
                  </div>

                  <h3
                    className={`mt-4 text-base sm:text-lg font-bold transition-colors leading-snug ${
                      isSelected ? theme.titleColor : "text-[#0b192c]"
                    }`}
                  >
                    {step.phase}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-500 font-mono">
                    {step.question}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200/60 pt-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                    Stage 0{index + 1}
                  </span>
                  {isSelected ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                      Active Stage
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                      Click to View →
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Stage Deliverables Deep Dive Panel - Fully Enhanced UI */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 sm:mt-8 rounded-3xl border border-slate-200/90 bg-gradient-to-br ${currentTheme.theme} p-6 sm:p-8 shadow-xl relative overflow-hidden`}
          >
            {/* Top Accent Gradient Line */}
            <div
              className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${currentTheme.gradientBar}`}
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-2xl shadow-sm">
                  {currentTheme.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                      Stage 0{activeStage + 1} Detailed Blueprint
                    </span>
                    <span className="rounded-full bg-blue-100 text-blue-800 font-mono text-[10px] font-bold px-2 py-0.5 border border-blue-200">
                      Verified Milestone
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0b192c] mt-0.5">
                    {DELIVERY_PROCESS[activeStage].phase} &mdash;{" "}
                    <span className="text-slate-600 font-medium text-base sm:text-lg">
                      {DELIVERY_PROCESS[activeStage].question}
                    </span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>AI Integrated Gate</span>
                </span>
              </div>
            </div>

            {/* 4 Deliverables Artifact Cards */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                Key Deliverables &amp; Verified Artifacts:
              </p>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                {STAGE_DELIVERABLES[activeStage].map((item, idx) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700 font-mono text-xs font-black border border-blue-100">
                          0{idx + 1}
                        </span>
                        <span className="text-emerald-600 font-bold text-sm">✓ Ready</span>
                      </div>
                      <h5 className="text-sm font-bold text-[#0b192c] leading-snug">
                        {item.title}
                      </h5>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
