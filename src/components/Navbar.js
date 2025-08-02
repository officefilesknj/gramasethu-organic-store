import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Name */}
          <div className="flex items-center">
            <img src={logo} alt="Grama Sethu Logo" className="h-10 w-10 mr-2 rounded-full" />
            <span className="text-white font-bold text-xl">GramaSethu</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white font-semibold">
            <button className="hover:text-yellow-300">Home</button>
            <button className="hover:text-yellow-300">Products</button>
            <button className="hover:text-yellow-300">About</button>
            <button className="hover:text-yellow-300">Contact</button>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 text-white font-semibold">
            <button className="block hover:text-yellow-300">Home</button>
            <button className="block hover:text-yellow-300">Products</button>
            <button className="block hover:text-yellow-300">About</button>
            <button className="block hover:text-yellow-300">Contact</button>
          </div>
        )}
        </div>
    </nav>
  );
};

export default Navbar;