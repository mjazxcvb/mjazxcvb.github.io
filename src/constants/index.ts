import { TSkill, TExp } from "../types";
import WorkImages from "./images";

export const experiences: TExp[] = [
  {
    company: "Bless Payments",
    related: [
      "Mobile",
      "Money Transfer",
      "Digital Wallet",
      "Web Scraping",
      "Chatbot",
      "Static Pages",
    ],
    images: WorkImages.Bless,
  },
  {
    company: "ContactOut",
    related: [
      "Web",
      "Search Portal",
      "Search and Analytic engine",
      "Front end redesigns",
    ],
    images: WorkImages.Co,
  },
  {
    company: "4th Wall",
    related: ["Web and Mobile", "Admin Panel", "E-book reader", "Analytics"],
    images: WorkImages.Fourth,
  },
  {
    company: "SecretSauce",
    related: [
      "Web and Mobile",
      "Authentication",
      "Financial Services",
      "Image editing",
      "Admin",
    ],
    images: WorkImages.TP,
  },
  {
    company: "HeadUp Labs",
    related: ["Mobile", "CMS", "White labeling", "CI / CD"],
    images: WorkImages.Headup,
  },
  {
    company: "Lamudi",
    related: [
      "Web and Mobile",
      "Front end migrations",
      "Search and Analytic Engine",
      "Authentication",
      "Static Pages",
      "SEO",
      "CI / CD",
    ],
    images: WorkImages.Lamudi,
  },
];

export const skills: TSkill[] = [
  {
    category: "Languages and Frameworks",
    list: [
      "Typescript",
      "ReactJS",
      "React Native",
      "PHP",
      "Symfony",
      "HTML / CSS",
      "Next.js",
      "Node.js",
      "SQL",
      "styled-components",
      "tailwind",
      "redux",
      "GraphQL",
    ],
  },
  {
    category: "Technologies and Tools",
    list: [
      "Git",
      "MySQL",
      "Elasticsearch",
      "Docker",
      "Fastlane",
      "Azure",
      "GCP",
      "AWS",
    ],
  },
  {
    category: "Testing",
    list: ["Jest", "Enzyme", "React Test Library", "Puppeteer"],
  },
  {
    category: "Learning",
    list: ["Swift", "Kotlin"],
  },
];

type TLinks = {
  name: string;
  link: string;
};

export const links: TLinks[] = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/mj-aguelo/",
  },
  {
    name: "email",
    link: "mailto:mjma.dev@gmail.com",
  },
];
