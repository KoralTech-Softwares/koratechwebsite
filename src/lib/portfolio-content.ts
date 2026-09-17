/**
 * Comprehensive Portfolio & Case Study Data for Koraltech Softwares
 */

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle?: string;
  industry: string;
  categoryIcon: string;
  type: string;
  client?: string;
  location?: string;
  duration?: string;
  description: string;
  heroStats: { icon: string; value: string; label: string }[];
  verticalChips: { icon: string; title: string; subtitle: string }[];
  overview: {
    description: string;
    points: { icon: string; title: string; desc: string }[];
  };
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    points: string[];
  };
  keyFeatures: { icon: string; title: string; desc: string }[];
  screens: { name: string; desc: string; icon?: string }[];
  technologies: (string | { name: string; description: string })[];
  businessImpact: { icon: string; value: string; label: string }[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  image: string;
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
    type: "Hybrid Mobile & Web Application",
    client: "Sevanun Health Technologies",
    location: "United States / India",
    duration: "4 Months Sprint to Production",
    description:
      "A comprehensive healthcare platform enabling remote patient monitoring, teleconsultation and real-time health insights for doctors and patients.",
    heroStats: [
      { icon: "👥", value: "60K+", label: "Active Users" },
      { icon: "🏥", value: "40%", label: "Reduced Hospital Visits" },
      { icon: "⏱️", value: "99.9%", label: "System Uptime" },
      { icon: "🛡️", value: "Better Care", label: "Accessible Anytime, Anywhere" },
    ],
    verticalChips: [
      { icon: "👨‍⚕️", title: "Profile Management", subtitle: "Doctor Experience & Records" },
      { icon: "📅", title: "Calendar Scheduling", subtitle: "Live Availability & Appointments" },
      { icon: "🔍", title: "Search Tag Provisions", subtitle: "Find Specialists Instantly" },
      { icon: "💳", title: "Account Maintenance", subtitle: "Secure Transaction History" },
    ],
    overview: {
      description:
        "Sevanun is a remote healthcare monitoring application designed to connect patients and healthcare professionals seamlessly. The platform enables real-time tracking of vital signs, teleconsultation, and data-driven insights, improving patient engagement and allowing timely intervention for better health outcomes.",
      points: [
        { icon: "💚", title: "Remote Monitoring", desc: "Track vital signs from anywhere" },
        { icon: "📹", title: "Teleconsultation", desc: "Connect with healthcare experts" },
        { icon: "📄", title: "Health Analytics", desc: "Data-driven insights for better care" },
        { icon: "👥", title: "Patient Engagement", desc: "Empower users to take control" },
      ],
    },
    challenge: {
      description:
        "Healthcare providers faced difficulty in continuously monitoring patients, especially those with chronic conditions. Manual follow-ups were time-consuming and often led to delayed interventions.",
      points: [
        "Lack of real-time patient monitoring",
        "Limited patient engagement & adherence",
        "Delayed response to critical health issues",
        "Fragmented healthcare data across legacy systems",
      ],
    },
    solution: {
      description:
        "We developed a comprehensive mobile and web platform that integrates IoT devices, real-time data analytics, and teleconsultation features to provide end-to-end remote healthcare management.",
      points: [
        "Real-time tracking of vital signs & BLE telemetry",
        "Secure and seamless WebRTC video teleconsultation",
        "Centralized patient data management with HIPAA encryption",
        "Proactive alerts and emergency doctor notifications",
      ],
    },
    keyFeatures: [
      { icon: "🩺", title: "Vitals Monitoring", desc: "Track heart rate, SpO2, BP and temperature" },
      { icon: "📹", title: "Teleconsultation", desc: "Encrypted HD video & audio consultation" },
      { icon: "📄", title: "Health Reports", desc: "Detailed trend analytics and exportable PDFs" },
      { icon: "🔔", title: "Reminders & Alerts", desc: "Smart medication and appointment reminders" },
      { icon: "📱", title: "Multi-device Integration", desc: "Supports wearable and medical IoT BLE sensors" },
    ],
    screens: [
      { name: "Dashboard", desc: "Complete health overview", icon: "📊" },
      { name: "Vitals Tracking", desc: "Real-time vital signs", icon: "🩺" },
      { name: "Teleconsultation", desc: "Connect with specialists", icon: "📹" },
      { name: "Health Reports", desc: "Detailed reports & trends", icon: "📄" },
      { name: "Appointments", desc: "Manage your visits", icon: "📅" },
    ],
    technologies: [
      { name: "React Native", description: "Provides a responsive, cross-platform mobile experience" },
      { name: "CSS", description: "Enhances the design for a polished and intuitive user interface" }
    ],
    businessImpact: [
      { icon: "👥", value: "60K+", label: "Active Users" },
      { icon: "📊", value: "40%", label: "Reduced Hospital Visits" },
      { icon: "⏱️", value: "30%", label: "Faster Response Time" },
      { icon: "🛡️", value: "99.9%", label: "System Uptime" },
    ],
    highlights: [
      "Remote Monitoring of Vital Signs & BLE Sync",
      "Encrypted Doctor-Patient Video Teleconsultation",
      "Proactive Automated Alert Trigger System",
      "Personalized Patient Health Record Timeline",
    ],
    metrics: [
      { label: "Active Monitored Patients", value: "60,000+" },
      { label: "Critical Response Time", value: "< 2 mins" },
      { label: "Clinic Visit Reduction", value: "40%" },
      { label: "Platform Uptime SLA", value: "99.98%" },
    ],
    image: "/assets/images/casestudycard/sevanun.jpg",
    isFeatured: true,
  },
  {
    id: "parkese",
    title: "Parkese – Smart Parking Management",
    subtitle: "AI-Powered Smart Parking & Cashless Fleet Management Platform",
    industry: "Parking Management",
    categoryIcon: "🅿️",
    type: "Hybrid Mobile & Web Ecosystem",
    client: "Parkese Smart City Solutions",
    location: "India & UAE",
    duration: "3.5 Months",
    description:
      "Intelligent parking management solution with real-time slot availability, instant bookings, automated license plate recognition, and cashless payments.",
    heroStats: [
      { icon: "🚗", value: "120K+", label: "Slots Managed" },
      { icon: "⏱️", value: "65%", label: "Less Parking Search Time" },
      { icon: "💳", value: "100%", label: "Cashless Transactions" },
      { icon: "🛡️", value: "Zero Leakage", label: "Automated ALPR Audit" },
    ],
    verticalChips: [
      { icon: "🚀", title: "Revolutionizing Parking", subtitle: "Digital Mall & Hub Solutions" },
      { icon: "📷", title: "Smart ALPR Technology", subtitle: "Automated Plate Recognition" },
      { icon: "⏱️", title: "Real-Time Precision", subtitle: "Accurate Fee Calculation" },
      { icon: "📊", title: "Insights & Performance", subtitle: "Analytics & Revenue Trends" },
    ],
    overview: {
      description:
        "Parkese is an enterprise smart parking platform deployed across commercial tech parks, airports, and malls. It utilizes AI computer vision and real-time IoT sensors to automate vehicle entries, ticketless exits, and dynamic occupancy pricing.",
      points: [
        { icon: "🅿️", title: "Slot Availability", desc: "Live heatmaps & sensor telemetry" },
        { icon: "📷", title: "ALPR Recognition", desc: "Sub-second license plate verification" },
        { icon: "💳", title: "Cashless Fast Checkout", desc: "Multi-gateway instant digital pay" },
        { icon: "🏢", title: "Mall & Fleet Portal", desc: "Centralized analytics & revenue audit" },
      ],
    },
    challenge: {
      description:
        "Urban commercial zones suffered severe traffic congestion at boom barriers, manual revenue leakage, paper ticket disputes, and driver frustration during peak office hours.",
      points: [
        "Heavy entry bottlenecks and long queue wait times",
        "Lack of real-time slot occupancy visibility for drivers",
        "Manual cash handling and ticket loss leakage",
        "No centralized fleet audit across multiple city facilities",
      ],
    },
    solution: {
      description:
        "Engineered an end-to-end IoT and mobile architecture connecting edge ALPR cameras, dynamic digital signage, driver mobile applications, and cloud billing systems.",
      points: [
        "Sub-second AI plate matching at entry/exit gates",
        "Interactive 3D parking lot maps with step-by-step navigation",
        "Automated wallet debits and instant GST/VAT e-receipts",
        "Real-time management dashboard with revenue telemetry",
      ],
    },
    keyFeatures: [
      { icon: "🚗", title: "Real-Time Slot Finder", desc: "Find nearest open slot with turn-by-turn guidance" },
      { icon: "📷", title: "Ticketless ALPR", desc: "Automated barrier lift upon plate detection" },
      { icon: "💳", title: "Pre-Booking & Pass", desc: "Daily, monthly corporate parking passes" },
      { icon: "🔔", title: "Overstay Alert", desc: "Automatic grace period notification & billing" },
      { icon: "📊", title: "Audited Ledger", desc: "Real-time occupancy and revenue analytics" },
    ],
    screens: [
      { name: "Slot Map", desc: "Live parking layout", icon: "🗺️" },
      { name: "QR Fast Pass", desc: "Contactless gate pass", icon: "📱" },
      { name: "Payment Wallet", desc: "Instant auto-debit", icon: "💳" },
      { name: "History & Tax", desc: "Exportable invoices", icon: "📄" },
      { name: "Attendant Tool", desc: "Handheld POS app", icon: "🛡️" },
    ],
    technologies: [
      { name: "React & React Native", description: "Delivers responsive, cross-platform interfaces for both mobile and web" },
      { name: "ALPR", description: "Enables automatic and accurate license plate recognition" },
      { name: "REST API", description: "Facilitates smooth communication between the app and server" },
      { name: "Node.js", description: "Powers the backend for real-time processing and scalability" }
    ],
    businessImpact: [
      { icon: "🚗", value: "120K+", label: "Parking Slots Managed" },
      { icon: "⏱️", value: "65%", label: "Turnaround Time Drop" },
      { icon: "💳", value: "0%", label: "Revenue Leakage" },
      { icon: "📱", value: "90K+", label: "Active Mobile Users" },
    ],
    highlights: [
      "Smart Parking with ALPR Neural Camera Integration",
      "Real-Time Parking Slot Availability & Geo-Fencing",
      "Cashless Multi-Gateway Instant Checkout",
      "Attendant Companion App for Fast Enforcement",
    ],
    metrics: [
      { label: "Parking Slots Managed", value: "120,000+" },
      { label: "Turnaround Time Drop", value: "65%" },
      { label: "Revenue Leakage", value: "0%" },
      { label: "Active Mobile Users", value: "90,000+" },
    ],
    image: "/assets/images/casestudycard/parkese_car.png",
    isFeatured: true,
  },
  {
    id: "cold-chain",
    title: "Cold Chain Logistics Management",
    subtitle: "IoT Real-Time Temperature & Humidity Fleet Logistics Platform",
    industry: "Logistics",
    categoryIcon: "📦",
    type: "IoT Telemetry & Web Dashboard",
    client: "Apex Cold Logistics",
    location: "Global Footprint",
    duration: "5 Months",
    description:
      "End-to-end cold chain logistics platform with real-time GPS tracking, multi-zone temperature telemetry, predictive spoilage alarms, and automated compliance.",
    heroStats: [
      { icon: "🚚", value: "45K+", label: "Shipments Monitored" },
      { icon: "❄️", value: "92%", label: "Spoilage Rate Reduction" },
      { icon: "⏱️", value: "< 1.5s", label: "Telemetry Stream Latency" },
      { icon: "🛡️", value: "100%", label: "FDA/Pharma Compliance" },
    ],
    verticalChips: [
      { icon: "📍", title: "Real-Time Tracking", subtitle: "Live Location & Geo-Fencing" },
      { icon: "❄️", title: "Package Monitoring", subtitle: "Humidity & Temp Tracking" },
      { icon: "⚠️", title: "Excursion Alerts", subtitle: "Instant Breach Notifications" },
      { icon: "📊", title: "Tracking Dashboard", subtitle: "Comprehensive Admin Analytics" },
    ],
    overview: {
      description:
        "Apex Cold Logistics required an enterprise IoT tracking infrastructure to safeguard high-value pharmaceuticals, vaccines, and perishable goods in transit across international supply chains.",
      points: [
        { icon: "📦", title: "Cold Telemetry", desc: "Sub-second Bluetooth sensor sync" },
        { icon: "🚚", title: "Fleet Management", desc: "Route optimization and driver logs" },
        { icon: "⚠️", title: "Breach Alarms", desc: "SMS, Push & WhatsApp escalations" },
        { icon: "📄", title: "Pharma Audit", desc: "Tamper-proof compliance records" },
      ],
    },
    challenge: {
      description:
        "Perishable pharmaceutical shipments faced irreversible thermal excursion risks during inter-state haulage. Fragmented sensor loggers only provided data upon delivery when cargo was already damaged.",
      points: [
        "Inability to detect refrigeration failures mid-transit",
        "High cargo spoilage insurance claims & financial loss",
        "Manual regulatory compliance temperature logs",
        "Poor cellular connectivity in remote highway corridors",
      ],
    },
    solution: {
      description:
        "Built a resilient edge-to-cloud IoT telematics gateway streaming cabin temperature, humidity, and door-open events to Microsoft Azure IoT Hub with edge offline caching.",
      points: [
        "Real-time sensor sync streaming every 5 seconds",
        "Predictive thermal decay algorithms alerting dispatchers early",
        "Offline telemetry store-and-forward when cell signal drops",
        "1-click regulatory compliance audit report generation",
      ],
    },
    keyFeatures: [
      { icon: "❄️", title: "Live Thermal Dashboard", desc: "Color-coded safe/breach temperature indicators" },
      { icon: "📍", title: "Dynamic Route Geo-Fencing", desc: "Route deviation and unauthorized stop alerts" },
      { icon: "📱", title: "Driver Telemetry App", desc: "Simple cabin monitoring & incident reporting" },
      { icon: "🔔", title: "Automated Incident Escalation", desc: "Cascading alerts to drivers and warehouse managers" },
      { icon: "📊", title: "Shipment Quality Certificate", desc: "Instant cryptographic thermal audit PDF" },
    ],
    screens: [
      { name: "Live Map", desc: "Multi-vehicle tracking", icon: "🗺️" },
      { name: "Thermal Curve", desc: "Minute-by-minute temp", icon: "❄️" },
      { name: "Breach Log", desc: "Incident history", icon: "⚠️" },
      { name: "Driver Console", desc: "Trip navigation & logs", icon: "🚚" },
      { name: "Compliance Hub", desc: "Audit export tool", icon: "📄" },
    ],
    technologies: [
      { name: "React & React Native", description: "Delivers a seamless experience across web and mobile platforms" },
      { name: "REST API", description: "Enables smooth and secure data exchange" },
      { name: "Microsoft Azure", description: "Ensures reliable cloud-based infrastructure and scalability" }
    ],
    businessImpact: [
      { icon: "❄️", value: "92%", label: "Spoilage Rate Reduction" },
      { icon: "🚚", value: "45K+", label: "Shipments Monitored" },
      { icon: "⏱️", value: "< 1.5s", label: "Telemetry Latency" },
      { icon: "🛡️", value: "100%", label: "Compliance Pass Rate" },
    ],
    highlights: [
      "Real-Time Multi-Vehicle Shipment Tracking",
      "Instant Temperature Breach Alarm Webhooks",
      "Automated Regulatory Compliance PDF Generation",
      "Offline-Capable Driver Telemetry Logging",
    ],
    metrics: [
      { label: "Spoilage Rate Reduction", value: "92%" },
      { label: "Shipments Monitored", value: "45,000+" },
      { label: "Telemetry Latency", value: "< 1.5s" },
      { label: "Compliance Pass Rate", value: "100%" },
    ],
    image: "/assets/images/casestudycard/refrigerated_truck_icon.png",
    isFeatured: true,
  },
  {
    id: "hiring-management",
    title: "Hiring Management Application",
    subtitle: "Enterprise Recruitment & Clinical Credentialing Pipeline",
    industry: "Healthcare",
    categoryIcon: "🩺",
    type: "Hybrid Mobile & Web Application",
    client: "MedStaff Global",
    location: "United States",
    duration: "3 Months",
    description:
      "End-to-end talent acquisition and clinical credentialing portal with automated document OCR verification, interview scheduling, and candidate status tracking.",
    heroStats: [
      { icon: "👥", value: "14K+", label: "Verified Practitioners" },
      { icon: "⏱️", value: "54%", label: "Time-to-Hire Reduced" },
      { icon: "🎯", value: "96.4%", label: "Placement Success" },
      { icon: "📄", value: "100%", label: "Digital Credentialing" },
    ],
    verticalChips: [
      { icon: "👨‍⚕️", title: "Profile Management", subtitle: "Doctor Experience & Records" },
      { icon: "📅", title: "Calendar Scheduling", subtitle: "Live Availability & Appointments" },
      { icon: "🔍", title: "Search Tag Provisions", subtitle: "Find Specialists Instantly" },
      { icon: "💳", title: "Account Maintenance", subtitle: "Secure Transaction History" },
    ],
    overview: {
      description:
        "MedStaff Global required an ultra-fast mobile recruiting ecosystem to match certified physicians, nurses, and allied health professionals with hospital staffing vacancies across 24 states.",
      points: [
        { icon: "🩺", title: "Practitioner Portal", desc: "Fast profile setup & document upload" },
        { icon: "🏥", title: "Hospital Recruiter Hub", desc: "1-click shortlisting & interview booking" },
        { icon: "📄", title: "OCR License Verification", desc: "State medical board database sync" },
        { icon: "💬", title: "Direct Chat & Offers", desc: "Instant contract signing & onboarding" },
      ],
    },
    challenge: {
      description:
        "Hospitals experienced critical ward staffing shortages due to slow manual paperwork verification of medical licenses, background checks, and disorganized candidate follow-ups.",
      points: [
        "Medical credential verification took up to 3 weeks",
        "High candidate drop-off during manual paper intake",
        "Lack of centralized interview scheduling across time zones",
        "Unreliable push updates for urgent short-notice shifts",
      ],
    },
    solution: {
      description:
        "Developed a streamlined React Native and Node.js talent suite featuring automated document scanning, smart matching filters, and real-time FCM updates.",
      points: [
        "Automated OCR scanning validating licenses in seconds",
        "Dynamic calendar integration syncing recruiter availability",
        "FCM push notification broadcast for urgent shift openings",
        "Secure in-app e-signature for offer letters and contracts",
      ],
    },
    keyFeatures: [
      { icon: "🔍", title: "Smart Job Match Engine", desc: "Filter by specialty, shift timing, and compensation" },
      { icon: "📄", title: "Instant License Scanner", desc: "AI document boundary cropping and OCR validation" },
      { icon: "📅", title: "Integrated Calendar", desc: "Schedule video interviews with zero back-and-forth" },
      { icon: "📱", title: "Candidate Journey Tracker", desc: "Live stage progression from applied to placed" },
      { icon: "🛡️", title: "Compliance Vault", desc: "Secure encrypted archive of clinical certifications" },
    ],
    screens: [
      { name: "Candidate Feed", desc: "Matching clinical profiles", icon: "👥" },
      { name: "Credentials", desc: "OCR verified documents", icon: "📄" },
      { name: "Interview Desk", desc: "Calendar & video link", icon: "📅" },
      { name: "Offers", desc: "Contract digital signing", icon: "✍️" },
      { name: "Analytics", desc: "Recruitment metrics", icon: "📊" },
    ],
    technologies: ["React Native", "Node.js", "Sequelize", "PostgreSQL", "Firebase Cloud Messaging", "AWS"],
    businessImpact: [
      { icon: "⏱️", value: "54%", label: "Time-to-Hire Reduced" },
      { icon: "👥", value: "14K+", label: "Verified Practitioners" },
      { icon: "🎯", value: "96.4%", label: "Placement Success" },
      { icon: "📄", value: "100%", label: "Audit Compliance" },
    ],
    highlights: [
      "Smart Job Search & Practice Match Engine",
      "Real-Time FCM Notifications & Candidate Tracker",
      "In-App Calendar Interview Scheduling",
      "Automated License & Credential Verification",
    ],
    metrics: [
      { label: "Time-to-Hire Reduced", value: "54%" },
      { label: "Verified Practitioners", value: "14,000+" },
      { label: "Placement Success", value: "96.4%" },
    ],
    image: "/assets/images/casestudycard/hiring_management.png",
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
      "Complete invoicing management, secure cloud archive, smart multi-branch inventory sync, and multi-dimensional sales reporting system.",
    heroStats: [
      { icon: "📄", value: "150K+", label: "Invoices / Month" },
      { icon: "⚡", value: "4x", label: "Reconciliation Speed" },
      { icon: "🛡️", value: "99.99%", label: "Audit Accuracy" },
      { icon: "🏢", value: "100%", label: "Multi-Branch Sync" },
    ],
    verticalChips: [
      { icon: "📊", title: "Advanced Sales Reporting", subtitle: "Periodic Revenue Analytics" },
      { icon: "🔒", title: "Role-Based Secure Access", subtitle: "Secure Multi-Tier Security" },
      { icon: "📦", title: "Smart Billing & Inventory", subtitle: "Offline Queue Management" },
      { icon: "🖨️", title: "Automated Printing", subtitle: "Scheduled Invoice Generation" },
    ],
    overview: {
      description:
        "DNP Enterprises required a unified enterprise revenue platform to consolidate billing, tax compliance, stock tracking, and supplier disbursements across 40+ regional outlets.",
      points: [
        { icon: "🧾", title: "Smart Invoicing", desc: "Custom templates & automatic tax tiers" },
        { icon: "📊", title: "Financial Analytics", desc: "Live branch revenue comparison" },
        { icon: "📦", title: "Stock Synchronization", desc: "Prevent out-of-stock billing" },
        { icon: "📄", title: "Automated PDF Dispatch", desc: "WhatsApp & Email invoice delivery" },
      ],
    },
    challenge: {
      description:
        "Regional branch managers used disconnected desktop spreadsheets, resulting in delayed tax filings, inventory discrepancies, and severe accounting audit overheads.",
      points: [
        "Delayed monthly financial reconciliation across branches",
        "Tax calculation mistakes on multi-rate inventory items",
        "Discrepancies between physical stock and billed orders",
        "Vulnerability to unauthorized price adjustments",
      ],
    },
    solution: {
      description:
        "Engineered a high-performance multi-tenant web and mobile platform using React and Node.js with real-time PostgreSQL synchronization and automated compliance ledgers.",
      points: [
        "1-click bulk invoice creation with GST/VAT rules",
        "Real-time ledger updates reflecting instant revenue metrics",
        "Role-based access matrix preventing unauthorized discounting",
        "Encrypted PDF vault with tamper-evident audit trails",
      ],
    },
    keyFeatures: [
      { icon: "🧾", title: "Smart POS & Invoice Builder", desc: "Barcode scanning, instant discounting rules, split payments" },
      { icon: "📊", title: "Multi-Branch Reporting", desc: "Compare top-performing products and sales trends" },
      { icon: "📦", title: "Stock Depletion Triggers", desc: "Automated purchase orders when inventory hits threshold" },
      { icon: "📲", title: "Digital Delivery", desc: "Automatic WhatsApp and SMS invoice delivery to customers" },
      { icon: "🛡️", title: "Audit Trail", desc: "Every edit, credit note, and cancellation cryptographically logged" },
    ],
    screens: [
      { name: "POS Terminal", desc: "Fast customer checkout", icon: "🧾" },
      { name: "Sales Matrix", desc: "Real-time revenue charts", icon: "📊" },
      { name: "Stock Ledger", desc: "Warehouse inventory sync", icon: "📦" },
      { name: "Tax Reports", desc: "GST/VAT export tools", icon: "📄" },
      { name: "User Roles", desc: "Permissions & security", icon: "🔒" },
    ],
    technologies: [
      { name: "Ionic React", description: "Enables a responsive and seamless cross-platform experience for web application" },
      { name: "Firestore", description: "Provides real-time database management for secure and efficient data storage" }
    ],
    businessImpact: [
      { icon: "📄", value: "150K+", label: "Invoices Processed/Month" },
      { icon: "⚡", value: "4x", label: "Faster Reconciliation" },
      { icon: "🛡️", value: "99.99%", label: "Audit Accuracy" },
      { icon: "🏢", value: "40+", label: "Branches Unified" },
    ],
    highlights: [
      "Smart Billing & Inventory Integration",
      "Advanced Multi-Dimensional Sales Reporting",
      "Granular Role-Based Access Control",
      "Automated Bulk Invoice Generation & Dispatch",
    ],
    metrics: [
      { label: "Invoices Processed/Month", value: "150,000+" },
      { label: "Reconciliation Speed", value: "4x Faster" },
      { label: "Audit Accuracy", value: "99.99%" },
    ],
    image: "/assets/images/casestudycard/dnp_revenue.png",
    isFeatured: false,
  },
  {
    id: "tbta",
    title: "TBTWA - Poultry Management",
    subtitle: "Distributor Network & Digital Marketplace Management Platform",
    industry: "Education",
    categoryIcon: "🎓",
    type: "Hybrid Mobile Application",
    client: "TBTA Network",
    location: "India",
    duration: "3 Months",
    description:
      "Business management solution to streamline distributor operations, real-time price updates, digital ordering, and interactive video events.",
    heroStats: [
      { icon: "👥", value: "8.5K+", label: "Registered Distributors" },
      { icon: "📦", value: "22K+", label: "Daily Order Volume" },
      { icon: "⚡", value: "< 1s", label: "Price Sync Delay" },
      { icon: "📹", value: "500+", label: "Training Sessions Hosted" },
    ],
    verticalChips: [
      { icon: "📈", title: "Live Commodity Prices", subtitle: "Instant Price Broadcast" },
      { icon: "📦", title: "Bulk Reorder Flow", subtitle: "1-Tap Distributor Checkout" },
      { icon: "📹", title: "Video Masterclasses", subtitle: "Live Training & Q&A" },
      { icon: "🔔", title: "Push Broadcasts", subtitle: "Targeted Regional Notices" },
    ],
    overview: {
      description:
        "TBTA is a dedicated mobile distributor portal created to unite wholesale commodity suppliers and retail partners, delivering instant pricing updates, digital procurement, and training workshops.",
      points: [
        { icon: "🎓", title: "Dealer Training", desc: "Live and on-demand streaming" },
        { icon: "📈", title: "Dynamic Pricing", desc: "Instant commodity rate board" },
        { icon: "📦", title: "Digital Procurement", desc: "Track fulfillment from warehouse" },
        { icon: "💬", title: "Direct Helpdesk", desc: "Priority support channel" },
      ],
    },
    challenge: {
      description:
        "Coordinating dynamic commodity pricing across thousands of independent rural distributors relied on phone calls and paper ledgers, causing order fulfillment delays.",
      points: [
        "Volatile commodity prices required constant phone updates",
        "Manual order taking caused dispatch errors and wrong quantities",
        "Disorganized training workshops for new retail distributors",
        "Lack of centralized payment tracking and credit limits",
      ],
    },
    solution: {
      description:
        "Engineered an offline-resilient mobile app utilizing Firebase Firestore real-time listeners, adaptive video streaming, and instant push notification broadcasts.",
      points: [
        "Real-time sub-second price broadcast to all active app users",
        "Intuitive bulk digital ordering with automatic credit checks",
        "In-app streaming for weekly dealer workshops and product demos",
        "Automated WhatsApp notification summaries on order dispatch",
      ],
    },
    keyFeatures: [
      { icon: "📈", title: "Live Market Ticker", desc: "Real-time commodity rate updates with trend indicators" },
      { icon: "📦", title: "Express Order Desk", desc: "Select quantities, delivery date, and instant confirmation" },
      { icon: "📹", title: "Academy Video Hub", desc: "HLS adaptive video training library for dealers" },
      { icon: "💳", title: "Ledger & Credit Limit", desc: "Transparent accounting statement & payment receipts" },
      { icon: "🔔", title: "Priority Broadcasts", desc: "Targeted push notifications based on dealer tier" },
    ],
    screens: [
      { name: "Live Rates", desc: "Commodity pricing board", icon: "📈" },
      { name: "Order Desk", desc: "Bulk ordering portal", icon: "📦" },
      { name: "Video Hub", desc: "Training webinars", icon: "📹" },
      { name: "Statements", desc: "Account ledger", icon: "📄" },
      { name: "Profile & Tier", desc: "Distributor badge", icon: "🎓" },
    ],
    technologies: ["React Native", "Firebase", "Firestore", "Node.js", "AWS CloudFront", "TailwindCSS"],
    businessImpact: [
      { icon: "👥", value: "8.5K+", label: "Distributors Onboarded" },
      { icon: "📦", value: "22K+", label: "Daily Orders Processed" },
      { icon: "⚡", value: "< 1s", label: "Pricing Sync Delay" },
      { icon: "📹", value: "98%", label: "Dealer Adoption Rate" },
    ],
    highlights: [
      "Distributor & Retailer Tier Management",
      "Seamless Live & Recorded Event Video Hosting",
      "Real-Time Instant Price Updates & Catalog",
      "Push Notification Broadcast Engine",
    ],
    metrics: [
      { label: "Registered Distributors", value: "8,500+" },
      { label: "Daily Order Volume", value: "22,000+" },
      { label: "Pricing Sync Delay", value: "< 1 sec" },
    ],
    image: "/assets/images/casestudycard/tbta_management.png",
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
      "High-scale platform for diversified investment planning, algorithmic retirement forecasting, and automated portfolio optimization.",
    heroStats: [
      { icon: "💰", value: "₹500Cr+", label: "AUM Monitored" },
      { icon: "👥", value: "80K+", label: "Registered Investors" },
      { icon: "⚡", value: "99.99%", label: "Transaction SLA" },
      { icon: "🛡️", value: "100%", label: "SEBI/AMFI Compliant" },
    ],
    verticalChips: [
      { icon: "🎯", title: "Personalized Financial Planning", subtitle: "Tailored Financial Strategies" },
      { icon: "💎", title: "Comprehensive Wealth Management", subtitle: "Holistic Asset & Tax Planning" },
      { icon: "📊", title: "Diversified Investment Strategy", subtitle: "Optimized Returns & Risk" },
      { icon: "📱", title: "Simplified Wealth Management", subtitle: "Single-Window Asset System" },
    ],
    overview: {
      description:
        "Fliber is a comprehensive digital wealth management ecosystem that empowers retail and HNI investors to model lifetime financial goals, invest across curated funds, and monitor real-time returns.",
      points: [
        { icon: "💰", title: "Wealth Dashboard", desc: "Aggregated mutual funds, equity & debt" },
        { icon: "🎯", title: "Goal Projections", desc: "Simulate savings for retirement & education" },
        { icon: "⚡", title: "Instant KYC", desc: "Aadhaar e-KYC & digilocker integration" },
        { icon: "🔄", title: "Smart Auto-SIP", desc: "Direct bank mandate integration" },
      ],
    },
    challenge: {
      description:
        "Retail investors struggled with complicated financial jargon, disjointed broker statements, and slow paper-heavy KYC processes that discouraged long-term disciplined investing.",
      points: [
        "Scattered portfolio tracking across multiple AMC fund houses",
        "Complex onboarding requiring physical paperwork and notary",
        "Lack of actionable simulation tools for goal-based investing",
        "High platform drop-offs during payment gateway checkouts",
      ],
    },
    solution: {
      description:
        "Built a bank-grade React Native & .NET cloud architecture connecting BSE StAR MF APIs, instant e-KYC gateways, and automated SIP scheduling engines.",
      points: [
        "Paperless 2-minute KYC verification using DigiLocker and PAN OCR",
        "Unified multi-asset portfolio telemetry with real-time XIRR calculations",
        "Algorithmic portfolio rebalancing suggestions based on risk appetite",
        "256-bit bank-grade encryption across all financial transactions",
      ],
    },
    keyFeatures: [
      { icon: "📊", title: "Unified Net Worth Ticker", desc: "Track mutual funds, fixed deposits, gold, and equity in one view" },
      { icon: "🎯", title: "Goal Retirement Simulator", desc: "Interactive sliders calculating inflation-adjusted future corpus" },
      { icon: "⚡", title: "1-Click UPI & Mandate SIP", desc: "Seamless recurring payments with zero bounce friction" },
      { icon: "📄", title: "Tax-Saver (ELSS) Analyzer", desc: "Automated section 80C tax deduction certificates" },
      { icon: "🔔", title: "Market Volatility Shield", desc: "Smart alerts advising on strategic lump-sum dip purchases" },
    ],
    screens: [
      { name: "Portfolio", desc: "Net worth & XIRR tracker", icon: "💰" },
      { name: "Goal Planner", desc: "Retirement simulation", icon: "🎯" },
      { name: "Fund Explorer", desc: "Top curated funds", icon: "📊" },
      { name: "SIP Desk", desc: "Mandate payment schedule", icon: "🔄" },
      { name: "Tax Center", desc: "Capital gains & 80C", icon: "📄" },
    ],
    technologies: [
      { name: "React", description: "Provides a responsive and user-friendly interface" },
      { name: "REST API", description: "Ensures secure and seamless data communication" }
    ],
    businessImpact: [
      { icon: "💰", value: "₹500Cr+", label: "Assets Under Management" },
      { icon: "👥", value: "80K+", label: "Registered Active Investors" },
      { icon: "⚡", value: "99.99%", label: "Daily Transaction SLA" },
      { icon: "🎯", value: "4.9 ★", label: "App Store User Rating" },
    ],
    highlights: [
      "Comprehensive Multi-Asset Wealth Tracking",
      "Algorithmic Goal Planning & Projections",
      "Paperless Instant KYC & e-Sign",
      "Automated SIP Scheduling & Smart Reminders",
    ],
    metrics: [
      { label: "AUM Monitored", value: "₹500Cr+" },
      { label: "Registered Investors", value: "80,000+" },
      { label: "Daily Transaction SLA", value: "99.99%" },
    ],
    image: "/assets/images/casestudycard/fliber.png",
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
      "Frictionless specialty shopping app from product discovery to express checkout, international multi-currency billing, and live courier tracking.",
    heroStats: [
      { icon: "🛍️", value: "350K+", label: "Orders Delivered" },
      { icon: "📉", value: "32%", label: "Cart Abandonment Drop" },
      { icon: "⭐", value: "4.9", label: "Customer CSAT Rating" },
      { icon: "🌍", value: "18+", label: "Countries Shipped" },
    ],
    verticalChips: [
      { icon: "👤", title: "Easy Sign-Up & Access", subtitle: "Guest & Social Logins" },
      { icon: "🧾", title: "Invoice & Order Management", subtitle: "Detailed Billing Breakdowns" },
      { icon: "🔔", title: "Guided Notifications", subtitle: "Clear Toast & Order Alerts" },
      { icon: "⚡", title: "Seamless Transitions", subtitle: "Smooth Shopping Experience" },
    ],
    overview: {
      description:
        "Native Special is an acclaimed e-commerce brand connecting consumers with authenticated traditional sweets, snacks, and regional delicacies prepared with authentic heritage recipes.",
      points: [
        { icon: "🛒", title: "Product Discovery", desc: "Categorized by region & taste profiles" },
        { icon: "⚡", title: "Fast Checkout", desc: "Instant addresses & 1-tap payment" },
        { icon: "📦", title: "Waybill Tracking", desc: "Real-time shipment milestones" },
        { icon: "🎁", title: "Gift Hampers", desc: "Custom corporate & festive packaging" },
      ],
    },
    challenge: {
      description:
        "Specialty traditional food products have short shelf lives requiring immediate kitchen dispatch, accurate regional inventory balancing, and fast international shipping calculations.",
      points: [
        "High cart drop-offs on sluggish legacy checkout forms",
        "Complex shipping tier calculations for perishable foods",
        "Disorganized international courier API synchronizations",
        "Inventory over-promising on artisanal limited-batch goods",
      ],
    },
    solution: {
      description:
        "Designed and engineered a high-velocity React Native mobile application with Algolia search indexing, Stripe international payments, and automated warehouse dispatch queues.",
      points: [
        "Sub-100ms instant product search and auto-complete",
        "Dynamic delivery date selector based on live kitchen batch status",
        "Seamless international courier webhook synchronization",
        "Automated cart recovery push notifications with personalized coupons",
      ],
    },
    keyFeatures: [
      { icon: "🛒", title: "Lightning Fast Catalog", desc: "High-res culinary imagery with instant regional filtering" },
      { icon: "⚡", title: "Express 1-Click Pay", desc: "Apple Pay, Google Pay, Razorpay & international cards" },
      { icon: "📦", title: "Real-Time Tracking", desc: "Interactive courier route status from kitchen to doorstep" },
      { icon: "🎁", title: "Corporate Gifting Desk", desc: "Upload multiple recipient addresses for festival dispatch" },
      { icon: "🔔", title: "Smart Reorder", desc: "1-tap repeat order of favorite traditional delicacies" },
    ],
    screens: [
      { name: "Catalog", desc: "Regional delicacies feed", icon: "🛒" },
      { name: "Product Page", desc: "Freshness & reviews", icon: "⭐" },
      { name: "Cart & Pay", desc: "1-click express checkout", icon: "⚡" },
      { name: "Order Tracking", desc: "Live delivery status", icon: "📦" },
      { name: "Rewards", desc: "Loyalty points & offers", icon: "🎁" },
    ],
    technologies: [
      { name: "React & React Native", description: "Ensures a responsive and intuitive user interface across web and mobile platforms" },
      { name: "REST API", description: "Facilitates smooth communication between frontend and backend systems" },
      { name: "Sequelize with Node.js", description: "Provides efficient database management and backend functionality" }
    ],
    businessImpact: [
      { icon: "🛍️", value: "350K+", label: "Orders Delivered" },
      { icon: "📉", value: "32%", label: "Cart Abandonment Drop" },
      { icon: "⭐", value: "4.9", label: "Customer CSAT Score" },
      { icon: "🌍", value: "18+", label: "Countries Shipped" },
    ],
    highlights: [
      "Frictionless 1-Click Mobile Checkout",
      "Real-Time Courier Waybill Integration",
      "Dynamic Regional Inventory Allocation",
      "Hassle-Free Multi-Currency Payment",
    ],
    metrics: [
      { label: "Orders Delivered", value: "350,000+" },
      { label: "Cart Abandonment Drop", value: "32%" },
      { label: "Customer CSAT", value: "4.9 / 5.0" },
    ],
    image: "/assets/images/casestudycard/native_app.png",
    isFeatured: false,
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing Application",
    subtitle: "Real-Time Urban Commute & Dynamic Dispatch System",
    industry: "Travel & Transport",
    categoryIcon: "🚗",
    type: "Hybrid Mobile & Dispatch Platform",
    client: "Urban Fleet Mobility",
    location: "Middle East & India",
    duration: "4.5 Months",
    description:
      "Smart mobility application connecting riders and drivers with sub-second matching algorithms, real-time GPS telemetry, split fares, and automated safety SOS.",
    heroStats: [
      { icon: "🚗", value: "1.2M+", label: "Completed Rides" },
      { icon: "⏱️", value: "12s", label: "Average Match Time" },
      { icon: "💰", value: "35%", label: "Commute Cost Savings" },
      { icon: "🛡️", value: "100%", label: "Emergency SOS Uptime" },
    ],
    verticalChips: [
      { icon: "📍", title: "Live Route Tracking", subtitle: "Google Maps Integration" },
      { icon: "🔔", title: "Real-Time Notifications", subtitle: "Instant SMS & WhatsApp Alerts" },
      { icon: "💰", title: "Ride & Earn", subtitle: "Monetize Your Ride-Shares" },
      { icon: "🛡️", title: "Enhanced Safety Features", subtitle: "SOS & GeoFirestore Radius" },
    ],
    overview: {
      description:
        "Urban Fleet Mobility engineered a modern carpooling and ride-hailing network to relieve high-density metropolitan traffic, providing reliable, cost-effective daily commutes.",
      points: [
        { icon: "🚗", title: "Rider Companion", desc: "Instant booking & scheduled rides" },
        { icon: "🚕", title: "Driver Console", desc: "Earnings dashboard & turn-by-turn routing" },
        { icon: "📍", title: "Live Telemetry", desc: "Sub-second GPS coordinate sync" },
        { icon: "🛡️", title: "Safety Protocol", desc: "In-ride audio monitoring & SOS" },
      ],
    },
    challenge: {
      description:
        "Urban commuters suffered from exorbitant peak surge pricing, while drivers experienced long unpaid idle times navigating heavy urban gridlocks.",
      points: [
        "Unpredictable peak pricing and long pickup delays",
        "Inefficient single-rider vehicle occupancy on major highways",
        "High driver cancellation rates due to unclear route destinations",
        "Commuter safety concerns during late-night travels",
      ],
    },
    solution: {
      description:
        "Architected a real-time ride matching engine on Geofirestore and Google Maps Platform with dynamic split-billing, route pooling, and safety telemetry.",
      points: [
        "Sub-12 second driver assignment using spatial proximity graphs",
        "Dynamic route pooling allowing up to 3 compatible rider pickups",
        "In-app digital wallet supporting instant multi-party fare split",
        "Automated route deviation alerts and 1-tap emergency dispatch",
      ],
    },
    keyFeatures: [
      { icon: "📍", title: "Real-Time GPS Tracker", desc: "Smooth vehicle animation on interactive vector maps" },
      { icon: "⚡", title: "Smart Driver Dispatch", desc: "AI optimization minimizing driver dead-mileage" },
      { icon: "💳", title: "In-App Wallet & Split Pay", desc: "Invite co-riders to split journey fare automatically" },
      { icon: "🛡️", title: "Safety Shield SOS", desc: "Live location broadcast to emergency contacts and police" },
      { icon: "⭐", title: "Bi-Directional Feedback", desc: "Quality ratings maintaining high community standards" },
    ],
    screens: [
      { name: "Ride Booking", desc: "Pickup & destination map", icon: "🗺️" },
      { name: "Live Trip", desc: "Turn-by-turn route tracking", icon: "🚗" },
      { name: "Wallet & Split", desc: "Fare breakdown & cards", icon: "💳" },
      { name: "Safety Center", desc: "SOS & emergency contacts", icon: "🛡️" },
      { name: "Driver Console", desc: "Trips & daily earnings", icon: "🚕" },
    ],
    technologies: [
      { name: "React Native", description: "Cross-platform mobile app development" },
      { name: "Node.js", description: "Backend API & server-side processing" },
      { name: "Firebase Cloud Messaging", description: "Real-time push notifications" }
    ],
    businessImpact: [
      { icon: "🚗", value: "1.2M+", label: "Completed Rides" },
      { icon: "⏱️", value: "12s", label: "Average Match Time" },
      { icon: "💰", value: "35%", label: "Commute Cost Savings" },
      { icon: "🛡️", value: "100%", label: "Safety Record" },
    ],
    highlights: [
      "Live GPS Route Tracking & ETA Updates",
      "Smart Driver Dispatch & Pooling Algorithm",
      "In-App Digital Wallet & Split Fare",
      "Bi-Directional Rating & Safety SOS",
    ],
    metrics: [
      { label: "Completed Rides", value: "1.2M+" },
      { label: "Average Match Time", value: "12 seconds" },
      { label: "Commute Cost Savings", value: "35%" },
    ],
    image: "/assets/images/casestudycard/ride_sharing.png",
    isFeatured: false,
  },
  {
    id: "snap-m",
    title: "Snap-M – Media Management",
    subtitle: "AI Cloud Camera & Document Security Scanner",
    industry: "Media & Entertainment",
    categoryIcon: "🎬",
    type: "Hybrid Mobile Application",
    client: "Snap-M Technologies",
    location: "Global",
    duration: "3 Months",
    description:
      "High-security media vault with on-device AI document edge cropping, privacy auto-deletion scheduler, encrypted PDF generation, and biometric protection.",
    heroStats: [
      { icon: "📱", value: "100K+", label: "App Downloads" },
      { icon: "📄", value: "2.5M+", label: "Documents Scanned" },
      { icon: "⭐", value: "4.8 ★", label: "App Store Rating" },
      { icon: "🔒", value: "Zero-Knowledge", label: "Encrypted Storage" },
    ],
    verticalChips: [
      { icon: "📸", title: "Capture & Remember", subtitle: "Attach Memorable Notes" },
      { icon: "📄", title: "Image Organizer", subtitle: "Convert & Reorder PDFs" },
      { icon: "⏳", title: "Auto-Deletion Scheduler", subtitle: "Secure Ephemeral Storage" },
      { icon: "🎨", title: "Theme & Files", subtitle: "File Manager & Dark Mode" },
    ],
    overview: {
      description:
        "Snap-M is a privacy-first media and document workspace engineered for professionals who need to scan, edit, and temporarily store sensitive contracts, ID cards, and media without cloud surveillance.",
      points: [
        { icon: "📷", title: "AI Camera Scanner", desc: "Auto-perspective flattening" },
        { icon: "⏳", title: "Ephemeral Timers", desc: "Auto-delete files after 24h/7d" },
        { icon: "📄", title: "PDF Creation Suite", desc: "Watermark, sign & compress" },
        { icon: "🔒", title: "Hardware Vault", desc: "Secure enclave biometric lock" },
      ],
    },
    challenge: {
      description:
        "Users frequently needed to scan sensitive financial records and identity documents using mobile devices, but feared third-party cloud leaks or permanent unmanaged storage bloat.",
      points: [
        "Unsecure photo galleries exposing confidential tax and ID scans",
        "Clunky manual document edge cropping on standard camera apps",
        "Lack of automatic self-destruct timers for temporary media",
        "Large uncompressed image files taking up device memory",
      ],
    },
    solution: {
      description:
        "Built a native React Native application with on-device neural edge detection, local AES-256 vault encryption, and automated background garbage collection schedules.",
      points: [
        "Instant document detection running locally at 60 FPS",
        "Configurable auto-deletion schedule per folder (1 hour to 30 days)",
        "Zero-cloud offline mode guaranteeing complete user privacy",
        "Encrypted multi-page PDF generation with custom watermarking",
      ],
    },
    keyFeatures: [
      { icon: "📷", title: "Real-Time AI Edge Cropping", desc: "Automatically straightens documents and enhances legibility" },
      { icon: "⏳", title: "Self-Destruct Scheduler", desc: "Set ephemeral countdown timers on sensitive media" },
      { icon: "📄", title: "Pro PDF Converter", desc: "Merge, compress, and password-protect business documents" },
      { icon: "🔒", title: "Biometric Enclave Vault", desc: "Protected by FaceID, TouchID, and master PIN" },
      { icon: "🎨", title: "Darkroom Filters", desc: "B&W, color enhancement, and contrast boost for documents" },
    ],
    screens: [
      { name: "Camera Scanner", desc: "Real-time AI detection", icon: "📷" },
      { name: "Secure Gallery", desc: "Encrypted media folders", icon: "🔒" },
      { name: "PDF Editor", desc: "Watermark & password", icon: "📄" },
      { name: "Timer Manager", desc: "Auto-deletion settings", icon: "⏳" },
      { name: "Vault Settings", desc: "Biometrics & security", icon: "🛡️" },
    ],
    technologies: [
      { name: "React Native", description: "Cross-platform mobile app development" },
      { name: "SQL", description: "Efficient data storage and retrieval" },
      { name: "File Manager", description: "Secure media handling and organization" }
    ],
    businessImpact: [
      { icon: "📱", value: "100K+", label: "App Downloads" },
      { icon: "📄", value: "2.5M+", label: "Documents Scanned" },
      { icon: "⭐", value: "4.8 ★", label: "Store User Rating" },
      { icon: "🔒", value: "100%", label: "Offline Privacy" },
    ],
    highlights: [
      "On-Device AI Document Edge Cropping",
      "Automated Privacy Deletion Scheduler",
      "Batch Image to Encrypted PDF Converter",
      "Biometric PIN & FaceID Protection",
    ],
    metrics: [
      { label: "App Downloads", value: "100,000+" },
      { label: "Documents Scanned", value: "2.5M+" },
      { label: "App Store Rating", value: "4.8 ★" },
    ],
    image: "/assets/images/casestudycard/snapm.png",
    isFeatured: false,
  },
  {
    id: "learning-management",
    title: "Learning Management Application",
    subtitle: "Interactive Virtual Art Academy & Streaming Platform",
    industry: "Education",
    categoryIcon: "🎓",
    type: "Hybrid Web & Mobile Application",
    client: "New Masters Academy",
    location: "United States",
    duration: "5 Months",
    description:
      "Interactive digital academy offering 4K video lessons, synchronized 3D WebGL anatomical models, live mentor critique sessions, and structured curriculums.",
    heroStats: [
      { icon: "🎓", value: "60K+", label: "Active Art Students" },
      { icon: "📹", value: "4.8M+", label: "Video Hours Streamed" },
      { icon: "⚡", value: "78%", label: "Buffering Reduction" },
      { icon: "⭐", value: "99.2%", label: "Course Completion" },
    ],
    verticalChips: [
      { icon: "🎓", title: "Personalized Learning Dashboard", subtitle: "Custom Wishlists & Filters" },
      { icon: "✨", title: "Enhanced Animations", subtitle: "Interactive UI & Tooltips" },
      { icon: "🎠", title: "Smooth Carousel", subtitle: "Seamless Item Browsing" },
      { icon: "⚙️", title: "Adaptive Quality & Transcripts", subtitle: "Dynamic Video & Transcripts" },
    ],
    overview: {
      description:
        "New Masters Academy required an enterprise e-learning architecture to deliver thousands of hours of fine art video masterclasses and 3D anatomical reference tools to students worldwide.",
      points: [
        { icon: "🎓", title: "Curriculum Pathways", desc: "Structured drawing & painting tracks" },
        { icon: "🎨", title: "3D Model Rotator", desc: "WebGL skull and muscle anatomical reference" },
        { icon: "📹", title: "Adaptive Player", desc: "Custom bookmarks and playback speeds" },
        { icon: "💬", title: "Community Critique", desc: "Peer reviews and instructor feedback" },
      ],
    },
    challenge: {
      description:
        "High-definition video lessons and detailed 3D anatomy models suffered severe buffering for international students with variable network bandwidth.",
      points: [
        "Frequent video buffering and player crashes on mobile networks",
        "Disjointed 3D tools that required heavy desktop CAD software",
        "Lack of interactive progress tracking and assignment submissions",
        "Inefficient global CDN routing causing high latency in Asia & EU",
      ],
    },
    solution: {
      description:
        "Architected an adaptive bitrate streaming platform using AWS CloudFront CDN, lightweight Three.js/WebGL 3D model viewers, and interactive community channels.",
      points: [
        "Multi-rendition HLS streaming adjusting smoothly from 360p to 4K",
        "In-browser 60 FPS 3D model viewer running on mobile and desktop",
        "Assignment upload portal with visual canvas markup for instructors",
        "Integrated gamified curriculum badges and milestone certificates",
      ],
    },
    keyFeatures: [
      { icon: "📹", title: "Pro Video Player", desc: "A/B looping, slow-motion playback, multi-angle camera switching" },
      { icon: "🎨", title: "3D Anatomy Studio", desc: "Toggle lighting angles, muscle layers, and bone structures" },
      { icon: "🎓", title: "Guided Learning Tracks", desc: "Step-by-step masterclasses from beginner to advanced" },
      { icon: "💬", title: "Live Draw-Over Reviews", desc: "Mentors sketch feedback directly onto student assignments" },
      { icon: "📜", title: "Digital Certification", desc: "Verifiable certificates upon curriculum completion" },
    ],
    screens: [
      { name: "Course Library", desc: "Masterclass catalog", icon: "🎓" },
      { name: "Video Studio", desc: "HLS adaptive player", icon: "📹" },
      { name: "3D Anatomy", desc: "WebGL model rotator", icon: "🎨" },
      { name: "Critique Room", desc: "Draw-over feedback", icon: "💬" },
      { name: "Student Journey", desc: "Progress & badges", icon: "📜" },
    ],
    technologies: [
      { name: "React with TypeScript", description: "Ensures a dynamic, type-safe, and responsive user interface across devices." },
      { name: "Node.js with TypeScript", description: "Powers the backend with enhanced performance, scalability, and maintainability." },
      { name: "Azure Functions & DevOps", description: "Enables serverless computing with automated CI/CD pipelines for seamless deployment and scalability." },
      { name: ".NET", description: "Provides a powerful framework for building secure and scalable applications." },
      { name: "C# with Entity Framework", description: "Enables efficient data management with an object-relational mapper." }
    ],
    businessImpact: [
      { icon: "🎓", value: "60K+", label: "Active Students" },
      { icon: "📹", value: "4.8M+", label: "Video Hours Streamed" },
      { icon: "⚡", value: "78%", label: "Buffering Reduction" },
      { icon: "⭐", value: "99.2%", label: "Satisfaction Rate" },
    ],
    highlights: [
      "Personalized Student Learning Pathway",
      "Adaptive Bitrate HLS Stream Delivery",
      "Integrated 3D WebGL Anatomy Viewer",
      "Live Chat & Assignment Peer Review",
    ],
    metrics: [
      { label: "Active Art Students", value: "60,000+" },
      { label: "Video Hours Streamed", value: "4.8M+" },
      { label: "Buffering Reduction", value: "78%" },
    ],
    image: "/assets/images/casestudycard/learning_management.png",
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
  "Travel & Transport",
];
