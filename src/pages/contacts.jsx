import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
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
          <Link to="/Hobbies" className="hover:text-black block py-2 px-4 rounded transition duration-300">Hobbies</Link>
          <Link to="/contact" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">Contact</Link>
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
          <Link to="/Hobbies" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Hobbiess</Link>
          <Link to="/contact" className="block text-center hover:text-black py-2 bg-white text-yellow-500 rounded font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full md:w-4/5 p-6 md:p-12">
        <section id="contact" className="max-w-6xl mx-auto">

          {/* CONTACT ME Heading */}
          <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-yellow-500 pb-4 mb-8 text-gray-800">CONTACT ME</h1>

          <div className="min-h-[70vh] flex flex-col">
          {/* Heading and Paragraph */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Feel <span className="font-bold text-yellow-500">free</span> to contact me!
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
                I'm always happy to work on new projects, collaborations, or creative ideas. Reach out via email, phone, or the contact form below—I'd love to hear from you!
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 w-full">
              {/* Contact Info Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                {/* Email Section */}
                <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <Mail className="w-12 h-12 text-yellow-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-700 space-y-2">
                    <h3 className="font-bold text-xl text-gray-800">Email Me</h3>
                    <p className="text-lg">shouryav760@gmail.com</p>
                    <p className="text-lg">@shourya*********.com</p>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <Phone className="w-12 h-12 text-yellow-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-700 space-y-2">
                    <h3 className="font-bold text-xl text-gray-800">Call Me</h3>
                    <p className="text-lg">+91 9997175856</p>
                    <p className="text-lg">+91 92********</p>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <MapPin className="w-12 h-12 text-yellow-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-700 space-y-2">
                    <h3 className="font-bold text-xl text-gray-800">Location</h3>
                    <p className="text-lg">New Delhi, India</p>
                    <p className="text-lg">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md font-medium hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Send Message
              </button>
              </form>

            </div>

            {/* Thank You Message */}
            <div className="w-full text-center mt-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800">
                THANKS FOR VISITING MY PORTFOLIO!
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                I appreciate you taking the time to explore my work. If you have any questions or would like to discuss potential opportunities, don't hesitate to reach out!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;