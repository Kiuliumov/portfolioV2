import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificates = [
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert.png",
    link: "https://softuni.bg/certificates/details/197241/e7a86c07" // Basics
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert2.png",
    link: "https://softuni.bg/certificates/details/210696/6673d5d0" // Fundamentals
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert3.png",
    link: "https://softuni.bg/certificates/details/217890/15502660" // Advanced
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert4.png",
    link: "https://softuni.bg/certificates/details/222890/ea1d597d" // OOP
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert5.png",
    link: "https://softuni.bg/certificates/details/235907/c68c7389" // PostgreSQL
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/orm-certificate.png",
    link: "https://softuni.bg/certificates/details/240688/f0cccb" // Python ORM
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/django.png",
    link: "https://softuni.bg/certificates/details/246191/a98a5780" // Django Basics
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert6.jpg",
    link: "https://softuni.bg/certificates/details/248553/eea6353e" // IT Career Booster
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert7.jpg",
    link: "https://softuni.bg/certificates/details/248653/515859e5" // JS Front-End
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert8.jpg",
    link: "https://softuni.bg/certificates/details/248851/15223061" // Django Advanced
  },
  {
    img: "https://kiuliumov.github.io/portfolioV2/images/programming-cert9.png",
    link: "https://softuni.bg/certificates/details/252812/64e34486" // HTML & CSS
  }
];

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none" />

      <div className="py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-20 bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
          Certifications
        </h1>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 rounded-full" />
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Showcasing achievements and skills
        </p>
      </div>

      <div className="relative flex-1 flex items-center px-6">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
          aria-label="Scroll left"
        >
          <FaChevronLeft size={22} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-center flex-shrink-0 transform transition hover:scale-105"
              aria-label={`Open certificate ${index + 1}`}
            >
              <img
                src={cert.img}
                alt={`Certificate ${index + 1}`}
                className="h-48 sm:h-64 md:h-80 lg:h-[28rem] object-contain rounded-xl shadow-2xl"
              />
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
          aria-label="Scroll right"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Certifications;
