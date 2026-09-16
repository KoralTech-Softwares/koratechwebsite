"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AboutIcon from "@/components/icons/abouticon";
import DeliveryProcess from "@/components/DeliveryProcess";
import GlobalClients from "@/components/GlobalClients";
import { COMPANY } from "@/lib/company-content";

const COMPANY_STATS = [
  { icon: "📍", value: "Bengaluru, IN", label: "Global HQ & Tech Hub" },
  { icon: "🌐", value: "5 Markets", label: "USA, UK, UAE, IN, AUS" },
  { icon: "🚀", value: "350+", label: "Projects Delivered" },
  { icon: "⚡", value: "99.98%", label: "Platform SLA Uptime" },
];

const PILLARS = [
  {
    icon: "🎯",
    title: "Our Mission",
    gradientBar: "from-sky-500 via-blue-500 to-indigo-500",
    theme:
      "from-sky-50/50 via-white to-white border-sky-200/80 hover:border-sky-400 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]",
    badge: "bg-sky-50 text-sky-800 border-sky-200",
    desc: "To empower global businesses by engineering robust, scalable custom software platforms and integrating cutting-edge AI technologies that accelerate operational efficiency, reduce costs, and create lasting competitive advantage.",
    highlights: [
      "Custom Software Architectures Tailored to Business Workflows",
      "End-to-End Delivery from Discovery to 24/7 SLA Support",
      "Embedded AI Tools Across Every Engineering Phase",
    ],
  },
  {
    icon: "🌟",
    title: "Our Vision",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    theme:
      "from-emerald-50/50 via-white to-white border-emerald-200/80 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    desc: "To become the most trusted international software engineering partner for ambitious startups and global enterprises, renowned for unmatched technical excellence, agile execution, and transformative digital experiences.",
    highlights: [
      "Global Benchmark for Quality, Speed, and Reliability",
      "Pioneering Human-AI Hybrid Development Workflows",
      "Long-Term Strategic Technical Advisory & Partnership",
    ],
  },
  {
    icon: "⚙️",
    title: "Engineering Philosophy",
    gradientBar: "from-purple-500 via-violet-500 to-indigo-500",
    theme:
      "from-purple-50/50 via-white to-white border-purple-200/80 hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)]",
    badge: "bg-purple-50 text-purple-800 border-purple-200",
    desc: "We build zero-technical-debt software systems. By adopting clean modular codebases, microservice architectures, strict type safety, and automated CI/CD pipelines, our solutions are engineered for long-term scalability and security.",
    highlights: [
      "Strict TypeScript & Microservices Standards",
      "Automated Security, Load Testing & Audit Gates",
      "Cloud-Native High-Availability Infrastructure",
    ],
  },
];

