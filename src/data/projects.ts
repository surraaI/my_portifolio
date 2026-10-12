export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "backend" | "frontend" | "fullstack" | "mobile";
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  /** Omit when no screenshot is available yet — the UI falls back to a generated placeholder tile. */
  imageUrl?: string;
  features: string[];
  /** Highlights this project in a larger showcase row above the filterable grid. */
  featured?: boolean;
  /** Author's role, shown on featured cards (e.g. "Backend Team Lead"). */
  role?: string;
  /** Standout figures shown on featured cards (e.g. "R² = 0.93 ETA model"). */
  metrics?: string[];
  /** Client/agency work with no public repository. */
  isClientProject?: boolean;
  /** Present on the projects shown as full case studies on the home page. */
  caseStudy?: CaseStudy;
};

export type ArchitectureLayer = {
  name: string;
  nodes: { label: string; note?: string }[];
};

export type CaseStudy = {
  period?: string;
  problem: string;
  myRole: string;
  results: string[];
  /** Top-to-bottom layers of the system, drawn as an architecture diagram. */
  architecture: ArchitectureLayer[];
};

export type Category = {
  id: string;
  name: string;
};

export const projects: Project[] = [
  {
    id: "yeneb-cods",
    title: "Yeneb",
    description: "Multi-vertical delivery super-app, built from scratch as its sole engineer",
    longDescription: "As CTO and sole engineer at Yeneb, I designed and built a delivery platform with 250+ FastAPI endpoints, real-time courier tracking, geospatial matching (PostGIS), AI-powered demand recommendations for couriers, online payments, three Flutter apps, and a Next.js web app and operations console. It runs on PostgreSQL, PostGIS, Redis, and WebSockets, with a courier wallet that settles cash-on-delivery orders and CI/CD on Docker and GitHub Actions.",
    category: "fullstack",
    technologies: ["FastAPI", "PostgreSQL", "PostGIS", "Redis", "Flutter", "Next.js", "Docker"],
    imageUrl: "/images/projects/yeneb.png",
    featured: true,
    role: "CTO",
    metrics: [
      "250+ API endpoints",
      "3 Flutter apps + Next.js web",
      "Real-time courier tracking",
    ],
    features: [
      "Real-time order and courier tracking over WebSockets",
      "Geospatial courier matching with PostGIS",
      "Integrated online payments, with cash on delivery as an option",
      "Courier wallet that settles cash-on-delivery orders",
      "Customer, courier, and supplier Flutter apps with multi-language support",
      "AI-powered demand recommendations for couriers",
      "Next.js web app for ordering and supplier management, plus an operations console",
      "CI/CD with Docker and GitHub Actions",
    ],
    caseStudy: {
      period: "May 2026 – present",
      problem:
        "Build Yeneb's delivery platform from scratch: one system that tracks couriers in real time, matches them by location, and takes payment online or in cash on delivery.",
      myRole:
        "CTO and sole engineer. I proposed building the platform from scratch to company leadership and own architecture, backend, database, web, mobile, infrastructure, and technical product decisions.",
      results: [
        "250+ API endpoints on one FastAPI backend",
        "Three Flutter apps, a Next.js web app, and an operations console, built solo",
        "CI/CD on Docker and GitHub Actions; the platform is preparing for launch",
      ],
      architecture: [
        {
          name: "Clients",
          nodes: [
            { label: "Customer app", note: "Flutter" },
            { label: "Courier app", note: "Flutter" },
            { label: "Supplier app", note: "Flutter" },
            { label: "Web app", note: "Next.js" },
            { label: "Operations console", note: "Next.js" },
          ],
        },
        {
          name: "API",
          nodes: [
            { label: "FastAPI", note: "REST, 250+ endpoints" },
            { label: "Demand recommendations", note: "AI-powered, for couriers" },
            { label: "WebSockets", note: "Order and courier tracking" },
            { label: "Payments", note: "Online and cash on delivery" },
            { label: "Courier wallet", note: "Settles cash orders" },
          ],
        },
        {
          name: "Data",
          nodes: [
            { label: "PostgreSQL" },
            { label: "PostGIS", note: "Geospatial courier matching" },
            { label: "Redis" },
          ],
        },
      ],
    },
  },
  {
    id: "movemate",
    title: "MoveMate",
    description: "AI-powered public bus tracking system for Addis Ababa with ML-driven ETAs",
    longDescription: "Graduation project at Addis Ababa University: an AI-powered public transport tracking platform for Addis Ababa. Led a team of five through task planning, code review, and delivery, and built the FastAPI + PostgreSQL backend behind a Flutter client. Real-time GPS ingestion feeds a RandomForestRegressor ETA model trained on 140,000+ GPS records (R² = 0.93, MAE ≈ 4.6 min), retrained nightly. The production model was compressed by 99%, from 2.8 GB to 17 MB, with no meaningful accuracy loss.",
    category: "fullstack",
    technologies: ["FastAPI", "Flutter", "PostgreSQL", "Python", "scikit-learn"],
    imageUrl: "",
    featured: true,
    role: "Team Lead and Backend Developer",
    metrics: [
      "R² = 0.93, MAE ≈ 4.6 min",
      "140K+ GPS records trained",
      "Model compressed 2.8 GB → 17 MB",
    ],
    features: [
      "Real-time GPS bus tracking",
      "RandomForestRegressor ETA predictions",
      "Demand-based rerouting module",
      "Nightly APScheduler retraining pipeline",
      "FastAPI backend with PostgreSQL",
      "Flutter rider-facing app",
    ],
    caseStudy: {
      period: "Sep 2025 – Jun 2026",
      problem:
        "Give bus riders in Addis Ababa a live position for their bus and an arrival time they can trust.",
      myRole:
        "Team lead of five and backend developer: task planning, code review, delivery, and the FastAPI backend and ETA model.",
      results: [
        "ETA model at R² = 0.93, MAE ≈ 4.6 min, trained on 140,000+ GPS records",
        "Production model compressed by 99%, from 2.8 GB to 17 MB, with no meaningful accuracy loss",
        "Nightly retraining and a demand-based rerouting module",
      ],
      architecture: [
        {
          name: "Clients",
          nodes: [
            { label: "Rider app", note: "Flutter" },
            { label: "Bus GPS feed", note: "Real-time ingestion" },
          ],
        },
        {
          name: "API",
          nodes: [
            { label: "FastAPI" },
            { label: "ETA model", note: "RandomForestRegressor" },
            { label: "APScheduler", note: "Nightly retraining" },
          ],
        },
        {
          name: "Data",
          nodes: [
            { label: "PostgreSQL" },
            { label: "GPS history", note: "140,000+ records" },
          ],
        },
      ],
    },
  },
  {
    id: "heallink",
    title: "HealLink",
    description: "Deployed healthcare appointment platform with multi-role RBAC",
    longDescription: "A deployed healthcare appointment platform supporting patients, providers, and admins through multi-role role-based access control. Covers provider onboarding and diagnostic workflows, QR-based patient check-in with automated notifications, a two-tier government verification dashboard, and provider analytics. Integrated Chapa for payments and Cloudinary for secure medical document storage, deployed on Render.",
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "Chapa", "Cloudinary"],
    demoUrl: "https://heallink.onrender.com/",
    imageUrl: "/images/projects/heallink.png",
    features: [
      "Multi-role RBAC (patient/provider/admin)",
      "Appointment booking and scheduling",
      "QR-based patient check-in with automated notifications",
      "Two-tier government verification dashboard",
      "Provider analytics on appointment trends and no-show rates",
      "Chapa payment integration",
      "Cloudinary document storage",
    ],
    caseStudy: {
      period: "Feb 2026 – Aug 2026",
      problem:
        "Let patients book and pay for appointments, and let providers get onboarded and verified, on one platform.",
      myRole:
        "Full-stack engineer and backend architect: the APIs, payments, document storage, and role-based access.",
      results: [
        "Deployed and live on Render",
        "QR-based patient check-in with automated notifications",
        "Provider analytics on appointment trends, peak occupancy, and no-show rates",
      ],
      architecture: [
        {
          name: "Clients",
          nodes: [
            { label: "Patients" },
            { label: "Providers" },
            { label: "Admins", note: "Two-tier verification" },
          ],
        },
        {
          name: "API",
          nodes: [
            { label: "Node.js + Express", note: "Asynchronous APIs" },
            { label: "RBAC", note: "Patient, provider, admin" },
          ],
        },
        {
          name: "Data and services",
          nodes: [
            { label: "MongoDB" },
            { label: "Chapa", note: "Payments" },
            { label: "Cloudinary", note: "Medical documents" },
          ],
        },
      ],
    },
  },
  {
    id: "saddeeqa",
    title: "Saddeeqa",
    description: "Flutter implementation of a traditional Ethiopian board game with an AI opponent",
    longDescription: "A Flutter mobile implementation of Saddeeqa, a traditional Ethiopian board game, featuring a single-player mode against an AI opponent built with Minimax and Alpha-Beta pruning, playable at multiple difficulty levels.",
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    imageUrl: "",
    features: [
      "Traditional Ethiopian board game rules",
      "Minimax AI opponent with Alpha-Beta pruning",
      "Single-player and local multiplayer modes",
      "Cross-platform Flutter app",
    ],
  },
  {
    id: "cogsoc",
    title: "CogSoc",
    description: "Socratic tutoring chatbot powered by Gemini/GPT",
    longDescription: "A Socratic tutoring chatbot that guides learners toward answers through questioning rather than giving direct solutions, built on a FastAPI backend integrating Gemini and GPT APIs.",
    category: "backend",
    technologies: ["FastAPI", "Python", "Gemini API", "OpenAI API"],
    imageUrl: "",
    features: [
      "Socratic-method tutoring dialogue",
      "Gemini/GPT API integration",
      "FastAPI backend service",
      "Conversation state management",
    ],
  },
  {
    id: "mo-creatives",
    title: "Mo-Creatives Portfolio",
    description: "Company site with blog and content management",
    longDescription: "Built the backend and contributed to frontend (Next.js) of Mo-Creatives' company site with blog, content, and admin management. Implemented role-based access control and scalable content workflows for admins and superadmins.",
    category: "fullstack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/surraaI/mocreatives_backend",
    demoUrl: "http://mo-creatives.com/",
    imageUrl: "/images/projects/mo-creatives.jpg",
    features: [
      "Blog management system",
      "Content workflows",
      "Admin dashboard",
      "Role-based access control",
      "Responsive design"
    ]
  },
  {
    id: "ensight-news",
    title: "Ensight News Platform",
    description: "RESTful backend for news website with article categorization",
    longDescription: "Built a scalable RESTful backend for a news website using FastAPI and PostgreSQL, supporting article categorization and user authentication. Implemented secure admin and user functionalities with role-based access control.",
    category: "backend",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/surraaI/Ensight_backend",
    imageUrl: "/images/projects/ensight-news.jpg",
    features: [
      "Article categorization system",
      "User authentication",
      "Content management system",
      "Role-based access control",
      "RESTful API design"
    ]
  },
  {
    id: "svm-booster",
    title: "SVM Booster",
    description: "YouTube growth platform with JWT auth, RBAC, and a coin reward system",
    longDescription: "A Node.js/Express/MongoDB backend for YouTube growth, with JWT-based authentication, role-based access control, Socket.IO-powered real-time features, OCR-based subscription verification, referral tracking, and a coin reward system for engagement.",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
    githubUrl: "https://github.com/surraaI/SVM_booster",
    demoUrl: "https://noko-delta.vercel.app/",
    imageUrl: "/images/projects/svm-booster.jpg",
    features: [
      "JWT authentication with role-based access control",
      "OCR-based subscription verification",
      "Referral tracking system",
      "Real-time features via Socket.IO",
      "Coin reward system"
    ],
    caseStudy: {
      problem:
        "Help YouTube creators grow their subscribers, and verify that each subscription actually happened.",
      myRole:
        "Backend developer: authentication, access control, real-time features, and the verification pipeline.",
      results: [
        "OCR-based subscription verification",
        "Three-tier role-based access control on JWT",
        "Real-time support chat, referral tracking, and a coin reward system",
      ],
      architecture: [
        {
          name: "Clients",
          nodes: [{ label: "Web app", note: "React" }],
        },
        {
          name: "API",
          nodes: [
            { label: "Node.js + Express" },
            { label: "Socket.IO", note: "Support chat" },
            { label: "JWT + RBAC", note: "Three tiers" },
            { label: "OCR", note: "Subscription checks" },
          ],
        },
        {
          name: "Data",
          nodes: [{ label: "MongoDB" }],
        },
      ],
    },
  },
  {
    id: "ecommerce-app",
    title: "eCommerce Mobile App",
    description: "Flutter eCommerce app with real-time messaging",
    longDescription: "Built a Flutter eCommerce app using BLoC, Clean Architecture, and TDD for maintainability and reliability. Integrated real-time messaging via Socket.io and secured the app with user authentication.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "BLoC", "Socket.IO", "Node.js"],
    githubUrl: "https://github.com/surraaI/2024-project-phase-mobile-tasks/tree/main/mobile/Sura/ecommerceapp",
    imageUrl: "/images/projects/ecommerce-app.jpg",
    features: [
      "Clean Architecture implementation",
      "Real-time messaging",
      "User authentication",
      "Product catalog",
      "Shopping cart functionality"
    ]
  },
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "fullstack", name: "Full Stack" },
  { id: "mobile", name: "Mobile" }
];

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};