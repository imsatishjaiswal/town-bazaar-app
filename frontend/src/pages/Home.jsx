import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-white px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Town Bazaar
        </h1>
        <p className="text-lg md:text-xl mb-10 text-blue-100">
          Discover the best local products, connect with merchants, and experience a seamless shopping journey right from your neighborhood.
        </p>
        <div className="space-x-4">
          <Link
            to="/about"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
