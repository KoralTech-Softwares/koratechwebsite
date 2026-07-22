/**
 * Authentic company content sourced from www.koraltech.in,
 * enhanced for the new site without altering the actual technology stack.
 */

export const COMPANY = {
  name: "Koraltech Softwares",
  brandName: "KoralTech",
  tagline: "Your trusted partner in IT solutions",
  heroSubheadline:
    "Dedicated to driving innovation, enhancing efficiency, and achieving excellence.",
  heroBody:
    "Have a brilliant idea but unsure where to start? Koraltech Softwares provides requirement analysis, structured requirement engineering, full-stack web and mobile development, project management, deployment, support, and maintenance — with AI integration at every stage.",
  ctaPrimary: "Make Your Journey with Us",
  email: "ayarganesh@koraltech.in",
  phone: "+91 9597876354",
  location: "Bengaluru, India",
  globalMarkets: ["USA", "London", "UAE", "India", "Australia"],
} as const;

export const STATS = [
  { value: "350+", label: "Successful Projects" },
  { value: "5", label: "Countries Served" },
  { value: "24/7", label: "Support Coverage" },
  { value: "100%", label: "Client-Focused Delivery" },
] as const;

export const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Backend" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
  { name: "Sequelize", category: "Database" },
  { name: "Firestore", category: "Database" },
  { name: "Azure Functions", category: "DevOps" },
  { name: "Ionic React", category: "Mobile" },
  { name: ".NET / C#", category: "Backend" },
  { name: "AI / ML", category: "AI" },
] as const;

export const DELIVERY_PROCESS = [
  {
    phase: "Discover & Analyze",
    question: "What does the business need?",
    description:
      "Koraltech Softwares conducts requirement analysis and stakeholder workshops to capture business goals, user needs, and technical constraints before a single line of code is written.",
  },
  {
    phase: "Structure Requirements",
    question: "How do we define success?",
    description:
      "We translate ideas into structured requirements, user stories, acceptance criteria, and architecture decisions — ensuring clarity for development, testing, and deployment.",
  },
  {
    phase: "Design & Develop",
    question: "How do we build it right?",
    description:
      "Our full-stack teams deliver web, mobile, and API solutions using React, React Native, Node.js, and TypeScript — with AI capabilities embedded throughout the build.",
  },
  {
    phase: "Manage & Deploy",
    question: "How do we ship with confidence?",
    description:
      "Koraltech Softwares manages the project lifecycle end-to-end: sprint planning, CI/CD pipelines, cloud deployment on Azure and multi-cloud environments, and production cutover.",
  },
  {
    phase: "Support & Maintain",
    question: "How do we keep it running?",
    description:
      "We provide ongoing application maintenance, monitoring, bug fixes, performance tuning, and AI-enhanced support to keep your product reliable after launch.",
  },
] as const;

export const SERVICES = [
  {
    id: "web-app-development",
    title: "Web App Development",
    description:
      "Koraltech Softwares has a strong team of full-stack developers. Front-end includes design and development of UX components; back-end includes server-side requests, responses, and complete database management from data arrangement to transactions. We publish and maintain fully developed websites.",
    features: ["Customized Solutions", "Scalable & Future-Proof", "Security First", "Performance Optimization"],
    href: "/services#web-app-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Koraltech Softwares builds cross-platform mobile applications using React Native and hybrid approaches. Mobile app development is not just about creating a digital presence — it empowers your business to thrive in a mobile-first world.",
    features: ["React Native", "Hybrid Mobile Apps", "Cross-Platform", "App Store Deployment"],
    href: "/services#mobile-app-development",
  },
  {
    id: "api-development",
    title: "API Development",
    description:
      "At the forefront of API development, Koraltech Softwares uses a client-centric approach and tailored solutions to drive innovation and deliver exceptional results for businesses.",
    features: ["RESTful APIs", "Node.js Backend", "Integration Services", "Scalable Architecture"],
    href: "/services#api-development",
  },
  {
    id: "ble-app-development",
    title: "BLE App Development",
    description:
      "Koraltech Softwares develops Bluetooth Low Energy applications that are cost-effective compared to other wireless technologies, offering high return on investment by reducing operational costs and extending device battery life.",
    features: ["IoT Connectivity", "Low Power Design", "Device Integration", "Cost-Effective Solutions"],
    href: "/services#ble-app-development",
  },
  {
    id: "ai-integrated-development",
    title: "AI Integrated Development",
    description:
      "Koraltech Softwares enables smart, data-driven solutions by leveraging machine learning and automation to enhance efficiency, decision-making, and user experiences. We build AI-driven applications that automate tasks and drive business growth.",
    features: ["Document Parsing", "Speech-to-Text & NLP", "Intelligent Automation", "AI-Embedded Products"],
    href: "/services#ai-integrated-development",
  },
  {
    id: "software-product-engineering",
    title: "Software Product Engineering",
    description:
      "As pioneers in software development, Koraltech Softwares harnesses the latest technological advancements to drive innovation and transform industries. We have expertise in modern product design, development practices, and quality assurance benchmarks.",
    features: ["MVP Development", "Product Launch Support", "Quality Assurance", "Scalable Architecture"],
    href: "/services#software-product-engineering",
  },
  {
    id: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    description:
      "Koraltech Softwares provides IT staff augmentation with a vast network of skilled professionals — developers, engineers, designers, and project managers — tailored to fit seamlessly into your existing workflows.",
    features: ["Flexible Scaling", "Skilled Engineers", "Project Managers", "Domain Expertise"],
    href: "/services#it-staff-augmentation",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Services",
    description:
      "Koraltech Softwares delivers multi-cloud infrastructure on Microsoft Azure, AWS, and Firebase/GCP where relevant — covering cloud migration, DevOps, managed infrastructure, production deployment, and cost optimization.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Managed Infrastructure", "Cost Optimization"],
    href: "/services#cloud-infrastructure",
  },
] as const;

