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
          className={`transition-colors duration-300 ${
            mobile
              ? "text-3xl font-semibold"
              : "border-b-2 py-2 text-sm font-medium"
          } ${
            active
              ? mobile
                ? "text-sky-400"
                : "border-sky-400 text-sky-400"
              : mobile
                ? "text-gray-300 hover:text-sky-400"
                : "border-transparent text-gray-400 hover:border-sky-400 hover:text-sky-400"
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
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${
        mobile
          ? "mt-8 w-full max-w-xs bg-sky-500 px-6 py-3 text-white hover:bg-sky-400"
          : "border border-gray-700 px-5 py-2.5 text-sm text-gray-300 hover:border-sky-400 hover:text-sky-400"
      }`}
    >
      Download CV
    </a>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gray-900 text-gray-400">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-gray-700 px-6 md:px-12">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold text-white transition-colors hover:text-sky-400"
        >
          Kiuliumov
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links()}
          {downloadButton()}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-700 transition-colors hover:border-sky-400 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-300 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-300 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-gray-300 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-40 bg-gray-900 transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-24">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col items-center gap-8"
          >
            {links(true)}
          </nav>

          {downloadButton(true)}
        </div>
      </div>
    </header>
  );
};

export default Nav;