/**
 * Portfolio case studies sourced from www.koraltech.in project data.
 */

export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_INTRO = {
  heading: "Discover Our Success Stories",
  subheading:
    "Explore our portfolio for a glimpse into successful projects, showcasing Koraltech Softwares expertise and commitment to excellence — from innovative solutions to transformative experiences.",
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sevanun",
    title: "Sevanun — Remote Healthcare Monitoring",
    industry: "Healthcare",
    type: "Hybrid Mobile Application",
    description:
      "The Sevanun application enables healthcare professionals to remotely track vital signs and relevant health data. Patients can easily view their own vitals information. With emphasis on proactive healthcare management, this app enhances patient engagement, improves outcomes, and allows for timely intervention.",
    highlights: [
      "Remote Monitoring of Vital Signs",
      "Enhanced Patient Engagement",
      "Proactive Healthcare Management",
    ],
    technologies: ["React Native", "Firebase", "AI", "Firestore"],
  },
  {
    id: "hiring-management",
    title: "Hiring Management Application",
    industry: "Healthcare",
    type: "Hybrid Mobile Application",
    description:
      "The Hiring Management App provides an end-to-end solution for hiring and managing recruitment of healthcare professionals, offering detailed information flow to recruiters and practitioners with real-time updates, candidate tracking, and interview scheduling.",
    highlights: [
      "Smart Job Search & Easy Practice Management",
      "Real-Time Notifications",
      "Calendar-Based Scheduling",
    ],
    technologies: ["React Native", "Node.js", "Sequelize", "Firebase Cloud Messaging"],
  },
  {
    id: "cold-chain",
    title: "Cold Chain Logistics Management",
    industry: "Logistics",
    type: "Hybrid Mobile and Web Application",
    description:
      "Our Cold Chain Logistics Management Application offers accurate tracking of temperature and humidity to ensure safe delivery of sensitive commodities. It enables tracking multiple shipments through admin interface and driver mobile app with real-time monitoring and coordination.",
    highlights: [
      "Real-Time Shipment Tracking",
      "Package Tracking & Monitoring",
      "Freshness on the Move: IoT-Optimized Cold Chain",
    ],
    technologies: ["Node.js", "TypeScript", "React Native", "Microsoft Azure"],
  },
  {
    id: "parkese",
    title: "Parkese — Smart Parking Management",
    industry: "Parking Management",
    type: "Hybrid Mobile Application",
    description:
      "Parkese revolutionizes parking by transforming space monitoring and management. Users scan, pay, and track fees in real-time with a cost-effective solution that empowers attendants, optimizes revenue, and enhances customer experience.",
    highlights: [
      "Smart Parking with ALPR Technology",
      "Real-Time Parking Precision",
      "Parking Insights & Performance",
    ],
    technologies: ["React Native", "Node.js", "Microsoft Azure", "ALPR Integration"],
  },
  {
    id: "learning-management",
    title: "Learning Management Application",
    industry: "Learning Management",
    type: "Hybrid Web Application",
    description:
      "This highly responsive Learning Management Web Application offers advanced resources for art-based learning, including live teaching sessions, live chats, images, recorded courses, 3D models, and assessments with interactive and immersive experiences for beginners and advanced students.",
    highlights: [
      "Personalized Learning Dashboard",
      "Adaptive Quality & Transcripts",
      "Optimized Content Delivery",
    ],
    technologies: ["React", "Ionic React", "Node.js", "Adaptive Streaming", "CDN"],
  },
  {
    id: "dnp",
    title: "DNP — Revenue & Billing",
    industry: "Revenue & Billing",
    type: "Hybrid Web and Mobile Application",
    description:
      "The DNP application provides a complete solution for managing hard and soft copies of invoices, securely storing them for future reference. It includes advanced sales reporting, role-based secure access, smart billing and inventory management, and automated printing.",
    highlights: [
      "Smart Billing & Inventory",
      "Advanced Sales Reporting",
      "Role-Based Secure Access",
    ],
    technologies: ["React", "React Native", "Node.js", "Sequelize", "Microsoft Azure"],
  },
  {
    id: "tbta",
    title: "TBTA — Business Management",
    industry: "E-Commerce",
    type: "Hybrid Mobile Application",
    description:
      "The TBTA application is a versatile business management solution designed to streamline operations by maintaining distributor and retailer details, managing events, updating daily prices, and enabling video uploads for recorded events.",
    highlights: [
      "Distributor & Retailer Management",
      "Seamless Event Management",
      "Real-Time Price Updates",
    ],
    technologies: ["React Native", "Firebase", "Firestore", "Node.js"],
  },
  {
    id: "fliber",
    title: "Fliber — Wealth Management",
    industry: "Finance",
    type: "Hybrid Web and Mobile Application",
    description:
      "Fliber harnesses cutting-edge technologies to deliver a robust, intuitive platform engineered with modern languages and frameworks. With cloud-based infrastructure, it ensures scalability, reliability, and high availability even during peak usage.",
    highlights: [
      "Comprehensive Wealth Management",
      "Diversified Investment Strategy",
      "Personalized Financial Planning",
    ],
    technologies: ["React", "React Native", "Node.js", "Microsoft Azure", ".NET"],
  },
  {
    id: "native-special",
    title: "Native Special — E-Commerce",
    industry: "E-Commerce",
    type: "Hybrid Mobile Application",
    description:
      "The Native Special application delivers a seamless shopping experience from login to checkout with intuitive interface, smooth navigation, quick product discovery, and hassle-free transactions — designed for convenience without intrusive pop-ups or mandatory forms.",
    highlights: [
      "Easy Sign-Up & Access",
      "Seamless Cross-Device Experience",
      "Smart Inventory & Billing",
    ],
    technologies: ["React Native", "Node.js", "Sequelize", "Firebase"],
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing Application",
    industry: "Travel & Transport",
    type: "Hybrid Mobile Application",
    description:
      "A Ride Sharing Application that connects riders and passengers for cost-effective and eco-friendly commute with smart algorithms, real-time tracking, secure payments, route optimization, and ride scheduling for sustainable mobility.",
    highlights: [
      "Live Route Tracking",
      "Ride & Earn",
      "Enhanced Safety Features",
    ],
    technologies: ["React Native", "Node.js", "Firebase", "Geofirestore"],
  },
  {
    id: "snap-m",
    title: "Snap-M — Media Management",
    industry: "Media",
    type: "Hybrid Mobile Application",
    description:
      "Snap-M is a powerful solution for capturing images and videos, scanning documents, and converting files to PDFs. It features scheduled deletion for privacy, an intuitive interface, and advanced editing tools for seamless media handling.",
    highlights: [
      "Smart Media Management",
      "Auto-Deletion Scheduler",
      "Image Organizer",
    ],
    technologies: ["React Native", "Firebase", "File Manager", "Node.js"],
  },
  {
    id: "referral",
    title: "Referral Application",
    industry: "Media",
    type: "Web Application",
    description:
      "Our Referral Application simplifies creating intuitive, user-friendly interfaces by offering design resources, tools, and best practices with pre-designed templates and interactive elements to craft user-centric interfaces.",
    highlights: [
      "Effortless UI Creation",
      "Enhanced Animations",
      "Capture & Remember",
    ],
    technologies: ["React", "Node.js", "Ionic React"],
  },
];

export const FEATURED_PROJECT_IDS = [
  "sevanun",
  "cold-chain",
  "parkese",
  "learning-management",
  "dnp",
  "fliber",
];
