"use client";

import { AI_CAPABILITIES } from "@/lib/company-content";

const AI_FEATURE_THEMES = [
  {
    icon: "📄",
    gradientBar: "from-cyan-500 via-sky-500 to-blue-500",
    theme: "from-cyan-50/50 via-white to-white border-cyan-200/90 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]",
    badge: "bg-cyan-100/90 text-cyan-800 border-cyan-200",
    iconBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
    techBadge: "bg-cyan-50/90 text-cyan-800 border-cyan-200",
  },
  {
    icon: "🎙️",
    gradientBar: "from-purple-500 via-violet-500 to-indigo-500",
    theme: "from-purple-50/50 via-white to-white border-purple-200/90 hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)]",
    badge: "bg-purple-100/90 text-purple-800 border-purple-200",
    iconBg: "bg-purple-50 border-purple-200 text-purple-700",
    techBadge: "bg-purple-50/90 text-purple-800 border-purple-200",
  },
  {
    icon: "🤖",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    theme: "from-emerald-50/50 via-white to-white border-emerald-200/90 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    techBadge: "bg-emerald-50/90 text-emerald-800 border-emerald-200",
  },
];

export default function AICapabilities() {
  return (
    <section
      id="ai-capabilities"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-labelledby="ai-capabilities-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>ARTIFICIAL INTELLIGENCE &amp; NEURAL WORKFLOWS</span>
          </div>

          <h2
            id="ai-capabilities-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
          >
            Intelligent Automation <span className="text-[#0076e4]">Embedded Across Your Stack</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
            From automated OCR document parsing pipelines to real-time speech NLP and predictive business analytics — we bring production-grade AI directly to your users.
          </p>
        </div>

        {/* 3 Catchy Themed Cards */}
        <div className="grid gap-6 md:grid-cols-3 w-full">
          {AI_CAPABILITIES.map((capability, idx) => {
            const theme = AI_FEATURE_THEMES[idx] || AI_FEATURE_THEMES[0];

            return (
              <article
                key={capability.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${theme.theme} border p-6 sm:p-7 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Glowing Top Edge Highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.iconBg} text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105`}
                    >
                      {theme.icon}
                    </div>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-xs font-bold font-mono shadow-sm ${theme.badge}`}
                    >
                      AI Module 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors leading-snug">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200/70 pt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                    Integrated AI Stack:
                  </span>
                  <ul
                    className="flex flex-wrap gap-1.5"
                    role="list"
                    aria-label={`${capability.title} technologies`}
                  >
                    {capability.technologies.map((tech) => (
                      <li
                        key={tech}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-bold font-mono shadow-sm ${theme.techBadge}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
