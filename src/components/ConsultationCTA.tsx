import Link from "next/link";
import { COMPANY } from "@/lib/company-content";

const RightIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    className="w-full h-[200px] md:h-[240px] drop-shadow-md"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft Floor Base */}
    <ellipse cx="200" cy="285" rx="170" ry="15" fill="#F1F5F9" opacity="0.6" />
    {/* Abstract Background Clouds / Blobs */}
    <path
      fill="#E0F2FE"
      d="M120 180c-30-20-40-70 10-90 40-15 90 20 130-10 30-20 80 0 90 40 10 50-20 80-60 90-50 15-120 0-170-30z"
      opacity="0.5"
    />
    <path
      fill="#BAE6FD"
      d="M280 150c20-30 70-20 80 10 10 40-40 60-70 40-20-15-20-40-10-50z"
      opacity="0.3"
    />
    <path
      fill="#E0F2FE"
      d="M60 200c-20-20-10-60 20-70 30-10 60 20 50 50-10 30-50 40-70 20z"
      opacity="0.6"
    />
    {/* Decorative Background Icons */}
    {/* 1. Sparkles (Top Center-Left) */}
    <path
      d="M 180 70 Q 185 70 185 65 Q 185 70 190 70 Q 185 70 185 75 Q 185 70 180 70 Z"
      fill="#7DD3FC"
    />
    <path
      d="M 170 85 Q 173 85 173 82 Q 173 85 176 85 Q 173 85 173 88 Q 173 85 170 85 Z"
      fill="#BAE6FD"
    />
    {/* 2. Grid of Dots (Top Right) */}
    <g fill="#93C5FD" opacity="0.7">
      <circle cx="340" cy="70" r="1.5" />
      <circle cx="350" cy="70" r="1.5" />
      <circle cx="360" cy="70" r="1.5" />
      <circle cx="340" cy="80" r="1.5" />
      <circle cx="350" cy="80" r="1.5" />
      <circle cx="360" cy="80" r="1.5" />
    </g>
    {/* 3. Curved Dashes / Arcs (Mid Left) */}
    <g
      stroke="#BAE6FD"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.8"
    >
      <path d="M 70 100 A 15 15 0 0 0 60 115" />
      <path d="M 80 90 A 25 25 0 0 0 50 120" />
    </g>
    {/* Left Plant Leaves Cluster */}
    <g className="drop-shadow-sm">
      {/* Top large leaf */}
      <path
        d="M125 270 Q 60 230 40 140 Q 90 170 120 220 Z"
        fill="#4ADE80"
        opacity="0.9"
      />
      {/* Bottom wide leaf */}
      <path
        d="M130 275 Q 70 280 20 240 Q 80 220 125 250 Z"
        fill="#22C55E"
        opacity="0.95"
      />
      {/* Inner dark leaf */}
      <path d="M135 270 Q 90 200 80 130 Q 120 180 140 240 Z" fill="#16A34A" />
    </g>
    {/* Right Plant Leaves Cluster */}
    <g className="drop-shadow-sm">
      {/* Top large leaf */}
      <path
        d="M310 270 Q 360 230 380 130 Q 330 180 300 230 Z"
        fill="#4ADE80"
        opacity="0.9"
      />
      {/* Bottom wide leaf */}
      <path
        d="M305 275 Q 360 290 400 240 Q 350 230 305 255 Z"
        fill="#22C55E"
        opacity="0.95"
      />
      {/* Inner dark leaf */}
      <path d="M300 260 Q 330 200 345 135 Q 310 175 295 240 Z" fill="#16A34A" />
    </g>
    {/* Books */}
    {/* Bottom Book: GROWTH (Yellow) */}
    <rect x="125" y="255" width="170" height="25" rx="3" fill="#FBBF24" />
    <rect x="125" y="255" width="20" height="25" fill="#F59E0B" />{" "}
    {/* Spine edge */}
    {/* Growth Book Spine Icon (Orange circle with white play button) */}
    <circle cx="135" cy="267.5" r="5" fill="#EA580C" />
    <polygon points="133.5,264.5 133.5,270.5 137.5,267.5" fill="#FFFFFF" />
    <rect x="145" y="260" width="145" height="15" fill="#FEF3C7" />
    <text
      x="210"
      y="271.5"
      fontSize="11"
      fontWeight="bold"
      fill="#B45309"
      textAnchor="middle"
      letterSpacing="1"
    >
      GROWTH
    </text>
    {/* Middle Book: SOLUTIONS (Blue) */}
    <rect x="135" y="230" width="150" height="25" rx="3" fill="#3B82F6" />
    <rect x="135" y="230" width="20" height="25" fill="#2563EB" />{" "}
    {/* Spine edge */}
    {/* Solutions Book Spine Icon (Dark blue circle with white dot) */}
    <circle cx="145" cy="242.5" r="5" fill="#1E3A8A" />
    <circle cx="145" cy="242.5" r="1.5" fill="#FFFFFF" />
    <rect x="155" y="235" width="125" height="15" fill="#DBEAFE" />
    <text
      x="210"
      y="246.5"
      fontSize="10"
      fontWeight="bold"
      fill="#1E3A8A"
      textAnchor="middle"
      letterSpacing="1"
    >
      SOLUTIONS
    </text>
    {/* Top Book: IDEAS (Light Blue) */}
    <rect x="145" y="210" width="130" height="20" rx="3" fill="#60A5FA" />
    <rect x="145" y="210" width="20" height="20" fill="#3B82F6" />{" "}
    {/* Spine edge */}
    <circle cx="155" cy="220" r="3" fill="#FFFFFF" opacity="0.7" />
    <rect x="165" y="215" width="105" height="10" fill="#EFF6FF" />
    <text
      x="210"
      y="223.5"
      fontSize="9"
      fontWeight="bold"
      fill="#1E3A8A"
      textAnchor="middle"
      letterSpacing="1"
    >
      IDEAS
    </text>
    {/* Laptop */}
    {/* Base */}
    <path d="M70 205 l 230 0 l 10 10 l -250 0 Z" fill="#94A3B8" />
    <path d="M70 205 l 230 0 l 0 2 l -230 0 Z" fill="#CBD5E1" />
    {/* Screen */}
    <rect
      x="105"
      y="110"
      width="160"
      height="95"
      rx="4"
      fill="#FFFFFF"
      stroke="#E2E8F0"
      strokeWidth="1.5"
    />
    <rect x="110" y="115" width="150" height="85" rx="2" fill="#0F172A" />
    {/* Full KoralTech Logo loaded via foreignObject exactly as in the Header */}
    <foreignObject x="120" y="132.5" width="130" height="50">
      <img
        src="/logo.svg"
        alt="KoralTech Logo"
        className="w-full h-full object-contain pointer-events-none opacity-90"
      />
    </foreignObject>
    {/* Coffee Cup */}
    <rect
      x="295"
      y="210"
      width="45"
      height="70"
      rx="2"
      fill="#FFFFFF"
      stroke="#F1F5F9"
      strokeWidth="1"
    />
    <path d="M290 200 h 55 v 10 h -55 z" fill="#1E293B" />
    <path d="M295 195 h 45 v 5 h -45 z" fill="#334155" />
    <text
      x="317.5"
      y="239"
      fontSize="9"
      fill="#1E293B"
      textAnchor="middle"
      fontWeight="bold"
    >
      Build
    </text>
    <text
      x="317.5"
      y="252"
      fontSize="9"
      fill="#1E293B"
      textAnchor="middle"
      fontWeight="bold"
    >
      Innovate
    </text>
    <text
      x="317.5"
      y="265"
      fontSize="9"
      fill="#1E293B"
      textAnchor="middle"
      fontWeight="bold"
    >
      Grow
    </text>
    <text
      x="317.5"
      y="278"
      fontSize="8"
      fill="#1E293B"
      textAnchor="middle"
      fontWeight="bold"
    >
      Together
    </text>
  </svg>
);

export default function ConsultationCTA() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-16 lg:py-20 scroll-mt-20 w-full"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 p-12 text-center sm:p-16 shadow-2xl shadow-blue-500/20 text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              id="cta-heading"
              className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight text-balance"
            >
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
              Improving your business or taking the first step digitally —
              Koraltech Softwares will give you the best and unique solution to
              expand your business and capture the world.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-lg shadow-black/10 transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Make Your Journey with Us</span>
                <span>→</span>
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
