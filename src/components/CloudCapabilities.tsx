"use client";

import { CLOUD_CAPABILITIES } from "@/lib/company-content";

const CLOUD_THEMES = [
  {
    icon: "☁️",
    gradientBar: "from-sky-500 via-blue-500 to-indigo-500",
    theme: "from-sky-50/50 via-white to-white border-sky-200/90 hover:border-sky-400 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]",
    badge: "bg-sky-100/90 text-sky-800 border-sky-200",
    iconBg: "bg-sky-50 border-sky-200 text-sky-700",
    uptime: "99.99% Availability",
    slaColor: "text-sky-700",
  },
  {
    icon: "⚙️",
    gradientBar: "from-indigo-500 via-purple-500 to-violet-500",
    theme: "from-indigo-50/50 via-white to-white border-indigo-200/90 hover:border-indigo-400 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]",
    badge: "bg-indigo-100/90 text-indigo-800 border-indigo-200",
    iconBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
    uptime: "Zero-Downtime Builds",
    slaColor: "text-indigo-700",
  },
  {
    icon: "🛡️",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    theme: "from-emerald-50/50 via-white to-white border-emerald-200/90 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    uptime: "24/7 Monitored SLA",
    slaColor: "text-emerald-700",
  },
  {
    icon: "💰",
    gradientBar: "from-amber-500 via-orange-500 to-rose-500",
    theme: "from-amber-50/50 via-white to-white border-amber-200/90 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)]",
    badge: "bg-amber-100/90 text-amber-800 border-amber-200",
    iconBg: "bg-amber-50 border-amber-200 text-amber-700",
    uptime: "Up to 40% Cost Savings",
    slaColor: "text-amber-700",
  },
];

export default function CloudCapabilities() {
  return (
    <section
      id="cloud"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-labelledby="cloud-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>ENTERPRISE CLOUD ENGINEERING</span>
          </div>

          <h2
            id="cloud-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
          >
            Multi-Cloud Infrastructure <span className="text-[#0076e4]">&amp; DevOps</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
            Zero-downtime cloud migration, automated Azure DevOps CI/CD pipelines, managed cloud environments, and proactive cost optimization on Azure, AWS, and Firebase.
          </p>
        </div>

        {/* 4 Themed Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {CLOUD_CAPABILITIES.map((capability, idx) => {
            const theme = CLOUD_THEMES[idx] || CLOUD_THEMES[0];

            return (
              <article
                key={capability.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${theme.theme} border p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Glowing Top Edge Highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.iconBg} text-2xl shadow-sm transition-transform group-hover:scale-105`}
                    >
                      {theme.icon}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-xs font-bold font-mono shadow-sm ${theme.badge}`}
                    >
                      Cloud Core 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors leading-snug">
                    {capability.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200/70 pt-3.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-medium">Standard SLA</span>
                  <span className={`font-bold flex items-center gap-1.5 ${theme.slaColor}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{theme.uptime}</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
