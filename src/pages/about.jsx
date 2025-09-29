import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans flex flex-col md:flex-row bg-isabelline-500">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-1/5 bg-melon-500 text-taupe-100 items-center py-8 space-y-8">
        <img
          src="/shourya.jpg"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-isabelline-500 shadow-lg transform transition-transform duration-1500 hover:rotate-360"
        />

        <nav className="space-y-4 text-lg w-full px-4">
          <Link
            to="/home"
            className="hover:text-taupe-900 block py-2 px-4 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-isabelline-500 text-melon-500 hover:bg-isabelline-600 block py-2 px-4 rounded transition duration-300 font-medium"
          >
            About Me
          </Link>
          <Link
            to="/resume"
            className="hover:text-taupe-900 block py-2 px-4 rounded transition duration-300"
          >
            Resume
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-taupe-900 block py-2 px-4 rounded transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/Hobbies"
            className="hover:text-taupe-900 block py-2 px-4 rounded transition duration-300"
          >
            Hobbies
          </Link>
          <Link
            to="/contact"
            className="hover:text-taupe-900 block py-2 px-4 rounded transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-melon-500 p-4 flex justify-between items-center text-isabelline-900">
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
        <div className="md:hidden bg-melon-400 text-isabelline-900 space-y-2 px-4 py-2">
          <Link
            to="/home"
            className="block text-center hover:text-taupe-900 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-center hover:text-taupe-900 py-2 bg-isabelline-500 text-melon-500 rounded font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/resume"
            className="block text-center hover:text-taupe-900 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/portfolio"
            className="block text-center hover:text-taupe-900 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/Hobbies"
            className="block text-center hover:text-taupe-900 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Hobbies
          </Link>
          <Link
            to="/contact"
            className="block text-center hover:text-taupe-900 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full md:w-4/5 p-6 md:p-12">
        <section id="about">
          <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-taupe-500 pb-4 mb-8 text-taupe-500">
            ABOUT ME
          </h1>
          <p className="text-lg text-battleship_gray-500 mb-8">
            I'm <span className="font-bold text-melon-500">Shourya Verma</span>,
            an Electronics Engineering student who loves creating innovative projects and exploring new technologies.
            I enjoy combining creativity with technical skills to develop solutions that are both practical and inspiring.
            Let's learn, grow, and build something amazing together!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              ["2+", "Years Experience"],
              ["10+", "Projects Done"],
              ["00+", "Happy Clients"],
              ["100+", "Followers"],
            ].map(([count, label], i) => (
              <div key={i} className="text-center">
                <h2 className="text-5xl font-bold text-melon-500">{count}</h2>
                <p className="text-battleship_gray-500 mt-5">{label}</p>
              </div>
            ))}
          </div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Circuit Design", "Creating efficient electronic circuits and PCB layouts."],
              ["VLSI Design", "Developing chip layouts and semiconductor solutions."],
              ["Embedded Systems", "Developing smart IoT solutions and automation."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-isabelline-600 p-6 shadow hover:shadow-lg transition rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-2 text-taupe-500">{title}</h3>
                <p className="text-battleship_gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation buttons */}
        <div className="w-full flex justify-center space-x-4 mt-12">
          <button
            onClick={() => navigate("/home")}
            className="bg-silver-500 hover:bg-silver-600 text-taupe-500 font-semibold py-3 px-6 rounded-xl shadow transition duration-200"
          >
            Previous Page
          </button>
          <button
            onClick={() => navigate("/resume")}
            className="bg-melon-500 hover:bg-melon-600 text-isabelline-900 font-semibold py-3 px-6 rounded-xl shadow transition duration-200"
          >
            Next Page
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;
