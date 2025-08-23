import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "CantinaShop",
    description: "A Django-based e-commerce app for online shopping.",
    github: "https://github.com/Kiuliumov/CantinaShop",
    image: "/images/cantinashoplogo.jpg",
  },
  {
    name: "GDBOT",
    description: "A Geometry Dash Discord bot to track scores and levels.",
    github: "https://github.com/Kiuliumov/GDBOT",
    image: "/images/gd.png",
  },
  {
    name: "CasinoBot",
    description: "A casino-themed Discord bot with games and betting features.",
    github: "https://github.com/Kiuliumov/CasinoBot",
    image: "/images/casino.png",
  },
  {
    name: "nationalHeroes",
    description: "A QR code-based information portal for learning about national heroes.",
    github: "https://github.com/Kiuliumov/nationalHero",
    image: "/images/code.png",
  },
  {
    name: "EventManager",
    description: "Software built for internship at Nemetscheck summer 2025 to manage events efficiently.",
    github: "https://github.com/AusP3r1sh/EventManagerNemetschek",
    image: "/images/nemcheck.png",
  },
  {
    name: "MacroMaster",
    description: "A macro management system to automate repetitive tasks and optimize workflow.",
    github: "https://github.com/Kiuliumov/MacroMaster",
    image: "https://github.com/Kiuliumov/MacroMaster/blob/main/client/MacroMaster/src/assets/MacroMaster.png?raw=true",
  },
];

const Projects = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 animate-fadeInUp">
          My Projects
        </h1>
        <p className="text-gray-400 text-center mb-12">
          This website is built with <span className="text-sky-400 font-semibold">React + TypeScript</span>
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-3xl shadow-2xl hover:shadow-sky-500/50 transition-shadow duration-300 flex flex-col justify-between"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-2xl mb-4 transition-transform duration-300 transform hover:scale-105"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-sky-400 mb-2">{project.name}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              <div className="pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-sky-500 rounded-lg text-white font-medium transition-transform duration-300 transform hover:scale-105 mt-4"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="pt-16 flex justify-center">
          <a
            href="https://github.com/Kiuliumov"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-sky-500 hover:from-sky-500 hover:to-purple-500 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
          >
            <FaGithub /> Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
