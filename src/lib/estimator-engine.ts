/**
 * AI Solution Estimator — generates project roadmaps based on user inputs.
 */

export type BusinessSize = "startup" | "smb" | "enterprise";
export type TechChallenge =
  | "web-mobile"
  | "ai-integration"
  | "cloud-infrastructure"
  | "staffing"
  | "product-engineering";
export type PrimaryGoal =
  | "launch-product"
  | "ai-transform"
  | "cloud-migrate"
  | "scale-team";

export interface EstimatorInput {
  businessSize: BusinessSize;
  techChallenge: TechChallenge;
  primaryGoal: PrimaryGoal;
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  deliverables: string[];
}

export interface EstimatorResult {
  projectType: string;
  estimatedTimeline: string;
  estimatedInvestment: string;
  cloudRecommendation: string;
  cloudServices: string[];
  roadmap: RoadmapPhase[];
  aiCapabilities: string[];
  nextSteps: string[];
}

const BUSINESS_SIZE_LABELS: Record<BusinessSize, string> = {
  startup: "Startup (1–20 employees)",
  smb: "SMB (21–200 employees)",
  enterprise: "Enterprise (200+ employees)",
};

const CHALLENGE_LABELS: Record<TechChallenge, string> = {
  "web-mobile": "Web & Mobile Application Development",
  "ai-integration": "AI Integrated Development",
  "cloud-infrastructure": "Cloud Infrastructure & DevOps",
  staffing: "IT Staff Augmentation",
  "product-engineering": "Software Product Engineering",
};

const GOAL_LABELS: Record<PrimaryGoal, string> = {
  "launch-product": "Launch a new software product",
  "ai-transform": "Embed AI into existing workflows",
  "cloud-migrate": "Migrate to cloud infrastructure",
  "scale-team": "Scale development team quickly",
};

export function getEstimatorLabels() {
  return {
    businessSizes: Object.entries(BUSINESS_SIZE_LABELS).map(([value, label]) => ({
      value: value as BusinessSize,
      label,
    })),
    techChallenges: Object.entries(CHALLENGE_LABELS).map(([value, label]) => ({
      value: value as TechChallenge,
      label,
    })),
    primaryGoals: Object.entries(GOAL_LABELS).map(([value, label]) => ({
      value: value as PrimaryGoal,
      label,
    })),
  };
}

function getTimeline(size: BusinessSize, challenge: TechChallenge): string {
  const baseWeeks: Record<TechChallenge, number> = {
    "web-mobile": 10,
    "ai-integration": 12,
    "cloud-infrastructure": 8,
    staffing: 2,
    "product-engineering": 14,
  };
  const multiplier: Record<BusinessSize, number> = {
    startup: 0.7,
    smb: 1.0,
    enterprise: 1.4,
  };
  const weeks = Math.round(baseWeeks[challenge] * multiplier[size]);
  return `${weeks}–${weeks + 4} weeks`;
}

function getInvestment(size: BusinessSize, challenge: TechChallenge): string {
  const ranges: Record<BusinessSize, Record<TechChallenge, string>> = {
    startup: {
      "web-mobile": "$15,000 – $50,000",
      "ai-integration": "$20,000 – $65,000",
      "cloud-infrastructure": "$12,000 – $40,000",
      staffing: "$4,000 – $8,000/month per engineer",
      "product-engineering": "$25,000 – $75,000",
    },
    smb: {
      "web-mobile": "$50,000 – $150,000",
      "ai-integration": "$65,000 – $200,000",
      "cloud-infrastructure": "$40,000 – $120,000",
      staffing: "$6,000 – $12,000/month per engineer",
      "product-engineering": "$75,000 – $250,000",
    },
    enterprise: {
      "web-mobile": "$150,000 – $500,000+",
      "ai-integration": "$200,000 – $600,000+",
      "cloud-infrastructure": "$120,000 – $400,000+",
      staffing: "$8,000 – $18,000/month per engineer",
      "product-engineering": "$250,000 – $1,000,000+",
    },
  };
  return ranges[size][challenge];
}

function getCloudRecommendation(challenge: TechChallenge): {
  recommendation: string;
  services: string[];
} {
  const configs: Record<TechChallenge, { recommendation: string; services: string[] }> = {
    "web-mobile": {
      recommendation:
        "Deploy on Microsoft Azure App Service or Firebase Hosting with Node.js backends, Firestore/Sequelize databases, and Azure DevOps CI/CD pipelines for automated deployment.",
      services: ["Azure App Service", "Firebase", "Node.js", "Azure DevOps"],
    },
    "ai-integration": {
      recommendation:
        "Multi-cloud AI pipeline using Azure AI services, Firebase for real-time data, and Node.js APIs for document parsing, speech-to-text, and NLP integration.",
      services: ["Azure AI", "Firebase", "Node.js", "Azure Functions"],
    },
    "cloud-infrastructure": {
      recommendation:
        "Multi-cloud architecture on Microsoft Azure with AWS services where needed. Azure Functions for serverless, managed monitoring, and cost optimization across environments.",
      services: ["Microsoft Azure", "Azure Functions", "AWS", "Firebase"],
    },
    staffing: {
      recommendation:
        "Koraltech engineers integrate with your existing Azure, AWS, or Firebase environments, CI/CD pipelines, and sprint ceremonies.",
      services: ["Azure DevOps", "Firebase", "GitHub Actions"],
    },
    "product-engineering": {
      recommendation:
        "Scalable product infrastructure on Azure with React/React Native frontends, Node.js APIs, Firebase real-time features, and automated deployment pipelines.",
      services: ["Azure", "Firebase", "React Native", "Node.js"],
    },
  };
  return configs[challenge];
}

