import Link from "next/link";
import { COMPANY } from "@/lib/company-content";

const RightIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-[200px] md:h-[240px] drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
    {/* Soft Floor Base */}
    <ellipse cx="200" cy="285" rx="170" ry="15" fill="#F1F5F9" opacity="0.6" />
    
    {/* Abstract Background Clouds / Blobs */}
    <path fill="#E0F2FE" d="M120 180c-30-20-40-70 10-90 40-15 90 20 130-10 30-20 80 0 90 40 10 50-20 80-60 90-50 15-120 0-170-30z" opacity="0.5" />
    <path fill="#BAE6FD" d="M280 150c20-30 70-20 80 10 10 40-40 60-70 40-20-15-20-40-10-50z" opacity="0.3" />
    <path fill="#E0F2FE" d="M60 200c-20-20-10-60 20-70 30-10 60 20 50 50-10 30-50 40-70 20z" opacity="0.6" />
    
    {/* Decorative Background Icons */}
    {/* 1. Sparkles (Top Center-Left) */}
    <path d="M 180 70 Q 185 70 185 65 Q 185 70 190 70 Q 185 70 185 75 Q 185 70 180 70 Z" fill="#7DD3FC" />
    <path d="M 170 85 Q 173 85 173 82 Q 173 85 176 85 Q 173 85 173 88 Q 173 85 170 85 Z" fill="#BAE6FD" />
    
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
    <g stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8">
      <path d="M 70 100 A 15 15 0 0 0 60 115" />
      <path d="M 80 90 A 25 25 0 0 0 50 120" />
    </g>
    
    {/* Left Plant Leaves Cluster */}
    <g className="drop-shadow-sm">
      {/* Top large leaf */}
      <path d="M125 270 Q 60 230 40 140 Q 90 170 120 220 Z" fill="#4ADE80" opacity="0.9" />
      {/* Bottom wide leaf */}
      <path d="M130 275 Q 70 280 20 240 Q 80 220 125 250 Z" fill="#22C55E" opacity="0.95" />
      {/* Inner dark leaf */}
      <path d="M135 270 Q 90 200 80 130 Q 120 180 140 240 Z" fill="#16A34A" />
    </g>

    {/* Right Plant Leaves Cluster */}
    <g className="drop-shadow-sm">
      {/* Top large leaf */}
      <path d="M310 270 Q 360 230 380 130 Q 330 180 300 230 Z" fill="#4ADE80" opacity="0.9" />
      {/* Bottom wide leaf */}
      <path d="M305 275 Q 360 290 400 240 Q 350 230 305 255 Z" fill="#22C55E" opacity="0.95" />
      {/* Inner dark leaf */}
      <path d="M300 260 Q 330 200 345 135 Q 310 175 295 240 Z" fill="#16A34A" />
    </g>
    
    {/* Books */}
    {/* Bottom Book: GROWTH (Yellow) */}
    <rect x="125" y="255" width="170" height="25" rx="3" fill="#FBBF24" />
    <rect x="125" y="255" width="20" height="25" fill="#F59E0B" /> {/* Spine edge */}
    {/* Growth Book Spine Icon (Orange circle with white play button) */}
    <circle cx="135" cy="267.5" r="5" fill="#EA580C" />
    <polygon points="133.5,264.5 133.5,270.5 137.5,267.5" fill="#FFFFFF" />
    <rect x="145" y="260" width="145" height="15" fill="#FEF3C7" />
    <text x="210" y="271.5" fontSize="11" fontWeight="bold" fill="#B45309" textAnchor="middle" letterSpacing="1">GROWTH</text>

    {/* Middle Book: SOLUTIONS (Blue) */}
    <rect x="135" y="230" width="150" height="25" rx="3" fill="#3B82F6" />
    <rect x="135" y="230" width="20" height="25" fill="#2563EB" /> {/* Spine edge */}
    {/* Solutions Book Spine Icon (Dark blue circle with white dot) */}
    <circle cx="145" cy="242.5" r="5" fill="#1E3A8A" />
    <circle cx="145" cy="242.5" r="1.5" fill="#FFFFFF" />
    <rect x="155" y="235" width="125" height="15" fill="#DBEAFE" />
    <text x="210" y="246.5" fontSize="10" fontWeight="bold" fill="#1E3A8A" textAnchor="middle" letterSpacing="1">SOLUTIONS</text>

    {/* Top Book: IDEAS (Light Blue) */}
    <rect x="145" y="210" width="130" height="20" rx="3" fill="#60A5FA" />
    <rect x="145" y="210" width="20" height="20" fill="#3B82F6" /> {/* Spine edge */}
    <circle cx="155" cy="220" r="3" fill="#FFFFFF" opacity="0.7" />
    <rect x="165" y="215" width="105" height="10" fill="#EFF6FF" />
    <text x="210" y="223.5" fontSize="9" fontWeight="bold" fill="#1E3A8A" textAnchor="middle" letterSpacing="1">IDEAS</text>

    {/* Laptop */}
    {/* Base */}
    <path d="M70 205 l 230 0 l 10 10 l -250 0 Z" fill="#94A3B8" />
    <path d="M70 205 l 230 0 l 0 2 l -230 0 Z" fill="#CBD5E1" />
    {/* Screen */}
    <rect x="105" y="110" width="160" height="95" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
    <rect x="110" y="115" width="150" height="85" rx="2" fill="#0F172A" />
    
    {/* Full KoralTech Logo loaded via foreignObject exactly as in the Header */}
    <foreignObject x="120" y="132.5" width="130" height="50">
      <img src="/logo.svg" alt="KoralTech Logo" className="w-full h-full object-contain pointer-events-none opacity-90" />
    </foreignObject>
    
    {/* Coffee Cup */}
    <rect x="295" y="210" width="45" height="70" rx="2" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
    <path d="M290 200 h 55 v 10 h -55 z" fill="#1E293B" />
    <path d="M295 195 h 45 v 5 h -45 z" fill="#334155" />
    <text x="317.5" y="239" fontSize="9" fill="#1E293B" textAnchor="middle" fontWeight="bold">Build</text>
    <text x="317.5" y="252" fontSize="9" fill="#1E293B" textAnchor="middle" fontWeight="bold">Innovate</text>
    <text x="317.5" y="265" fontSize="9" fill="#1E293B" textAnchor="middle" fontWeight="bold">Grow</text>
    <text x="317.5" y="278" fontSize="8" fill="#1E293B" textAnchor="middle" fontWeight="bold">Together</text>
  </svg>
);

