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
      "Developing and maintaining web applications using React.js and Java Spring Boot.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
      "Developing and maintaining the UI parts of a simulation game Using Angular.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Ciklum (CN Group Formerly) ",
    icon: ciklum,
    iconBg: "#b7e4c7",
    date: "Jan 2018 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other Java/Spring Boot.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Mostaql",
    icon: mostaql,
    iconBg: "#a2d2ff",
    date: "Jan 2012 - Jan 2018",
    points: [
      "Developing and maintaining Freelance web applications using React.js, Angular, Java/Spring and PHP/Laravel.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
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
