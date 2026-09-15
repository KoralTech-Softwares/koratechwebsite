import Image from "next/image";
import { PORTFOLIO_PROJECTS, PORTFOLIO_INTRO } from "@/lib/portfolio-content";
import ConsultationCTA from "@/components/ConsultationCTA";

const PROJECT_ILLUSTRATIONS: Record<string, string> = {
  "art-learning-platform": "/assets/svg/Projectone.svg",
  "smart-parking-system": "/assets/svg/Flows.svg",
  "supply-chain-logistics": "/assets/svg/Offerings.svg",
  "healthcare-referral-app": "/assets/svg/Aboutusillus.svg",
  "multimodal-transport-portal": "/assets/svg/Banner.svg",
  "ecommerce-retail-engine": "/assets/svg/Ourvaluesillus.svg",
};

const INDUSTRIES = Array.from(new Set(PORTFOLIO_PROJECTS.map((p) => p.industry)));

export default function PortfolioGrid() {
  return (
    <>
      <section className="pt-32 pb-12" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-koral-blue/30 bg-koral-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-koral-blue-light">
              <span className="h-1.5 w-1.5 rounded-full bg-koral-blue animate-pulse" />
              Production Track Record
            </div>
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
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300"
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
            {PORTFOLIO_PROJECTS.map((project) => {
              const illustration = PROJECT_ILLUSTRATIONS[project.id] || "/assets/svg/Projectone.svg";
              return (
                <article
                  key={project.id}
                  id={project.id}
                  className="glass-panel-hover group scroll-mt-28 flex flex-col justify-between overflow-hidden border-white/10 rounded-2xl"
                >
                  {/* Visual Preview Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-obsidian-950 to-obsidian-900 border-b border-white/10 p-6 flex items-center justify-center">
                    <div className="relative h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={illustration}
                        alt={project.title}
                        width={280}
                        height={160}
                        className="h-full w-auto object-contain drop-shadow-xl"
                      />
                    </div>
                    <span className="absolute top-4 right-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-mono text-emerald-300 backdrop-blur-md">
                      ● Active Production
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-koral-teal/30 bg-koral-teal/10 px-3 py-1 text-xs font-semibold text-koral-teal">
                          {project.industry}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{project.type}</span>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-white group-hover:text-koral-blue-light transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {project.description}
                      </p>

                      <section className="mt-6" aria-label={`${project.title} highlights`}>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Key Deliverables &amp; Milestones
                        </h3>
                        <ul className="mt-2.5 space-y-2" role="list">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-teal-glow shrink-0 mt-0.5 font-bold">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <div className="mt-8 border-t border-white/5 pt-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                        Tech Stack:
                      </h3>
                      <ul className="flex flex-wrap gap-1.5" role="list">
                        {project.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-lg border border-koral-blue/20 bg-koral-blue/10 px-2.5 py-1 text-xs font-medium text-koral-blue-light font-mono"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

