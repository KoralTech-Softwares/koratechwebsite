import { CLOUD_CAPABILITIES } from "@/lib/company-content";

const CLOUD_ICONS = ["☁️", "⚙️", "🛡️", "💰"];

export default function CloudCapabilities() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" aria-labelledby="cloud-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>ENTERPRISE CLOUD ENGINEERING</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="cloud-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Multi-Cloud Infrastructure &amp; DevOps
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Zero-downtime cloud migration, automated Azure DevOps CI/CD pipelines, managed cloud environments, and proactive cost optimization on Azure, AWS, and Firebase.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2">
          {CLOUD_CAPABILITIES.map((capability, idx) => (
            <article
              key={capability.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_12px_32px_rgba(0,118,228,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-2xl shadow-inner transition-transform group-hover:scale-105">
                    {CLOUD_ICONS[idx] || "☁️"}
                  </span>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-mono font-bold text-blue-600">
                    Cloud Core 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Production Standard</span>
                <span className="text-emerald-600 font-bold">● 99.99% Availability</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
