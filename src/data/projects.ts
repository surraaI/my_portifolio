export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "backend" | "frontend" | "fullstack" | "mobile";
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  features: string[];
};

export type Category = {
  id: string;
  name: string;
};

export const projects: Project[] = [
  {
    id: "svm-booster",
    title: "SVM Booster",
    description: "Scalable YouTube growth platform with referral tracking",
    longDescription: "Developed a comprehensive backend system for YouTube growth with email/password authentication (JWT + bcrypt), campaign creation, OCR-based subscription verification, referral tracking, and coin reward logic.",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Socket.IO"],
    githubUrl: "https://github.com/suraitana/svm-booster",
    demoUrl: "https://svm-booster.example.com",
    imageUrl: "/images/projects/svm-booster.jpg",
    features: [
      "Email/password authentication with JWT",
      "OCR-based subscription verification",
      "Referral tracking system",
      "Real-time support chat",
      "Role-based access control"
    ]
  },
  {
    id: "ensight-news",
    title: "Ensight News Platform",
    description: "RESTful backend for news website with article categorization",
    longDescription: "Built a scalable RESTful backend for a news website using FastAPI and PostgreSQL, supporting article categorization and user authentication. Implemented secure admin and user functionalities with role-based access control.",
    category: "backend",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/suraitana/ensight-news",
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
    id: "mo-creatives",
    title: "Mo-Creatives Portfolio",
    description: "Company site with blog and content management",
    longDescription: "Built the backend and contributed to frontend (Next.js) of Mo-Creatives' company site with blog, content, and admin management. Implemented role-based access control and scalable content workflows for admins and superadmins.",
    category: "fullstack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://mo-creatives.example.com",
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
    id: "ecommerce-app",
    title: "eCommerce Mobile App",
    description: "Flutter eCommerce app with real-time messaging",
    longDescription: "Built a Flutter eCommerce app using BLoC, Clean Architecture, and TDD for maintainability and reliability. Integrated real-time messaging via Socket.io and secured the app with user authentication.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "BLoC", "Socket.IO", "Node.js"],
    githubUrl: "https://github.com/suraitana/ecommerce-app",
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
    githubUrl: "https://github.com/suraitana/transittrack",
    demoUrl: "https://transittrack.example.com",
    imageUrl: "/images/projects/transittrack.jpg",
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
    githubUrl: "https://github.com/suraitana/health-tracker",
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