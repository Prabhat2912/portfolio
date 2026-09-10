/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  SINGLE SOURCE OF TRUTH — EDIT EVERYTHING HERE
 * ───────────────────────────────────────────────────────────────────────────
 *  This is the ONLY file you need to touch to update your portfolio:
 *  name, bio, links, experience, education, projects, skills, etc.
 *
 *  Inspired by the structure of chanhdai.com (data-driven panels), but all
 *  copy below is your own (Prabhat Kumar).
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Site / SEO ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Prabhat Kumar",
  tagline: "Software Engineer — full-stack, data & AI.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://www.prabhat-dev.me",
  description:
    "Prabhat Kumar — Associate Software Engineer @ MAQ Software building production-ready systems across full-stack, backend, data, and AI.",
  keywords: [
    "Prabhat Kumar",
    "Associate Software Engineer",
    "MAQ Software",
    "Full Stack Developer",
    ".NET",
    "Next.js",
    "React",
    "Microsoft Fabric",
    "Azure",
    "Agentic AI",
    "Portfolio",
  ],
  ogImage: "/opengraph-image.png",
} as const;

// ─── User / Profile ─────────────────────────────────────────────────────────

export const USER = {
  firstName: "Prabhat",
  lastName: "Kumar",
  displayName: "Prabhat Kumar",
  username: "real-prabhat",
  jobTitle: "Associate Software Engineer",
  bio: "Software Engineer @ MAQ Software. Full-stack, data & AI.",
  flipSentences: [
    "Software Engineer @ MAQ Software.",
    "Full-stack • Data • AI.",
    ".NET • React • Fabric • Azure.",
    "Building agentic AI systems.",
  ],
  address: "Noida, India",
  mapsQuery: "Noida, India",
  email: "pk993105@gmail.com",
  phone: "+91-9508849044",
  website: "https://www.prabhat-dev.me",
  avatar: "/images/hero.png",
  timeZone: "Asia/Kolkata",
  pronouns: "he/him",
  availability: "Open to work",
  about: [
    "I'm Prabhat Kumar — a Software Engineer @ MAQ Software building production-ready systems across full-stack, backend, data, and AI.",
    "Experienced with .NET, TypeScript, React, Next.js, Python, SQL, Microsoft Fabric, Azure, and data engineering. Currently building AI-powered applications and multi-agent systems, with a strong interest in scalable systems, cloud technologies, and intelligent automation.",
  ],
  resumeUrl: "/resume.pdf",
} as const;

export type Job = {
  title: string;
  company: string;
  website?: string;
  anchor?: string; // section id to jump to, e.g. "#experience"
};

