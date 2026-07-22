import { PORTFOLIO_PROJECTS, PORTFOLIO_INTRO } from "@/lib/portfolio-content";
import ConsultationCTA from "@/components/ConsultationCTA";

const INDUSTRIES = Array.from(new Set(PORTFOLIO_PROJECTS.map((p) => p.industry)));

export default function PortfolioGrid() {
  return (
    <>
      <section className="pt-32 pb-12" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-koral-blue">
              Our Work
            </p>
            <h1 id="portfolio-heading" className="section-heading mt-3">
              {PORTFOLIO_INTRO.heading}
            </h1>
            <p className="section-subheading">{PORTFOLIO_INTRO.subheading}</p>
          </header>

          <ul
            className="mt-8 flex flex-wrap gap-2"
            role="list"
            aria-label="Project industries"
          >
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing pt-0" aria-label="Project portfolio">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {PORTFOLIO_PROJECTS.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="glass-panel scroll-mt-28 p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-koral-teal/30 bg-koral-teal/10 px-3 py-1 text-xs font-medium text-koral-teal">
                    {project.industry}
                  </span>
                  <span className="text-xs text-slate-500">{project.type}</span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <section className="mt-6" aria-label={`${project.title} highlights`}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Highlights
                  </h3>
                  <ul className="mt-2 space-y-1.5" role="list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-300">
                        &#10003; {highlight}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-6" aria-label={`${project.title} technology stack`}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technology Stack
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2" role="list">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-koral-blue/20 bg-koral-blue/10 px-2.5 py-1 text-xs font-medium text-koral-blue-light"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
