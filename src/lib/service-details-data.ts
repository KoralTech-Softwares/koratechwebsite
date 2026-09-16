export type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  keyHighlights: string[];
  detailedFeatures: { title: string; description: string; icon: string }[];
  process: { step: string; title: string; description: string }[];
  whatWeDo: { text: string; items: string[] };
  technologyStack: { name: string; icon: string }[];
  commonUseCases: { title: string; icon: string; description?: string }[];
  businessBenefits: { title: string; icon: string; description?: string }[];
  faqs: { question: string; answer: string }[];
};

export const EXTENDED_SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-app-development": {
    id: "web-app-development",
    title: "Web App Development",
    subtitle: "Scalable, secure, and high-performance web applications tailored to your business needs.",
    description: "At Koraltech Softwares, we design and develop modern web applications that deliver seamless user experiences, high performance, and long-term scalability. From concept to deployment, we build solutions that help businesses innovate and grow in the digital world.",
    stats: [
      { value: "50+", label: "Happy Clients" },
      { value: "100+", label: "Successful Projects" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "Bengaluru", label: "Global Impact" },
    ],
    keyHighlights: [
      "Custom and scalable solutions",
      "Modern and responsive UI/UX",
      "Secure and high-performing applications",
      "End-to-end development support",
      "Ongoing maintenance and upgrades"
    ],
    detailedFeatures: [
      { title: "Custom Architecture", description: "We build bespoke architectures tailored specifically to your business logic, ensuring that as your user base grows, your web application scales effortlessly without performance bottlenecks.", icon: "architecture" },
      { title: "Responsive & Accessible UI", description: "Our designs are not only beautiful but strictly adhere to accessibility standards. We ensure your web app functions flawlessly across all devices, from massive desktop monitors to the smallest mobile screens.", icon: "responsive" },
      { title: "Enterprise-Grade Security", description: "Security is built-in from day one. We implement advanced encryption, secure authentication flows (OAuth, JWT), and strict data validation to protect your business and your users from cyber threats.", icon: "security" },
      { title: "Seamless Integrations", description: "No web app lives in isolation. We build robust API layers that seamlessly connect your new platform with existing ERPs, CRMs, payment gateways, and third-party marketing tools.", icon: "integration" }
    ],
    process: [
      { step: "01", title: "Discovery & Planning", description: "We start by deeply understanding your business goals, target audience, and technical requirements to formulate a comprehensive project roadmap." },
      { step: "02", title: "UI/UX Design", description: "Our design team creates wireframes and high-fidelity interactive prototypes, ensuring the user journey is intuitive and visually stunning." },
      { step: "03", title: "Agile Development", description: "We build your application in iterative sprints, providing you with regular demos and incorporating feedback instantly." },
      { step: "04", title: "Quality Assurance", description: "Rigorous automated and manual testing is performed across multiple browsers and devices to guarantee a bug-free experience." },
      { step: "05", title: "Deployment & Support", description: "We deploy the application to your production environment and provide continuous monitoring and maintenance to ensure optimal uptime." }
    ],
    whatWeDo: {
      text: "We build custom web applications using modern frameworks and technologies to meet diverse business requirements. Whether it's a customer-facing platform, an internal enterprise system, or a complex web portal, we deliver solutions that are reliable, secure, and future-ready.",
      items: [
        "Requirement analysis and solution design",
        "UI/UX design and prototyping",
        "Full-stack development (frontend + backend)",
        "Integration with third-party systems",
        "Testing, deployment, and ongoing support"
      ]
    },
    technologyStack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vue" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: ".NET", icon: "dotnet" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" }
    ],
    commonUseCases: [
      { title: "Business Portals", icon: "portal", description: "Secure portals for your partners, employees, or B2B clients to manage data." },
      { title: "E-Commerce", icon: "ecommerce", description: "High-conversion storefronts with complex catalog and payment logic." },
      { title: "SaaS Applications", icon: "saas", description: "Multi-tenant platforms built to handle subscription billing and scalable usage." },
      { title: "Enterprise Systems", icon: "enterprise", description: "Internal workflow tools that replace legacy software and spreadsheets." }
    ],
    businessBenefits: [
      { title: "Improved Efficiency", icon: "efficiency" },
      { title: "Better Experience", icon: "experience" },
      { title: "Scalable Architecture", icon: "scalable" },
      { title: "Higher ROI", icon: "roi" }
    ],
    faqs: [
      { question: "What types of web applications do you develop?", answer: "We develop everything from simple CMS websites to complex SaaS platforms, enterprise portals, and large-scale e-commerce systems." },
      { question: "How long does a typical project take?", answer: "A typical web app project takes anywhere from 3 to 6 months depending on the complexity and scope of features required." },
      { question: "Do you provide post-deployment support?", answer: "Yes, we provide extensive maintenance, monitoring, and support packages to ensure your app stays updated and secure." },
      { question: "Which technologies do you use?", answer: "We specialize in React, Next.js, Node.js, Python, and .NET, backed by robust databases like PostgreSQL and deployed on Azure or AWS." },
      { question: "Can you work with our existing team?", answer: "Absolutely, we frequently augment existing teams or take over legacy projects to help scale your operations seamlessly." }
    ]
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "High-performance, cross-platform mobile experiences that engage users and drive results.",
    description: "Koraltech Softwares builds native and cross-platform mobile applications that put powerful tools directly in the hands of your users. We focus on intuitive interfaces, fast load times, and robust offline capabilities to ensure a premium mobile experience on both iOS and Android.",
    stats: [
      { value: "40+", label: "Mobile Apps Launched" },
      { value: "1M+", label: "User Downloads" },
      { value: "4.9", label: "App Store Avg Rating" },
      { value: "Bengaluru", label: "Global Reach" },
    ],
    keyHighlights: [
      "Cross-platform & native development",
      "Intuitive, gesture-driven UI/UX",
      "Offline functionality & local storage",
      "Seamless API integration",
      "App Store & Play Store deployment"
    ],
    detailedFeatures: [
      { title: "Cross-Platform Efficiency", description: "Using frameworks like React Native and Flutter, we write code once and deploy beautifully to both iOS and Android, cutting development time and costs significantly.", icon: "crossplatform" },
      { title: "Native-Like Performance", description: "We deeply optimize our hybrid apps to leverage device hardware, ensuring fluid animations at 60FPS and rapid data processing that feels entirely native.", icon: "performance" },
      { title: "Offline-First Capabilities", description: "We architect apps that function flawlessly even without an internet connection, intelligently syncing local data with the cloud once connectivity is restored.", icon: "offline" },
      { title: "Hardware Integration", description: "We seamlessly connect your app to native device features like the camera, GPS, biometric authentication, and Bluetooth sensors.", icon: "hardware" }
    ],
    process: [
      { step: "01", title: "Strategy & Prototyping", description: "We define the core user journeys and create interactive wireframes to validate the app's flow before writing a single line of code." },
      { step: "02", title: "Visual Design", description: "We craft stunning, brand-aligned interfaces that strictly adhere to Apple's HIG and Google's Material Design guidelines." },
      { step: "03", title: "Core Development", description: "Our engineers build out the frontend logic and integrate securely with backend APIs and databases." },
      { step: "04", title: "Device Testing", description: "We test your app on physical device farms (various screen sizes and OS versions) to ensure perfect stability." },
      { step: "05", title: "App Store Launch", description: "We handle the entire submission process, navigating the strict review guidelines of both the App Store and Google Play Store." }
    ],
    whatWeDo: {
      text: "We specialize in React Native and hybrid mobile development, enabling us to deliver high-quality apps for both iOS and Android from a single codebase, significantly reducing time-to-market without sacrificing performance.",
      items: [
        "Mobile strategy and architecture",
        "Wireframing and interaction design",
        "React Native & iOS/Android development",
        "Push notifications & hardware integration",
        "Rigorous QA testing on real devices"
      ]
    },
    technologyStack: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Firebase", icon: "firebase" },
      { name: "SQLite", icon: "database" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Redux", icon: "redux" },
      { name: "Node.js", icon: "nodejs" },
      { name: "AWS", icon: "aws" },
      { name: "Figma", icon: "figma" },
      { name: "Docker", icon: "docker" }
    ],
    commonUseCases: [
      { title: "Consumer Apps", icon: "portal", description: "Engaging apps targeting everyday consumers." },
      { title: "M-Commerce", icon: "ecommerce", description: "Mobile-optimized shopping experiences." },
      { title: "On-Demand Services", icon: "saas", description: "Uber-like real-time service apps." },
      { title: "Internal Tools", icon: "enterprise", description: "Field force and internal employee tracking apps." }
    ],
    businessBenefits: [
      { title: "Brand Engagement", icon: "efficiency" },
      { title: "Direct Marketing", icon: "experience" },
      { title: "Customer Loyalty", icon: "scalable" },
      { title: "New Revenue Channels", icon: "roi" }
    ],
    faqs: [
      { question: "Do you build for iOS or Android?", answer: "Both! We primarily use cross-platform technologies like React Native to build for both platforms simultaneously." },
      { question: "Can you integrate the app with my existing website?", answer: "Yes, we can build custom APIs to connect your mobile app seamlessly with your existing web backend." },
      { question: "Will you help upload the app to the stores?", answer: "Yes, handling the Apple App Store and Google Play Store submission processes is included in our service." },
      { question: "How do you handle app updates?", answer: "We offer continuous maintenance plans to push new features, fix bugs, and ensure compatibility with new OS versions." },
      { question: "Can the app work offline?", answer: "Absolutely, we can implement local caching and offline sync architectures so users can access core features without internet." }
    ]
  },
  "api-development": {
    id: "api-development",
    title: "API Development & Integration",
    subtitle: "Robust, secure, and scalable APIs that connect your digital ecosystem.",
    description: "At Koraltech Softwares, we build the invisible bridges that power modern software. Our custom API development services enable seamless communication between your web apps, mobile apps, third-party services, and legacy enterprise systems.",
    stats: [
      { value: "100+", label: "APIs Deployed" },
      { value: "1B+", label: "Monthly Requests" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "0ms", label: "Latency Focus" },
    ],
    keyHighlights: [
      "RESTful & GraphQL API architectures",
      "High-throughput, low-latency design",
      "OAuth 2.0 & JWT enterprise security",
      "Comprehensive Swagger/OpenAPI documentation",
      "Rate limiting and auto-scaling"
    ],
    detailedFeatures: [
      { title: "GraphQL & REST Expertise", description: "We design flexible GraphQL schemas for complex frontend clients, and strict, resource-based REST architectures for standardized integrations.", icon: "architecture" },
      { title: "High-Throughput Design", description: "Our APIs are built to handle massive scale. We utilize Redis caching, connection pooling, and asynchronous processing to guarantee minimal latency.", icon: "performance" },
      { title: "Bank-Grade Security", description: "We protect your data with strict JWT authentication, OAuth 2.0 flows, robust rate limiting, and automated vulnerability scanning.", icon: "security" },
      { title: "Developer-Friendly Docs", description: "A great API requires great documentation. We provide interactive Swagger/OpenAPI docs that make it incredibly easy for third-party developers to integrate.", icon: "documentation" }
    ],
    process: [
      { step: "01", title: "Schema Design", description: "We architect the data models and define the strict request/response contracts before writing any code." },
      { step: "02", title: "Security Implementation", description: "We set up the authentication guards, API gateways, and rate limiters to protect the endpoints." },
      { step: "03", title: "Endpoint Development", description: "We build the core business logic, optimizing database queries for maximum speed." },
      { step: "04", title: "Load Testing", description: "We simulate millions of concurrent requests to identify and eliminate any performance bottlenecks." },
      { step: "05", title: "Versioning & Release", description: "We deploy the API with strict versioning strategies (v1, v2) to ensure we never break existing clients." }
    ],
    whatWeDo: {
      text: "We architect resilient backend services that serve as the single source of truth for your data. Whether you need to expose your data to third-party developers, integrate with payment gateways, or power a complex microservices architecture, we have you covered.",
      items: [
        "API architecture and schema design",
        "Microservices & Serverless development",
        "Legacy system API wrapping",
        "Third-party API integration (Stripe, Twilio, etc.)",
        "API performance tuning & caching"
      ]
    },
    technologyStack: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "react" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "python" },
      { name: ".NET Core", icon: "dotnet" },
      { name: "Redis", icon: "database" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB", icon: "database" },
      { name: "Azure Functions", icon: "azure" },
      { name: "AWS API Gateway", icon: "aws" },
      { name: "Docker", icon: "docker" }
    ],
    commonUseCases: [
      { title: "Mobile Backends", icon: "portal", description: "Powering mobile apps with real-time data." },
      { title: "Payment Gateways", icon: "ecommerce", description: "Secure integrations with Stripe and PayPal." },
      { title: "Microservices", icon: "saas", description: "Decoupling monoliths into scalable services." },
      { title: "B2B Integrations", icon: "enterprise", description: "Connecting your software to partner systems." }
    ],
    businessBenefits: [
      { title: "System Agility", icon: "efficiency" },
      { title: "Data Security", icon: "experience" },
      { title: "Partner Ecosystems", icon: "scalable" },
      { title: "Reduced Redundancy", icon: "roi" }
    ],
    faqs: [
      { question: "REST or GraphQL?", answer: "We build both. We recommend REST for simpler, standard integrations and GraphQL for complex clients that need precise data fetching." },
      { question: "How do you secure APIs?", answer: "We implement industry standards including TLS/SSL encryption, JWT tokens, OAuth 2.0, API keys, and strict rate limiting." },
      { question: "Can you document the API for our partners?", answer: "Yes, we always deliver comprehensive, interactive documentation using tools like Swagger/OpenAPI or Postman." },
      { question: "Can you fix our existing slow API?", answer: "Yes, we offer API auditing and refactoring services to introduce caching, optimize database queries, and improve response times." },
      { question: "Do you build serverless APIs?", answer: "Absolutely, we heavily utilize Azure Functions and AWS Lambda for scalable, cost-effective serverless API endpoints." }
    ]
  },
  "cloud-infrastructure": {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Services",
    subtitle: "Enterprise-grade cloud migration, DevOps, and managed infrastructure.",
    description: "We help businesses transition to and thrive in the cloud. Koraltech Softwares delivers highly available, secure, and cost-optimized multi-cloud environments on Microsoft Azure, AWS, and GCP, empowering your applications to scale limitlessly.",
    stats: [
      { value: "200+", label: "Cloud Migrations" },
      { value: "40%", label: "Avg Cost Reduction" },
      { value: "99.99%", label: "Availability" },
      { value: "24/7", label: "Monitoring" },
    ],
    keyHighlights: [
      "Zero-downtime cloud migrations",
      "Infrastructure as Code (IaC) provisioning",
      "Automated CI/CD deployment pipelines",
      "Proactive security & compliance auditing",
      "Continuous cost optimization"
    ],
    detailedFeatures: [
      { title: "Infrastructure as Code", description: "We use Terraform and ARM templates to define your entire infrastructure in code, ensuring environments are 100% reproducible and version-controlled.", icon: "architecture" },
      { title: "Zero-Downtime Migrations", description: "We meticulously plan and execute cloud migrations using blue/green deployment strategies to ensure your users never experience an outage.", icon: "migration" },
      { title: "Automated CI/CD", description: "We build robust GitHub Actions or Azure DevOps pipelines that automatically test, build, and deploy your code securely.", icon: "cicd" },
      { title: "FinOps & Cost Control", description: "Cloud costs can spiral out of control. We actively monitor your usage, shut down idle resources, and utilize reserved instances to slash your cloud bills.", icon: "cost" }
    ],
    process: [
      { step: "01", title: "Cloud Assessment", description: "We audit your current on-premise or legacy cloud setup to identify bottlenecks and cost-saving opportunities." },
      { step: "02", title: "Architecture Design", description: "We design a scalable, highly-available cloud topology tailored to your application's specific compute and data needs." },
      { step: "03", title: "IaC Provisioning", description: "We write the Terraform scripts to automatically and securely spin up your new cloud environment." },
      { step: "04", title: "Data Migration", description: "We carefully migrate your databases and file storage, ensuring absolute data integrity during the transfer." },
      { step: "05", title: "Managed Support", description: "We monitor your new cloud infrastructure 24/7, proactively handling scaling events and security patches." }
    ],
    whatWeDo: {
      text: "We take the complexity out of cloud computing. Our DevOps engineers design robust cloud architectures, automate your software delivery pipelines, and manage your production environments so your developers can focus purely on writing code.",
      items: [
        "Cloud readiness assessment & strategy",
        "Legacy application modernization",
        "Docker & Kubernetes containerization",
        "Azure DevOps & GitHub Actions CI/CD",
        "24/7 infrastructure monitoring & support"
      ]
    },
    technologyStack: [
      { name: "Azure", icon: "azure" },
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "google" },
      { name: "Terraform", icon: "terraform" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Azure DevOps", icon: "azure" },
      { name: "Linux", icon: "linux" },
      { name: "Nginx", icon: "nginx" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" }
    ],
    commonUseCases: [
      { title: "Legacy Migration", icon: "portal", description: "Moving old servers to modern cloud." },
      { title: "Disaster Recovery", icon: "ecommerce", description: "Automated backups and failover." },
      { title: "Global Scaling", icon: "saas", description: "Deploying to multi-region edge networks." },
      { title: "Cost Reduction", icon: "enterprise", description: "Auditing and slashing AWS bills." }
    ],
    businessBenefits: [
      { title: "Infinite Scalability", icon: "efficiency" },
      { title: "High Reliability", icon: "experience" },
      { title: "Security Compliance", icon: "scalable" },
      { title: "Optimized Spending", icon: "roi" }
    ],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "We are cloud-agnostic but have deep expertise in Microsoft Azure and AWS. We recommend the provider that best fits your specific stack and budget." },
      { question: "Will our app experience downtime during migration?", answer: "We utilize blue/green deployments and detailed migration planning to ensure near-zero downtime during cutover." },
      { question: "What is Infrastructure as Code?", answer: "It means we write scripts (like Terraform) to provision your servers automatically, making your infrastructure version-controlled and reproducible." },
      { question: "Can you reduce our current AWS bill?", answer: "Yes, our cloud audits typically identify significant savings through right-sizing instances, utilizing reserved instances, and removing orphaned resources." },
      { question: "Do you offer 24/7 support?", answer: "Yes, our managed infrastructure service includes round-the-clock monitoring and incident response." }
    ]
  },
  "software-product-engineering": {
    id: "software-product-engineering",
    title: "Software Product Engineering",
    subtitle: "From vision to reality: end-to-end product development for startups and enterprises.",
    description: "Koraltech Softwares acts as your dedicated product engineering partner. We don't just write code; we help you conceptualize, design, build, and launch successful digital products that resonate with users and disrupt markets.",
    stats: [
      { value: "30+", label: "Products Launched" },
      { value: "$50M+", label: "Client Funding Raised" },
      { value: "100%", label: "IP Ownership" },
      { value: "Agile", label: "Delivery Model" },
    ],
    keyHighlights: [
      "Rapid Minimum Viable Product (MVP) creation",
      "User-centric product design & prototyping",
      "Scalable microservices architecture",
      "Rigorous automated QA & testing",
      "Go-to-market technical support"
    ],
    detailedFeatures: [
      { title: "Rapid MVP Creation", description: "We help startups validate their ideas quickly by stripping away the fluff and building a robust, core Minimum Viable Product in weeks, not years.", icon: "speed" },
      { title: "User-Centric Prototyping", description: "Our UX engineers conduct deep market research to design prototypes that your users will actually want to use, ensuring product-market fit.", icon: "design" },
      { title: "Scalable Foundations", description: "Even an MVP deserves good architecture. We build products on solid microservices or modular monoliths so you never have to rewrite from scratch when you scale.", icon: "architecture" },
      { title: "Dedicated Product Teams", description: "You don't just get coders. You get a dedicated squad: a Product Manager, UX Designer, QA, and Senior Engineers completely focused on your success.", icon: "team" }
    ],
    process: [
      { step: "01", title: "Product Discovery", description: "We run workshops to define the product vision, map user journeys, and establish the MVP feature set." },
      { step: "02", title: "UX/UI Design", description: "We create interactive Figma prototypes to visualize the product and conduct early user testing." },
      { step: "03", title: "Sprint Development", description: "We build the product in 2-week Agile sprints, ensuring you have constant visibility into the progress." },
      { step: "04", title: "Launch Readiness", description: "We perform security audits, load testing, and finalize deployment architectures for a smooth launch." },
      { step: "05", title: "Growth Iteration", description: "Post-launch, we analyze user analytics to rapidly iterate and add new features based on real market feedback." }
    ],
    whatWeDo: {
      text: "We bring products to life through a meticulous engineering process. Our cross-functional teams of product managers, designers, and engineers work synchronously to iterate quickly, validate assumptions, and build robust software that scales.",
      items: [
        "Product discovery and roadmap planning",
        "UX/UI design and usability testing",
        "Agile sprint-based development",
        "Quality assurance and test automation",
        "Product launch and growth iteration"
      ]
    },
    technologyStack: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Redis", icon: "database" },
      { name: "Elasticsearch", icon: "search" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Figma", icon: "figma" },
      { name: "Jest", icon: "jest" },
      { name: "Cypress", icon: "cypress" },
      { name: "Jira", icon: "jira" }
    ],
    commonUseCases: [
      { title: "Startup MVPs", icon: "portal", description: "Fast delivery to secure seed funding." },
      { title: "SaaS Platforms", icon: "ecommerce", description: "B2B software with subscription tiers." },
      { title: "Enterprise Tools", icon: "saas", description: "Custom CRMs and internal platforms." },
      { title: "Consumer Apps", icon: "enterprise", description: "High-traffic B2C mobile and web apps." }
    ],
    businessBenefits: [
      { title: "Faster Time to Market", icon: "efficiency" },
      { title: "Market Validation", icon: "experience" },
      { title: "Technical Excellence", icon: "scalable" },
      { title: "Predictable Costs", icon: "roi" }
    ],
    faqs: [
      { question: "How is product engineering different from standard development?", answer: "Product engineering involves a holistic approach including market fit, UX strategy, scalability, and long-term product vision, rather than just fulfilling a spec sheet." },
      { question: "Can you help us build an MVP quickly?", answer: "Yes, we specialize in rapid MVP development, typically getting a functional, testable product to market in 8-12 weeks." },
      { question: "Who owns the intellectual property (IP)?", answer: "You do. Upon project completion and payment, 100% of the source code and IP is transferred to your company." },
      { question: "What methodology do you use?", answer: "We use Agile Scrum methodologies, providing you with complete transparency and bi-weekly sprint demos." },
      { question: "Can you scale the team as our product grows?", answer: "Absolutely, we can rapidly scale up the engineering team to match your product's growth trajectory and funding stages." }
    ]
  },
  "ai-integrated-development": {
    id: "ai-integrated-development",
    title: "AI Integrated Development",
    subtitle: "Embed intelligent automation and machine learning into your core applications.",
    description: "Transform your software from a passive tool into an intelligent assistant. Koraltech Softwares integrates cutting-edge AI technologies to automate workflows, extract insights from data, and create personalized user experiences.",
    stats: [
      { value: "25+", label: "AI Models Deployed" },
      { value: "80%", label: "Process Automation" },
      { value: "10x", label: "Data Processing Speed" },
      { value: "OpenAI", label: "Partnerships" },
    ],
    keyHighlights: [
      "Custom LLM & ChatGPT integrations",
      "Document parsing & OCR data extraction",
      "Predictive analytics & forecasting",
      "Natural Language Processing (NLP)",
      "Computer vision and image analysis"
    ],
    detailedFeatures: [
      { title: "Generative AI Integration", description: "We securely connect your applications to powerful LLMs (like GPT-4), enabling them to draft content, summarize documents, and generate code automatically.", icon: "ai" },
      { title: "Intelligent Chatbots", description: "We build advanced, context-aware AI assistants trained strictly on your company's proprietary data to provide accurate, 24/7 customer support.", icon: "bot" },
      { title: "Automated Data Extraction", description: "Say goodbye to manual data entry. Our AI pipelines use advanced OCR and computer vision to extract structured data from unstructured PDFs and images.", icon: "data" },
      { title: "Predictive Analytics", description: "We implement custom machine learning models that analyze your historical data to forecast trends, predict churn, and optimize pricing.", icon: "chart" }
    ],
    process: [
      { step: "01", title: "AI Readiness Audit", description: "We evaluate your current data infrastructure and identify high-ROI opportunities for AI automation." },
      { step: "02", title: "Data Preparation", description: "We clean, structure, and securely vectorize your proprietary data for use in machine learning models." },
      { step: "03", title: "Model Integration", description: "We securely integrate LLM APIs or train custom models tailored specifically to your business logic." },
      { step: "04", title: "Human-in-the-loop Testing", description: "We implement rigorous testing and validation systems to ensure the AI's output is accurate and hallucination-free." },
      { step: "05", title: "Deployment & Scaling", description: "We deploy the AI features into production, carefully monitoring token usage and optimizing inference costs." }
    ],
    whatWeDo: {
      text: "We bridge the gap between complex AI research and practical business applications. We don't just build standalone models; we seamlessly embed AI capabilities directly into your web, mobile, and enterprise systems to solve real-world problems.",
      items: [
        "AI readiness and data assessment",
        "OpenAI/LLM API integration",
        "Custom machine learning model training",
        "Automated intelligent chatbots",
        "AI-driven recommendation engines"
      ]
    },
    technologyStack: [
      { name: "Python", icon: "python" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "OpenAI API", icon: "openai" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Azure AI", icon: "azure" },
      { name: "AWS SageMaker", icon: "aws" },
      { name: "LangChain", icon: "langchain" },
      { name: "Pinecone", icon: "database" },
      { name: "Node.js", icon: "nodejs" },
      { name: "React", icon: "react" },
      { name: "Docker", icon: "docker" }
    ],
    commonUseCases: [
      { title: "Smart Chatbots", icon: "portal", description: "Customer service bots trained on your docs." },
      { title: "Document Analysis", icon: "ecommerce", description: "Extracting data from hundreds of invoices." },
      { title: "Fraud Detection", icon: "saas", description: "Flagging anomalous financial transactions." },
      { title: "Personalization", icon: "enterprise", description: "E-commerce product recommendation engines." }
    ],
    businessBenefits: [
      { title: "Automated Workflows", icon: "efficiency" },
      { title: "Data-Driven Decisions", icon: "experience" },
      { title: "Reduced Human Error", icon: "scalable" },
      { title: "Competitive Edge", icon: "roi" }
    ],
    faqs: [
      { question: "Can you integrate ChatGPT into our internal tools?", answer: "Yes, we frequently build custom interfaces and integrations using OpenAI's APIs to bring generative AI securely into enterprise workflows." },
      { question: "Do we need a massive dataset to use AI?", answer: "Not always. While custom ML models require data, we can leverage pre-trained foundation models (like GPT-4) immediately for many NLP tasks." },
      { question: "How do you handle data privacy with AI?", answer: "We use enterprise-tier AI services (like Azure OpenAI) where your data is not used to train public models, ensuring complete confidentiality." },
      { question: "Can AI read our PDF invoices?", answer: "Yes, we implement advanced Document AI and OCR pipelines that can accurately extract structured data from unstructured PDFs and images." },
      { question: "Are AI integrations expensive to run?", answer: "It depends on the scale, but we design our architectures to optimize token usage and compute costs, often resulting in massive net savings via automation." }
    ]
  },
  "it-staff-augmentation": {
    id: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    subtitle: "Scale your engineering capacity instantly with our elite technical talent.",
    description: "Need to accelerate development but struggling to hire fast enough? Koraltech Softwares provides dedicated, highly-skilled software engineers and IT professionals who integrate seamlessly into your existing team and workflows.",
    stats: [
      { value: "150+", label: "Engineers Available" },
      { value: "48 Hrs", label: "To Initial Match" },
      { value: "100%", label: "Time Zone Overlap" },
      { value: "Zero", label: "Recruitment Fees" },
    ],
    keyHighlights: [
      "Rigorous top 3% talent vetting process",
      "Flexible engagement models (contract/full-time)",
      "Seamless integration with your Agile ceremonies",
      "Direct communication and management control",
      "Scalable up or down with 30 days notice"
    ],
    detailedFeatures: [
      { title: "Top 3% Talent Pool", description: "We have already done the hard work of recruiting. Our engineers pass rigorous technical interviews, live coding tests, and communication evaluations before they are ever presented to you.", icon: "talent" },
      { title: "Zero Hiring Overhead", description: "Skip the massive recruitment fees, benefits administration, and hardware provisioning. You pay a simple, flat monthly rate for a dedicated professional.", icon: "cost" },
      { title: "Seamless Integration", description: "Our engineers adapt to your culture. They join your Slack, attend your daily Scrums, use your Jira, and report directly to your internal engineering managers.", icon: "team" },
      { title: "Maximum Flexibility", description: "Scale your team up during critical release cycles, and scale back down when the project concludes, all with just 30 days notice.", icon: "scale" }
    ],
    process: [
      { step: "01", title: "Requirement Gathering", description: "We meet with your technical leads to understand the exact tech stack, experience level, and cultural fit you need." },
      { step: "02", title: "Profile Matching", description: "Within 48 hours, we present 2-3 pre-vetted engineer profiles that perfectly match your requirements." },
      { step: "03", title: "Client Interviews", description: "You conduct your own technical interviews and evaluations to ensure the candidate is the perfect fit for your team." },
      { step: "04", title: "Rapid Onboarding", description: "The selected engineer is integrated into your communication channels, repos, and workflows immediately." },
      { step: "05", title: "Ongoing Support", description: "Our technical leads periodically check in to ensure performance remains stellar, and handle all HR administration." }
    ],
    whatWeDo: {
      text: "We eliminate the hiring headache. You tell us the technical stack, experience level, and cultural fit you need, and we provide dedicated experts who work as a direct extension of your in-house team.",
      items: [
        "Requirement gathering and talent matching",
        "Client interviews and selection",
        "Rapid onboarding and technical setup",
        "Ongoing performance monitoring by our technical leads",
        "Continuous HR and administrative support"
      ]
    },
    technologyStack: [
      { name: "React Developers", icon: "react" },
      { name: "Node.js Engineers", icon: "nodejs" },
      { name: ".NET Specialists", icon: "dotnet" },
      { name: "Python Experts", icon: "python" },
      { name: "DevOps Engineers", icon: "aws" },
      { name: "QA Automation", icon: "cypress" },
      { name: "UI/UX Designers", icon: "figma" },
      { name: "Project Managers", icon: "jira" },
      { name: "Mobile (iOS/Android)", icon: "swift" },
      { name: "Database Admins", icon: "postgres" },
      { name: "Cloud Architects", icon: "azure" },
      { name: "Data Scientists", icon: "tensorflow" }
    ],
    commonUseCases: [
      { title: "Meeting Deadlines", icon: "portal", description: "Rapid scaling to hit product launch dates." },
      { title: "Skill Gap Bridging", icon: "ecommerce", description: "Bringing in niche expertise (e.g. AI, DevOps)." },
      { title: "Team Scaling", icon: "saas", description: "Growing your engineering department instantly." },
      { title: "Cost Optimization", icon: "enterprise", description: "Reducing local hiring and overhead costs." }
    ],
    businessBenefits: [
      { title: "Zero Hiring Hassle", icon: "efficiency" },
      { title: "Immediate Productivity", icon: "experience" },
      { title: "Flexible Capacity", icon: "scalable" },
      { title: "Reduced Overhead", icon: "roi" }
    ],
    faqs: [
      { question: "How quickly can we start?", answer: "We can typically provide qualified profiles within 48 hours, and upon your approval, they can start working within 1 to 2 weeks." },
      { question: "Do the augmented staff work in our time zone?", answer: "We structure overlapping hours to ensure real-time communication during your critical daily standups and core working hours." },
      { question: "Who manages the augmented engineers?", answer: "You do. They integrate directly into your Jira, Slack, and daily scrums, reporting to your engineering managers." },
      { question: "What if the resource isn't a good fit?", answer: "If you are unsatisfied for any reason, we offer a fast, frictionless replacement process at no additional cost." },
      { question: "Do you handle payroll and hardware?", answer: "Yes, we handle all payroll, benefits, hardware, and IT infrastructure. You simply pay a flat monthly rate for their dedicated time." }
    ]
  },
  "ble-app-development": {
    id: "ble-app-development",
    title: "BLE App Development",
    subtitle: "Connecting the physical and digital worlds with Bluetooth Low Energy solutions.",
    description: "Koraltech Softwares specializes in building applications that interface directly with IoT devices, wearables, and hardware sensors using Bluetooth Low Energy (BLE) technology, delivering real-time data and remote control capabilities.",
    stats: [
      { value: "20+", label: "Hardware Integrations" },
      { value: "99%", label: "Connection Reliability" },
      { value: "<50ms", label: "Data Latency" },
      { value: "Months", label: "Battery Life Savings" },
    ],
    keyHighlights: [
      "Robust iOS CoreBluetooth & Android BLE integration",
      "Background scanning and auto-reconnection",
      "Optimized payload parsing and data streaming",
      "Over-The-Air (OTA) firmware update support",
      "Secure encrypted BLE communication"
    ],
    detailedFeatures: [
      { title: "Rock-Solid Connectivity", description: "BLE can be notoriously finicky. We build robust auto-reconnection logic and background scanning protocols so your app stays connected to hardware seamlessly.", icon: "connection" },
      { title: "Real-Time Data Parsing", description: "We efficiently decode complex hexadecimal byte arrays from GATT characteristics in real-time, translating raw sensor data into beautiful, actionable UI charts.", icon: "data" },
      { title: "Over-The-Air (OTA) Updates", description: "Keep your hardware future-proof. We implement secure OTA firmware update pipelines directly within the mobile app, allowing you to patch devices remotely.", icon: "update" },
      { title: "Battery Optimization", description: "We respect user device limits. Our BLE polling architectures are meticulously designed to minimize smartphone battery drain and maximize hardware lifespan.", icon: "battery" }
    ],
    process: [
      { step: "01", title: "Protocol Definition", description: "We collaborate with your firmware engineers to define the GATT profile and payload structure for maximum efficiency." },
      { step: "02", title: "Native Driver Setup", description: "We build custom native modules utilizing iOS CoreBluetooth and Android BLE to establish the core connection layer." },
      { step: "03", title: "Data Translation", description: "We develop the parsing engine that translates raw byte streams into human-readable app data in real-time." },
      { step: "04", title: "Hardware Testing", description: "We rigorously test the app against physical development boards and final hardware prototypes in various environments." },
      { step: "05", title: "Cloud Synchronization", description: "We implement the logic to securely sync the collected IoT data from the smartphone up to your cloud backend." }
    ],
    whatWeDo: {
      text: "Hardware is only as good as the software that controls it. We bridge the gap between firmware and user experience, building reliable mobile applications that pair instantly, sync data flawlessly, and provide intuitive controls for complex hardware.",
      items: [
        "BLE protocol and GATT characteristic mapping",
        "Native mobile BLE driver development",
        "Real-time data visualization and charting",
        "Hardware pairing and authentication flows",
        "Cloud synchronization of IoT data"
      ]
    },
    technologyStack: [
      { name: "CoreBluetooth", icon: "swift" },
      { name: "Android BLE", icon: "kotlin" },
      { name: "React Native BLE", icon: "react" },
      { name: "C / C++", icon: "cpp" },
      { name: "Node.js IoT", icon: "nodejs" },
      { name: "MQTT", icon: "database" },
      { name: "AWS IoT Core", icon: "aws" },
      { name: "Azure IoT", icon: "azure" },
      { name: "D3.js", icon: "react" },
      { name: "Figma", icon: "figma" },
      { name: "SQLite", icon: "database" },
      { name: "Docker", icon: "docker" }
    ],
    commonUseCases: [
      { title: "Wearable Tech", icon: "portal", description: "Fitness trackers and smartwatches." },
      { title: "Smart Home Devices", icon: "ecommerce", description: "IoT lighting, locks, and thermostats." },
      { title: "Medical Sensors", icon: "saas", description: "Heart rate monitors and continuous glucose monitors." },
      { title: "Asset Tracking", icon: "enterprise", description: "Bluetooth beacons for warehouse tracking." }
    ],
    businessBenefits: [
      { title: "Hardware Value Add", icon: "efficiency" },
      { title: "User Independence", icon: "experience" },
      { title: "Real-time Insights", icon: "scalable" },
      { title: "Low Power Drain", icon: "roi" }
    ],
    faqs: [
      { question: "Can you work with unreleased hardware prototypes?", answer: "Yes, we frequently work alongside hardware engineers using pre-production boards and BLE development kits to build the app in tandem." },
      { question: "Do you support both iOS and Android?", answer: "Yes, we have deep expertise in the intricacies and differing BLE permissions required for both the Apple and Android ecosystems." },
      { question: "Can the app connect to multiple devices at once?", answer: "Yes, we can build architectures capable of scanning and maintaining concurrent connections to a fleet of BLE beacons or sensors." },
      { question: "Can you help design the GATT profile?", answer: "Absolutely, we often consult with firmware teams to optimize the BLE payload structure for maximum throughput and battery efficiency." },
      { question: "How do you handle firmware updates?", answer: "We can implement seamless Over-The-Air (OTA) update flows directly within the mobile app to keep your hardware up to date." }
    ]
  }
};
