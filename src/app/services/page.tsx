import { createPageMetadata } from "@/lib/metadata";
import ServicesGrid from "@/components/ServicesGrid";
import AICapabilities from "@/components/AICapabilities";
import CloudCapabilities from "@/components/CloudCapabilities";
import TechStackBadges from "@/components/TechStackBadges";
import IndustriesSection from "@/components/IndustriesSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata = createPageMetadata({
  title: "Offerings — Web, Mobile, AI & Cloud Services",
  description:
    "Koraltech Softwares offers web app development, mobile app development, API development, BLE apps, AI integrated development, software product engineering, IT staff augmentation, and cloud infrastructure.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <section className="relative pt-32 pb-8 overflow-hidden bg-slate-50" aria-labelledby="services-page-heading">
        {/* Subtle background glow for light theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 blur-[100px] rounded-full" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-teal-100/50 blur-[80px] rounded-full" />
        </div>
        
        <div className="relative mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
          <header className="max-w-[1000px]">
            <div className="flex items-center gap-3 text-[13px] font-bold text-[#0284C7] uppercase tracking-widest mb-3">
              COMPREHENSIVE CAPABILITIES
              <span className="h-[2px] w-10 bg-[#0284C7]"></span>
            </div>
            
            <h1 id="services-page-heading" className="text-4xl md:text-[44px] lg:text-[48px] font-extrabold text-[#111827] tracking-tight mb-4 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Full-Spectrum <span className="bg-gradient-to-r from-[#0284C7] to-[#9333EA] bg-clip-text text-transparent">Engineering</span> <span className="text-[#0284C7]">Services</span>
            </h1>
            
            <p className="text-[16px] text-slate-500 leading-relaxed max-w-[850px]">
              From UX architecture and custom web/mobile apps to AI automation, IoT BLE integration, and multi-cloud operations — tailored for enterprise scale.
            </p>
          </header>
        </div>
      </section>
      <ServicesGrid hideHeader={true} />
      <AICapabilities />
      <CloudCapabilities />
      <TechStackBadges />
      <IndustriesSection />
      <ConsultationCTA />
    </main>
  );
}

