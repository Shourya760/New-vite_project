import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hobbies = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const portfolioItems = [
        { id: 1, category: "Graphic Design", img: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, category: "Graphic Design", img: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, category: "Graphic Design", img: "https://images.pexels.com/photos/31853161/pexels-photo-31853161/free-photo-of-silver-toyota-supra-in-industrial-setting.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, category: "Web Design", img: "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, category: "Web Design", img: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 6, category: "Web Design", img: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 7, category: "Photography", img: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 8, category: "Photography", img: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 9, category: "Photography", img: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=600" },

      ];
    const [activeCategory, setActiveCategory] = useState("Graphic Design");
    const filteredItems = portfolioItems.filter(item => item.category === activeCategory);


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
                     <Link to="/portfolio" className="bg-white text-yellow-500 hover:bg-gray-100 block py-2 px-4 rounded transition duration-300 font-medium">Portfolio</Link>
                     <Link to="/Hobbies" className="hover:text-black block py-2 px-4 rounded transition duration-300">Hobbies</Link>
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
                     <Link to="/portfolio" className="block text-center hover:text-black py-2 bg-white text-yellow-500 rounded font-medium"onClick={() => setMenuOpen(false)}>Portfolio</Link>
                     <Link to="/Hobbies" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Hobbies</Link>
                     <Link to="/contact" className="block text-center hover:text-black py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
                   </div>
                 )}
           

            {/* Main Content */}
            <main className="w-full md:w-4/5 p-4 md:p-8 relative">

            <h1 className="text-3xl sm:text-5xl text-center font-bold border-b-4 border-black pb-4 mb-8 text-gray-800">
                PORTFOLIO
            </h1>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg font-semibold text-gray-700 mb-8 text-center">
                {["Graphic Design", "Web Design", "Photography"].map(cat => (
                    <span
                    key={cat}
                    className={`cursor-pointer hover:text-yellow-500 ${activeCategory === cat ? "text-yellow-500" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                    >
                    {cat}
                    </span>
                ))}
            </div>


            

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
                    <img src={item.img} alt={item.category} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-bold text-gray-800">{item.category}</h3>
                    </div>
                    </div>
                ))}
            </div>


            
            </main>
        </div>
    );
};

export default Hobbies;
