import { socialLinks } from "../data/social-links";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start gap-6 pt-4 text-gray-400">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="hover:text-sky-400 transition-transform duration-300 hover:scale-110"
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};