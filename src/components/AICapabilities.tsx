import { AI_CAPABILITIES } from "@/lib/company-content";

export default function AICapabilities() {
  return (
    <section className="py-20" aria-labelledby="ai-capabilities-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-accent">
            AI Integration &amp; Consulting
          </p>
          <h2 id="ai-capabilities-heading" className="section-heading mt-3">
            Empowering Innovation with AI-Integrated Development
          </h2>
          <p className="section-subheading mx-auto">
            Koraltech Softwares embeds AI at every stage of the software lifecycle — building
            AI-driven applications, automating document processing, and enabling speech-to-text and
            NLP capabilities for enterprise products.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {AI_CAPABILITIES.map((capability) => (
            <article key={capability.title} className="glass-panel relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-electric/10 blur-2xl"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{capability.description}</p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                role="list"
                aria-label={`${capability.title} technologies`}
              >
                {capability.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-indigo-electric/20 bg-indigo-electric/10 px-3 py-1 text-xs font-medium text-indigo-glow"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
