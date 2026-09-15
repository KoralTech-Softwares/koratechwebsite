"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, STATS } from "@/lib/company-content";
import {
  ReactIcon,
  AzureIcon,
  NodeIcon,
  AIIcon,
} from "@/components/TechIcons";

const ROTATING_HIGHLIGHTS = [
  "IT Solutions",
  "AI & Neural Automation",
  "Full-Stack Cloud Architecture",
  "Enterprise Web & Mobile Apps",
];

const LIFECYCLE_STAGES = [
  {
    id: "discover",
    step: "01",
    name: "Discover & Analyze",
    short: "Discovery",
    icon: "💡",
    tagline: "Structured Requirement Engineering & AI Feasibility",
    description:
      "We dissect business workflows, user stories, and data schemas to engineer ironclad architecture blueprints before writing code.",
    metrics: [
      { label: "Spec Precision", value: "100%" },
      { label: "AI Feasibility", value: "Verified" },
      { label: "Risk Mitigation", value: "Proactive" },
    ],
    logs: [
      "[DISCOVERY] Domain workflows & user journey mapped",
      "[AI_FEASIBILITY] NLP & OCR document pipelines validated",
      "[BLUEPRINT] System schema & Azure cloud topology drafted",
      "[STATUS] Architecture ready for sprint execution",
    ],
    tech: ["Requirement Modeling", "System Architecture", "Feasibility Study"],
  },
  {
    id: "engineer",
    step: "02",
    name: "Design & Develop",
    short: "Engineering",
    icon: "⚡",
    tagline: "High-Performance Web, Mobile & API Platforms",
    description:
      "Crafting production-ready applications with React, Next.js, React Native, and Node.js with ultra-fast latency and pixel perfection.",
    metrics: [
      { label: "Code Quality", value: "Strict TS" },
      { label: "Test Coverage", value: ">95%" },
      { label: "Core Web Vitals", value: "100/100" },
    ],
    logs: [
      "[FRONTEND] Next.js 14 App Router + Tailwind responsive UI built",
      "[MOBILE] React Native iOS & Android cross-platform synced",
      "[API] High-throughput Node.js microservices & Sequelize ORM",
      "[BUILD] Zero-warning production build compiled successfully",
    ],
    tech: ["React / Next.js", "React Native", "Node.js", "TypeScript"],
  },
  {
    id: "ai",
    step: "03",
    name: "AI Integration",
    short: "AI Pipeline",
    icon: "🤖",
    tagline: "Embedded Intelligence, Document OCR & Speech NLP",
    description:
      "Integrating cutting-edge machine learning, OCR document parsing, and voice-to-text intelligence directly into existing workflows.",
    metrics: [
      { label: "OCR Accuracy", value: "99.4%" },
      { label: "NLP Latency", value: "<180ms" },
      { label: "Automation", value: "85% Gain" },
    ],
    logs: [
      "[OCR_CORE] Automated invoice & multi-page PDF parser active",
      "[NLP_MODEL] Real-time speech transcription & sentiment engine",
      "[AGENT_ROUTING] Contextual enterprise workflow dispatching",
      "[INFERENCE] Azure AI & Firebase neural endpoints optimized",
    ],
    tech: ["Document AI", "Speech NLP", "Neural Automation", "Azure AI"],
  },
  {
    id: "deploy",
    step: "04",
    name: "Cloud & 24/7 SLA",
    short: "Cloud & Support",
    icon: "🚀",
    tagline: "Azure DevOps, Multi-Cloud & 24/7 Reliability",
    description:
      "Automated CI/CD pipelines, containerized deployments on Microsoft Azure, serverless scaling, and uninterrupted monitoring.",
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Global Regions", value: "5 Markets" },
      { label: "Support", value: "24/7 Live" },
    ],
    logs: [
      "[DEVOPS] Automated zero-downtime CI/CD deployment executed",
      "[AZURE_K8S] Multi-region autoscaling nodes healthy",
      "[MONITOR] 24/7 telemetry & automated incident mitigation live",
      "[SLA_STATUS] Production clusters running at 99.99% availability",
    ],
    tech: ["Microsoft Azure", "Azure Functions", "CI/CD DevOps", "24/7 SLA"],
  },
];

