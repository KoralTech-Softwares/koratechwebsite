"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const STAT_ITEMS = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    value: "50+",
    label: "Happy Clients",
    accent: "text-[#0076e4]",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    value: "100+",
    label: "Successful Projects",
    accent: "text-[#0076e4]",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    value: "99%",
    label: "Client Satisfaction",
    accent: "text-[#0076e4]",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    value: "Bengaluru, India",
    label: "Our Home, Global Impact",
    accent: "text-[#0b192c]",
  },
];

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Full-Bleed Background Office Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/bg.png"
          alt="Modern tech workspace"
          fill
          priority
          className="object-cover object-center filter brightness-[1.05] contrast-[0.95]"
        />
        {/* Smooth Gradient overlay: White on left for text readability, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0f6fc] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Inner Content Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Pill, Kinetic Headline, Subtitle, Dual CTAs & 4 Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 z-10 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>BENGALURU-BASED</span>
              <span className="text-slate-300">•</span>
              <span>SOFTWARE DEVELOPMENT &amp; AI INTEGRATION</span>
            </div>

            {/* Kinetic Main Heading */}
            <h1 className="mt-4 sm:mt-5 text-4xl font-extrabold tracking-tight text-[#0b192c] sm:text-5xl lg:text-[52px] leading-[1.14]">
              Your Trusted Partner
              <br />
              <span className="text-[#0076e4]">in IT Solutions</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              Driving innovation, enhancing efficiency, and achieving excellence
              with custom software development, AI integration, and cloud
              solutions that help businesses grow faster, smarter, and stronger.
            </p>

            {/* Dual CTAs */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
              <Link href="/contact" className="btn-primary group">
                <svg
                  className="h-5 w-5 opacity-90 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Make Your Journey with Us</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="btn-pill-dark group"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] transition-transform group-hover:scale-110">
                  ▶
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Neat 4-Stats Row directly in Hero Left Column */}
            <div className="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {STAT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-md hover:border-blue-200"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100/80 shadow-inner">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-base sm:text-lg font-black ${item.accent} leading-tight tracking-tight`}
                    >
                      {item.value}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-600 leading-tight mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Cloud Platform with 6 Nodes over Office Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[560px] drop-shadow-[0_20px_35px_rgba(0,118,228,0.18)]"
            >
              <Image
                src="/assets/images/hero-cloud-3d.png"
                alt="Koraltech 3D Cloud Platform with Custom Development, Cloud Solutions, AI & ML, Modern Technologies, Scalable Architecture, and Secure Solutions"
                width={700}
                height={480}
                priority
                className="w-full h-auto object-contain select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

    {/* Video Story Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-lg font-bold text-slate-900">
                Koraltech Softwares — Driving Enterprise Innovation
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center text-center p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#0076e4_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl mb-4 shadow-lg shadow-blue-500/50">
                  ▶
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Our Engineering Journey
                </h4>
                <p className="max-w-md text-sm text-slate-300">
                  Watch how Koraltech delivers requirement analysis, AI
                  integration, and full-stack cloud platforms to clients in USA,
                  UK, UAE, India, and Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
