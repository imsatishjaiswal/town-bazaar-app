import React from "react";

function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Town Bazaar</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Town Bazaar is your one-stop platform for discovering and connecting with local businesses. We aim to empower communities by bringing local commerce online, providing a seamless bridge between buyers and sellers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are looking for daily essentials, unique crafts, or personalized services, our platform ensures you find exactly what you need, right in your neighborhood.
            </p>
          </div>
          <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Support local economies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Foster community growth
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Provide seamless digital experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
