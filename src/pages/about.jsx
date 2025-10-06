import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate("/resume"),   // Go next
    onSwipedRight: () => navigate("/home"),    // Go previous
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div {...handlers} className="min-h-screen font-sans flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-1/5 bg-yellow-500 text-white items-center py-8 space-y-8">
        <img src="/shourya.jpg" alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transform transition-transform duration-1500 hover:rotate-360" />
        <nav className="space-y-4 text-lg w-full px-4">
          <Link to="/home" className="hover:text-black block py-2 px-4 rounded transition duration-300">Home</Link>
          <Link to="/about" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">About Me</Link>
          <Link to="/resume" className="hover:text-black block py-2 px-4 rounded transition duration-300">Resume</Link>
          <Link to="/portfolio" className="hover:text-black block py-2 px-4 rounded transition duration-300">Portfolio</Link>
          <Link to="/Hobbies" className="hover:text-black block py-2 px-4 rounded transition duration-300">Hobbies</Link>
          <Link to="/contact" className="hover:text-black block py-2 px-4 rounded transition duration-300">Contact</Link>
        </nav>
      </aside>
      {/* Mobile Navbar */}
      <div className="md:hidden bg-yellow-500 p-4 flex justify-between items-center text-white">
        <button className="text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)} > ☰
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
      <main className="w-full md:w-4/5 p-6 md:p-12"> <section id="about"> <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-black pb-4 mb-8 text-gray-800">ABOUT ME</h1>
        <p className="text-lg text-gray-700 mb-8"> I'm <span className="font-bold text-yellow-500">Shourya Verma
        </span>, an Electronics Engineering student who loves creating innovative projects and
          exploring new technologies. I enjoy combining creativity with technical skills to develop
          solutions that are both practical and inspiring. Let's learn, grow, and build something amazing
          together! </p>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[["2+", "Years Experience"], ["10+", "Projects Done"], ["00+", "Happy Clients"],
          ["100+", "Followers"],].map(([count, label], i) => (<div key={i} className="text-center">
            <h2 className="text-5xl font-bold text-yellow-500">{count}</h2> <p className="text-gray-600 mt-5">{label}</p> </div>))}
        </div>
        {/* What I Do */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {[["Circuit Design", "Creating efficient electronic circuits and PCB layouts."], ["VLSI Design", "Developing chip layouts and semiconductor solutions."], ["Embedded Systems", "Developing smart IoT solutions and automation."],].map(([title, desc], i) => (<div key={i} className="bg-white p-6 shadow hover:shadow-lg transition rounded-2xl">
          <h3 className="text-xl font-bold mb-2 text-black ">{title}</h3> <p className="text-gray-600">{desc}</p> </div>))}
        </div>
      </section>

        <p className="text-center text-gray-500 mt-12 text-sm">
           Swipe left or right to go to next pages!
        </p>

      </main>
    </div>
  );
};
export default About;