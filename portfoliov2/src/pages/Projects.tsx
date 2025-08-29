import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "CantinaShop",
    description: "A Django-based e-commerce app for online shopping.",
    github: "https://github.com/Kiuliumov/CantinaShop",
    image: "https://kiuliumov.github.io/portfolioV2/images/cantinashoplogo.jpg",
  },
  {
    name: "GDBOT",
    description: "A Geometry Dash Discord bot to track scores and levels.",
    github: "https://github.com/Kiuliumov/GDBOT",
    image: "https://kiuliumov.github.io/portfolioV2/images/gd.png",
  },
  {
    name: "CasinoBot",
    description: "A casino-themed Discord bot with games and betting features.",
    github: "https://github.com/Kiuliumov/CasinoBot",
    image: "https://kiuliumov.github.io/portfolioV2/images/casino.png",
  },
  {
    name: "nationalHeroes",
    description:
      "A QR code-based information portal for learning about national heroes.",
    github: "https://github.com/Kiuliumov/nationalHero",
    image: "https://kiuliumov.github.io/portfolioV2/images/code.png",
  },
  {
    name: "EventManager",
    description:
      "Software built for internship at Nemetscheck summer 2025 to manage events efficiently.",
    github: "https://github.com/AusP3r1sh/EventManagerNemetschek",
    image: "https://kiuliumov.github.io/portfolioV2/images/nemcheck.png",
  },
  {
    name: "MacroMaster",
    description:
      "A macro management system to automate repetitive tasks and optimize workflow.",
    github: "https://github.com/Kiuliumov/MacroMaster",
    image:
      "https://github.com/Kiuliumov/MacroMaster/blob/main/client/MacroMaster/src/assets/MacroMaster.png?raw=true",
  },
];

const Projects = () => {
  return (
    <section className="relative mt-20 bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-sky-500/20 to-indigo-800/20 blur-3xl pointer-events-none animate-fadeIn"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 animate-fadeInUp">
          My Projects
        </h1>

        <p className="text-gray-300 text-center mb-12 text-lg md:text-xl">
          Built with{" "}
          <span className="text-sky-400 font-semibold">React + TypeScript</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/90 backdrop-blur-md rounded-3xl p-6 shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group border border-gray-700 overflow-hidden"
            >
              {project.image && (
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 relative z-10">
                  {project.name}
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full mb-3 animate-pulse"></div>
                <p className="text-gray-200 leading-relaxed">{project.description}</p>
              </div>
              <div className="pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500 to-sky-500 hover:from-sky-500 hover:to-purple-500 rounded-xl text-white font-medium transition-transform duration-300 transform hover:scale-105 mt-4"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-16 flex justify-center">
          <a
            href="https://github.com/Kiuliumov"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 hover:from-sky-500 hover:to-purple-500 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
          >
            <FaGithub /> Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
