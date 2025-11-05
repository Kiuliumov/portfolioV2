import React from "react";

const certificates = [
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert.png",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert2.png",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert3.png",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert4.png",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert5.png",
  "https://kiuliumov.github.io/portfolioV2/images/orm-certificate.png",
  "https://kiuliumov.github.io/portfolioV2/images/django.png",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert6.jpg",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert7.jpg",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert8.jpg",
  "https://kiuliumov.github.io/portfolioV2/images/programming-cert9.png"
];

const Certifications: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none" />

      <div className="py-12 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-20 bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          Certifications
        </h1>
        <div className="mt-4 h-1 w-20 md:w-24 mx-auto bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 rounded-full animate-pulse" />
        <p className="text-gray-300 mt-4 text-lg md:text-xl lg:text-2xl">
          Showcasing achievements and skills
        </p>
      </div>

      <div className="flex-1 flex items-center overflow-hidden py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="w-full">
          <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-12">
            {certificates.concat(certificates).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Certificate ${index + 1}`}
                className="h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] object-contain rounded-xl shadow-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Certifications;
