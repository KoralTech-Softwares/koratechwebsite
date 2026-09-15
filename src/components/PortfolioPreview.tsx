"use client";

import Link from "next/link";
import Image from "next/image";

const SUCCESS_STORIES = [
  {
    id: "sevanun",
    title: "Sevanun – Remote Healthcare Monitoring",
    category: "Healthcare",
    image: "/assets/images/project-sevanun.png",
    link: "/our-work/sevanun",
    cardBg: "bg-gradient-to-b from-cyan-50/70 via-white to-white",
    borderHover: "hover:border-cyan-300 hover:shadow-[0_16px_36px_rgba(6,182,212,0.14)]",
    badgeColor: "bg-cyan-100/90 text-cyan-800 border-cyan-200",
    btnColor: "group-hover:bg-cyan-600 group-hover:text-white",
    imgBg: "bg-gradient-to-br from-cyan-50 to-white",
  },
  {
    id: "native-special",
    title: "Online Retail Platform — Native Special",
    category: "E-Commerce",
    image: "/assets/images/project-native-special.png",
    link: "/our-work/native-special",
    cardBg: "bg-gradient-to-b from-emerald-50/70 via-white to-white",
    borderHover: "hover:border-emerald-300 hover:shadow-[0_16px_36px_rgba(16,185,129,0.14)]",
    badgeColor: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    btnColor: "group-hover:bg-emerald-600 group-hover:text-white",
    imgBg: "bg-gradient-to-br from-emerald-50 to-white",
  },
  {
    id: "parkese",
    title: "Smart Parking & Fleet Management — Parkese",
    category: "Smart Cities",
    image: "/assets/images/project-parkese.png",
    link: "/our-work/parkese",
    cardBg: "bg-gradient-to-b from-purple-50/70 via-white to-white",
    borderHover: "hover:border-purple-300 hover:shadow-[0_16px_36px_rgba(147,51,234,0.14)]",
    badgeColor: "bg-purple-100/90 text-purple-800 border-purple-200",
    btnColor: "group-hover:bg-purple-600 group-hover:text-white",
    imgBg: "bg-gradient-to-br from-purple-50 to-white",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      id="our-work"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden scroll-mt-20"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-2">
              <span>OUR WORK</span>
              <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
            </p>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2 leading-tight"
            >
              Discover Our Success Stories
            </h2>
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-slate-600">
              Explore our portfolio to see how we helped businesses transform ideas into impactful
              digital solutions.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-white hover:bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:border-blue-300 hover:shadow active:scale-95 shrink-0 group"
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 3 Rich Colorful Case Study Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((project) => (
            <article
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 ${project.cardBg} ${project.borderHover}`}
            >
              {/* Image Box with Floating Badges & Real Mockup */}
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl p-4 flex items-center justify-center border border-slate-100 shadow-inner ${project.imgBg}`}
              >
                <div className="relative h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain filter drop-shadow-md select-none"
                  />
                </div>

                {/* Bottom Left Category Pill Badge */}
                <div
                  className={`absolute bottom-3 left-3 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md ${project.badgeColor}`}
                >
                  {project.category}
                </div>

                {/* Bottom Right Circular Action Button */}
                <Link
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className={`absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-800 shadow-md transition-all duration-200 hover:scale-110 ${project.btnColor}`}
                >
                  <span className="text-sm font-bold leading-none">→</span>
                </Link>
              </div>

              {/* Title & Link */}
              <div className="pt-4 pb-1 px-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors line-clamp-1">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

