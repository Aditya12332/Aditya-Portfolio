import { SvgIcons } from "@/components/svg";
import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// Everything personal on the site lives in this file.
// ---------------------------------------------------------------------------

export const candidateInfo = {
  name: "Aditya Sultania",
  initials: "AS",
  email: "adityasultania123321@gmail.com",
  tagline: "A Full Stack Developer building with Django, React & AI",
  location: "Kolkata, India",
  // Square photo shown in the About section. Set to "" to show your initials instead.
  profileImg: "" as string | StaticImageData,
  // Public Google Drive link, so the resume can be updated without redeploying the site.
  resumeLink: "https://drive.google.com/file/d/1GhvcSsZnvTXE5zSnq7x2v8ZPeTG4sPSz/view?usp=sharing",
};

export const socialLinks = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/aditya-sultania-a6815a268/",
    Icon: SvgIcons.LinkedIn,
  },
  {
    id: "github",
    url: "https://github.com/Aditya12332",
    Icon: SvgIcons.Github,
  },
  {
    id: "leetcode",
    url: "https://leetcode.com/u/Aditya__1211/",
    Icon: SvgIcons.LeetCode,
  },
];

// The sticky notes in the About section.
export const highlights = [
  "Associate SDE @ TexAu",
  "250+ Automations Owned",
  "550+ DSA Problems Solved",
  "Top 5 of 180 at Smart Coder",
  "Best Final Year Project Award",
  "Django & RAG is love",
];

export const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "C++",
  "Django",
  "DRF",
  "FastAPI",
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Vector DB",
  "RAG",
  "Agentic AI",
  "Docker",
  "AWS",
  "Sentry",
];

export const experience = [
  {
    company: "TexAu",
    role: "Associate Software Developer",
    duration: "Sep, 2026 - Present",
    description:
      "Own 250+ automations across 10 platforms and built an automated QA system that tests 365 endpoints daily, replacing 2.5 hrs/day of manual testing.",
    detailedExperience: [
      "Planned and built an automated QA system that tests 365 automation endpoints and sends daily reports, replacing 2.5 hrs/day of manual testing.",
      "Built and shipped 13 Reddit automations with auth checks and integrated them into the products.",
      "Owned automations for 10 platforms, 250+ automations in total: analyzed endpoints, added them to the automation engine, and normalized responses across 13 providers.",
      "Fixed bugs across the frontend, backend and browser extension (TypeScript, JavaScript, FastAPI) and resolved 60+ Sentry issues and 25+ QA-reported issues.",
    ],
  },
  {
    company: "Renan",
    role: "Full Stack Developer Intern",
    duration: "May, 2025 - Nov, 2025",
    description:
      "Built and maintained 30+ production REST APIs with Django REST Framework, designed multi-level RBAC and passwordless auth, and shipped features that helped convert 2 POC clients into signed agreements.",
    detailedExperience: [
      "Built and maintained 30+ production REST APIs using Django REST Framework, supporting core user, project, and admin workflows in a live production environment.",
      "Shipped backend features that helped convert 2 POC clients into signed agreements.",
      "Designed a multi-level RBAC system across users, groups, and projects, enabling flexible permission control and secure access management.",
      "Implemented passwordless authentication using AWS SES with expiring email verification links and rate limiting.",
      "Optimized high-traffic APIs by restructuring database queries and reducing payload size.",
    ],
  },
];

export const education = {
  institute: "B.P. Poddar Institute of Management and Technology",
  degree: "B.Tech in Information Technology",
  duration: "Aug, 2022 - Jul, 2026",
};

export type Project = {
  title: string;
  description: string;
  link: string;
  liveLink: string;
  // Optional cover image (tall, ~13:24, used in the desktop card).
  // Without one, the card shows a coloured placeholder with the title.
  imgUrl?: StaticImageData | string;
  // Optional wide version (~3:2) used on phones; falls back to imgUrl.
  imgUrlWide?: StaticImageData | string;
  category: string;
  technologies: string;
};

export const mainProjects: Project[] = [
  {
    title: "Place Reviews AI",
    description:
      "A semantic search and recommendation system for discovering places, built on a RAG pipeline with Django, ChromaDB and LLM APIs. 24 REST APIs combine HNSW-based ANN search with cosine-similarity filtering before LLM context injection, retrieving from 1.5K+ embeddings in ~20ms. Backed by 73 Pytest tests covering auth, RBAC and the APIs.",
    link: "https://github.com/Aditya12332/Place-Review-System",
    liveLink: "",
    category: "Full stack AI project",
    technologies: "Django, Python, RAG, ChromaDB, PostgreSQL, React.js, Docker, Redis",
  },
  {
    title: "JobSentry",
    description:
      "An automated job-alert pipeline that polls 250+ companies across five applicant tracking systems (Workday, Greenhouse, Lever, Ashby, SmartRecruiters) every 60 seconds. A multi-stage filter (seniority regex, keyword allow/block lists, location, 24-hour recency) cuts 5,000+ raw postings down to relevant entry-level roles. MongoDB atomic upserts guarantee exactly-once Discord alerts, with exponential backoff on rate limits.",
    link: "https://github.com/Aditya12332/Job-Scrapper",
    liveLink: "",
    category: "Backend automation",
    technologies: "Node.js, MongoDB, Axios, node-cron, Discord Webhooks, Oracle Cloud, PM2",
  },
  {
    title: "Axora AI",
    description:
      "A real-time chat app with a built-in AI assistant. 15 REST APIs and Socket.io event handlers power auth, messaging, AI chat and user management, with sub-100ms message latency, online presence and typing indicators. The backend is organised into reusable controllers, services and middleware.",
    link: "https://github.com/Aditya12332/chat-app",
    liveLink: "",
    category: "Full stack project",
    technologies: "Express.js, MongoDB, React.js, Groq LLM API, Tailwind CSS, Socket.io",
  },
];

export const projects = [...mainProjects];