const TRUST_TAGS = [
  { icon: "⚡", text: "350+ Shipped Builds" },
  { icon: "🌍", text: "5 Global Markets (USA, UK, UAE, IN, AUS)" },
  { icon: "🤖", text: "100% AI Integration At Every Stage" },
  { icon: "🔒", text: "99.99% Cloud SLA Guarantee" },
];

export default function Hero() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Rotating title keyword
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % ROTATING_HIGHLIGHTS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Auto-play through lifecycle stages if user hasn't interacted
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % LIFECYCLE_STAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeStage = LIFECYCLE_STAGES[activeStageIndex];

  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Background Neon Ambient Orbs & Mesh Grids */}
      <div
        className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 h-[600px] w-[950px] rounded-full bg-gradient-to-b from-koral-blue/25 via-koral-teal/15 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-teal-accent/15 blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-electric/15 blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Text & Animations */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Enhanced Glowing Location & Capability Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-koral-blue/40 bg-gradient-to-r from-obsidian-900/90 via-koral-blue/15 to-obsidian-900/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-koral-blue-light backdrop-blur-xl shadow-lg shadow-koral-blue/15"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-accent"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">
              Bengaluru-based
            </span>
            <span className="text-slate-300 font-normal">
              Software Engineering &amp; AI Integration
            </span>
            <span className="hidden sm:inline-block rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-teal-glow">
              Global Hub
            </span>
          </motion.div>

          {/* Main Kinetic Headline with Dynamic Keyword Rotator */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight sm:leading-none text-balance"
          >
            <span>Your trusted partner in</span>
            <br />
            <span className="relative inline-block mt-2 min-h-[1.25em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={highlightIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="gradient-text font-black"
                >
                  {ROTATING_HIGHLIGHTS[highlightIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-200 sm:text-xl text-balance"
          >
            {COMPANY.heroSubheadline}
          </motion.p>

          {/* Hero Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base text-balance"
          >
            {COMPANY.heroBody}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="btn-primary group relative w-full sm:w-auto px-8 py-4 text-base font-bold shadow-xl shadow-koral-blue/30 overflow-hidden"
            >
              <span className="relative z-10">{COMPANY.ctaPrimary}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 text-xl font-bold"
              >
                →
              </motion.span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-base font-semibold border-white/20 bg-white/5 hover:bg-white/10 hover:border-koral-blue/50 transition-all shadow-lg"
            >
              <span>Explore Our Offerings</span>
              <span className="text-teal-glow text-sm">✨</span>
            </Link>
          </motion.div>

          {/* Trust Social Proof Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-300"
          >
            {TRUST_TAGS.map((tag) => (
              <div
                key={tag.text}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md"
              >
                <span>{tag.icon}</span>
                <span className="font-medium text-slate-300">{tag.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Central Interactive Visual: 4-Stage AI & Software Engineering Lifecycle Hub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mt-16 sm:mt-20 mx-auto max-w-5xl"
        >
          {/* Floating Decorative Tech Badges */}
          <div className="pointer-events-none hidden lg:block">
            {/* Top Left: React / Next.js */}
            <div className="animate-float-slow absolute -top-8 -left-10 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-obsidian-900/90 p-3 shadow-xl backdrop-blur-xl">
              <ReactIcon className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">React &amp; Next.js</p>
                <p className="text-[9px] text-teal-glow font-mono">Modern Frontend</p>
              </div>
            </div>

            {/* Bottom Left: Azure Cloud */}
            <div className="animate-float-reverse absolute -bottom-6 -left-8 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-obsidian-900/90 p-3 shadow-xl backdrop-blur-xl">
              <AzureIcon className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">Microsoft Azure</p>
                <p className="text-[9px] text-blue-400 font-mono">99.99% Cloud SLA</p>
              </div>
            </div>

            {/* Top Right: AI / NLP */}
            <div className="animate-float-reverse absolute -top-8 -right-10 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-obsidian-900/90 p-3 shadow-xl backdrop-blur-xl">
              <AIIcon className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">AI &amp; Neural NLP</p>
                <p className="text-[9px] text-emerald-400 font-mono">Document OCR Active</p>
              </div>
            </div>

            {/* Bottom Right: Node.js & APIs */}
            <div className="animate-float-slow absolute -bottom-6 -right-8 z-20 flex items-center gap-2 rounded-2xl border border-white/15 bg-obsidian-900/90 p-3 shadow-xl backdrop-blur-xl">
              <NodeIcon className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-none">Node.js &amp; TS APIs</p>
                <p className="text-[9px] text-teal-accent font-mono">High Concurrency</p>
              </div>
            </div>
          </div>

          {/* Main Visual Glass Dashboard Container */}
          <div className="glass-panel glow-border relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-obsidian-800/95 via-obsidian-900/95 to-obsidian-950/98 p-5 sm:p-8 shadow-2xl shadow-koral-blue/20 backdrop-blur-2xl">
            {/* Mockup Window Top Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block shadow-sm shadow-red-500/50" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block shadow-sm shadow-yellow-500/50" />
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block shadow-sm shadow-green-500/50" />
                <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
                  koraltech-suite // enterprise-ai-engine.v2
                </span>
              </div>

              {/* Real-time Status Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-indigo-electric/15 border border-indigo-electric/30 px-3 py-1 text-xs font-medium text-indigo-glow">
                  <span>⚡</span>
                  <span>AI Automation Ready</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-teal-accent/15 border border-teal-accent/30 px-3 py-1 text-xs font-medium text-teal-glow">
                  <span>☁️</span>
                  <span>Azure Multi-Cloud</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Live</span>
                </div>
              </div>
            </div>

            {/* Interactive Stage Selector Tabs */}
            <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-white/10 pb-4">
              {LIFECYCLE_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => {
                      setActiveStageIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative flex items-center gap-2 rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-koral-blue/20 to-teal-accent/15 border border-koral-blue/40 text-white shadow-md shadow-koral-blue/10"
                        : "bg-white/5 border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-base sm:text-lg">{stage.icon}</span>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Step {stage.step}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold truncate">
                        {stage.short}
                      </p>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-koral-blue to-teal-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stage Content & Interactive Terminal / Architecture Visual */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 lg:grid-cols-12 items-center"
              >
                {/* Left Column: Stage Details & Metrics */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-teal-accent/10 border border-teal-accent/30 px-3 py-1 text-xs font-semibold text-teal-glow">
                    <span>{activeStage.icon}</span>
                    <span>Stage {activeStage.step} &bull; {activeStage.name}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {activeStage.tagline}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {activeStage.description}
                  </p>

                  {/* Dynamic Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {activeStage.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center transition-transform hover:scale-105"
                      >
                        <p className="text-base sm:text-lg font-bold text-teal-glow">
                          {m.value}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Stage Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                    {activeStage.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-koral-blue/30 bg-koral-blue/10 px-2 py-0.5 text-xs font-mono text-koral-blue-light"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Live Diagnostic Terminal Simulation & Graphic */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-white/15 bg-obsidian-950/90 p-4 font-mono text-xs shadow-xl relative overflow-hidden">
                    {/* Top Terminal Status */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[11px] text-emerald-400 font-semibold">
                          LIVE EXECUTION LOGS
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">
                        {activeStage.id}.koraltech.in
                      </span>
                    </div>

                    {/* Terminal Stream Rows */}
                    <div className="space-y-2 py-1 min-h-[140px] flex flex-col justify-center">
                      {activeStage.logs.map((log, lIdx) => (
                        <motion.div
                          key={log}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: lIdx * 0.1 }}
                          className="flex items-start gap-2 text-slate-300"
                        >
                          <span className="text-teal-accent select-none">&gt;</span>
                          <span className="leading-tight text-[11px] sm:text-xs">
                            {log}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Status Ribbon in Terminal */}
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-koral-blue" />
                        AI Pipeline Synchronized
                      </span>
                      <span className="text-teal-glow font-bold">100% HEALTHY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Metric Counter Stats Grid */}
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel-hover flex flex-col items-center justify-center p-6 text-center border-white/10 rounded-2xl group transition-all duration-300 hover:scale-105"
            >
              <dt className="text-3xl font-extrabold text-white sm:text-4xl gradient-text group-hover:brightness-125 transition-all">
                {metric.value}
              </dt>
              <dd className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                {metric.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}


