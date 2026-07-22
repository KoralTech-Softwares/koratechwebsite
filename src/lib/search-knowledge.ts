/**
 * Knowledge base for the hybrid semantic search bar.
 */

export interface SearchResult {
  title: string;
  answer: string;
  href: string;
  relevance: number;
  category: string;
}

interface KnowledgeEntry {
  id: string;
  title: string;
  answer: string;
  href: string;
  category: string;
  keywords: string[];
  intents: string[];
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: "web-dev",
    title: "Web App Development",
    answer:
      "Koraltech Softwares has a strong team of full-stack developers delivering front-end UX components, server-side logic, and complete database management. We publish and maintain fully developed websites using React and Node.js.",
    href: "/services#web-app-development",
    category: "Development",
    keywords: ["web", "website", "full stack", "react", "frontend", "backend", "full-stack"],
    intents: ["build website", "web application", "web development"],
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    answer:
      "Koraltech Softwares builds cross-platform mobile applications using React Native and hybrid approaches, empowering businesses to thrive in a mobile-first world.",
    href: "/services#mobile-app-development",
    category: "Development",
    keywords: ["mobile", "app", "react native", "ios", "android", "hybrid"],
    intents: ["build mobile app", "mobile development"],
  },
  {
    id: "ai-integrated",
    title: "AI Integrated Development",
    answer:
      "Koraltech Softwares embeds AI at every stage of delivery — building AI-driven applications, document parsing and data extraction, speech-to-text, NLP, and intelligent automation using machine learning.",
    href: "/services#ai-integrated-development",
    category: "AI Integration",
    keywords: ["ai", "machine learning", "automation", "nlp", "speech", "document parsing", "artificial intelligence"],
    intents: ["ai integration", "ai development", "ai transformation"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure Services",
    answer:
      "Koraltech Softwares delivers multi-cloud infrastructure on Microsoft Azure, AWS, and Firebase — including cloud migration, DevOps, managed infrastructure, production deployment, and cost optimization.",
    href: "/services#cloud-infrastructure",
    category: "Cloud",
    keywords: ["cloud", "azure", "aws", "firebase", "migration", "devops", "deploy", "infrastructure"],
    intents: ["cloud migration", "move to cloud", "azure services"],
  },
  {
    id: "staffing",
    title: "IT Staff Augmentation",
    answer:
      "Koraltech Softwares provides IT staff augmentation with skilled developers, engineers, designers, and project managers — scalable to your project demands with flexible engagement models.",
    href: "/services#it-staff-augmentation",
    category: "Staffing",
    keywords: ["staffing", "augmentation", "hire", "developers", "engineers", "team"],
    intents: ["hire developers", "staff augmentation"],
  },
  {
    id: "product-engineering",
    title: "Software Product Engineering",
    answer:
      "Koraltech Softwares delivers software product engineering from MVP to launch — with modern product design, development practices, quality assurance, and scalable architecture.",
    href: "/services#software-product-engineering",
    category: "Product Engineering",
    keywords: ["product", "mvp", "engineering", "launch", "startup"],
    intents: ["build mvp", "product development"],
  },
  {
    id: "process",
    title: "AI-Focused Development Process",
    answer:
      "Koraltech Softwares follows an AI-embedded delivery process: requirement analysis, structured requirements, design and development, project management and deployment, then ongoing support and maintenance.",
    href: "/about",
    category: "Process",
    keywords: ["process", "requirements", "maintenance", "support", "deployment", "project management"],
    intents: ["how do you work", "development process"],
  },
  {
    id: "global",
    title: "Global Client Delivery",
    answer:
      "Koraltech Softwares has worked with clients in the USA, London, UAE, India, and Australia, delivering software solutions with cross-timezone collaboration from Bengaluru, India.",
    href: "/about",
    category: "Company",
    keywords: ["usa", "london", "uae", "australia", "international", "global", "clients"],
    intents: ["international clients", "global delivery"],
  },
  {
    id: "tech-stack",
    title: "Technology Stack",
    answer:
      "Koraltech Softwares works with React, React Native, Node.js, TypeScript, Microsoft Azure, Firebase, Sequelize, Firestore, Azure Functions, and AI/ML technologies.",
    href: "/services",
    category: "Technology",
    keywords: ["react", "node", "typescript", "azure", "firebase", "tech stack", "technologies"],
    intents: ["what technologies", "tech stack"],
  },
  {
    id: "portfolio",
    title: "Our Work — Project Portfolio",
    answer:
      "Koraltech Softwares has delivered 350+ projects including Sevanun (healthcare monitoring), Cold Chain Logistics, Parkese (parking management), Learning Management, DNP (revenue & billing), Fliber (wealth management), and Ride Sharing applications.",
    href: "/our-work",
    category: "Portfolio",
    keywords: ["portfolio", "projects", "case studies", "our work", "healthcare", "logistics"],
    intents: ["see projects", "portfolio", "case studies"],
  },
  {
    id: "contact",
    title: "Contact Koraltech Softwares",
    answer:
      "Contact Koraltech Softwares at ayarganesh@koraltech.in or +91 9597876354. We respond within one business day for project inquiries, consultations, and support.",
    href: "/contact",
    category: "Contact",
    keywords: ["contact", "email", "phone", "consultation", "quote", "schedule"],
    intents: ["contact koraltech", "get quote", "schedule meeting"],
  },
];

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function scoreEntry(entry: KnowledgeEntry, query: string, tokens: string[]): number {
  const lowerQuery = query.toLowerCase();
  let score = 0;

  for (const intent of entry.intents) {
    if (lowerQuery.includes(intent)) score += 10;
  }
  for (const keyword of entry.keywords) {
    if (lowerQuery.includes(keyword)) score += 5;
    for (const token of tokens) {
      if (keyword.includes(token) || token.includes(keyword)) score += 2;
    }
  }
  if (lowerQuery.includes(entry.category.toLowerCase())) score += 3;

  const titleWords = entry.title.toLowerCase().split(/\s+/);
  for (const token of tokens) {
    if (titleWords.some((w) => w.includes(token))) score += 3;
  }

  return score;
}

export function semanticSearch(query: string, limit = 5): SearchResult[] {
  if (!query.trim()) return [];
  const tokens = tokenize(query);

  return KNOWLEDGE_BASE.map((entry) => ({
    title: entry.title,
    answer: entry.answer,
    href: entry.href,
    category: entry.category,
    relevance: scoreEntry(entry, query, tokens),
  }))
    .filter((r) => r.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);
}

export function getSuggestedQueries(): string[] {
  return [
    "How does Koraltech integrate AI into development?",
    "Do you provide cloud migration on Azure?",
    "Can you build a React Native mobile app?",
    "How do I contact Koraltech Softwares?",
  ];
}
