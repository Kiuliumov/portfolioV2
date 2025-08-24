import { FaGithub } from "react-icons/fa";

const About = () => {
	return (
		<section className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 w-full">
				<div className="flex flex-col md:flex-row md:items-center md:gap-16">
					<div className="flex justify-center md:justify-end mb-8 md:mb-0 animate-fadeInUp">
						<img
							src="https://kiuliumov.github.io/portfolioV2/images/cantina.png"
							alt="The Cantina"
							className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-lg transform transition-transform duration-500 hover:scale-105"
						/>
					</div>

					<div className="flex flex-col justify-center space-y-6 animate-fadeInUp">
						<h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left">
							About Us
						</h1>
						<p className="text-gray-300 leading-relaxed text-center md:text-left max-w-xl">
							The Cantina is a self-run project with no outside financing. Our
							mission is to create the best chatbots in the market while
							building modern, responsive web applications.
						</p>

						<ul className="flex flex-col gap-2 text-gray-300 max-w-xl list-disc list-inside">
							<li>
								🤖 Experienced in building custom Discord bots with JavaScript
								and Python
							</li>
							<li>
								🌐 Skilled at creating modern, responsive web apps using React
								and Tailwind
							</li>
							<li>
								⚙️ Integrating APIs, handling databases, and automating tasks
							</li>
							<li>
								🚀 Always learning new frameworks and best practices in
								full-stack development
							</li>
							<li>Our goal is to create the best chatbots in the market.</li>
						</ul>

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
