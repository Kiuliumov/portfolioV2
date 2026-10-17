import React from "react";
import { certificates } from "../data/certificates";
import { PaginatedGrid } from "../components/PaginatedGrid";

const Certifications: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/10 to-indigo-700/10 blur-3xl" />

      <header className="relative z-10 px-5 pb-12 pt-32 text-center sm:px-8 md:pb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Learning & Development
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          My <span className="text-sky-400">Certifications</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          A collection of certifications and achievements that reflect
          my ongoing learning and development.
        </p>

        <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-sky-400" />
      </header>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 md:px-12">
        <PaginatedGrid
          items={certificates}
          itemsPerPage={6}
          getKey={(cert) => cert.link}
          renderItem={(cert) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${cert.text}`}
              className="group block h-full rounded-xl border border-gray-700/70 bg-gray-800/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-gray-800 hover:shadow-xl hover:shadow-sky-500/5 sm:p-4"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-lg border border-gray-700/50 bg-gray-950/50 sm:h-64 lg:h-72">
                <img
                  src={cert.img}
                  alt={cert.text}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-lg border border-sky-400/40 bg-gray-900 px-5 py-2.5 text-sm font-medium text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="flex min-h-20 items-center justify-center px-2 py-4 text-center">
                <h2 className="text-sm font-semibold leading-relaxed text-gray-200 transition-colors duration-300 group-hover:text-sky-400 sm:text-base">
                  {cert.text}
                </h2>
              </div>
            </a>
          )}
        />
      </div>
    </div>
  );
};

export default Certifications;