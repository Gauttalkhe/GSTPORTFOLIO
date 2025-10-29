import { useState } from "react";
import { Link } from "react-router-dom";

export default function TravonNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-black text-white text-xs sm:text-sm px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side Info */}
        <div className="flex flex-wrap gap-3 sm:gap-6 items-center justify-center">
          <span className="flex items-center gap-1">📞 256 214 203 215</span>
          <span className="flex items-center gap-1">✉️ info@travon.com</span>
          <span className="flex items-center gap-1">📍 9550 Bolsa Ave #126, United States</span>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <a href="#" className="hover:text-green-400">Login / Register</a>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Follow Us:</span>
          <div className="flex gap-2">
            <a href="#" aria-label="Facebook" className="hover:text-green-400">F</a>
            <a href="#" aria-label="Twitter" className="hover:text-green-400">T</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-400">In</a>
            <a href="#" aria-label="Instagram" className="hover:text-green-400">I</a>
            <a href="#" aria-label="YouTube" className="hover:text-green-400">Y</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-10">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-black flex items-center">
            Trav<span className="text-green-500">on</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-black font-medium text-lg">
              <li><Link to="/" className="hover:text-green-500">Home</Link></li>
           <li><Link to="/destination" className="hover:text-green-500">Destination</Link></li>
           <li><Link to="/tourtypes" className="hover:text-green-500">Tour Types</Link></li>
            {/* <li className="cursor-pointer hover:text-green-500">Pages</li>
            <li className="cursor-pointer hover:text-green-500">Blog</li> */}
           <li><Link to="/contactus" className="hover:text-green-500">Contact Us</Link></li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="p-2 border border-gray-300 rounded-full hover:border-green-500">
              🔍
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-gray-300 rounded-full md:hidden hover:border-green-500"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md">
            <ul className="flex flex-col gap-4 text-black font-medium text-base">
               <li><Link to="/" className="hover:text-green-500">Home</Link></li>
               <li><Link to="/destination" className="hover:text-green-500">Destination</Link></li>
           <li><Link to="/tourtypes" className="hover:text-green-500">Tour Types</Link></li>
              {/* <li className="cursor-pointer hover:text-green-500">Pages</li>
              <li className="cursor-pointer hover:text-green-500">Blog</li> */}
           <li><Link to="/contactus" className="hover:text-green-500">Contact Us</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}



