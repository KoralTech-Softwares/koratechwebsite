"use client";

import { CLOUD_CAPABILITIES } from "@/lib/company-content";

const CLOUD_ICONS = ["☁️", "⚙️", "🛡️", "💰"];

const CARD_THEMES = [
  {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-100",
    hoverBorder: "hover:border-indigo-300",
    hoverBg: "hover:bg-indigo-50/40",
  },
  {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-100",
    hoverBorder: "hover:border-purple-300",
    hoverBg: "hover:bg-purple-50/40",
  },
  {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-300",
    hoverBg: "hover:bg-blue-50/40",
  },
  {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    hoverBorder: "hover:border-amber-300",
    hoverBg: "hover:bg-amber-50/40",
  },
];

export default function CloudCapabilities() {
  return (
    <section
      className="py-12 relative overflow-hidden bg-slate-50 border-t border-slate-200"
      aria-labelledby="cloud-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Enterprise Cloud Engineering
          </div>
          <h2
            id="cloud-heading"
            className="text-4xl md:text-[44px] lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Multi-Cloud Infrastructure &amp; DevOps
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Zero-downtime cloud migration, automated Azure DevOps CI/CD
            pipelines, managed cloud environments, and proactive cost
            optimization on Azure, AWS, and Firebase.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_CAPABILITIES.map((capability, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            return (
              <article
                key={capability.title}
                className={`group relative flex flex-col justify-between p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${theme.hoverBorder} ${theme.hoverBg}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.bg} ${theme.border} border text-2xl shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      {CLOUD_ICONS[idx] || "☁️"}
                    </span>
                    <span
                      className={`rounded-full ${theme.bg} ${theme.border} border px-3 py-1 text-[11px] font-bold font-mono ${theme.text}`}
                    >
                      Cloud Core 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {capability.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-mono font-semibold">
                  <span>Production Standard</span>
                  <span className="text-emerald-600">
                    ● 99.99% Availability
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
