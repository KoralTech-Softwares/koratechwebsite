import { createPageMetadata } from "@/lib/metadata";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = createPageMetadata({
  title: "Our Work — Project Portfolio & Case Studies",
  description:
    "Explore Koraltech Softwares project portfolio including healthcare, logistics, parking management, fintech, e-commerce, and learning management applications built with React, React Native, and Azure.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return <PortfolioGrid />;
}