export const JOBS: Job[] = [
  { title: "Associate Software Engineer", company: "MAQ Software", website: "https://maqsoftware.com", anchor: "#experience" },
  { title: "B.Tech CSE (AI&ML)", company: "Galgotias University", anchor: "#education" },
];

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV = [
  { title: "About", href: "#about" },
  { title: "Stack", href: "#stack" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
] as const;

// ─── Social links ───────────────────────────────────────────────────────────

export type Social = {
  name: string;
  title: string;
  handle: string;
  href: string;
};

export const SOCIALS: Social[] = [
  { name: "github", title: "GitHub", handle: "@Prabhat2912", href: "https://github.com/Prabhat2912" },
  { name: "linkedin", title: "LinkedIn", handle: "real-prabhat", href: "https://www.linkedin.com/in/real-prabhat/" },
  { name: "instagram", title: "Instagram", handle: "@real_prabhat1", href: "https://www.instagram.com/real_prabhat1/" },
  { name: "email", title: "Email", handle: "pk993105@gmail.com", href: "mailto:pk993105@gmail.com" },
  { name: "links", title: "Codolio", handle: "real_prabhat", href: "https://codolio.com/profile/real_prabhat" },
];

// ─── Tech stack ─────────────────────────────────────────────────────────────

export type TechItem = {
  key: string;
  title: string;
  href: string;
  category: "Language" | "Frontend" | "Backend" | "Data & Cloud" | "AI" | "Workflow & Tools";
  /** Brand-icon slug rendered from components/icons.tsx. "" = monogram fallback. */
  icon: string;
};

export const TECH_STACK: TechItem[] = [
  { key: "cpp", title: "C++", href: "https://isocpp.org", category: "Language", icon: "cpp" },
  { key: "c", title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)", category: "Language", icon: "c" },
  { key: "csharp", title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/", category: "Language", icon: "" },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "Language", icon: "javascript" },
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org", category: "Language", icon: "typescript" },
  { key: "python", title: "Python", href: "https://www.python.org", category: "Language", icon: "python" },
  { key: "sql", title: "SQL", href: "https://en.wikipedia.org/wiki/SQL", category: "Language", icon: "" },
  { key: "react", title: "React", href: "https://react.dev", category: "Frontend", icon: "react" },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org", category: "Frontend", icon: "nextjs" },
  { key: "tailwind", title: "Tailwind CSS", href: "https://tailwindcss.com", category: "Frontend", icon: "tailwind" },
  { key: "aspnet", title: "ASP.NET Core", href: "https://dotnet.microsoft.com/en-us/apps/aspnet", category: "Backend", icon: "dotnet" },
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org", category: "Backend", icon: "nodejs" },
  { key: "express", title: "Express", href: "https://expressjs.com", category: "Backend", icon: "express" },
  { key: "rest", title: "REST API", href: "https://restfulapi.net", category: "Backend", icon: "" },
  { key: "sqlserver", title: "SQL Server", href: "https://www.microsoft.com/en-us/sql-server", category: "Data & Cloud", icon: "" },
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org", category: "Data & Cloud", icon: "postgresql" },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com", category: "Data & Cloud", icon: "mongodb" },
  { key: "fabric", title: "Microsoft Fabric", href: "https://www.microsoft.com/en-us/microsoft-fabric", category: "Data & Cloud", icon: "" },
  { key: "azure", title: "Azure", href: "https://azure.microsoft.com", category: "Data & Cloud", icon: "" },
  { key: "maf", title: "Microsoft Agent Framework", href: "https://learn.microsoft.com/en-us/agent-framework/", category: "AI", icon: "" },
  { key: "git", title: "Git", href: "https://git-scm.com", category: "Workflow & Tools", icon: "git" },
  { key: "github", title: "GitHub", href: "https://github.com", category: "Workflow & Tools", icon: "github" },
  { key: "azuredevops", title: "Azure DevOps", href: "https://azure.microsoft.com/en-us/products/devops", category: "Workflow & Tools", icon: "" },
  { key: "vercel", title: "Vercel", href: "https://vercel.com", category: "Workflow & Tools", icon: "vercel" },
];

// ─── Experience ─────────────────────────────────────────────────────────────

export type ExperiencePosition = {
  title: string;
  employmentType: string;
  start: string; // e.g. "2024" or "08.2024"
  end?: string; // omit = Present
  description: string[];
  skills: string[];
};

export type Experience = {
  id: string;
  company: string;
  website?: string;
  location: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  current?: boolean;
  positions: ExperiencePosition[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "maq-software",
    company: "MAQ Software",
    website: "https://maqsoftware.com",
    location: "Noida, India",
    locationType: "On-site",
    current: true,
    positions: [
      {
        title: "Associate Software Engineer",
        employmentType: "Internship",
        start: "11.2025",
        description: [
          "Independently own and deliver user stories end-to-end for a client-facing React + ASP.NET Core data visualization app serving 50+ users.",
          "Develop and maintain backend APIs and business logic in C# with a Microsoft Fabric lakehouse data layer.",
          "Building a multi-agentic AI system that answers natural-language questions over data and generates reports.",
          "Evaluate technical approaches independently through exploration and spike work.",
          "Integrate Microsoft Fabric pipelines and Azure data workflows into enterprise reporting solutions.",
        ],
        skills: ["React", "ASP.NET Core", "C#", "TypeScript", "Microsoft Fabric", "Azure", "SQL", "Agentic AI"],
      },
    ],
  },
  {
    id: "elitekods",
    company: "EliteKods",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        title: "Frontend Blockchain Intern",
        employmentType: "Internship",
        start: "03.2024",
        end: "05.2024",
        description: [
          "Integrated frontend applications with multiple external APIs and production systems.",
          "Collaborated with engineers to debug and stabilize production features.",
        ],
        skills: ["TypeScript", "React Native", "React", "REST API"],
      },
    ],
  },
];

// ─── Education ──────────────────────────────────────────────────────────────

export type Education = {
  id: string;
  school: string;
  degree?: string;
  field?: string;
  start: string;
  end?: string;
  description: string[];
  skills: string[];
};

