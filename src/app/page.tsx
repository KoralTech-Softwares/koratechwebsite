import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import DeliveryProcess from "@/components/DeliveryProcess";
import ServicesGrid from "@/components/ServicesGrid";
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
      <Hero />
      <PortfolioPreview />
      <DeliveryProcess />
      <ServicesGrid />
      <AICapabilities />
      <CloudCapabilities />
      <GlobalClients />
      <TechStackBadges />
      <SemanticSearchBar />
      <SolutionEstimator />
      <FAQSection />
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
