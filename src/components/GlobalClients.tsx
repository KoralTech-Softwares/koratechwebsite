"use client";

import { INDUSTRIES } from "@/lib/company-content";
import {
  FlagUSA,
  FlagUK,
  FlagUAE,
  FlagIndia,
  FlagAustralia,
} from "./CountryFlags";

const GLOBAL_MARKETS = [
  {
    country: "United States",
    code: "USA",
    FlagComponent: FlagUSA,
    region: "North America",
    focus: "Enterprise Web Apps & Cloud Modernization",
    timezone: "EST / CST / PST",
    gradientBar: "from-blue-500 via-sky-500 to-indigo-500",
    theme:
      "from-blue-50/50 via-white to-white border-blue-200/90 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(0,118,228,0.15)]",
    badge: "bg-blue-100/90 text-blue-800 border-blue-200",
    glowBg: "bg-blue-500/10",
  },
  {
    country: "United Kingdom",
    code: "London",
    FlagComponent: FlagUK,
    region: "Europe",
    focus: "Fintech & High-Security API Architectures",
    timezone: "GMT / BST",
    gradientBar: "from-indigo-500 via-purple-500 to-violet-500",
    theme:
      "from-indigo-50/50 via-white to-white border-indigo-200/90 hover:border-indigo-400 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]",
    badge: "bg-indigo-100/90 text-indigo-800 border-indigo-200",
    glowBg: "bg-indigo-500/10",
  },
  {
    country: "United Arab Emirates",
    code: "UAE",
    FlagComponent: FlagUAE,
    region: "Middle East",
    focus: "Smart Mobility, IoT BLE & Telemetry Apps",
    timezone: "GST (+4)",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    theme:
      "from-emerald-50/50 via-white to-white border-emerald-200/90 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    glowBg: "bg-emerald-500/10",
  },
  {
    country: "India (Global HQ)",
    code: "Bengaluru",
    FlagComponent: FlagIndia,
    region: "Asia Pacific",
    focus: "Core Engineering, AI Research & Delivery Hub",
    timezone: "IST (+5:30)",
    gradientBar: "from-amber-500 via-orange-500 to-rose-500",
    theme:
      "from-amber-50/50 via-white to-white border-amber-200/90 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)]",
    badge: "bg-amber-100/90 text-amber-800 border-amber-200",
    glowBg: "bg-amber-500/10",
  },
  {
    country: "Australia",
    code: "Australia",
    FlagComponent: FlagAustralia,
    region: "Oceania",
    focus: "HealthTech, Logistics & E-Commerce",
    timezone: "AEST / AWST",
    gradientBar: "from-cyan-500 via-sky-500 to-teal-500",
    theme:
      "from-cyan-50/50 via-white to-white border-cyan-200/90 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]",
    badge: "bg-cyan-100/90 text-cyan-800 border-cyan-200",
    glowBg: "bg-cyan-500/10",
  },
];

export default function GlobalClients() {
  return (
    <section
      id="global-clients"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-labelledby="global-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>GLOBAL FOOTPRINT &amp; MARKETS</span>
          </div>

          <h2
            id="global-heading"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
          >
            Trusted by Businesses{" "}
            <span className="text-[#0076e4]">Across 5 Continents</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl">
            Delivering cutting-edge web, mobile, and AI solutions with seamless
            cross-timezone coordination, dedicated sprint communication, and
            24/7 SLA coverage.
          </p>
        </div>

        {/* 5 Global Market Grid Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-10 w-full">
          {GLOBAL_MARKETS.map((market) => (
            <article
              key={market.code}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${market.theme} border p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5`}
            >
              {/* Glowing Top Edge Highlight */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${market.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div>
                <div className="flex items-center justify-between">
                  {/* Authentic SVG Flag Container */}
                  <div className="flex items-center gap-2 p-1 rounded-xl bg-white border border-slate-200/90 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <market.FlagComponent className="w-10 h-7 object-cover" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-700 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Sprint</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b192c] mt-4 leading-snug">
                  {market.country}
                </h3>
                <span
                  className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-bold font-mono mt-1 ${market.badge}`}
                >
                  {market.region}
                </span>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {market.focus}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-200/70 pt-3 relative z-10">
                <span className="font-mono text-[11px] text-slate-500 block">
                  Timezone:{" "}
                  <strong className="text-slate-800">{market.timezone}</strong>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Industry Domains Marquee Ticker */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span>Industry Domains We Serve Worldwide:</span>
            </span>
            <span className="text-xs text-blue-600 font-bold font-mono bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 self-start sm:self-auto">
              9+ Core Enterprise Verticals
            </span>
          </div>

          <div className="relative w-full overflow-hidden marquee-mask py-1">
            <div className="flex w-max gap-3 animate-marquee-fast hover:[animation-play-state:paused]">
              {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map(
                (industry, i) => (
                  <span
                    key={`${industry}-${i}`}
                    className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/70 to-sky-50/50 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-transform hover:scale-105"
                  >
                    {industry}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
