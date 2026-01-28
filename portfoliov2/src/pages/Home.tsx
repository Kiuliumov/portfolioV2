import { FaReact, FaNodeJs, FaAngular, FaGithub, FaLinkedin, FaTwitter, FaPython, FaJava, FaHtml5, FaCss3} from 'react-icons/fa';
import { SiTypescript, SiDjango, SiExpress, SiSharp, SiMysql, SiPostgresql, SiSqlite, SiFirebase, SiGooglecloud, SiAmazon, SiDotnet, SiCplusplus, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C#", icon: <SiSharp /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: ".NET / ASP.NET", icon: <SiDotnet /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "AWS", icon: <SiAmazon /> },
];

const socialLinks = [
  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/Kiuliumov" },
  { icon: <FaTwitter size={24} />, href: "https://x.com/DKiuliumov" },
  { icon: <FaGithub size={24} />, href: "https://github.com/Kiuliumov" },
];

const Home = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">

          <div className="flex justify-center md:justify-end mb-8 md:mb-0 animate-fadeInUp mt-20">
            <img
              src="https://kiuliumov.github.io/portfolioV2/images/image-banner.jpg"
              alt="Dimitur Kiuliumov"
              className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fadeInUp mt-25 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left">
              Dimitur Kiuliumov
            </h1>
            <p className="text-gray-300 leading-relaxed text-center md:text-left max-w-xl">
              Hello! I'm a <span className="text-sky-400">full-stack developer</span> from Bulgaria with a strong passion for programming and mathematics.  
              <br></br>I am currently pursuing a degree in Computer Science at the {" "}
              <a
                href="https://fpmi.bg/cms/informatics/"
                target="_blank"
                rel="noreferrer"
                className="underline text-red-300 hover:text-red-400"
              >
                Technical University of Sofia
              </a>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 pt-6">
              <a
                href="https://github.com/Kiuliumov"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                <FaGithub /> See My Work
              </a>
              <a
                href="https://discord.gg/UEjnQeAHYx"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 pt-4 text-gray-400">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-transform duration-300 transform hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16 animate-fadeInUp">
          <h2 className="text-xl font-semibold text-sky-400 text-center md:text-left">My Skills:</h2>
          <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={skill.name}
                className={`flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200 transition-transform duration-300 hover:scale-105 animate-fadeInUp delay-${index * 100}`}
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
