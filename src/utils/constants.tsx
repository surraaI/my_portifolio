export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/surraaI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/surraa-i",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sura_itana/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 14.445.439 1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export const HERO_CONTENT = {
  title: "Sura Itana",
  subtitle: "Software engineer who designs, builds, and ships complete products.",
  description:
    "I'm CTO at Yeneb, where I own a delivery super-app end to end as its sole engineer: product decisions, backend, database, web, mobile, and infrastructure.",
  availability: "Open to remote backend, full-stack, and product roles",
  cta: "Get in touch",
  secondaryCta: "See selected work",
};

export const CONTACT = {
  email: "suraitana@gmail.com",
  github: "https://github.com/surraaI",
  linkedin: "https://www.linkedin.com/in/surraa-i/",
};

export const STATS = [
  { value: "900+", label: "LeetCode and Codeforces problems solved" },
  { value: "200+", label: "API endpoints built for Yeneb's platform" },
  { value: "0.93", label: "R² on MoveMate's bus ETA model" },
];

export const EXPERIENCE = [
  {
    role: "Chief Technology Officer",
    company: "Yeneb",
    period: "May 2026 – Present",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Sole engineer building Yeneb's super-app platform from scratch, after proposing the build to company leadership.",
      "Designed and built a FastAPI backend with 200+ endpoints on PostgreSQL, PostGIS, Redis, and WebSockets: real-time order and courier tracking, geospatial courier matching, integrated online payments, and a courier wallet that settles cash-on-delivery orders.",
      "Built three Flutter apps (customer, courier, supplier) with multi-language support, plus a Next.js web platform for ordering, supplier management, and administration.",
      "Set up CI/CD and deployment with Docker and GitHub Actions. The platform is preparing for launch.",
    ],
  },
  {
    role: "Full-Stack Engineer & Backend Architect",
    company: "HealLink",
    period: "Feb 2026",
    location: "Addis Ababa, Ethiopia",
    points: [
      "Built asynchronous APIs for a healthcare platform covering provider onboarding and diagnostic workflows.",
      "Integrated the Chapa payment gateway and Cloudinary for secure medical document storage.",
      "Implemented QR-based patient check-in with automated notifications, a two-tier government verification dashboard, and provider analytics on appointment trends and no-show rates.",
    ],
  },
  {
    role: "Team Lead & Backend Engineer",
    company: "MoveMate (graduation project)",
    period: "Jun 2026",
    location: "Addis Ababa University",
    points: [
      "Led a team of five building an AI-powered public transport tracking system for Addis Ababa: task planning, code review, and delivery.",
      "Trained a RandomForestRegressor on 140,000+ GPS records for ETA prediction (R² = 0.93, MAE ≈ 4.6 min).",
      "Designed a demand-based rerouting module and a nightly retraining pipeline, and compressed the production model by 99% (2.8 GB → 17 MB) with no meaningful accuracy loss.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Mo-Creatives (freelance)",
    period: "2023",
    location: "",
    points: [
      "Delivered a portfolio website with a custom CMS and Next.js frontend for a client.",
      "Implemented secure admin workflows and role-based content management.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express", "NestJS", "REST API design", "WebSockets / Socket.IO", "Celery", "JWT / OTP auth", "RBAC"],
  },
  { label: "Databases", items: ["PostgreSQL", "PostGIS", "Redis", "MySQL", "MongoDB", "SQLAlchemy 2.0"] },
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Dart", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Flutter", "BLoC"] },
  { label: "Tools & practices", items: ["Git / GitHub", "GitHub Actions", "Docker", "Sentry", "TDD", "Clean Architecture"] },
];

export const EDUCATION = [
  { title: "BSc, Software Engineering", institution: "Addis Ababa University", period: "Jun 2026" },
  { title: "A2SV Program", institution: "Africa to Silicon Valley, a Google-backed program", period: "Graduate" },
  { title: "Full Stack Development", institution: "The Odin Project", period: "Aug 2023 – Oct 2024" },
];