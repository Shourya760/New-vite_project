import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";


const Hobbies = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlers = useSwipeable({
  onSwipedLeft: () => navigate("/contact"),   // Go next
  onSwipedRight: () => navigate("/portfolio"),    // Go previous
  preventScrollOnSwipe: true,
  trackTouch: true,
  trackMouse: false,
});

  const sketches = [
    { id: 1, title: "Sketch 1", img: "/sketch1.jpg" },
    { id: 2, title: "Sketch 2", img: "/sketch2.jpg" },
    { id: 3, title: "Sketch 3", img: "/sketch3.jpg" },
  ];

  return (
<div {...handlers} className="min-h-screen font-sans flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-1/5 bg-yellow-500 text-white items-center py-8 space-y-8">
        <img
          src="/shourya.jpg"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transform transition-transform duration-500 hover:rotate-360"
        />
        <nav className="space-y-4 text-lg w-full px-4">
          <Link to="/home" className="hover:text-black block py-2 px-4 rounded transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-black block py-2 px-4 rounded transition duration-300">About Me</Link>
          <Link to="/resume" className="hover:text-black block py-2 px-4 rounded transition duration-300">Resume</Link>
          <Link to="/portfolio" className="hover:text-black block py-2 px-4 rounded transition duration-300">Portfolio</Link>
          <Link to="/Hobbies" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">Hobbies</Link>
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
        <span className="text-xl font-bold font-serif">Shourya Verma</span>
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
      <main className="w-full md:w-4/5 p-6 md:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 border-b-4 border-yellow-500 pb-4 mb-12">
          My Hobbies & Interests
        </h1>


        {/* Sketches Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">✏️ My Sketches & Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sketches.map((sketch) => (
              <div
                key={sketch.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={sketch.img}
                  alt={sketch.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-yellow-500 font-bold text-lg mb-1">{sketch.title}</h3>
                  <p className="text-gray-500 text-sm">A glimpse into my creative side.</p>
                </div>
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

export default Hobbies;