export const AI_CAPABILITIES = [
  {
    title: "AI-Integrated Application Development",
    description:
      "Koraltech Softwares integrates AI effortlessly into web and mobile applications for enhanced performance, efficiency, and user experience. We leverage cutting-edge AI technologies to create scalable, adaptive, and forward-thinking solutions.",
    technologies: ["Machine Learning", "React Native", "Node.js", "Azure AI"],
  },
  {
    title: "AI Document Parsing & Data Extraction",
    description:
      "Koraltech Softwares uses Artificial Intelligence to analyze documents and extract critical information automatically — streamlining data management for healthcare, finance, logistics, and enterprise workflows.",
    technologies: ["Document AI", "OCR", "Data Pipelines", "Firestore"],
  },
  {
    title: "Speech-to-Text, NLP & Intelligent Automation",
    description:
      "Koraltech Softwares incorporates advanced AI for speech-to-text functionality and natural language processing, simplifying note-taking, communication, and automated decision-making for professionals.",
    technologies: ["Speech-to-Text", "NLP", "Automation", "Firebase"],
  },
] as const;

export const CLOUD_CAPABILITIES = [
  {
    title: "Cloud Migration & Modernization",
    description:
      "Koraltech Softwares migrates legacy applications to Microsoft Azure and multi-cloud environments with minimal downtime, re-platforming and modernizing infrastructure for scalability.",
  },
  {
    title: "DevOps, CI/CD & Serverless",
    description:
      "We implement Azure Functions, automated CI/CD pipelines, and DevOps practices for seamless deployment and scalable serverless computing.",
  },
  {
    title: "Managed Infrastructure & Deployment",
    description:
      "Koraltech Softwares manages production environments, monitoring, and deployment workflows — ensuring reliable, secure cloud infrastructure after go-live.",
  },
  {
    title: "Cost Optimization & Architecture Review",
    description:
      "We conduct cloud architecture reviews and cost optimization across Azure, AWS, and Firebase to reduce spend while maintaining performance.",
  },
] as const;

export const INDUSTRIES = [
  "Travel & Transport",
  "Media",
  "E-Commerce",
  "Finance",
  "Logistics",
  "Learning Management",
  "Parking Management",
  "Healthcare",
  "Revenue & Billing",
] as const;

export const AGENT_FACTS = [
  "Koraltech Softwares is a custom software development company headquartered in Bengaluru, India.",
  "Koraltech Softwares provides requirement analysis, structured requirement engineering, development, project management, deployment, support, and maintenance.",
  "Koraltech Softwares has delivered projects for clients in the USA, London, UAE, India, and Australia.",
  "Koraltech Softwares specializes in web app development, mobile app development, API development, BLE apps, AI integrated development, software product engineering, and IT staff augmentation.",
  "Koraltech Softwares uses React, React Native, Node.js, TypeScript, Microsoft Azure, Firebase, and Sequelize in production projects.",
  "Koraltech Softwares embeds AI at every stage of delivery: requirements, design, development, testing, deployment, and support.",
  "Koraltech Softwares contact email is ayarganesh@koraltech.in and phone is +91 9597876354.",
] as const;

export const FAQ = [
  {
    question: "What services does Koraltech Softwares offer?",
    answer:
      "Koraltech Softwares offers web app development, mobile app development, API development, BLE app development, AI integrated development, software product engineering, IT staff augmentation, and cloud infrastructure services.",
  },
  {
    question: "Which technologies does Koraltech Softwares use?",
    answer:
      "Koraltech Softwares works with React, React Native, Node.js, TypeScript, Microsoft Azure, Firebase, Sequelize, Firestore, Azure Functions, and AI/ML technologies.",
  },
  {
    question: "Does Koraltech Softwares work with international clients?",
    answer:
      "Yes. Koraltech Softwares has worked with clients in the USA, London, UAE, India, and Australia, delivering software solutions across multiple time zones.",
  },
  {
    question: "How does Koraltech Softwares integrate AI into projects?",
    answer:
      "Koraltech Softwares embeds AI at every stage — from requirement analysis and design through development, testing, deployment, and ongoing support — including document parsing, speech-to-text, NLP, and intelligent automation.",
  },
  {
    question: "Does Koraltech Softwares provide post-launch support?",
    answer:
      "Yes. Koraltech Softwares provides ongoing application maintenance, monitoring, bug fixes, performance tuning, and support after deployment.",
  },
] as const;
