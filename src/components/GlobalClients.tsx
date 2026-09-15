import { INDUSTRIES } from "@/lib/company-content";

const GLOBAL_MARKETS = [
  {
    country: "United States",
    code: "USA",
    flag: "🇺🇸",
    region: "North America",
    focus: "Enterprise Web Apps & Cloud Modernization",
    timezone: "EST / CST / PST",
  },
  {
    country: "United Kingdom",
    code: "London",
    flag: "🇬🇧",
    region: "Europe",
    focus: "Fintech & API Architecture",
    timezone: "GMT / BST",
  },
  {
    country: "United Arab Emirates",
    code: "UAE",
    flag: "🇦🇪",
    region: "Middle East",
    focus: "Smart Mobility & IoT BLE Apps",
    timezone: "GST (+4)",
  },
  {
    country: "India (HQ)",
    code: "Bengaluru",
    flag: "🇮🇳",
    region: "Asia Pacific",
    focus: "Core Engineering & AI Research",
    timezone: "IST (+5:30)",
  },
  {
    country: "Australia",
    code: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    focus: "HealthTech & E-Commerce Platforms",
    timezone: "AEST / AWST",
  },
];

export default function GlobalClients() {
  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="global-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-glow">
            Global Footprint
          </p>
          <h2 id="global-heading" className="section-heading mt-2">
            Trusted by Businesses Across 5 Continents
          </h2>
          <p className="section-subheading mx-auto">
            Delivering cutting-edge web, mobile, and AI solutions with seamless cross-timezone coordination, dedicated sprint communication, and 24/7 SLA coverage.
          </p>
        </header>

        {/* Global Market Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-14">
          {GLOBAL_MARKETS.map((market) => (
            <div
              key={market.code}
              className="glass-panel-hover p-6 flex flex-col justify-between border-white/10 relative overflow-hidden group"
            >
              <div className="pointer-events-none absolute -right-6 -bottom-6 text-7xl opacity-10 group-hover:scale-125 transition-transform duration-500">
                {market.flag}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{market.flag}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-accent/10 border border-teal-accent/30 px-2 py-0.5 text-[10px] font-mono text-teal-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
                    Live
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mt-4">{market.country}</h3>
                <p className="text-xs text-indigo-glow font-medium mt-0.5">{market.region}</p>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{market.focus}</p>
              </div>

              <div className="mt-5 border-t border-white/5 pt-3">
                <span className="font-mono text-[11px] text-slate-400 block">
                  Timezone: <strong className="text-slate-200">{market.timezone}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Domains Marquee Ticker */}
        <div className="rounded-2xl border border-white/10 bg-obsidian-900/60 p-6 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Industry Domains We Serve Worldwide:
            </span>
            <span className="text-xs text-indigo-glow font-medium">9+ Core Verticals</span>
          </div>

          <div className="relative w-full overflow-hidden marquee-mask">
            <div className="flex w-max gap-3 animate-marquee-fast hover:[animation-play-state:paused]">
              {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
                <span
                  key={`${industry}-${i}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

