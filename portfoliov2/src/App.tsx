import { Routes, Route } from "react-router-dom";
import Nav from "./pages/partials/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Footer from "./pages/partials/Footer";
import NotFound from "./pages/NotFound"; 

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications></Certifications>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    
      <Footer />
    </div>
  );
}

export default App;
