import type { IconType } from "react-icons";

import {
  SiTypescript,
  SiDjango,
  SiExpress,
  SiSharp,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGooglecloud,
  SiAmazon,
  SiDotnet,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiVite,
  SiWebpack,
  SiFastify,
  SiSvelte,
  SiNextdotjs,
  SiRedis,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiNginx,
} from "react-icons/si";


import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaHtml5,
  FaCss3,
  FaGit,
} from "react-icons/fa";

interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: FaPython },
  { name: "C#", icon: SiSharp },
  { name: "TypeScript", icon: SiTypescript },

  // Frontend
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "React", icon: FaReact },
  { name: "Angular", icon: FaAngular },
  { name: "Svelte", icon: SiSvelte },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vite", icon: SiVite },
  { name: "Webpack", icon: SiWebpack },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },

  // Backend
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Fastify", icon: SiFastify },
  { name: "Django", icon: SiDjango },
  { name: ".NET / ASP.NET", icon: SiDotnet },

  // Databases
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },

  // Cloud
  { name: "AWS", icon: SiAmazon },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Firebase", icon: SiFirebase },

  // Infrastructure
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Terraform", icon: SiTerraform },
  { name: "Nginx", icon: SiNginx },

  // Version Control
  { name: "Git", icon: FaGit },
];
