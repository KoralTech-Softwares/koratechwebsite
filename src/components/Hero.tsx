import Link from "next/link";
import { COMPANY, STATS } from "@/lib/company-content";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl animate-slide-up text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-koral-blue/30 bg-koral-blue/10 px-4 py-1.5 text-sm font-medium text-koral-blue-light">
            <span className="h-2 w-2 rounded-full bg-koral-teal animate-pulse-glow" aria-hidden="true" />
            Bengaluru-based Software Development &amp; AI Integration
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl text-balance"
          >
            {COMPANY.tagline}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-slate-300 text-balance">
            {COMPANY.heroSubheadline}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl text-balance">
            {COMPANY.heroBody}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              {COMPANY.ctaPrimary}
            </Link>
            <Link href="/services" className="btn-secondary px-8 py-4 text-base">
              Explore Our Offerings
            </Link>
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl animate-slide-up grid-cols-2 gap-8 [animation-delay:300ms] sm:grid-cols-4">
          {STATS.map((metric) => (
            <div key={metric.label} className="text-center">
              <dt className="text-3xl font-bold text-white sm:text-4xl">{metric.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
