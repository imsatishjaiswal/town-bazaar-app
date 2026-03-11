import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 flex justify-between items-center px-6 py-4">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          T
        </div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">Town Bazaar</h1>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className={`font-medium transition ${isActive("/") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
          Home
        </Link>
        <Link to="/about" className={`font-medium transition ${isActive("/about") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
          About
        </Link>
        <Link to="/contact" className={`font-medium transition ${isActive("/contact") ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
