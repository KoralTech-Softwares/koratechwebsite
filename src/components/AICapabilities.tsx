import { AI_CAPABILITIES } from "@/lib/company-content";

const AI_FEATURE_ICONS = ["🤖", "📄", "🎙️"];

export default function AICapabilities() {
  return (
    <section className="py-12 relative overflow-hidden bg-white" aria-labelledby="ai-capabilities-heading">
      {/* Background neon ambient orb */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-teal-100 via-blue-100 to-transparent blur-3xl opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Artificial Intelligence &amp; Neural Workflows
          </div>
          <h2 id="ai-capabilities-heading" className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Intelligent Automation Embedded Across Your Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From automated OCR document parsing pipelines to real-time speech NLP and predictive business analytics — we bring production-grade AI directly to your users.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {AI_CAPABILITIES.map((capability, idx) => (
            <article
              key={capability.title}
              className="group relative flex flex-col justify-between overflow-hidden p-5 bg-white border border-slate-200 shadow-sm hover:shadow-md rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50/30"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-blue-100 to-teal-50 blur-2xl group-hover:scale-150 transition-transform duration-500"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {AI_FEATURE_ICONS[idx] || "✨"}
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-700">
                    AI Module 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4 relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-3 font-bold">
                  Integrated Technologies:
                </span>
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${capability.title} technologies`}
                >
                  {capability.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 font-mono shadow-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

