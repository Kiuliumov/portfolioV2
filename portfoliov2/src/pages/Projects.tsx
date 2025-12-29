import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "CantinaShop",
    description: "A Django-based e-commerce app for online shopping.",
    github: "https://github.com/Kiuliumov/CantinaShop",
    image: "https://kiuliumov.github.io/portfolioV2/images/cantinashoplogo.jpg",
    buttonColor: "from-emerald-500 to-green-600",
  },
  {
    name: "GDBOT",
    description: "A Geometry Dash Discord bot to track scores and levels.",
    github: "https://github.com/Kiuliumov/GDBOT",
    image: "https://kiuliumov.github.io/portfolioV2/images/gd.png",
    buttonColor: "from-indigo-500 to-blue-600",
  },
  {
    name: "MacroMaster",
    description: "A macro management system to automate repetitive tasks.",
    github: "https://github.com/Kiuliumov/MacroMaster",
    image:
      "https://github.com/Kiuliumov/MacroMaster/blob/main/client/MacroMaster/src/assets/MacroMaster.png?raw=true",
    buttonColor: "from-orange-500 to-amber-500",
  },
];

const Projects = () => {
  return (
    <section className="relative pt-20 bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-sky-500/20 to-indigo-800/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
          My Projects
        </h1>

        <p className="text-gray-300 text-center mb-12 text-lg md:text-xl">
          This website is built with{" "}
          <span className="text-sky-400 font-semibold">React + TypeScript</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                         hover:from-sky-500/40 hover:to-purple-500/40 transition-all duration-500"
            >
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 
                              shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                              transition-all duration-500 group-hover:scale-[1.03]">

                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.name}
                </h3>

                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full mb-3" />

                <p className="text-gray-200 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-white font-medium 
                    bg-gradient-to-r ${project.buttonColor}
                    hover:brightness-110 transition-all duration-300 hover:scale-105`}
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-16 flex justify-center">
          <a
            href="https://github.com/Kiuliumov"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 hover:from-sky-500 hover:to-purple-500 font-medium flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaGithub /> Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
