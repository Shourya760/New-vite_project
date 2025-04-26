import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/testimonials" className="hover:text-black block">Testimonials</Link>
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
          <Link to="/testimonials" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/contact" className="block text-center hover:text-black" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full md:w-4/5 p-6 md:p-12">
        <section id="about">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">CONTACT ME</h1>
          <p className="text-lg text-gray-700 mb-8">
            I'm <span className="font-bold text-yellow-500">Shourya Verma</span>,
            a Graphic Designer and Electronics Engineer passionate about creating
            beautiful and functional designs and smart technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              ["2+", "Years Experience"],
              ["10+", "Projects Done"],
              ["00+", "Happy Clients"],
              ["100+", "Followers"],
            ].map(([count, label], i) => (
              <div key={i} className="text-center">
                <h2 className="text-3xl font-bold text-yellow-500">{count}</h2>
                <p className="text-gray-600 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Print Design", "Creating brochures, cards, and banners."],
              ["Web Design", "Building responsive, modern websites."],
              ["Photography", "Capturing moments with creativity."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
