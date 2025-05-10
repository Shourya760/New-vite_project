import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Home() {
  const [iconsVisible, setIconsVisible] = useState(false);

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/shourya.verma.52831', color: 'text-blue-600' },
    { icon: Twitter, url: 'https://twitter.com/@ShouryaVer20277', color: 'text-blue-400' },
    { icon: Instagram, url: 'https://www.instagram.com/shourya_v_001', color: 'text-pink-600' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shourya-verma-369276246/', color: 'text-blue-700' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const spring = {
    type: 'spring',
    stiffness: 50,
    damping: 15,
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 space-y-6">
          <motion.h2
            className="text-xl uppercase text-gray-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            Hi there!
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.4 }}
          >
            I'm <span className="text-yellow-500">Shourya Verma</span>
          </motion.h1>

          <motion.h3
            className="text-md md:text-lg font-medium uppercase text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.6 }}
          >
            Electronics Engineer / Creative Artist
          </motion.h3>

          <motion.p
            className="text-gray-600 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...spring, delay: 0.8 }}
          >
            Electrical engineer with a creative edge, blending technical expertise with artistic vision to design innovative solutions. Welcome to my portfolio, where engineering meets imagination. Here, circuits and creativity converge to build tomorrow's sustainable technologies with both precision and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 1 }}
          >
            <Link
              to="/about"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md w-max transition-transform duration-300 hover:-translate-y-1"
            >
              More About Me
            </Link>
          </motion.div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center">
          <motion.img
            src="/shourya.jpg"
            alt="Shourya"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 1.2 }}
          />

          {/* Social Icons */}
          <div className="absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:pr-4 bottom-4 left-0 right-0 flex justify-center md:block">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 items-center md:items-end">
              {socialLinks.map(({ icon: Icon, url, color }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 ${color}`}
                  aria-label={`Social media link`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={iconsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...spring, delay: 1.4 + i * 0.15 }}
                >
                  <Icon size={20} className="stroke-current" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
