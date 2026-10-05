import React, { useRef } from "react";
import { certificates } from "../data/certificates";
import { ScrollButton } from "../components/ScrollButton";

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const stats = [
    { label: "Certificates", value: certificates.length.toString() },
    { label: "Specializations", value: "10+" },
    { label: "Focus", value: "Full Stack" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 pt-20 pb-8 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Continuous learning
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
            I’ve built my path through hands-on courses, practical projects, and
            technical certifications focused on web development, backend systems,
            databases, and modern software engineering.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-sky-400">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:px-12">
        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-950/40 p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                What I focus on
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Web, backend, and software fundamentals
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "JavaScript & TypeScript",
              "Python & Django",
              "Databases & ORM",
              "Frontend architecture",
              "Problem solving",
              "Clean software practices",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-sky-400/20 bg-sky-500/5 px-4 py-3 text-sm text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Portfolio
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Certificate collection
            </h2>
          </div>
        </div>

        <div className="relative flex items-center">
          <ScrollButton direction="left" onScroll={() => scroll("left")} />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar px-4 py-2 md:px-12"
          >
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group snap-center flex-shrink-0 transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                aria-label={`Open certificate ${index + 1}`}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                  <img
                    src={cert.img}
                    alt={`Certificate ${index + 1}`}
                    className="h-48 w-auto object-contain rounded-xl sm:h-64 md:h-80 lg:h-[20rem]"
                  />
                </div>
              </a>
            ))}
          </div>

          <ScrollButton direction="right" onScroll={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
