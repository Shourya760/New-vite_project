import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const education = [
    { id: 1, title: "Secondary School", subtitle: "The Doon Valley Public School", description: "Completed in 2024 with 85.8 %" },
    { id: 2, title: "Intermediate", subtitle: "The Doon Valley Public School", description: "Completed in 2025 with 80.6 %" },
    { id: 3, title: "Graduation", subtitle: "ABES Engineering College", description: "Graduating with B.Tech in ECE with honors."}
  ];

  const experience = [
    { id: 1, title: "Web Designer", company: "Company X", description: "Designed responsive websites for clients." },
    { id: 2, title: "Graphic Designer", company: "Company Y", description: "Created branding materials and logos." },
    { id: 3, title: "Product Designer", company: "Company Z", description: "Led UX design for new products." },
  ];

  return (
    <div className="min-h-screen font-sans flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-1/5 bg-yellow-500 text-white items-center py-8 space-y-8">
        <img
          src="/shourya.jpg"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full"
        />
        <nav className="space-y-4 text-lg">
          <Link to="/home" className="hover:text-black block">Home</Link>
          <Link to="/about" className="hover:text-black block">About Me</Link>
          <Link to="/resume" className="hover:text-black block">Resume</Link>
          <Link to="/portfolio" className="hover:text-black block">Portfolio</Link>
          <Link to="/testimonial" className="hover:text-black block">Testimonial</Link>
          <Link to="/contact" className="hover:text-black block">Contact</Link>
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
        <div className="md:hidden bg-yellow-400 text-white space-y-2 px-4 py-2">
          <Link to="/home" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link to="/resume" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/portfolio" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/testimonial" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Testimonial</Link>
          <Link to="/contact" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full md:w-4/5 p-4 md:p-8 relative">
        <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-black pb-4 mb-8 text-gray-800">
          RESUME
        </h1>

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
      </main>
    </div>
  );
};

export default Resume;
