/**
 * Portfolio case studies sourced from www.koraltech.in project data.
 */

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle?: string;
  industry: string;
  type: string;
  client?: string;
  location?: string;
  duration?: string;
  description: string;
  challenge?: string;
  solution?: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  categoryIcon: string;
  isFeatured?: boolean;
}

export const PORTFOLIO_INTRO = {
  tag: "REAL SOLUTIONS. LASTING IMPACT.",
  heading: "Our Case Studies",
  headingBlue: "Real Projects. Measurable Results.",
  subheading:
    "Explore how Koraltech Softwares has helped businesses across industries solve complex challenges, streamline operations, and achieve sustainable growth with innovative technology.",
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sevanun",
    title: "Sevanun – Remote Healthcare Monitoring",
    subtitle: "Connected Patient Health Monitoring & Teleconsultation Platform",
    industry: "Healthcare",
    categoryIcon: "💚",
    type: "Hybrid Mobile Application",
    client: "Sevanun Health Technologies",
    location: "United States / India",
    duration: "4 Months Sprint to Production",
    description:
      "A comprehensive healthcare platform enabling remote patient monitoring, teleconsultation and real-time insights for practitioners and patients.",
    challenge:
      "Healthcare practitioners faced high clinic congestion and lacked continuous, reliable remote tracking for chronic outpatient vital signs, resulting in delayed interventions.",
    solution:
      "Engineered an HIPAA-compliant React Native app integrated with real-time Firebase Firestore streams, Bluetooth medical sensor synchronizers, and automated doctor alerts.",
    highlights: [
      "Remote Monitoring of Vital Signs & BLE Sync",
      "Encrypted Doctor-Patient Video Teleconsultation",
      "Proactive Automated Alert Trigger System",
      "Personalized Patient Health Record Timeline",
    ],
    technologies: ["React Native", "Firebase", "AI", "Firestore", "WebRTC"],
    metrics: [
      { label: "Active Monitored Patients", value: "25,000+" },
      { label: "Critical Response Time", value: "< 2 mins" },
      { label: "Clinic Visit Reduction", value: "38%" },
      { label: "Platform Uptime SLA", value: "99.98%" },
    ],
    image: "/assets/images/project-sevanun.png",
    isFeatured: true,
  },
  {
    id: "parkese",
    title: "Parkese – Smart Parking Management",
    subtitle: "AI-Powered Smart Parking & Cashless Fleet Management",
    industry: "Parking Management",
    categoryIcon: "🅿️",
    type: "Hybrid Mobile Application",
    client: "Parkese Smart City Solutions",
    location: "India & UAE",
    duration: "3.5 Months",
    description:
      "Intelligent parking management solution with real-time availability, bookings and cashless payments.",
    challenge:
      "Urban parking congestion caused severe traffic bottlenecks, inefficient slot allocations, manual cash leakage, and long queue wait times.",
    solution:
      "Built an AI-driven ALPR (Automated License Plate Recognition) mobile ecosystem with real-time slot occupancy telemetry, dynamic QR ticketing, and automated digital payments.",
    highlights: [
      "Smart Parking with ALPR Neural Camera Integration",
      "Real-Time Parking Slot Availability & Geo-Fencing",
      "Cashless Multi-Gateway Instant Checkout",
      "Attendant Companion App for Fast Enforcement",
    ],
    technologies: ["React Native", "Node.js", "Microsoft Azure", "ALPR Integration", "Google Maps"],
    metrics: [
      { label: "Parking Slots Managed", value: "120,000+" },
      { label: "Turnaround Time Drop", value: "65%" },
      { label: "Revenue Leakage", value: "0%" },
      { label: "Active Mobile Users", value: "90,000+" },
    ],
    image: "/assets/images/project-parkese.png",
    isFeatured: true,
  },
  {
    id: "cold-chain",
    title: "Cold Chain Logistics Management",
    subtitle: "IoT Real-Time Temperature & Humidity Fleet Logistics",
    industry: "Logistics",
    categoryIcon: "📦",
    type: "Hybrid Mobile and Web Application",
    client: "Apex Cold Logistics",
    location: "Global Footprint",
    duration: "5 Months",
    description:
      "End-to-end cold chain logistics platform with real-time tracking and temperature monitoring.",
    challenge:
      "Perishable pharmaceutical and food consignments suffered temperature fluctuations during inter-state transport without early breach detection.",
    solution:
      "Delivered an IoT sensor-integrated web dashboard and driver mobile app streaming live GPS and cabin environmental telemetry to Azure IoT Hub with anomaly alerts.",
    highlights: [
      "Real-Time Multi-Vehicle Shipment Tracking",
      "Instant Temperature Breach Alarm Webhooks",
      "Automated Regulatory Compliance PDF Generation",
      "Offline-Capable Driver Telemetry Logging",
    ],
    technologies: ["Node.js", "TypeScript", "React Native", "Microsoft Azure", "Azure IoT"],
    metrics: [
      { label: "Spoilage Rate Reduction", value: "92%" },
      { label: "Shipments Monitored", value: "45,000+" },
      { label: "Telemetry Latency", value: "< 1.5s" },
      { label: "Compliance Pass Rate", value: "100%" },
    ],
    image: "/assets/images/project-cold-chain.png",
    isFeatured: true,
  },
  {
    id: "hiring-management",
    title: "Hiring Management Application",
    subtitle: "Enterprise Recruitment & Clinical Credentialing Pipeline",
    industry: "Healthcare",
    categoryIcon: "🩺",
    type: "Hybrid Mobile Application",
    client: "MedStaff Global",
    location: "United States",
    duration: "3 Months",
    description:
      "End-to-end platform for hiring healthcare professionals with real-time updates and interview scheduling.",
    challenge:
      "Credential verification for specialized physicians and nurses took weeks with manual paperwork, slowing down hospital ward staffing.",
    solution:
      "Developed a fast React Native talent portal with automated document OCR verification, calendar sync, candidate status tracking, and instant push notifications.",
    highlights: [
      "Smart Job Search & Practice Match Engine",
      "Real-Time FCM Notifications & Candidate Tracker",
      "In-App Calendar Interview Scheduling",
      "Automated License & Credential Verification",
    ],
    technologies: ["React Native", "Node.js", "Sequelize", "Firebase Cloud Messaging"],
    metrics: [
      { label: "Time-to-Hire Reduced", value: "54%" },
      { label: "Verified Practitioners", value: "14,000+" },
      { label: "Placement Success", value: "96.4%" },
    ],
    image: "/assets/images/project-sevanun.png",
    isFeatured: false,
  },
  {
    id: "dnp",
    title: "DNP – Revenue & Billing",
    subtitle: "Automated Enterprise Invoicing & Audit Compliance Suite",
    industry: "Finance",
    categoryIcon: "📊",
    type: "Hybrid Web and Mobile Application",
    client: "DNP Enterprises",
    location: "India & UAE",
    duration: "4 Months",
    description:
      "Complete invoicing management, secure cloud archive, and smart sales reporting system.",
    challenge:
      "Decentralized billing across multiple regional branches led to invoice reconciliation delays, missing tax audits, and payment discrepancies.",
    solution:
      "Architected a centralized multi-tenant React + Node.js revenue platform with GST/VAT calculation, OCR invoice scanning, role-based controls, and automated PDF delivery.",
    highlights: [
      "Smart Billing & Inventory Integration",
      "Advanced Multi-Dimensional Sales Reporting",
      "Granular Role-Based Access Control",
      "Automated Bulk Invoice Generation & Dispatch",
    ],
    technologies: ["React", "React Native", "Node.js", "Sequelize", "Microsoft Azure"],
    metrics: [
      { label: "Invoices Processed/Month", value: "150,000+" },
      { label: "Reconciliation Speed", value: "4x Faster" },
      { label: "Audit Accuracy", value: "99.99%" },
    ],
    image: "/assets/images/project-dnp.png",
    isFeatured: false,
  },
  {
    id: "tbta",
    title: "TBTA – Business Management",
    subtitle: "Distributor Network & Digital Marketplace Management",
    industry: "Education",
    categoryIcon: "🎓",
    type: "Hybrid Mobile Application",
    client: "TBTA Network",
    location: "India",
    duration: "3 Months",
    description:
      "Business management solution to streamline distributor operations, price updates, and video events.",
    challenge:
      "Managing thousands of distributed retail channels and dynamic commodity pricing required manual phone coordination.",
    solution:
      "Built a mobile app for real-time price broadcast, distributor inventory management, order requests, and recorded training video streaming.",
    highlights: [
      "Distributor & Retailer Tier Management",
      "Seamless Live & Recorded Event Video Hosting",
      "Real-Time Instant Price Updates & Catalog",
      "Push Notification Broadcast Engine",
    ],
    technologies: ["React Native", "Firebase", "Firestore", "Node.js"],
    metrics: [
      { label: "Registered Distributors", value: "8,500+" },
      { label: "Daily Order Volume", value: "22,000+" },
      { label: "Pricing Sync Delay", value: "< 1 sec" },
    ],
    image: "/assets/images/project-native-special.png",
    isFeatured: false,
  },
  {
    id: "fliber",
    title: "Fliber – Wealth Management",
    subtitle: "Next-Gen Mutual Fund & Investment Portfolio Platform",
    industry: "Finance",
    categoryIcon: "💰",
    type: "Hybrid Web and Mobile Application",
    client: "Fliber Financial",
    location: "India",
    duration: "6 Months",
    description:
      "High-scale platform for diversified investment planning and wealth portfolio optimization.",
    challenge:
      "Retail investors required a consolidated dashboard to simulate long-term retirement savings and manage mutual funds without financial jargon.",
    solution:
      "Engineered an intuitive mobile and web platform with real-time NAV calculations, goal-based portfolio rebalancing algorithms, and instant KYC verification.",
    highlights: [
      "Comprehensive Multi-Asset Wealth Tracking",
      "Algorithmic Goal Planning & Projections",
      "Paperless Instant KYC & e-Sign",
      "Automated SIP Scheduling & Smart Reminders",
    ],
    technologies: ["React", "React Native", "Node.js", "Microsoft Azure", ".NET"],
    metrics: [
      { label: "AUM Monitored", value: "₹500Cr+" },
      { label: "Registered Investors", value: "80,000+" },
      { label: "Daily Transaction SLA", value: "99.99%" },
    ],
    image: "/assets/images/project-fliber.png",
    isFeatured: false,
  },
  {
    id: "native-special",
    title: "Native Special – E-Commerce",
    subtitle: "Traditional Goods & Hyper-Local Marketplace Platform",
    industry: "E-Commerce",
    categoryIcon: "🛒",
    type: "Hybrid Mobile Application",
    client: "Native Special Pvt Ltd",
    location: "India & International Shipping",
    duration: "4 Months",
    description:
      "Frictionless shopping app from product discovery to express checkout and live order tracking.",
    challenge:
      "Traditional specialty food items required precise freshness packaging deadlines, fast dispatch routing, and seamless mobile checkout.",
    solution:
      "Designed a sleek React Native eCommerce application with ultra-fast search, optimized checkout flows, inventory triggers, and integrated global courier APIs.",
    highlights: [
      "Frictionless 1-Click Mobile Checkout",
      "Real-Time Courier Waybill Integration",
      "Dynamic Regional Inventory Allocation",
      "Hassle-Free Multi-Currency Payment",
    ],
    technologies: ["React Native", "Node.js", "Sequelize", "Firebase", "Stripe"],
    metrics: [
      { label: "Orders Delivered", value: "350,000+" },
      { label: "Cart Abandonment Drop", value: "32%" },
      { label: "Customer CSAT", value: "4.9 / 5.0" },
    ],
    image: "/assets/images/project-native-special.png",
    isFeatured: false,
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing Application",
    subtitle: "Real-Time Urban Commute & Dynamic Dispatch System",
    industry: "Travel & Transport",
    categoryIcon: "🚗",
    type: "Hybrid Mobile Application",
    client: "Urban Fleet Mobility",
    location: "Middle East & India",
    duration: "4.5 Months",
    description:
      "Smart mobility application connecting riders and drivers with geo-routing and split fares.",
    challenge:
      "High surge pricing and lack of efficient carpooling in peak hours created heavy commuter delays.",
    solution:
      "Implemented a real-time ride matching engine using Geofirestore, live route optimization, automated distance billing, and emergency SOS features.",
    highlights: [
      "Live GPS Route Tracking & ETA Updates",
      "Smart Driver Dispatch & Pooling Algorithm",
      "In-App Digital Wallet & Split Fare",
      "Bi-Directional Rating & Safety SOS",
    ],
    technologies: ["React Native", "Node.js", "Firebase", "Geofirestore", "Google Maps"],
    metrics: [
      { label: "Completed Rides", value: "1.2M+" },
      { label: "Average Match Time", value: "12 seconds" },
      { label: "Commute Cost Savings", value: "35%" },
    ],
    image: "/assets/images/project-parkese.png",
    isFeatured: false,
  },
  {
    id: "snap-m",
    title: "Snap-M – Media Management",
    subtitle: "AI Cloud Camera & Document Security Scanner",
    industry: "Media & Entertainment",
    categoryIcon: "▶️",
    type: "Hybrid Mobile Application",
    client: "Snap-M Technologies",
    location: "Global",
    duration: "3 Months",
    description:
      "Media management solution with auto-deletion scheduler, document scanning, and PDF tools.",
    challenge:
      "Users needed a secure local vault to scan documents and capture media without cloud leakage or permanent storage bloat.",
    solution:
      "Built a secure local vault app with on-device AI document edge detection, auto-deletion timers, and encrypted PDF generation.",
    highlights: [
      "On-Device AI Document Edge Cropping",
      "Automated Privacy Deletion Scheduler",
      "Batch Image to Encrypted PDF Converter",
      "Biometric PIN & FaceID Protection",
    ],
    technologies: ["React Native", "Firebase", "File Manager", "Node.js"],
    metrics: [
      { label: "App Downloads", value: "100,000+" },
      { label: "Documents Scanned", value: "2.5M+" },
      { label: "App Store Rating", value: "4.8 ★" },
    ],
    image: "/assets/images/project-dnp.png",
    isFeatured: false,
  },
  {
    id: "learning-management",
    title: "Learning Management Application",
    subtitle: "Interactive Virtual Art Academy & Streaming Platform",
    industry: "Education",
    categoryIcon: "🎨",
    type: "Hybrid Web Application",
    client: "New Masters Academy",
    location: "United States",
    duration: "5 Months",
    description:
      "Responsive web app offering art learning resources, live sessions, 3D models, and courses.",
    challenge:
      "High-definition video lessons and 3D anatomy models suffered buffering for international students with variable network bandwidth.",
    solution:
      "Architected an adaptive bitrate streaming platform on CDN with synchronized 3D WebGL model viewers, student community forums, and interactive assignments.",
    highlights: [
      "Personalized Student Learning Pathway",
      "Adaptive Bitrate HLS Stream Delivery",
      "Integrated 3D WebGL Anatomy Viewer",
      "Live Chat & Assignment Peer Review",
    ],
    technologies: ["React", "Ionic React", "Node.js", "Adaptive Streaming", "CDN"],
    metrics: [
      { label: "Active Art Students", value: "60,000+" },
      { label: "Video Hours Streamed", value: "4.8M+" },
      { label: "Buffering Reduction", value: "78%" },
    ],
    image: "/assets/images/project-learning.png",
    isFeatured: false,
  },
  {
    id: "referral",
    title: "Referral Application",
    subtitle: "Design System & Affiliate Partner Ecosystem",
    industry: "Real Estate",
    categoryIcon: "🏠",
    type: "Web Application",
    client: "PartnerLink",
    location: "India",
    duration: "2.5 Months",
    description:
      "Referral portal with UI creation tools, affiliate tracking, and reward settlement.",
    challenge:
      "Tracking multi-tier affiliate referrals and milestone bonuses lacked automated transparency.",
    solution:
      "Created an interactive partner portal with custom referral link generators, tier progression metrics, and automated payout ledger.",
    highlights: [
      "Effortless UI Creation & Embeds",
      "Real-Time Referral Conversion Telemetry",
      "Automated Milestone Bonus Ledger",
      "Interactive Partner Analytics Dashboard",
    ],
    technologies: ["React", "Node.js", "Ionic React", "Stripe Payouts"],
    metrics: [
      { label: "Active Affiliates", value: "12,000+" },
      { label: "Referred Revenue", value: "$3.8M+" },
      { label: "Payout Processing Time", value: "< 24 hrs" },
    ],
    image: "/assets/images/project-learning.png",
    isFeatured: false,
  },
];

export const CATEGORIES_LIST = [
  "All",
  "Healthcare",
  "Logistics",
  "Finance",
  "E-Commerce",
  "Education",
  "Media & Entertainment",
  "Real Estate",
  "Travel & Transport",
];

