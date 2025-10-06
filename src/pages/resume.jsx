import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";


const Resume = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlers = useSwipeable({
  onSwipedLeft: () => navigate("/portfolio"),   // Go next
  onSwipedRight: () => navigate("/about"),    // Go previous
  preventScrollOnSwipe: true,
  trackTouch: true,
  trackMouse: false,
});

  const education = [
    { id: 1, title: "Secondary School", subtitle: "The Doon Valley Public School", description: "Completed in 2024 with 85.8 %" },
    { id: 2, title: "Intermediate", subtitle: "The Doon Valley Public School", description: "Completed in 2025 with 80.6 %" },
    { id: 3, title: "Graduation", subtitle: "ABES Engineering College", description: "Graduating with B.Tech in ECE with honors." }
  ];

  const experience = [
    { id: 1, title: "Web Designer", company: "Company X", description: "Designed responsive websites for clients." },
    { id: 2, title: "Graphic Designer", company: "Company Y", description: "Created branding materials and logos." },
    { id: 3, title: "Product Designer", company: "Company Z", description: "Led UX design for new products." },
  ];

  return (
<div {...handlers} className="min-h-screen font-sans flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-1/5 bg-yellow-500 text-white items-center py-8 space-y-8">
        <img
          src="/shourya.jpg"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transform transition-transform duration-500 hover:rotate-360"
        />
        <nav className="space-y-4 text-lg w-full px-4">
          <Link to="/home" className="hover:text-black block py-2 px-4 rounded transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-black block py-2 px-4 rounded transition duration-300">About Me</Link>
          <Link to="/resume" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">Resume</Link>
          <Link to="/portfolio" className="hover:text-black block py-2 px-4 rounded transition duration-300">Portfolio</Link>
          <Link to="/Hobbies" className="hover:text-black block py-2 px-4 rounded transition duration-300">Hobbies</Link>
          <Link to="/contact" className="hover:text-black block py-2 px-4 rounded transition duration-300">Contact</Link>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-yellow-500 p-4 flex justify-between items-center text-white">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <span className="text-xl text-center font-bold font-serif">Shourya Verma</span>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-yellow-500/95 backdrop-blur flex flex-col items-center justify-center space-y-8 transition-all duration-300">
          <button
            className="absolute top-6 right-6 text-4xl text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          <nav className="flex flex-col space-y-6 text-2xl font-bold text-white text-center">
            <Link to="/home" className="hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-black" onClick={() => setMenuOpen(false)}>About Me</Link>
            <Link to="/resume" className="hover:text-black" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link to="/portfolio" className="hover:text-black" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/Hobbies" className="hover:text-black bg-white text-yellow-500 px-4 py-2 rounded font-semibold" onClick={() => setMenuOpen(false)}>Hobbies</Link>
            <Link to="/contact" className="hover:text-black" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}



      {/* Main Content */}
      <main className="w-full md:w-4/5 p-4 md:p-8 relative">
        <div className="relative mb-8">
          <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-black pb-4 text-gray-800">
            RESUME
          </h1>

          <a
            href="\shourya resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 px-4 rounded shadow transition duration-300"
          >
            Download
          </a>
        </div>
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">EDUCATION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {education.map(item => (
              <div key={item.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-yellow-500">{item.title}</h3>
                <p className="text-sm text-gray-600 italic">{item.subtitle}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">EXPERIENCE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {experience.map(item => (
              <div key={item.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-yellow-500">{item.title}</h3>
                <p className="text-sm text-gray-600 italic">{item.company}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-gray-500 mt-12 text-sm">
           Swipe left or right to go to next pages!
        </p>
        
      </main>
    </div>
  );
};

export default Resume;
