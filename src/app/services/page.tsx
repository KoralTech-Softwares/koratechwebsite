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
    <div className="pt-24 sm:pt-28">
      <ServicesGrid />
      <AICapabilities />
      <CloudCapabilities />
      <TechStackBadges />
      <IndustriesSection />
      <ConsultationCTA />
    </div>
  );
}

