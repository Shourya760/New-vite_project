import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Home() {
  return (
    <div className=" bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 space-y-6">
          <h2 className="text-xl uppercase text-gray-500">Hi there!</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I'm <span className="text-yellow-500">Shourya Verma</span>
          </h1>
          <h3 className="text-md md:text-lg font-medium uppercase text-gray-700">
             Electronics Engineer / Creative Artist
          </h3>
          <p className="text-gray-600 max-w-md">
          Electrical engineer with a creative edge, blending technical expertise with artistic vision to design innovative solutions. Welcome to my portfolio, where engineering meets imagination. Here, circuits and creativity converge to build tomorrow's sustainable technologies with both precision and passion          </p>
          <Link
            to="/about"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md w-max transition-all duration-300"
          >
            More About Me
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center p-6">
          <img
            src="/shourya.jpg"
            alt="Shourya"
            className="w-full h-full object-cover"
          />

          {/* Social Icons */}
          <div className="hidden md:flex flex-col absolute right-6 top-1/2 -translate-y-1/2 bg-yellow-500 py-4 px-3 rounded-full shadow-2xl space-y-4 transition-transform duration-700 ease-out">

            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center text-black hover:scale-110 transform transition duration-300 shadow-md"
                aria-label={`Link to social media`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
