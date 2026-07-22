import Link from "next/link";
import {
  PORTFOLIO_PROJECTS,
  FEATURED_PROJECT_IDS,
} from "@/lib/portfolio-content";

export default function PortfolioPreview() {
  const featured = PORTFOLIO_PROJECTS.filter((p) =>
    FEATURED_PROJECT_IDS.includes(p.id)
  ).slice(0, 3);

  return (
    <section className="section-spacing" aria-labelledby="portfolio-preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-koral-blue">
              Our Work
            </p>
            <h2 id="portfolio-preview-heading" className="section-heading mt-3">
              Showcasing Our Latest Solutions
            </h2>
            <p className="section-subheading mt-4 sm:max-w-none">
              From healthcare and logistics to fintech and e-commerce — see how Koraltech
              Softwares delivers production-ready applications worldwide.
            </p>
          </div>
          <Link href="/our-work" className="btn-secondary shrink-0 whitespace-nowrap">
            View All Projects
          </Link>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <article key={project.id} className="glass-panel group flex flex-col p-6">
              <span className="inline-flex w-fit rounded-full border border-koral-blue/30 bg-koral-blue/10 px-3 py-1 text-xs font-medium text-koral-blue-light">
                {project.industry}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-koral-blue-light transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5" role="list">
                {project.technologies.slice(0, 3).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400"
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
