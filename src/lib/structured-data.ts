export const SITE_URL = "https://www.koraltech.in";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": `${SITE_URL}/#organization`,
  name: "Koraltech Softwares",
  legalName: "Koraltech Softwares",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Koraltech Softwares is a custom software development company in Bengaluru, India. Koraltech Softwares provides requirement analysis, structured requirement engineering, web and mobile development, project management, deployment, support, and maintenance with AI integration at every stage.",
  foundingLocation: {
    "@type": "Place",
    name: "Bengaluru, Karnataka, India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates", "Australia"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "ayarganesh@koraltech.in",
    telephone: "+91-9597876354",
    availableLanguage: ["English", "Hindi", "Kannada"],
    areaServed: "Worldwide",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: "Koraltech Softwares — Custom Software Development & AI Integration",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Koraltech Softwares provides web app development, mobile app development, API development, BLE apps, AI integrated development, software product engineering, IT staff augmentation, and multi-cloud infrastructure services.",
  provider: { "@id": `${SITE_URL}/#organization` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  serviceType: [
    "Web App Development",
    "Mobile App Development",
    "API Development",
    "BLE App Development",
    "AI Integrated Development",
    "Software Product Engineering",
    "IT Staff Augmentation",
    "Cloud Infrastructure Services",
    "Application Maintenance & Support",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Koraltech Software Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integrated Development",
          description:
            "AI-integrated application development, document parsing, speech-to-text, and NLP automation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Infrastructure Services",
          description:
            "Multi-cloud migration, DevOps, managed infrastructure, deployment, and cost optimization on Azure, AWS, and Firebase.",
        },
      },
    ],
  },
};

export const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}/#tech-capabilities`,
  headline: "Koraltech Softwares Technology Capabilities — React, Azure, AI Integration",
  description:
    "Koraltech Softwares specializes in React, React Native, Node.js, TypeScript, Microsoft Azure, Firebase, and AI integrated development including document parsing and speech-to-text NLP.",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  datePublished: "2019-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en",
  about: [
    { "@type": "Thing", name: "React" },
    { "@type": "Thing", name: "React Native" },
    { "@type": "Thing", name: "Microsoft Azure" },
    { "@type": "Thing", name: "Artificial Intelligence" },
    { "@type": "Thing", name: "Custom Software Development" },
  ],
  keywords: [
    "Custom Software Development Bengaluru",
    "AI Integrated Development India",
    "Cloud Infrastructure Services",
    "Web App Development",
    "Mobile App Development",
    "IT Staff Augmentation",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Koraltech Softwares",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, professionalServiceSchema, techArticleSchema, websiteSchema],
  };
}
