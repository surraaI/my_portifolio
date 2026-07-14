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
};

export type Category = {
  id: string;
  name: string;
};

export const projects: Project[] = [
  {
    id: "movemate",
    title: "MoveMate",
    description: "AI-powered public bus tracking system for Addis Ababa with ML-driven ETAs",
    longDescription: "Graduation project and backend-team-lead effort: an AI-powered public bus tracking platform for Addis Ababa. Built the FastAPI + PostgreSQL backend and led a team delivering a Flutter client, with real-time GPS ingestion feeding a RandomForestRegressor ETA model trained on ~140K GPS records. Compressed the raw GPS dataset from 2.8GB to ~17MB for efficient training and deployment without sacrificing model accuracy.",
    category: "fullstack",
    technologies: ["FastAPI", "Flutter", "PostgreSQL", "Python", "scikit-learn"],
    imageUrl: "",
    featured: true,
    role: "Backend Team Lead",
    metrics: [
      "R² = 0.93 ETA model",
      "~140K GPS records trained",
      "2.8GB → ~17MB dataset compression",
    ],
    features: [
      "Real-time GPS bus tracking",
      "RandomForestRegressor ETA predictions",
      "Compressed GPS data pipeline",
      "FastAPI backend with PostgreSQL",
      "Flutter rider-facing app",
    ],
  },
  {
    id: "yeneb-cods",
    title: "YENEB CODS",
    description: "Food and grocery delivery platform built for a client",
    longDescription: "A food and grocery delivery platform built as a client project, covering ordering, delivery coordination, and a cross-platform customer experience. Backend built with FastAPI, web frontend with Next.js, and a Flutter mobile app for customers and riders.",
    category: "fullstack",
    technologies: ["FastAPI", "Next.js", "Flutter", "PostgreSQL"],
    imageUrl: "",
    isClientProject: true,
    features: [
      "Food and grocery ordering",
      "Delivery coordination",
      "Cross-platform customer app",
      "Admin/vendor management",
    ],
  },
  {
    id: "heallink",
    title: "HealLink",
    description: "Deployed healthcare appointment platform with multi-role RBAC",
    longDescription: "A deployed healthcare appointment platform supporting patients, providers, and admins through multi-role role-based access control. Integrated Chapa for payments and Cloudinary for media handling, deployed on Render.",
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "Chapa", "Cloudinary"],
    demoUrl: "https://heallink.onrender.com/",
    imageUrl: "",
    features: [
      "Multi-role RBAC (patient/provider/admin)",
      "Appointment booking and scheduling",
      "Chapa payment integration",
      "Cloudinary media management",
      "Deployed on Render",
    ],
  },
  {
    id: "saddeeqa",
    title: "Saddeeqa",
    description: "Flutter implementation of a traditional Ethiopian board game with an AI opponent",
    longDescription: "A Flutter mobile implementation of Saddeeqa, a traditional Ethiopian board game, featuring a single-player mode against an AI opponent built with Minimax and Alpha-Beta pruning for efficient move search.",
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
    ]
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
  {
    id: "transittrack",
    title: "TransitTrack",
    description: "Real-time bus tracking and payment services",
    longDescription: "Semifinalist in Africa-wide A2SV Hackathon; developed TransitTrack for real-time bus tracking and payment services. Built with FastAPI (backend) and Flutter (frontend) for seamless full-stack functionality.",
    category: "fullstack",
    technologies: ["FastAPI", "Flutter", "PostgreSQL", "Google Maps API"],
    githubUrl: "https://github.com/Transit-Track/TransitTrack",
    imageUrl: "",
    features: [
      "Real-time bus tracking",
      "Mobile payment integration",
      "Route optimization",
      "User notifications",
      "Admin dashboard"
    ]
  },
  {
    id: "health-tracker",
    title: "Health Tracker Web",
    description: "Full-stack health tracker app for university",
    longDescription: "Built and led a team for a full-stack health tracker app using NestJS, MongoDB, and JWT auth. Developed both frontend (HTML/CSS/JS) and backend, ensuring seamless integration via TypeScript.",
    category: "fullstack",
    technologies: ["NestJS", "TypeScript", "MongoDB", "JWT"],
    githubUrl: "https://github.com/surraaI/web-group-project",
    imageUrl: "/images/projects/health-tracker.jpg",
    features: [
      "Health data tracking",
      "User authentication",
      "Data visualization",
      "Goal setting",
      "Progress reports"
    ]
  }
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