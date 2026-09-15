import type { Metadata } from "next";
import { SITE_URL } from "./structured-data";

const defaultTitle =
  "Koraltech Softwares | Custom Software Development & AI Integration Bengaluru";
const defaultDescription =
  "Koraltech Softwares provides requirement analysis, web and mobile development, AI integrated development, cloud infrastructure, and IT staff augmentation. Clients in USA, London, UAE, India, and Australia.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Koraltech Softwares",
  },
  description: defaultDescription,
  keywords: [
    "Custom Software Development Bengaluru",
    "AI Integrated Development India",
    "Cloud Infrastructure Services",
    "Web App Development",
    "Mobile App Development",
    "React Native Development",
    "Microsoft Azure Consulting",
    "IT Staff Augmentation India",
    "Software Product Engineering",
    "Application Maintenance Services",
  ],
  authors: [{ name: "Koraltech Softwares", url: SITE_URL }],
  creator: "Koraltech Softwares",
  publisher: "Koraltech Softwares",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Koraltech Softwares",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  alternates: { canonical: SITE_URL },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${title} | Koraltech Softwares`,
      description,
      url: `${SITE_URL}${path}`,
    },
  };
}
