"use client";

import Image from "next/image";

const CLIENT_LOGOS = [
  {
    name: "Native Special",
    src: "/assets/images/client-nativespecial.png",
    height: 40,
    width: 140,
  },
  {
    name: "Fliber",
    src: "/assets/images/client-fliber.png",
    height: 38,
    width: 125,
  },
  {
    name: "New Masters Academy",
    src: "/assets/images/client-newmasters.png",
    height: 40,
    width: 140,
  },
  {
    name: "Seal Emblem",
    src: "/assets/images/client-seal.png",
    height: 42,
    width: 42,
  },
  {
    name: "Innominds",
    src: "/assets/images/client-innominds.png",
    height: 38,
    width: 140,
  },
  {
    name: "Vardpersonal",
    src: "/assets/images/client-vardpersonal.png",
    height: 36,
    width: 135,
  },
  {
    name: "Sports Coach+",
    src: "/assets/images/client-sportscoach.png",
    height: 38,
    width: 125,
  },
  {
    name: "DNP",
    src: "/assets/images/client-dnp.png",
    height: 40,
    width: 50,
  },
  {
    name: "Parkese",
    src: "/assets/images/client-parkese.png",
    height: 38,
    width: 120,
  },
];

// Quadrupled array to ensure seamless infinite looping without gaps
const CAROUSEL_ITEMS = [
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
  ...CLIENT_LOGOS,
];

export default function ClientLogosBar() {
  return (
    <section
      className="w-full py-8 sm:py-10 relative z-20 overflow-hidden border-y border-slate-200/60 bg-white/80 backdrop-blur-md"
      aria-label="Trusted by businesses across industries"
    >
      <div className="mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Centered Header Tag */}
        <div className="text-center mb-5 sm:mb-6">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-400">
            TRUSTED BY BUSINESSES ACROSS INDUSTRIES
          </p>
        </div>

        {/* Full-Width Infinite Carousel (Left-to-Right Edge to Edge) */}
        <div className="relative w-full overflow-hidden marquee-mask py-2">
          {/* Left & Right Soft Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          <div className="flex w-max items-center gap-10 sm:gap-16 animate-marquee-ltr hover:[animation-play-state:paused]">
            {CAROUSEL_ITEMS.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex shrink-0 items-center justify-center px-4 py-2 rounded-2xl bg-white/60 border border-slate-100/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-9 sm:h-11 w-auto object-contain max-w-[160px] filter drop-shadow-sm select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


