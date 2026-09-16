import { notFound } from "next/navigation";
import { EXTENDED_SERVICES_DATA } from "@/lib/service-details-data";
import { SERVICES } from "@/lib/company-content";
import ServiceDetailsClient from "./ServiceDetailsClient";

export const metadata = {
  title: "Service Details - Koraltech Softwares",
  description: "Detailed overview of Koraltech Softwares engineering services.",
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  // Find the matching extended service data
  const service = EXTENDED_SERVICES_DATA[params.id];

  // Find the original index from the SERVICES array
  const serviceIndex = SERVICES.findIndex((s) => s.id === params.id) + 1;

  // If the service ID doesn't exist, trigger a 404
  if (!service) {
    notFound();
  }

  return <ServiceDetailsClient service={service} serviceIndex={serviceIndex} />;
}
