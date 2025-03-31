import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

const Developer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-gray-100 p-12">
      <div className="w-full md:w-1/2 flex justify-end pr-8">
        <img
          src="https://i.ibb.co.com/wrpjtJvX/ibrahim.jpg" // Eikhane tomar image URL boshao
          alt="Developer"
          className="w-80 h-80 border-4 border-blue-500 shadow-lg rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2 bg-white shadow-lg p-8 flex flex-col justify-center rounded-md">
        <h2 className="text-4xl font-bold text-gray-800">Md. Ibrahim Hossain</h2>
        <p className="text-2xl text-gray-600 mt-2">Business || Software</p>
        <div className="mt-4 text-lg text-gray-700 space-y-3">
          <p><strong>Email:</strong> mdibrahim36194@gmail.com</p>
          <p><strong>Phone:</strong> +8809638761368</p>
          <div className="flex space-x-4 mt-4">
            <Link to="https://www.facebook.com/profile.php?id=61555465221649" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></Link>
            <Link to="https://github.com/BFIbrahim" className="text-gray-900 text-2xl hover:text-gray-700"><FaGithub /></Link>
            <Link to="https://incredible-buttercream-137712.netlify.app/" className="text-green-600 text-2xl hover:text-green-800"><FaGlobe /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
