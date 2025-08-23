import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center overflow-hidden">

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-sky-400/20 to-indigo-700/10 blur-3xl pointer-events-none"></div>

      <h1 className="text-9xl font-extrabold text-sky-500 animate-pulse relative z-10">404</h1>

      <h2 className="text-3xl md:text-4xl font-bold mt-6 animate-fadeIn relative z-10">
        Page Not Found
      </h2>
      <p className="text-gray-400 mt-2 max-w-md animate-fadeIn delay-100 relative z-10">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-400 rounded-lg flex items-center gap-2 font-medium transition-transform transform hover:scale-105 relative z-10"
      >
        <FaHome /> Go Home
      </button>
    </section>
  );
};

export default NotFound;