export default function ConsultationCTA() {
  return (
    <section className="py-12 bg-white" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#F0F7FF] via-[#E8F2FF] to-[#E0EBFF] shadow-sm border border-blue-50">
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content Area */}
            <div className="flex-1 p-8 md:p-10 lg:p-12 z-10">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold text-[#0284C7] uppercase tracking-widest">
                  READY TO START YOUR JOURNEY?
                </h3>
                <span className="h-[2px] w-8 bg-[#0284C7]"></span>
              </div>
              
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#1E293B] tracking-tight leading-tight mb-4">
                Improving your business or <br className="hidden md:block" />
                taking the <span className="text-[#2563EB]">first step digitally</span>
              </h2>
              
              {/* The thick blue accent line below the title */}
              <div className="h-1.5 w-16 bg-[#2563EB] rounded-full mb-6"></div>
              
              <p className="text-[15px] sm:text-base text-slate-500 leading-relaxed mb-6 max-w-xl">
                Koraltech Softwares will give you the best and unique solution to expand your business and capture the world.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#2563EB] rounded-xl shadow-md hover:bg-[#1D4ED8] transition-colors"
                >
                  <svg className="w-4 h-4 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Make Your Journey with Us <span className="ml-2 font-normal text-lg leading-none">&rarr;</span>
                </Link>
                
                <a 
                  href={`mailto:${COMPANY.email}`} 
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#1E293B] bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2.5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {COMPANY.email}
                </a>
              </div>
            </div>

            {/* Right Illustration Area */}
            <div className="flex-1 w-full md:w-auto relative flex items-center justify-center px-4 md:px-0 pb-10 md:pb-0">
              {/* Subtle background abstract shape to anchor the illustration */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
              <RightIllustration />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
