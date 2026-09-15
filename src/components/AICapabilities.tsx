import { AI_CAPABILITIES } from "@/lib/company-content";

const AI_FEATURE_ICONS = ["🤖", "📄", "🎙️"];

export default function AICapabilities() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-slate-50/50" aria-labelledby="ai-capabilities-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>ARTIFICIAL INTELLIGENCE &amp; NEURAL WORKFLOWS</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="ai-capabilities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Intelligent Automation Embedded Across Your Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            From automated OCR document parsing pipelines to real-time speech NLP and predictive business analytics — we bring production-grade AI directly to your users.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {AI_CAPABILITIES.map((capability, idx) => (
            <article
              key={capability.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_12px_32px_rgba(0,118,228,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-2xl shadow-inner transition-transform duration-300 group-hover:scale-105">
                    {AI_FEATURE_ICONS[idx] || "✨"}
                  </div>
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-600">
                    AI Module 0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {capability.description}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                  Integrated Technologies:
                </span>
                <ul
                  className="flex flex-wrap gap-1.5"
                  role="list"
                  aria-label={`${capability.title} technologies`}
                >
                  {capability.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-blue-100 bg-blue-50/70 px-2.5 py-1 text-xs font-semibold text-blue-600 font-mono"
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