export const EDUCATION: Education[] = [
  {
    id: "galgotias",
    school: "Galgotias University",
    degree: "B.Tech",
    field: "Computer Science (AI&ML)",
    start: "2022",
    end: "2026",
    description: [
      "B.Tech in Computer Science (AI&ML), CGPA 8.18.",
      "Focus on systems, databases and AI — applied in C++ engine projects and industry internships.",
    ],
    skills: ["C++", "DSA", "DBMS", "AI/ML", "MERN"],
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  date?: string;
  link: string;
  description: string;
  skills: string[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "ai-mock-interview",
    title: "AI Mock Interview Platform",
    date: "2024",
    link: "https://gemini-ai-mock-interview.vercel.app/",
    description: "AI-powered mock interviews with feedback. Built with Next.js, Gemini API and Tailwind.",
    skills: ["Next.js", "AI", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "whiteboard",
    title: "Collaborative Whiteboard",
    date: "2024",
    link: "https://collabrative-whiteboard.vercel.app/",
    description: "Real-time collaborative drawing board with live sync.",
    skills: ["React", "WebSockets", "Canvas"],
    featured: true,
  },
  {
    id: "quiz-app",
    title: "Full Stack Quiz App",
    date: "2024",
    link: "https://quiz-app-frontend-prabhat.vercel.app/",
    description: "Full-stack quiz platform with auth, leaderboard and admin panel.",
    skills: ["MERN", "REST API"],
  },
  {
    id: "db-engine",
    title: "Mini Database Engine (C++)",
    date: "2024",
    link: "https://github.com/Prabhat2912/mini-database-engine",
    description: "A from-scratch relational engine prototype in C++: parsing, storage, indexing.",
    skills: ["C++", "DSA", "Systems"],
  },
  {
    id: "solar-system",
    title: "3D Solar System",
    date: "2023",
    link: "https://nasa-space-app-challenge-beta.vercel.app/",
    description: "Interactive 3D solar-system explorer (NASA Space Apps Challenge).",
    skills: ["React", "Three.js"],
  },
  {
    id: "cryptoverse",
    title: "Cryptoverse",
    date: "2023",
    link: "https://crypto-two-fawn.vercel.app/",
    description: "Crypto tracker with live prices, charts and news.",
    skills: ["React", "REST API"],
  },
  {
    id: "weather",
    title: "Weather App",
    date: "2023",
    link: "https://weatherio-prabhat.vercel.app/#/current-location",
    description: "Location-aware weather app with forecasts and clean UI.",
    skills: ["React", "REST API"],
  },
  {
    id: "bubble-game",
    title: "Bubble Game",
    date: "2023",
    link: "https://bubblegame-prabhat.vercel.app/",
    description: "Fast, fun browser game with score mechanics.",
    skills: ["JavaScript", "CSS"],
  },
];

// ─── Services (What I do) ───────────────────────────────────────────────────

export const SERVICES = [
  { title: "Web Applications", description: "Tailored web apps built with the latest technologies." },
  { title: "Frontend", description: "Engaging, responsive interfaces with React, Next.js and Tailwind." },
  { title: "Backend", description: "Scalable APIs and business logic with .NET, Node and Express." },
  { title: "Mobile", description: "Cross-platform mobile apps for iOS and Android." },
  { title: "Data Engineering", description: "Pipelines, lakehouses and ETL with Fabric, Azure and SQL." },
  { title: "Agentic AI Engineering", description: "RAG pipelines and multi-agent systems that reason over data." },
] as const;

// ─── Stats ──────────────────────────────────────────────────────────────────

export const STATS = [
  { value: "1+", label: "Years of industrial experience" },
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Real-world industrial project contributions" },
] as const;

// ─── Keyboard shortcuts (documented in UI) ──────────────────────────────────

export const SHORTCUTS = [
  { keys: ["Ctrl", "K"], description: "Open command menu" },
  { keys: ["/"], description: "Open command menu" },
  { keys: ["G", "H"], description: "Go to top" },
  { keys: ["G", "S"], description: "Go to stack" },
  { keys: ["G", "E"], description: "Go to experience" },
  { keys: ["G", "P"], description: "Go to projects" },
  { keys: ["T"], description: "Toggle theme" },
  { keys: ["C"], description: "Copy email" },
  { keys: ["?"], description: "Show shortcuts" },
] as const;

// ─── Footer ─────────────────────────────────────────────────────────────────

export const GITHUB_USERNAME = "Prabhat2912";

export const FOOTER = {
  craftedBy: "Prabhat Kumar",
  craftedHandle: "@Prabhat2912",
  craftedHref: "https://github.com/Prabhat2912",
  inspiredBy: ["Tailwind CSS", "shadcn/ui", "Vercel", "Minimal portfolios"],
  deployedOn: "Vercel",
  sourceHref: "https://github.com/Prabhat2912",
  license: "MIT",
  typeface: "Inter + JetBrains Mono",
  stack: ["next@15.5.25", "react@19.0.0", "tailwindcss@3.4.1"],
} as const;
