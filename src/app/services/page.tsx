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
    <>
      <section className="pt-32 pb-12" aria-labelledby="services-page-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-glow">
              Our Offerings
            </p>
            <h1 id="services-page-heading" className="section-heading mt-3">
              Comprehensive IT Services for Your Business
            </h1>
            <p className="section-subheading">
              At Koraltech Softwares, we offer a comprehensive range of high-tech IT services
              designed to meet your business needs — from requirement analysis and structured
              requirement engineering through development, deployment, support, and maintenance.
            </p>
          </header>
        </div>
      </section>
      <ServicesGrid />
      <AICapabilities />
      <CloudCapabilities />
      <TechStackBadges />
      <IndustriesSection />
      <ConsultationCTA />
    </>
  );
}
