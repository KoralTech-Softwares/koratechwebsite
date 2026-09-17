"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceDetail } from "@/lib/service-details-data";
import { TechIconByName } from "@/components/TechIcons";
import HeroStats from "@/components/HeroStats";

import KeyFeaturesTab from "./KeyFeaturesTab";
import TechStackTab from "./TechStackTab";
import ProcessTab from "./ProcessTab";
import UseCasesTab from "./UseCasesTab";
import FAQsTab from "./FAQsTab";

const TABS = [
  { 
    name: "Overview", 
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
  },
  {
    name: "Key Features",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  },
  {
    name: "Technology Stack",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  {
    name: "Development Process",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  },
  {
    name: "Use Cases",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  {
    name: "FAQs",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

export default function ServiceDetailsClient({ service, serviceIndex }: { service: ServiceDetail, serviceIndex: number }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formattedIndex = serviceIndex < 10 ? `0${serviceIndex}` : serviceIndex.toString();

  const renderTabContent = () => {
    switch (activeTab) {
      case "Key Features":
        return <KeyFeaturesTab service={service} />;
      case "Technology Stack":
        return <TechStackTab service={service} />;
      case "Development Process":
        return <ProcessTab service={service} />;
      case "Use Cases":
        return <UseCasesTab service={service} />;
      case "FAQs":
        return <FAQsTab service={service} />;
      case "Overview":
      default:
        const cardClasses = "group relative bg-gradient-to-b from-blue-50/40 via-white to-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(0,118,228,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden";
        
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Top Left: Key Highlights */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-sky-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-4 z-10">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200/50">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">Key Highlights</h3>
              </div>
              <ul className="space-y-3 flex-1 relative z-10">
                {service.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mt-[3px]">
                      <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700 leading-tight group-hover:text-slate-900 transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Center: What We Do */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-3 z-10">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200/50">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">What We Do</h3>
              </div>
              <p className="text-[12px] text-slate-600 leading-relaxed mb-4 z-10">
                {service.whatWeDo.text}
              </p>
              <ul className="space-y-2.5 flex-1 relative z-10">
                {service.whatWeDo.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center mt-1 shadow-sm">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-700 leading-tight group-hover:text-slate-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Right: Technology Stack */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-4 z-10">
                <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200/50">
                  <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">Technology Stack</h3>
              </div>
              <div className="grid grid-cols-3 gap-2.5 flex-1 content-start relative z-10">
                {service.technologyStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl border border-slate-200/60 bg-white shadow-sm hover:border-purple-300 hover:bg-purple-50/30 transition-colors">
                    <div className="w-6 h-6 flex items-center justify-center">
                       <TechIconByName name={tech.icon} className="w-5 h-5 text-slate-700 transition-transform group-hover:scale-105" />
                    </div>
                    <span className="text-[9.5px] font-bold text-slate-600 text-center line-clamp-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Left: Common Use Cases */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-4 z-10">
                <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200/50">
                  <svg className="w-3.5 h-3.5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4 11V1h12v10h5v11H3V11h1zm7-8H6v5h5V3zm-1 3H8v1h2V6z"/></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">Common Use Cases</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {service.commonUseCases.map((useCase, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2.5 p-3 rounded-xl border border-slate-100/80 bg-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-pink-200 hover:bg-pink-50/40 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-pink-500">
                         <TechIconByName name={useCase.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">{useCase.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Center: Business Benefits */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-4 z-10">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200/50">
                  <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">Business Benefits</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {service.businessBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2.5 p-3 rounded-xl border border-slate-100/80 bg-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-amber-200 hover:bg-amber-50/40 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-amber-500">
                         <TechIconByName name={benefit.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Right: FAQs */}
            <div className={cardClasses}>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center gap-2.5 mb-4 z-10">
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200/50">
                  <svg className="w-3.5 h-3.5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                </div>
                <h3 className="text-[15px] font-extrabold text-slate-800 tracking-tight">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-2.5 relative z-10">
                {service.faqs.slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-2.5 last:border-0 last:pb-0">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex items-center justify-between w-full text-left focus:outline-none"
                    >
                      <span className="text-[12px] font-bold text-slate-700 hover:text-indigo-600 transition-colors pr-3">{faq.question}</span>
                      <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-indigo-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === idx && (
                      <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed pr-5 animate-in slide-in-from-top-1 fade-in duration-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        );

    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20 font-sans">
      
      {/* 1. Header / Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-12 lg:pb-16">
        <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-[#0284C7] transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Our Offerings
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mx-2 text-slate-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-900 font-semibold">{service.title} - Deep Dive</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-slate-400 font-mono text-sm">{formattedIndex}</span>
                <span className="h-[2px] w-12 bg-slate-200"></span>
                <span className="text-[#0284C7] font-bold text-xs uppercase tracking-widest">Deep Dive</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
                {service.title.split(" ").map((word, i) => (
                  <span key={i} className={i === service.title.split(" ").length - 1 ? "text-[#0284C7]" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg font-medium text-slate-700 mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8 max-w-lg">
                {service.description}
              </p>

              {/* Stats Row */}
              <HeroStats />
            </div>

            {/* Right Illustration - Vector Laptop & Mobile */}
            <div className="relative h-[280px] lg:h-[320px] w-full flex items-center justify-center mt-6 lg:mt-0">
              {/* Background Blob */}
              <div className="absolute w-[280px] h-[280px] bg-blue-50 rounded-full blur-3xl opacity-70"></div>
              
              {/* Vector Composition */}
              <svg viewBox="0 0 800 600" className="relative z-10 w-full h-full drop-shadow-2xl">
                {/* Laptop Base & Screen */}
                <path d="M 100 450 L 600 450 A 10 10 0 0 0 610 440 L 610 150 A 20 20 0 0 0 590 130 L 110 130 A 20 20 0 0 0 90 150 L 90 440 A 10 10 0 0 0 100 450 Z" fill="#1E293B" />
                <path d="M 100 435 L 600 435 L 590 145 L 110 145 Z" fill="#F8FAFC" />
                <path d="M 50 450 L 650 450 A 10 10 0 0 1 660 460 L 660 465 A 15 15 0 0 1 645 480 L 55 480 A 15 15 0 0 1 40 465 L 40 460 A 10 10 0 0 1 50 450 Z" fill="#CBD5E1" />
                <path d="M 300 450 L 400 450 L 410 460 L 290 460 Z" fill="#94A3B8" />
                
                {/* Laptop UI Mockup */}
                <rect x="110" y="145" width="480" height="40" fill="#FFFFFF" />
                <path d="M 110 185 L 590 185" stroke="#E2E8F0" strokeWidth="2" />
                <circle cx="130" cy="165" r="5" fill="#EF4444" />
                <circle cx="145" cy="165" r="5" fill="#F59E0B" />
                <circle cx="160" cy="165" r="5" fill="#10B981" />
                {/* Sidebar */}
                <rect x="110" y="186" width="100" height="249" fill="#F1F5F9" />
                <rect x="120" y="200" width="80" height="10" rx="3" fill="#38BDF8" opacity="0.8" />
                <rect x="120" y="225" width="60" height="8" rx="3" fill="#94A3B8" opacity="0.5" />
                <rect x="120" y="245" width="70" height="8" rx="3" fill="#94A3B8" opacity="0.5" />
                <rect x="120" y="265" width="50" height="8" rx="3" fill="#94A3B8" opacity="0.5" />
                {/* Content Area */}
                <rect x="230" y="205" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="340" y="205" width="100" height="60" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="450" y="205" width="120" height="60" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                {/* Chart Area */}
                <rect x="230" y="285" width="340" height="130" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                <path d="M 240 390 L 290 350 L 340 370 L 410 310 L 470 340 L 550 295" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Mobile Phone (Overlapping) */}
                <rect x="520" y="220" width="140" height="280" rx="20" fill="#FFFFFF" stroke="#475569" strokeWidth="6" />
                {/* Mobile Notch */}
                <path d="M 565 220 L 615 220 A 5 5 0 0 1 620 225 L 620 230 A 5 5 0 0 1 615 235 L 565 235 A 5 5 0 0 1 560 230 L 560 225 A 5 5 0 0 1 565 220 Z" fill="#475569" />
                {/* Mobile UI */}
                <rect x="535" y="260" width="110" height="80" rx="10" fill="#38BDF8" opacity="0.1" />
                <circle cx="560" cy="285" r="12" fill="#38BDF8" opacity="0.5" />
                <rect x="580" y="275" width="50" height="6" rx="3" fill="#0F172A" opacity="0.8" />
                <rect x="580" y="290" width="30" height="6" rx="3" fill="#64748B" opacity="0.5" />
                <rect x="535" y="355" width="50" height="50" rx="8" fill="#F1F5F9" />
                <rect x="595" y="355" width="50" height="50" rx="8" fill="#F1F5F9" />
                <rect x="535" y="415" width="50" height="50" rx="8" fill="#F1F5F9" />
                <rect x="595" y="415" width="50" height="50" rx="8" fill="#F1F5F9" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10 -mt-6 relative z-20">
        
        {/* 2. Tabs Navigation */}
        <div className="w-full">
          {/* Mobile Layout (Underline Tabs) */}
          <div className="md:hidden flex items-center gap-6 overflow-x-auto border-b border-slate-200 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 pb-3 pt-1 text-[15px] font-bold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  activeTab === tab.name
                    ? "border-[#0284C7] text-[#0284C7]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Desktop Layout (Segmented Control) */}
          <div className="hidden md:flex items-center w-full bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm">
            {TABS.map((tab, index) => (
              <div key={tab.name} className="flex items-center flex-1">
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 lg:px-4 py-3 rounded-xl text-[14px] xl:text-[15px] font-bold transition-all duration-300 ${
                    activeTab === tab.name
                      ? "bg-[#0284C7] text-white shadow-md shadow-[#0284C7]/20"
                      : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {tab.icon}
                  <span className="whitespace-nowrap">{tab.name}</span>
                </button>
                {/* Divider line between inactive tabs */}
                {index < TABS.length - 1 && activeTab !== tab.name && activeTab !== TABS[index + 1].name && (
                  <div className="w-[1px] h-6 bg-slate-200 mx-1 flex-shrink-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Content Area */}
        <div className="mt-6">
          {renderTabContent()}
        </div>

      </div>
    </div>
  );
}
