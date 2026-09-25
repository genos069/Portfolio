export const siteConfig = {
  name: "Pritam Prakash Mishra",
  shortName: "Pritam",
  initials: "PPM",
  title: "Software Engineer · Full-Stack (MERN)",
  taglines: [
    "Software Engineer",
    "MERN Stack Developer",
    "Full-Stack Developer",
  ],
  description:
    "Building scalable full-stack applications with modern web technologies.",
  longDescription:
    "Computer Science undergraduate and full-stack developer specializing in React, Node.js, Express.js, and MongoDB.",
  url: "https://pritamprakashmishra.dev",
  email: "genoscyber2@gmail.com",
  phone: "+91 7205029714",
  location: "Bhubaneswar, Odisha, India",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/genos069",
    linkedin: "https://www.linkedin.com/in/pritam-prakash-mishra-450127353/",
    email: "mailto:genoscyber2@gmail.com",
  },
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  institution: "Parala Maharaja Engineering College",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "7.96",
  duration: "2023 – 2027",
};

export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Interfaces that feel fast and stay maintainable.",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "APIs and services that hold up under real traffic.",
    skills: ["Node.js", "Express.js", "REST APIs", "Mongoose", "Razorpay",],
  },
  {
    category: "Database",
    description: "Schema design and querying at the data layer.",
    skills: ["MongoDB"],
  },
  {
    category: "Authentication",
    description: "Access control done the way it should be.",
    skills: ["JWT", "Protected Routes", "bcrypt", "SHA-256"],
  },
  {
    category: "Tools",
    description: "The daily workflow, end to end.",
    skills: ["Git", "GitHub", "VS Code", "Postman","Figma"],
  },
  {
    category: "Languages",
    description: "Programming languages I use to build software.",
    skills: ["JavaScript", "TypeScript", "Java", "C" , "Python"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  demo?: string;
  accentLabel: string;
  stars: number;
  forks: number;
  media?: string;
};

export type Stat = {
  label: string;
  value: string;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Full-stack apps shipped", value: "6", suffix: "+" },
  { label: "Auth systems built from scratch", value: "4", suffix: "+" },
  { label: "REST endpoints designed", value: "60", suffix: "+" },
  { label: "Payment gateways integrated", value: "2" },
];

export const achievements = [
  {
    title: "Built multiple full-stack applications",
    description:
      "Shipped end-to-end products spanning React frontends to Express/MongoDB backends, each taken from schema design through deployment.",
  },
  {
    title: "Developed secure authentication systems",
    description:
      "Implemented JWT-based auth with bcrypt password hashing, protected route middleware, and role-based access control.",
  },
  {
    title: "Designed scalable MVC architectures",
    description:
      "Structured backend services around clear separation of concerns so features can be added without touching unrelated code.",
  },
  {
    title: "Integrated payment gateways",
    description:
      "Connected Stripe and Razorpay into checkout flows, handling webhooks, order state, and failure cases correctly.",
  },
  {
    title: "Built RESTful APIs",
    description:
      "Designed and documented REST endpoints with Postman, covering CRUD operations, pagination, and error handling.",
  },
  {
    title: "Implemented role-based authorization",
    description:
      "Separated admin, driver, and user permission levels so each role only sees and can do what it should.",
  },
];