const CORE_VALUES = [
  {
    icon: "🤝",
    title: "Client-Centric Partnership",
    badge: "Client Trust",
    gradientBar: "from-cyan-500 to-blue-500",
    color:
      "from-cyan-50/50 via-white to-white border-cyan-200/80 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]",
    badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    description:
      "Our unwavering commitment is to ensure our clients achieve their business goals. We listen deeply, operate with complete transparency, and treat every project as our own enterprise asset.",
  },
  {
    icon: "💡",
    title: "Innovation & Excellence",
    badge: "Technical Rigor",
    gradientBar: "from-emerald-500 to-teal-500",
    color:
      "from-emerald-50/50 via-white to-white border-emerald-200/80 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description:
      "Innovation fuels our drive to push technical boundaries. We combine battle-tested software engineering patterns with modern AI tools to deliver transformative digital products.",
  },
  {
    icon: "⚡",
    title: "AI-First Development",
    badge: "Next-Gen Tech",
    gradientBar: "from-purple-500 to-violet-500",
    color:
      "from-purple-50/50 via-white to-white border-purple-200/80 hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)]",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
    description:
      "Koraltech Softwares embeds AI across the entire software lifecycle — requirement synthesis, architecture modeling, code generation, test automation, and predictive monitoring.",
  },
  {
    icon: "🌍",
    title: "Global Delivery, Local Roots",
    badge: "Seamless SLA",
    gradientBar: "from-amber-500 to-orange-500",
    color:
      "from-amber-50/50 via-white to-white border-amber-200/80 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)]",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    description:
      "Headquartered in Bengaluru's tech corridor with delivery capabilities spanning USA, UK, UAE, India, and Australia — enabling real-time collaboration across all major global timezones.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#edf4fb] pt-24 sm:pt-28 pb-16 w-full">
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* 1. Top Breadcrumb Navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm hover:shadow"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          <div className="text-xs font-mono font-medium text-slate-500 bg-white/90 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <span>Koraltech Softwares</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-800 font-bold">Company</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-blue-600 font-bold">About Us</span>
          </div>
        </div>

        {/* 2. Hero Section - Matching Our Work Header Grid */}
        <section
          id="about-hero"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50/95 via-sky-50/80 to-white border border-blue-200/90 p-6 sm:p-8 lg:p-10 shadow-xl mb-8"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>WHO WE ARE &amp; GLOBAL HUB</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0b192c] tracking-tight leading-[1.15]">
                Pioneering Custom Software
                <br />
                <span className="text-[#0076e4]">
                  &amp; Enterprise AI Integration
                </span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-2xl">
                Headquartered in Bengaluru, India, Koraltech Softwares delivers
                bespoke web, mobile, and cloud solutions for clients across the
                United States, United Kingdom, UAE, India, and Australia. We
                combine full-stack engineering rigor with AI automation to
                deliver impactful digital solutions.
              </p>

              {/* 4 Quick Stat Cards */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COMPANY_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2.5 rounded-2xl bg-white/95 border border-slate-200/90 p-3 shadow-sm hover:border-blue-300 hover:shadow-md transition-all min-h-[64px]"
                  >
                    <span className="text-2xl shrink-0">{stat.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-black text-[#0076e4] leading-tight font-mono">
                        {stat.value}
                      </p>
                      <p className="text-[11px] font-bold text-slate-700 leading-snug mt-0.5 whitespace-normal">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Authentic SVG Vector Showcase */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[460px] h-[240px] sm:h-[280px] rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-sky-50/30 border border-slate-200/90 p-4 flex items-center justify-center shadow-lg overflow-hidden group"
              >
                <AboutIcon className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-md select-none transition-transform duration-500 group-hover:scale-105" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Guiding Pillars: Mission, Vision & Engineering Philosophy */}
        <section
          className="mb-8 sm:mb-10 w-full"
          aria-labelledby="pillars-heading"
        >
          <div className="flex items-center gap-3.5 mb-6 w-full">
            <span className="flex h-3 w-3 rounded-full bg-blue-600 animate-ping" />
            <h2
              id="pillars-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b192c] tracking-tight whitespace-nowrap"
            >
              Our Core Strategic Pillars
            </h2>
            <span className="rounded-full bg-blue-100/90 text-blue-700 font-mono text-xs font-black px-3 py-1 border border-blue-200 shadow-sm whitespace-nowrap">
              3 Strategic Pillars
            </span>
            <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-blue-400 via-sky-200 to-transparent rounded-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${pillar.theme} border p-6 sm:p-7 shadow-[0_6px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Glowing Top Edge Highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${pillar.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-2xl">
                      {pillar.icon}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-xs font-bold font-mono shadow-sm ${pillar.badge}`}
                    >
                      Pillar
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0b192c] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <ul
                    className="mt-5 space-y-2 pt-4 border-t border-slate-200/70"
                    role="list"
                  >
                    {pillar.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs font-medium text-slate-700 leading-snug"
                      >
                        <span className="text-blue-600 font-black">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Cultural Tenets & Core Principles */}
        <section
          className="mb-8 sm:mb-10 w-full"
          aria-labelledby="tenets-heading"
        >
          <div className="flex items-center gap-3.5 mb-6 w-full">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
            <h2
              id="tenets-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0b192c] tracking-tight whitespace-nowrap"
            >
              Cultural Tenets &amp; Principles
            </h2>
            <span className="rounded-full bg-emerald-100/90 text-emerald-800 font-mono text-xs font-black px-3 py-1 border border-emerald-200 shadow-sm whitespace-nowrap">
              4 Core Tenets
            </span>
            <div className="hidden sm:block flex-1 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-200 to-transparent rounded-full" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val) => (
              <article
                key={val.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b ${val.color} border p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Glowing Top Edge Highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${val.gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm text-2xl">
                      {val.icon}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold font-mono shadow-sm ${val.badgeColor}`}
                    >
                      {val.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b192c] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. 5-Stage Engineering Lifecycle (DeliveryProcess) */}
        <div className="w-full">
          <DeliveryProcess />
        </div>

        {/* 6. Global Clients & Footprint */}
        <div className="w-full">
          <GlobalClients />
        </div>

        {/* 7. Bottom Impact CTA Banner - Exactly matching Our Work Banner */}
        <section
          className="mt-8 sm:mt-12 w-full"
          aria-label="Consultation call to action"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-white border border-blue-200/80 p-6 sm:p-8 lg:p-12 shadow-xl w-full">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-400/15 blur-2xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-sky-400/15 blur-2xl" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
              {/* Left Content */}
              <div className="lg:col-span-8 text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-3 py-1 text-xs font-black uppercase tracking-wider text-sky-700 font-mono">
                  <span>🚀</span>
                  <span>READY TO BUILD SOMETHING IMPACTFUL?</span>
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b192c] tracking-tight">
                  Let&apos;s Create Your Next{" "}
                  <span className="text-[#0076e4]">Success Story</span>
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  Partner with Koraltech Softwares and turn your vision into a
                  real-world, high-performance solution.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0076e4] hover:bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Schedule a Consultation</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Bullseye Graphic & Checklist */}
              <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
                <div className="flex items-center gap-5 rounded-3xl bg-white/95 border border-blue-200/90 p-5 sm:p-6 shadow-xl backdrop-blur-md">
                  {/* Bullseye Icon Graphic */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-3xl text-blue-600 shadow-inner">
                    🎯
                  </div>

                  {/* Checklist */}
                  <div className="space-y-1.5 text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Ideas</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <span className="font-black">✔</span>
                      <span className="text-slate-800">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <aside className="sr-only" aria-label="Company location facts">
        <p>Koraltech Softwares is located in {COMPANY.location}.</p>
        <p>
          Koraltech Softwares has delivered projects for clients in{" "}
          {COMPANY.globalMarkets.join(", ")}.
        </p>
      </aside>
    </div>
  );
}
