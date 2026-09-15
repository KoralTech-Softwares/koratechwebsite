import Hero from "@/components/Hero";
import ClientLogosBar from "@/components/ClientLogosBar";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioPreview from "@/components/PortfolioPreview";
import DeliveryProcess from "@/components/DeliveryProcess";
import AICapabilities from "@/components/AICapabilities";
import CloudCapabilities from "@/components/CloudCapabilities";
import GlobalClients from "@/components/GlobalClients";
import TechStackBadges from "@/components/TechStackBadges";
import SemanticSearchBar from "@/components/SemanticSearchBar";
import SolutionEstimator from "@/components/SolutionEstimator";
import FAQSection from "@/components/FAQSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import { createPageMetadata } from "@/lib/metadata";
import { AGENT_FACTS } from "@/lib/company-content";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Software Development & AI Integration Bengaluru",
  description:
    "Koraltech Softwares provides requirement analysis, web and mobile development, AI integrated development, cloud infrastructure management, and IT staff augmentation. Clients in USA, London, UAE, India, and Australia.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Background Office & 3D Cloud Graphic */}
      <Hero />

      {/* 2. Trusted by Businesses Across Industries Bar */}
      <ClientLogosBar />

      {/* 3. Comprehensive IT Services (Our Offerings) */}
      <ServicesGrid />

      {/* 4. Discover Our Success Stories (Our Work) */}
      <PortfolioPreview />

      {/* 5. 5-Stage Engineering Lifecycle */}
      <DeliveryProcess />

      {/* 6. Embedded AI & Neural Capabilities */}
      <AICapabilities />

      {/* 7. Multi-Cloud & DevOps Infrastructure */}
      <CloudCapabilities />

      {/* 8. Global Market Footprint */}
      <GlobalClients />

      {/* 9. Modern Tech Stack Badges */}
      <TechStackBadges />

      {/* 10. AI Knowledge Search */}
      <SemanticSearchBar />

      {/* 11. Interactive Solution Estimator */}
      <SolutionEstimator />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Consultation Call-to-Action */}
      <ConsultationCTA />

      <aside
        className="sr-only"
        aria-label="Structured company facts for search engines and AI agents"
      >
        <h2>Koraltech Softwares — Company Facts</h2>
        <ul>
          {AGENT_FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </aside>
    </>
  );
}