function getRoadmap(challenge: TechChallenge, size: BusinessSize): RoadmapPhase[] {
  const roadmaps: Record<TechChallenge, RoadmapPhase[]> = {
    "web-mobile": [
      {
        phase: "Requirement Analysis & Structuring",
        duration: "2 weeks",
        deliverables: ["Stakeholder workshops", "Structured requirements document", "Architecture proposal"],
      },
      {
        phase: "Design & Development",
        duration: size === "enterprise" ? "8 weeks" : "5 weeks",
        deliverables: ["React/React Native UI", "Node.js API development", "Database schema & integration"],
      },
      {
        phase: "Testing & Deployment",
        duration: "2 weeks",
        deliverables: ["QA and UAT", "Azure/Firebase deployment", "Production cutover"],
      },
      {
        phase: "Support & Maintenance",
        duration: "Ongoing",
        deliverables: ["Bug fixes and monitoring", "Performance tuning", "Feature enhancements"],
      },
    ],
    "ai-integration": [
      {
        phase: "AI Readiness Assessment",
        duration: "2 weeks",
        deliverables: ["Use case identification", "Data readiness audit", "AI integration roadmap"],
      },
      {
        phase: "AI Feature Development",
        duration: "4 weeks",
        deliverables: ["Document parsing pipeline", "Speech-to-text integration", "NLP automation workflows"],
      },
      {
        phase: "Integration & Testing",
        duration: "3 weeks",
        deliverables: ["Embed AI into application", "Accuracy benchmarking", "User acceptance testing"],
      },
      {
        phase: "Deploy & Maintain",
        duration: "Ongoing",
        deliverables: ["Production deployment", "AI model monitoring", "Continuous improvement"],
      },
    ],
    "cloud-infrastructure": [
      {
        phase: "Cloud Assessment",
        duration: "2 weeks",
        deliverables: ["Current infrastructure audit", "Migration strategy", "Cost analysis"],
      },
      {
        phase: "Migration & DevOps Setup",
        duration: size === "enterprise" ? "6 weeks" : "4 weeks",
        deliverables: ["Azure/AWS migration", "CI/CD pipeline setup", "Environment configuration"],
      },
      {
        phase: "Optimization & Handoff",
        duration: "2 weeks",
        deliverables: ["Cost optimization", "Monitoring setup", "Documentation and training"],
      },
    ],
    staffing: [
      {
        phase: "Requirements & Matching",
        duration: "1 week",
        deliverables: ["Role definition", "Candidate shortlist", "Technical interviews"],
      },
      {
        phase: "Onboarding",
        duration: "1 week",
        deliverables: ["Environment setup", "Sprint integration", "Knowledge transfer"],
      },
      {
        phase: "Active Engagement",
        duration: "Ongoing",
        deliverables: ["Full sprint participation", "Weekly progress reports", "Performance reviews"],
      },
    ],
    "product-engineering": [
      {
        phase: "Discovery & MVP Scope",
        duration: "2 weeks",
        deliverables: ["Product vision alignment", "MVP feature set", "Technical architecture"],
      },
      {
        phase: "MVP Development",
        duration: size === "enterprise" ? "10 weeks" : "6 weeks",
        deliverables: ["Core product build", "QA and testing", "Beta deployment"],
      },
      {
        phase: "Launch & Iterate",
        duration: "4 weeks",
        deliverables: ["Production launch", "User feedback integration", "Post-launch support"],
      },
    ],
  };
  return roadmaps[challenge];
}

function getAICapabilities(challenge: TechChallenge): string[] {
  const capabilities: Record<TechChallenge, string[]> = {
    "web-mobile": ["AI-assisted requirement structuring", "Automated QA documentation"],
    "ai-integration": [
      "AI-integrated application development",
      "Document parsing & data extraction",
      "Speech-to-text & NLP automation",
    ],
    "cloud-infrastructure": ["AI-assisted cost forecasting", "Automated deployment monitoring"],
    staffing: ["AI/ML engineers", "Full-stack React & Node.js developers"],
    "product-engineering": ["AI-accelerated MVP development", "Automated test generation"],
  };
  return capabilities[challenge];
}

export function generateEstimate(input: EstimatorInput): EstimatorResult {
  const cloud = getCloudRecommendation(input.techChallenge);

  return {
    projectType: CHALLENGE_LABELS[input.techChallenge],
    estimatedTimeline: getTimeline(input.businessSize, input.techChallenge),
    estimatedInvestment: getInvestment(input.businessSize, input.techChallenge),
    cloudRecommendation: cloud.recommendation,
    cloudServices: Array.from(new Set(cloud.services)),
    roadmap: getRoadmap(input.techChallenge, input.businessSize),
    aiCapabilities: getAICapabilities(input.techChallenge),
    nextSteps: [
      "Schedule a consultation with Koraltech Softwares at info@koraltech.in",
      "Receive a detailed proposal within 5 business days",
      "Kick off with a requirement analysis workshop in Bengaluru or remote",
    ],
  };
}
