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
    <section className="py-20 lg:py-24 relative overflow-hidden" aria-labelledby="global-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>GLOBAL FOOTPRINT</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="global-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Trusted by Businesses Across 5 Continents
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Delivering cutting-edge web, mobile, and AI solutions with seamless cross-timezone coordination, dedicated sprint communication, and 24/7 SLA coverage.
          </p>
        </header>

        {/* Global Market Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-14">
          {GLOBAL_MARKETS.map((market) => (
            <div
              key={market.code}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_12px_32px_rgba(0,118,228,0.08)] overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-4 -bottom-4 text-7xl opacity-5 group-hover:scale-125 transition-transform duration-500">
                {market.flag}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{market.flag}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                    Live
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0b192c] mt-4">{market.country}</h3>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">{market.region}</p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{market.focus}</p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="font-mono text-[11px] text-slate-500 block">
                  Timezone: <strong className="text-slate-800">{market.timezone}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Domains Marquee Ticker */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Industry Domains We Serve Worldwide:
            </span>
            <span className="text-xs text-blue-600 font-bold">9+ Core Verticals</span>
          </div>

          <div className="relative w-full overflow-hidden marquee-mask">
            <div className="flex w-max gap-3 animate-marquee-fast hover:[animation-play-state:paused]">
              {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
                <span
                  key={`${industry}-${i}`}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm"
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
