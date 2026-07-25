import type { IconType } from "react-icons";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dimitar-kiuliumov-0088942a2/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/DKiuliumov",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Kiuliumov",
  },
];