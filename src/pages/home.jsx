import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Home() {
  const [iconsVisible, setIconsVisible] = useState(false);
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/shourya.verma.52831', color: 'text-blue-600' },
    { icon: Twitter, url: 'https://twitter.com/@ShouryaVer20277', color: 'text-blue-400' },
    { icon: Instagram, url: 'https://www.instagram.com/shourya_v_001', color: 'text-pink-600' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shourya-verma', color: 'text-blue-700' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
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
            Electrical engineer with a creative edge, blending technical expertise with artistic vision to design innovative solutions. Welcome to my portfolio, where engineering meets imagination. Here, circuits and creativity converge to build tomorrow's sustainable technologies with both precision and passion.
          </p>
          <Link
            to="/about"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md w-max transition-all duration-300"
          >
            More About Me
          </Link>
        </div>

        {/* Right Side (Image Section) */}
        <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center ">
          <img
            src="/shourya.jpg"
            alt="Shourya"
            className="w-full h-full object-cover"
          />
          
          {/* Social Icons Overlay on Image */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4">
            <div className={`flex flex-col space-y-4 items-end transition-all duration-700 ease-out ${iconsVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              {socialLinks.map(({ icon: Icon, url, color }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-13 h-13 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${color}`}
                  aria-label={`Social media link`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon size={18} className="stroke-current" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;