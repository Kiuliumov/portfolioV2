import { skills } from "../data/skills";

export const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <span
            key={skill.name}
            className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200 transition-transform duration-300 hover:scale-105 animate-fadeInUp"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Icon />
            {skill.name}
          </span>
        );
      })}
    </div>
  );
};