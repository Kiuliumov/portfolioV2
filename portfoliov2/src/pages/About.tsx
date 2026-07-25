import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative pt-20 bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          <div className="flex justify-center md:justify-end mb-8 md:mb-0 animate-fadeInUp">
            <img
              src="https://kiuliumov.eu/images/cantina.png"
              alt="The Cantina"
              className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">
              About Us
            </h1>
            <p className="text-gray-300 leading-relaxed text-center md:text-left max-w-xl">
              The Cantina began as a Discord community in 2021 and evolved into
              an independent organization founded by Dimitar Kiuliumov. Focused
              on building custom chatbots, automation systems, and modern web
              services, The Cantina combines creativity, performance, and
              innovation to deliver reliable digital solutions for communities,
              businesses, and creators. It is also a community,
              <br />
              <br />
              Beyond development, The Cantina is also a growing community for
              developers, creators, and technology enthusiasts — serving as a
              collaborative developer lab where ideas are tested, projects are
              built, and innovation is shared between passionate members of the
              community.
              <br />
              <br />
              With over 5 years of collaborative development experience, The
              Cantina has created and maintained a variety of successful Discord
              projects used by hundreds of users across many communities. Among
              them was <strong>Kenobi</strong> in 2021, a powerful and widely
              used Discord administration bot designed to simplify server
              management, moderation, and automation. Another standout project,
              <strong>Crescendo</strong>, became one of the most popular music
              and utility bots during 2022, known for its reliability,
              performance, and modern user experience.
              <br />
              <br />
              From moderation systems and entertainment bots to fully custom
              integrations and web platforms, The Cantina continues to push
              forward with the goal of building high-quality software that
              communities genuinely enjoy using.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 pt-4">
              <a
                href="https://github.com/Kiuliumov"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://discord.gg/UEjnQeAHYx"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 font-medium flex justify-center items-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
