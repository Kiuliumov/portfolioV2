import React from "react";

const certificates = [
  "/images/programming-cert.png",
  "/images/programming-cert2.png",
  "/images/programming-cert3.png",
  "/images/programming-cert4.png",
  "/images/programming-cert5.png",
  "/images/orm-certificate.png",
  "/images/django.png",
  "/images/programming-cert6.jpg",
  "/images/programming-cert7.jpg",
  "/images/programming-cert8.jpg",

];

const Certifications: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none" />

      {/* Title Section */}
      <div className="py-12 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold mt-20 bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          My Certifications
        </h1>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-500 rounded-full animate-pulse" />
        <p className="text-gray-300 mt-6 text-xl md:text-2xl">
          Showcasing achievements and skills
        </p>
      </div>

      {/* Marquee Section */}
      <div className="flex-1 flex items-center overflow-hidden py-20 relative z-10">
        <div className="w-full">
          <div className="flex animate-marquee gap-12">
            {certificates.concat(certificates).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Certificate ${index + 1}`}
                className="h-96 md:h-[28rem] lg:h-[32rem] object-contain rounded-xl shadow-2xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Marquee Animation */}
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
          gap: 3rem;
          width: max-content;
          animation: marquee 19s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Certifications;
