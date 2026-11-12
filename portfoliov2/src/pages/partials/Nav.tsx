import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CV from "../../assets/CV.pdf";

const navigation = [
  { title: "Home", path: "/" },
  { title: "Certifications", path: "/certifications" },
  { title: "Contacts", path: "/contacts" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const links = (mobile = false) =>
    navigation.map(({ title, path }) => {
      const active = pathname === path;

      return (
        <Link
          key={path}
          to={path}
          aria-current={active ? "page" : undefined}
          tabIndex={mobile && !menuOpen ? -1 : 0}
          onClick={() => setMenuOpen(false)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
            active
              ? "bg-sky-400/10 text-sky-400"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
          } ${
            mobile
              ? "w-full text-center text-2xl font-semibold"
              : ""
          }`}
        >
          {title}
        </Link>
      );
    });

  const downloadButton = (mobile = false) => (
    <a
      href={CV}
      download
      onClick={() => setMenuOpen(false)}
      tabIndex={mobile && !menuOpen ? -1 : 0}
      className={`inline-flex items-center justify-center rounded-xl bg-sky-500 font-semibold text-white shadow-lg shadow-sky-500/10 transition-all duration-200 hover:bg-sky-400 hover:shadow-sky-500/20 active:scale-95 ${
        mobile
          ? "mt-4 w-full max-w-xs px-6 py-3.5"
          : "px-5 py-2.5 text-sm"
      }`}
    >
      Download CV
    </a>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-gray-900/85 text-gray-300 shadow-lg shadow-black/5 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-sky-400"
        >
          Kiuliumov<span className="text-sky-400">.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links()}
          <div className="ml-4 border-l border-gray-700 pl-6">
            {downloadButton()}
          </div>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-sky-400/50 hover:bg-sky-400/10 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-200 transition-all duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-200 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-200 transition-all duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/5 bg-gray-900/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible max-h-96 translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-5 px-6 py-8">
            <nav
              aria-label="Mobile navigation"
              className="flex w-full flex-col items-center gap-3"
            >
              {links(true)}
            </nav>

            {downloadButton(true)}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
