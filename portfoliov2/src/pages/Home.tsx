import { SocialLinks } from "../components/SocialLinks";
import { SkillsList } from "../components/SkillsList";
import { FaGithub } from "react-icons/fa";

const Home = () => {
	return (
		<section className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
				<div className="flex flex-col md:flex-row md:items-center md:gap-16">
					<div className="flex justify-center md:justify-end mb-8 md:mb-0 animate-fadeInUp mt-20">
						<img
							src="https://kiuliumov.eu/images/image-banner.jpg"
							alt="Dimitur Kiuliumov"
              loading="lazy"
              decoding="async"
							className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-lg transform transition-transform duration-500 hover:scale-105"
						/>
					</div>

					<div className="flex flex-col justify-center space-y-6 animate-fadeInUp mt-25 ">
						<h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left">
							Dimitur Kiuliumov
						</h1>
						<p className="text-gray-300 leading-relaxed text-center md:text-left max-w-xl">
							Hello! I'm a{" "}
							<span className="text-sky-400">full-stack developer</span> from
							Bulgaria with a strong passion for programming and mathematics.
							<br />I am currently working as a{" "}
							<span className="text-sky-400">Python Developer</span> at{" "}
							<span className="text-sky-400">Nemetschek Bulgaria</span> and
							pursuing a degree in Computer Science at the{" "}
							<a
								href="https://fpmi.bg/cms/informatics/"
								target="_blank"
								rel="noreferrer"
								className="underline text-red-300 hover:text-red-400"
							>
								Technical University of Sofia
							</a>
							.
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
							<SocialLinks />
						</div>
					</div>
				</div>

				<div className="pt-16 animate-fadeInUp">
					<h2 className="text-xl font-semibold text-sky-400 text-center md:text-left">
						My Skills:
					</h2>
					<div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
						      <SkillsList />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
