export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholderUrl?: boolean;
  featured: boolean;
  previewType: "code" | "dashboard" | "kanban" | "weather";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Core Foundation" | "Actively Building" | "Current Learning Focus";
    note: string;
  }[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "Education" | "Self-Directed Learning" | "Project Milestones";
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Borshon Roy",
  role: "Junior Web Developer & Computer Science Student",
  location: "Bangladesh",
  headline: "Building thoughtful experiences for the web.",
  bio: "I am a Computer Science & Technology student based in Bangladesh with a passion for modern frontend engineering. I focus on building responsive, accessible, and clean web applications using React, Next.js, TypeScript, and Tailwind CSS. Constantly learning, practicing clean code habits, and eager to contribute to collaborative engineering teams.",
  status: "Available for Internships & Junior Roles",
  email: "borshon.roy.dev@gmail.com",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/borshonroy",
  linkedin: "https://www.linkedin.com/in/borshonroy",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/borshonroy",
      handle: "@borshonroy",
      note: "Public repositories & practice code",
      isVerified: false,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/borshonroy",
      handle: "borshonroy",
      note: "Professional networking",
      isVerified: false,
    },
    {
      name: "Email",
      url: "mailto:borshon.roy.dev@gmail.com",
      handle: "borshon.roy.dev@gmail.com",
      note: "Direct communication",
      isVerified: true,
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Web Fundamentals",
    description: "The essential building blocks of the web that I practice and reinforce daily.",
    skills: [
      {
        name: "HTML5",
        level: "Core Foundation",
        note: "Semantic document structure, accessible landmark roles, and SEO-friendly markup.",
      },
      {
        name: "CSS3",
        level: "Core Foundation",
        note: "Flexbox, CSS Grid layouts, responsive media queries, and modern CSS variables.",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Core Foundation",
        note: "DOM manipulation, async/await, Promises, array methods, and event-driven patterns.",
      },
    ],
  },
  {
    title: "Frameworks & Modern UI",
    description: "Component-driven tools I use to create dynamic, interactive interfaces.",
    skills: [
      {
        name: "React",
        level: "Actively Building",
        note: "Functional components, hooks (useState, useEffect, useMemo), and clean state architecture.",
      },
      {
        name: "Next.js (App Router)",
        level: "Actively Building",
        note: "Server and client components, file-system routing, layouts, and page optimization.",
      },
      {
        name: "TypeScript",
        level: "Current Learning Focus",
        note: "Type annotations, interfaces, generics basics, and component prop validation for safer code.",
      },
      {
        name: "Tailwind CSS",
        level: "Actively Building",
        note: "Utility-first styling, responsive design systems, custom theme tokens, and dark mode.",
      },
    ],
  },
  {
    title: "Tools, Version Control & Workflow",
    description: "Practices and environments that support consistent development and collaboration.",
    skills: [
      {
        name: "Git",
        level: "Actively Building",
        note: "Branching workflows, meaningful commit messages, merge conflict resolution, and staging.",
      },
      {
        name: "GitHub",
        level: "Actively Building",
        note: "Repository management, README documentation, pull requests, and code review practice.",
      },
      {
        name: "npm & Node.js Runtime",
        level: "Core Foundation",
        note: "Package management, dependency troubleshooting, script automation, and local servers.",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dev-track",
    title: "DevTrack - Minimalist Task & Project Flow",
    category: "Productivity & State Management",
    description:
      "A focused task management and workflow application designed for student developers. Features drag-friendly kanban columns, priority indicators, local storage persistence, and filter tags.",
    keyFeatures: [
      "Intuitive column organization (Backlog, In Progress, Review, Completed)",
      "Persistent state with browser storage and JSON export",
      "Keyboard shortcut support for quick task capture",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    liveUrl: "https://example.com/demo/devtrack",
    githubUrl: "https://github.com/borshonroy/devtrack-workflow",
    isPlaceholderUrl: true,
    featured: true,
    previewType: "kanban",
  },
  {
    id: "technotes-platform",
    title: "TechNotes - Developer Knowledge Hub",
    category: "Content & Documentation",
    description:
      "A fast, responsive developer journal and snippet repository built with Next.js App Router. Implements client-side full-text search, reading time estimator, syntax highlighting, and dark mode.",
    keyFeatures: [
      "Dynamic category filtering and tag-based discovery",
      "Refined reading typography and code snippet copy buttons",
      "Fully responsive layout optimized for mobile and desktop reading",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/demo/technotes",
    githubUrl: "https://github.com/borshonroy/technotes-hub",
    isPlaceholderUrl: true,
    featured: true,
    previewType: "code",
  },
  {
    id: "weather-pulse",
    title: "WeatherPulse - Minimal Climate & Forecasts",
    category: "API Integration & Real-time UI",
    description:
      "A clean weather dashboard that fetches real-time atmospheric data via public REST endpoints. Features city search with debounce, hourly temperature curves, and air quality indices.",
    keyFeatures: [
      "Asynchronous data fetching with robust loading and error states",
      "Responsive 5-day forecast cards and temperature unit toggle",
      "Adaptive dynamic color accents reflecting sunrise/sunset times",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST API"],
    liveUrl: "https://example.com/demo/weatherpulse",
    githubUrl: "https://github.com/borshonroy/weatherpulse-app",
    isPlaceholderUrl: true,
    featured: true,
    previewType: "weather",
  },
  {
    id: "personal-portfolio-v1",
    title: "Developer Portfolio Website",
    category: "Design System & Web App",
    description:
      "The current portfolio website you are viewing! Crafted with Next.js App Router, TypeScript, and Tailwind CSS. Emphasizes visual hierarchy, accessible contrast, semantic structure, and responsive fluidity.",
    keyFeatures: [
      "Fast page load with server-side static rendering",
      "Accessible navigation with responsive mobile menu and keyboard trap handling",
      "Reusable, typed data models ensuring consistent UI states",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "#",
    githubUrl: "https://github.com/borshonroy/portfolio-website",
    isPlaceholderUrl: false,
    featured: true,
    previewType: "dashboard",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2023 - Present",
    title: "Diploma in Computer Science & Technology",
    organization: "Polytechnic / Academic Institution",
    location: "Bangladesh",
    type: "Education",
    description:
      "Pursuing formal coursework in Computer Science fundamentals. Developing a structured understanding of computing, algorithms, relational database fundamentals, and software engineering principles.",
    highlights: [
      "Coursework in Programming Languages (C / Java fundamentals)",
      "Database management concepts and basic SQL queries",
      "Data structures, algorithms, and modular program design",
    ],
  },
  {
    period: "2024 - Present",
    title: "Modern Frontend & Web Development Journey",
    organization: "Independent Practice & Open Curriculum",
    location: "Remote / Self-Directed",
    type: "Self-Directed Learning",
    description:
      "Intensive self-study and hands-on coding building frontend interfaces. Transitioned from core HTML/CSS/JavaScript fundamentals to component architecture in React and fullstack concepts in Next.js.",
    highlights: [
      "Built 10+ mini-apps and utility projects to solidify JavaScript and DOM fundamentals",
      "Mastered modern CSS layout methods (Flexbox, Grid) and utility styling with Tailwind CSS",
      "Adopted TypeScript for compile-time safety and self-documenting codebases",
    ],
  },
  {
    period: "2025 - 2026",
    title: "Next.js App Router & TypeScript Practice",
    organization: "Project Building & Practical Experience",
    location: "Remote",
    type: "Project Milestones",
    description:
      "Focusing on production-ready patterns: App Router conventions, server vs. client boundaries, accessible interactive patterns, and clean Git collaboration hygiene.",
    highlights: [
      "Active version control practice with Git and GitHub repositories",
      "Refining UI/UX sensibilities: typography, spacing, and micro-interactions",
      "Preparing for junior developer roles, remote internships, and open-source contributions",
    ],
  },
];

export const CORE_VALUES = [
  {
    title: "Continuous Learning",
    description:
      "I treat web development as a craft. When I encounter a new technology or challenging bug, I read official documentation, build small proofs of concept, and learn iteratively.",
    icon: "book-open",
  },
  {
    title: "Clean, Honest Code",
    description:
      "I prioritize readable, maintainable code over clever shortcuts. Proper naming conventions, semantic markup, and modular components make collaboration seamless.",
    icon: "code",
  },
  {
    title: "User-Centered Accessibility",
    description:
      "Websites must be usable by everyone. I focus on keyboard navigation, responsive touch targets, sensible color contrast, and fast load times across devices.",
    icon: "layout",
  },
  {
    title: "Growth & Collaboration",
    description:
      "As a junior developer, my biggest asset is humility, curiosity, and eagerness to receive feedback from experienced engineers to level up quickly.",
    icon: "users",
  },
];
