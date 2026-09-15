import Link from "next/link";
import Image from "next/image";
import {
  PORTFOLIO_PROJECTS,
  FEATURED_PROJECT_IDS,
} from "@/lib/portfolio-content";

const PROJECT_ILLUSTRATIONS: Record<string, string> = {
  "art-learning-platform": "/assets/svg/Projectone.svg",
  "smart-parking-system": "/assets/svg/Flows.svg",
  "supply-chain-logistics": "/assets/svg/Offerings.svg",
  "healthcare-referral-app": "/assets/svg/Aboutusillus.svg",
  "multimodal-transport-portal": "/assets/svg/Banner.svg",
  "ecommerce-retail-engine": "/assets/svg/Ourvaluesillus.svg",
};

export default function PortfolioPreview() {
  const featured = PORTFOLIO_PROJECTS.filter((p) =>
    FEATURED_PROJECT_IDS.includes(p.id)
  ).slice(0, 3);

  return (
    <section className="section-spacing relative overflow-hidden" aria-labelledby="portfolio-preview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-koral-blue/30 bg-koral-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-koral-blue-light">
              <span className="h-1.5 w-1.5 rounded-full bg-koral-blue animate-pulse" />
              Selected Engineering Case Studies
            </div>
            <h2 id="portfolio-preview-heading" className="section-heading mt-3">
              Production Solutions Delivered Worldwide
            </h2>
            <p className="section-subheading">
              From high-concurrency learning platforms and smart parking IoT to enterprise logistics — explore our proven software product engineering.
            </p>
          </div>
          <Link href="/our-work" className="btn-secondary shrink-0 whitespace-nowrap shadow-md">
            <span>Explore All Projects</span>
            <span>→</span>
          </Link>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((project) => {
            const illustration = PROJECT_ILLUSTRATIONS[project.id] || "/assets/svg/Projectone.svg";
            return (
              <article
                key={project.id}
                className="glass-panel-hover group flex flex-col justify-between overflow-hidden border-white/10 rounded-2xl"
              >
                {/* Visual Preview Mockup Box */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-obsidian-950 to-obsidian-900 border-b border-white/10 p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 to-transparent opacity-60 pointer-events-none" />
                  <div className="relative h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={illustration}
                      alt={project.title}
                      width={240}
                      height={140}
                      className="h-full w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-300 backdrop-blur-md">
                    ● Production Live
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full border border-koral-blue/30 bg-koral-blue/10 px-2.5 py-0.5 text-xs font-semibold text-koral-blue-light">
                        {project.industry}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{project.type}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white group-hover:text-koral-blue-light transition-colors">
                      <Link href={`/our-work#${project.id}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-obsidian-950/80 border border-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/our-work#${project.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-glow hover:text-white transition-colors"
                    >
                      <span>Read Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

