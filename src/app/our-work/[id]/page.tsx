import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/lib/portfolio-content";
import { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found — Koraltech Softwares",
    };
  }

  return {
    title: `${project.title} — Case Study | Koraltech Softwares`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const projectIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project: PortfolioProject = PORTFOLIO_PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PORTFOLIO_PROJECTS[projectIndex - 1] : PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1];
  const nextProject = projectIndex < PORTFOLIO_PROJECTS.length - 1 ? PORTFOLIO_PROJECTS[projectIndex + 1] : PORTFOLIO_PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#edf4fb] pt-24 sm:pt-28 pb-20 w-full">
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>←</span>
            <span>Back to All Case Studies</span>
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 truncate max-w-[240px] sm:max-w-md">{project.title}</span>
        </nav>

        {/* Hero Header Card */}
        <section className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Overview Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">
                  <span>{project.categoryIcon || "⭐"}</span>
                  <span>{project.industry}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Production</span>
                </span>
                <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-mono font-medium text-slate-600">
                  {project.type}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b192c] tracking-tight leading-tight">
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="mt-2 text-base sm:text-lg font-semibold text-blue-600">
                  {project.subtitle}
                </p>
              )}

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                {project.description}
              </p>

              {/* Client & Timeline Meta Info */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                {project.client && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Client
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {project.client}
                    </p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Location
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {project.location}
                    </p>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Timeline
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                      {project.duration}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Visual Mockup Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50/70 via-sky-50/40 to-slate-50 border border-slate-100 p-6 flex items-center justify-center shadow-inner overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-contain filter drop-shadow-md select-none p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quantifiable Impact / Key Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 font-mono">
              MEASURABLE BUSINESS OUTCOMES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm text-center transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <p className="text-2xl sm:text-3xl font-black text-[#0076e4] tracking-tight font-mono">
                    {metric.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenge vs Solution Deep Dive */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Challenge Box */}
          <div className="rounded-3xl bg-white border border-amber-200/70 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-amber-600 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 text-base">
                ⚠️
              </span>
              <h3 className="text-lg font-bold text-slate-900">The Challenge</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {project.challenge ||
                "Operating at scale without automated real-time systems caused critical operational bottlenecks, manual delays, and lack of visibility."}
            </p>
          </div>

          {/* Solution Box */}
          <div className="rounded-3xl bg-white border border-emerald-200/70 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-emerald-600 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 text-base">
                💡
              </span>
              <h3 className="text-lg font-bold text-slate-900">The Engineered Solution</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {project.solution ||
                "Koraltech built a high-performance modern web and mobile architecture featuring real-time stream sync, cloud automated deployments, and frictionless user flows."}
            </p>
          </div>
        </section>

        {/* Key Deliverables & Tech Stack Section */}
        <section className="mt-8 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Key Deliverables */}
            <div className="md:col-span-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono mb-4">
                KEY DELIVERABLES &amp; ARCHITECTURAL HIGHLIGHTS
              </h3>
              <ul className="space-y-3" role="list">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700 bg-slate-50/80 rounded-xl p-3 border border-slate-100"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
                TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 border border-blue-200/90 px-3.5 py-2 text-xs sm:text-sm font-bold text-blue-800 font-mono shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              {/* Engineering Standard Guarantee */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-blue-900 mb-1">
                  🛡️ Production Quality Guarantee
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered strictly following ISO/IEC software lifecycle standards, rigorous QA test suites, and 99.98% cloud uptime SLA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href={`/our-work/${prevProject.id}`}
            className="group flex items-center justify-between rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase font-mono">
                ← Previous Project
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-0.5">
                {prevProject.title}
              </p>
            </div>
          </Link>

          <Link
            href={`/our-work/${nextProject.id}`}
            className="group flex items-center justify-between text-right rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="w-full">
              <span className="text-[11px] font-bold text-slate-400 uppercase font-mono">
                Next Project →
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-0.5">
                {nextProject.title}
              </p>
            </div>
          </Link>
        </section>

        {/* Bottom CTA Card */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 p-6 sm:p-8 lg:p-10 text-white shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Build a High-Impact Solution for Your Business?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
            Let Koraltech Softwares engineer your next software platform with speed, reliability, and precision.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white text-blue-700 px-6 py-3 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Schedule a Technical Consultation →
            </Link>
            <Link
              href="/our-work"
              className="rounded-full bg-white/15 border border-white/30 text-white px-6 py-3 text-sm font-bold backdrop-blur-md hover:bg-white/25 transition-all"
            >
              Browse All Case Studies
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
