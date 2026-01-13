import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/CV.pdf";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const navigation = [
		{ title: "Home", path: "/" },
		{ title: "Certifications", path: "/certifications" },
		{ title: "About", path: "/about" },
		{ title: "Contacts", path: "/contact" },
		{ title: "Projects", path: "/projects" },
	];

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest(".menu-btn") && !target.closest(".mobile-menu")) {
				setMenuOpen(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "auto";
	}, [menuOpen]);

	return (
		<header className="fixed top-0 left-0 w-full z-50">
			<div className="w-full bg-gray-900/95 backdrop-blur-sm shadow-md">
				<nav className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between py-4">
					<div className="flex items-center gap-3">
						<h1 className="text-xl font-bold tracking-wide text-white">
							The Cantina
						</h1>
					</div>

					<ul className="hidden md:flex gap-8 items-center">
						{navigation.map((item, idx) => (
							<li key={idx}>
								<Link
									to={item.path}
									className={`text-white font-medium hover:text-sky-400 transition-colors duration-200 ${
										location.pathname === item.path ? "text-sky-400" : ""
									}`}
								>
									{item.title}
								</Link>
							</li>
						))}
						<li>
							<a
								href={CV}
								download
								className="bg-sky-400 text-white px-4 py-2 rounded-md font-medium hover:bg-sky-500 transition-colors duration-200"
							>
								Download CV
							</a>
						</li>
					</ul>

					<button
						className="md:hidden menu-btn relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50"
						aria-label="Toggle menu"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-7 h-0.5 bg-white rounded transition-transform duration-300 ${
								menuOpen ? "rotate-45 translate-y-2" : ""
							}`}
						/>
						<span
							className={`block w-7 h-0.5 bg-white rounded transition-opacity duration-300 ${
								menuOpen ? "opacity-0" : "opacity-100"
							}`}
						/>
						<span
							className={`block w-7 h-0.5 bg-white rounded transition-transform duration-300 ${
								menuOpen ? "-rotate-45 -translate-y-2" : ""
							}`}
						/>
					</button>
				</nav>
			</div>

			<div
				className={`mobile-menu md:hidden fixed inset-0 z-50 flex flex-col transform transition-transform duration-300 ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				style={{
					background:
						"linear-gradient(to bottom, rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.9))",
				}}
			>
				<div className="flex justify-end p-6">
					<button
						className="text-white text-3xl font-bold focus:outline-none"
						aria-label="Close menu"
						onClick={() => setMenuOpen(false)}
					>
						✖
					</button>
				</div>

				<div className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl">
					{navigation.map((item, idx) => (
						<Link
							key={idx}
							to={item.path}
							className={`text-white hover:text-sky-400 transition-colors duration-200 ${
								location.pathname === item.path ? "text-sky-400 font-bold" : ""
							}`}
							onClick={() => setMenuOpen(false)}
						>
							{item.title}
						</Link>
					))}
					<a
						href={CV}
						download
						className="bg-sky-400 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-500 transition-colors duration-200"
						onClick={() => setMenuOpen(false)}
					>
						Download CV
					</a>
				</div>
			</div>
		</header>
	);
};

export default Nav;
