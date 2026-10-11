import React from "react";
import { certificates } from "../data/certificates";
import { PaginatedGrid } from "../components/PaginatedGrid";

const Certifications: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none" />

      <div className="py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-20 bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
          Certifications
        </h1>

        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 rounded-full" />

        <p className="mt-5 text-gray-400 text-sm sm:text-base px-4">
          A collection of my certifications and achievements
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16">
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
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/40 via-sky-400/30 to-indigo-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="h-full rounded-2xl bg-gray-900/95 p-3 sm:p-4 backdrop-blur-sm">
                <div className="relative flex items-center justify-center h-56 sm:h-64 lg:h-72 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/5 via-sky-400/5 to-indigo-500/10">
                  <img
                    src={cert.img}
                    alt={cert.text}
                    loading="lazy"
                    className="max-w-full max-h-full w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-gray-950/0 group-hover:bg-gray-950/40 transition-colors duration-300">
                    <span className="px-5 py-2 rounded-full border border-white/30 bg-gray-900/80 text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Certificate 
                    </span>
                  </div>
                </div>

                <div className="pt-4 pb-2 text-center">
                  <h2 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                    {cert.text}
                  </h2>
                </div>
              </div>
            </a>
          )}
        />
      </div>
    </div>
  );
};

export default Certifications;
