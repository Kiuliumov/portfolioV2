import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/Kiuliumov" },
    { icon: <FaTwitter size={20} />, href: "https://x.com/DKiuliumov" },
    { icon: <FaGithub size={20} />, href: "https://github.com/Kiuliumov" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 px-4 py-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://kiuliumov.github.io/images/The cantina logo.png"
            alt="The Cantina"
            className="w-28"
          />
        </div>

        {/* Centered Text */}
        <div className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} The Cantina. All rights reserved.
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
