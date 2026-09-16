import React from 'react';

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-8 w-full lg:flex lg:flex-nowrap lg:items-center lg:justify-start lg:gap-1.5 relative z-20">
      
      {/* Stat 1: Happy Clients */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-3 lg:py-2 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50 text-center sm:text-left whitespace-nowrap">
        <div className="flex-shrink-0 text-[#0284C7]">
          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-extrabold text-[#0F172A] leading-tight">50+</div>
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">Happy Clients</div>
        </div>
      </div>

      {/* Stat 2: Successful Projects */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-3 lg:py-2 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50 text-center sm:text-left whitespace-nowrap">
        <div className="flex-shrink-0 text-[#0284C7]">
          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        </div>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-extrabold text-[#0F172A] leading-tight">100+</div>
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">Successful Projects</div>
        </div>
      </div>

      {/* Stat 3: Client Satisfaction */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-3 lg:py-2 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50 text-center sm:text-left whitespace-nowrap">
        <div className="flex-shrink-0 text-[#0284C7]">
          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-extrabold text-[#0F172A] leading-tight">99%</div>
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">Client Satisfaction</div>
        </div>
      </div>

      {/* Stat 4: Location */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-3 lg:py-2 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-white/50 text-center sm:text-left whitespace-nowrap">
        <div className="flex-shrink-0 text-[#0284C7]">
          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-extrabold text-[#0F172A] leading-tight">Bengaluru, India</div>
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-500">Our Home, Global Impact</div>
        </div>
      </div>

    </div>
  );
}
