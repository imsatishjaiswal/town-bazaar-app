// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight flex items-center justify-center md:justify-start">
            <div className="w-6 h-6 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold mr-2">
              T
            </div>
            Town Bazaar
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Empowering local communities effortlessly.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            to="/"
            className="text-gray-500 hover:text-blue-600 text-sm font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-500 hover:text-blue-600 text-sm font-medium transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-blue-600 text-sm font-medium transition"
          >
            Contact
          </Link>
        </div>

        <div>
          <p className="text-gray-400 text-sm tracking-wide">
            © {new Date().getFullYear()} Town Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
