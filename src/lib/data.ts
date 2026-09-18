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
  features: string[];
  stack: string[];
  repo: string;
  demo: string;
  size: "large" | "medium";
  accentLabel: string;
  media?: string;
};

export const projects: Project[] = [
  {
    slug: "smart-waste-collection",
    name: "Smart Waste Collection System",
    tagline: "Geolocation-enabled routing & monitoring platform",
    description:
      "A geolocation-enabled waste collection platform that optimizes routing and simulates real-time waste monitoring across an entire municipal fleet.",
    features: [
      "Geolocation validation",
      "JWT authentication",
      "Role-based authorization",
      "IoT waste-level simulation",
      "Admin dashboard",
      "Driver dashboard",
      "Secure password reset",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "GeoJSON", "Tailwind CSS"],
    repo: "https://github.com/genos069/Smart-Waste-Collection-System",
    demo: "https://smart-waste-demo.vercel.app",
    size: "medium",
    accentLabel: "Civic infrastructure",
  },
  {
    slug: "clickncart",
    name: "ClickNCart",
    tagline: "Full-stack e-commerce with real payments",
    description:
      "A scalable full-stack e-commerce platform with secure authentication, live payment processing, and a complete admin management surface.",
    features: [
      "JWT authentication",
      "Redux Toolkit state management",
      "Product management",
      "Shopping cart",
      "Stripe integration",
      "Razorpay integration",
      "Admin dashboard",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "Stripe", "Razorpay"],
    repo: "https://github.com/genos069/ClickNCart-",
    demo: "https://clickncart-demo.vercel.app",
    size: "medium",
    media: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    accentLabel: "E-commerce",
  },
  
];

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
