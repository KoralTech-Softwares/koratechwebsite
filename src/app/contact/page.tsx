import { createPageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";

export const metadata = createPageMetadata({
  title: "Custom Software Development & AI Integration Bengaluru",
  description:
    "Contact Koraltech Softwares for web, mobile, AI integrated development, and cloud infrastructure. Email info@koraltech.in or call +91 9597876354.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
