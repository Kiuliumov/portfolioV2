import type { IconType } from "react-icons";

import {
  SiTypescript,
  SiDjango,
  SiExpress,
  SiSharp,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiGooglecloud,
  SiAmazon,
  SiDotnet,
  SiCplusplus,
  SiNextdotjs,
} from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "C++", icon: SiCplusplus },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "C#", icon: SiSharp },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Angular", icon: FaAngular },
  { name: "React", icon: FaReact },
  { name: "Django", icon: SiDjango },
  { name: ".NET / ASP.NET", icon: SiDotnet },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQLite", icon: SiSqlite },
  { name: "Firebase", icon: SiFirebase },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "AWS", icon: SiAmazon },
];