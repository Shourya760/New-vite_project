import React, { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar for Desktop */}
           <aside className="hidden md:flex flex-col w-1/5 bg-yellow-500 text-white items-center py-8 space-y-8">
             <img
               src="/shourya.jpg"
               alt="Profile"
               className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
             />
             <nav className="space-y-4 text-lg w-full px-4">
               <Link to="/home" className="hover:text-black block py-2 px-4 rounded transition duration-300">Home</Link>
               <Link to="/about" className="hover:text-black block py-2 px-4 rounded transition duration-300">About Me</Link>
               <Link to="/resume" className="hover:text-black block py-2 px-4 rounded transition duration-300">Resume</Link>
               <Link to="/portfolio" className="hover:text-black block py-2 px-4 rounded transition duration-300">Portfolio</Link>
               <Link to="/testimonial" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">Testimonial</Link>
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
             <div className="md:hidden bg-yellow-400 text-white space-y-2 px-4 py-2">
               <Link to="/home" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Home</Link>
               <Link to="/about" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>About Me</Link>
               <Link to="/resume" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Resume</Link>
               <Link to="/portfolio" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Portfolio</Link>
               <Link to="/testimonial" className="block text-center hover:text-black py-2 bg-white text-yellow-500 rounded font-medium" onClick={() => setMenuOpen(false)}>Testimonials</Link>
               <Link to="/contact" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
             </div>
           )}
     
      {/* Main Content */}
      <main className="w-full md:w-4/5 p-6 md:p-12">
        <section id="about">
          <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-black pb-4 mb-8 text-gray-800">TESTIMONIAL</h1>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-28 w-28 border-t-5 border-b-5 border-yellow-500"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
