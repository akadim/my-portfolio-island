import { autorabit, bisim, ciklum, mostaql } from "../assets/images/index";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  angular,
  mui,
  nextjs,
  nodejs,
  java,
  springboot,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threads,
  typescript,
  haiku,
  food,
  php,
  laravel,
} from "../assets/icons/index";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: springboot,
    name: "Spring Boot",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "AutoRabit",
    icon: autorabit,
    iconBg: "#accbe1",
    date: "January 2023 - February 2024",
    points: [
      "Engineered an innovative SaaS platform tailored to optimize the Salesforce DevOps process for a fast-growing startup; collaborated with cross-functional teams leading to identification of three major inefficiencies resulting in streamlined operations",
      "Implementing automated testing and code review processes, resulting in a 25% reduction in post-deployment bugs and maintaining high code quality standards.",
      "Writing detailed documentation for the codebase, facilitating easy comprehension and maintenance for future developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer / UI Progammer",
    company_name: "Bohemia Interactive Simuations",
    icon: bisim,
    iconBg: "#fbc3bc",
    date: "February 2022 - Feb 2022",
    points: [
      "Spearheaded the development and management of five gaming-related web projects, resulting in a 40% increase in user engagement and retention over a six-month period through enhanced user interfaces and interactive features.",
      "Debugging and testing code (Unit Testing, Functional Testing) based on feedback to ensure everything functions as intended and without any problem.",
      "Working collaboratively and communicating efficiently with cross-functional teams to deliver high-quality frontend solutions.  ",
      "Writing detailed documentation for the codebase, facilitating easy comprehension and maintenance for future developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Ciklum (CN Group Formerly) ",
    icon: ciklum,
    iconBg: "#b7e4c7",
    date: "Jan 2018 - Jan 2020",
    points: [
      "Developing, managing, and testing scalable and responsive projects.",
      "Designing the User Interfaces and User Experience of the web applications.",
      "Working collaboratively and communicating efficiently with cross-functional teams to deliver high-quality frontend solutions.",
      "Writing detailed documentation for the codebase, facilitating easy comprehension and maintenance for future developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Mostaql",
    icon: mostaql,
    iconBg: "#a2d2ff",
    date: "Jan 2012 - Jan 2018",
    points: [
      "Handling and managing the entire lifecycle of various projects on the freelance platform MOSTAQL:",
      "Making sure to refine the user interface and user experience of the projects",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/akadim",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kadim-ahmed-12b7b233b",
  },
];

export const projects = [
  {
    iconUrl: haiku,
    theme: "btn-back-red",
    name: "Haiku App",
    description:
      "Developed a web application that creates and updates Haikus, the project is created using Next.js (my favorite framework), and some other libraries for the sake of convenience like: Prisma for ORM, react-hook-form and zod for managing forms and validation, and finally the Cloudinary API, for Image upload. ",
    link: "https://github.com/akadim/haiku-app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Startup Stream",
    description:
      'Created a project to host Startups similar to Y Incubator, the project is made using Next.js, and since it involves managing lot of contents, I opted for the Headless CMS "Sanity"',
    link: "https://github.com/akadim/startup-stream",
  },
  {
    iconUrl: food,
    theme: "btn-back-blue",
    name: "Makla",
    description:
      "Designed a landing page for a fictional Moroccan restaurant called Makla, the  the Website is Created using React.js / Typescript",
    link: "https://github.com/akadim/makla",
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: "My personal Portfolio",
    description:
      "My personal Portfolio created using React/Typescript, leveraging Three.js for 3D rendering and animation.",
    link: "https://github.com/akadim/my-portfolio-island",
  },
];
