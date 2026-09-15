"use client";

import Link from "next/link";

const OFFERINGS = [
  {
    id: "web-app-development",
    title: "Web App Development",
    description: "Scalable, secure, and high-performance web applications built for enterprise grade growth.",
    cardBg: "bg-gradient-to-b from-blue-50/60 via-white to-white hover:from-blue-50/90",
    borderHover: "hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(0,118,228,0.12)]",
    iconBg: "bg-blue-100/90 text-blue-600 border-blue-200/80 shadow-sm",
    linkColor: "text-blue-600 hover:text-blue-700",
    badge: "Full-Stack",
    badgeColor: "bg-blue-100/80 text-blue-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native & cross-platform mobile solutions for iOS and Android with intuitive fluid UX.",
    cardBg: "bg-gradient-to-b from-purple-50/60 via-white to-white hover:from-purple-50/90",
    borderHover: "hover:border-purple-300 hover:shadow-[0_12px_32px_rgba(147,51,234,0.12)]",
    iconBg: "bg-purple-100/90 text-purple-600 border-purple-200/80 shadow-sm",
    linkColor: "text-purple-600 hover:text-purple-700",
    badge: "iOS & Android",
    badgeColor: "bg-purple-100/80 text-purple-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "ai-integrated-development",
    title: "AI Integrated Development",
    description: "Intelligent solutions with AI/ML integration, LLMs, and neural agents to solve real-world problems.",
    cardBg: "bg-gradient-to-b from-amber-50/60 via-white to-white hover:from-amber-50/90",
    borderHover: "hover:border-amber-300 hover:shadow-[0_12px_32px_rgba(217,119,6,0.12)]",
    iconBg: "bg-amber-100/90 text-amber-600 border-amber-200/80 shadow-sm",
    linkColor: "text-amber-600 hover:text-amber-700",
    badge: "GenAI & ML",
    badgeColor: "bg-amber-100/80 text-amber-800",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Reliable, scalable, and cost-effective multi-cloud solutions on Azure, AWS, and GCP with automated CI/CD.",
    cardBg: "bg-gradient-to-b from-emerald-50/60 via-white to-white hover:from-emerald-50/90",
    borderHover: "hover:border-emerald-300 hover:shadow-[0_12px_32px_rgba(5,150,105,0.12)]",
    iconBg: "bg-emerald-100/90 text-emerald-600 border-emerald-200/80 shadow-sm",
    linkColor: "text-emerald-600 hover:text-emerald-700",
    badge: "Cloud DevOps",
    badgeColor: "bg-emerald-100/80 text-emerald-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Solutions",
    description: "Turn your raw data into actionable insights, real-time dashboards, and automated predictive pipelines.",
    cardBg: "bg-gradient-to-b from-rose-50/60 via-white to-white hover:from-rose-50/90",
    borderHover: "hover:border-rose-300 hover:shadow-[0_12px_32px_rgba(225,29,72,0.12)]",
    iconBg: "bg-rose-100/90 text-rose-600 border-rose-200/80 shadow-sm",
    linkColor: "text-rose-600 hover:text-rose-700",
    badge: "BI & Insights",
    badgeColor: "bg-rose-100/80 text-rose-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "support-maintenance",
    title: "Support & Maintenance",
    description: "Continuous 24/7 SLA monitoring, proactive upgrades, bug fixes, and performance tuning for long-term success.",
    cardBg: "bg-gradient-to-b from-cyan-50/60 via-white to-white hover:from-cyan-50/90",
    borderHover: "hover:border-cyan-300 hover:shadow-[0_12px_32px_rgba(8,145,178,0.12)]",
    iconBg: "bg-cyan-100/90 text-cyan-600 border-cyan-200/80 shadow-sm",
    linkColor: "text-cyan-600 hover:text-cyan-700",
    badge: "24/7 SLA",
    badgeColor: "bg-cyan-100/80 text-cyan-700",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="offerings" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden scroll-mt-20" aria-labelledby="offerings-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Top Header matching Image 1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-2">
              <span>OUR OFFERINGS</span>
              <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
            </p>
            <h2 id="offerings-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2.5 leading-tight">
              Comprehensive IT Services
              <br />
              <span className="text-blue-600">for Your Business</span>
            </h2>
          </div>

          <div className="max-w-xl text-left flex flex-col items-start lg:items-end gap-3.5">
            <p className="text-sm leading-relaxed text-slate-600 font-normal">
              At Koraltech Softwares, we offer a comprehensive range of high-tech IT services designed to
              meet your business needs — from requirement analysis and structured requirement
              engineering through development, deployment, support, and maintenance.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-blue-200/90 bg-white hover:bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:border-blue-300 hover:shadow active:scale-95"
            >
              <span>View All Services</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 6 Grid Cards with Distinct Colorful Identities */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((item) => (
            <article
              key={item.id}
              className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 ${item.cardBg} ${item.borderHover}`}
            >
              <div>
                {/* Header Row: Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="mt-5 text-xl font-bold text-[#0b192c] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-3 border-t border-slate-100/80">
                <Link
                  href={`/services#${item.id}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5 ${item.linkColor}`}
                >
                  <span>Learn More</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

