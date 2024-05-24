import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black p-10 border-t-4 border-gray-800 h-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="main-heads">
          <h1 className="text-lg font-semibold text-white">CREDIT</h1>
          <p className="text-white mt-3 font-extralight text-base">
            Namaste React Course and the master behind it
            <span className="font-semibold"> Akshay Saini Sir</span>
          </p>
          <img
            className="w-[200px] mt-3"
            src="https://namastedevprod.s3.ap-south-1.amazonaws.com/banner+and+logos/name.png"
            alt="Akshay Saini"
          />
          <p className="text-white font-extralight mt-5 w-[250px]">
            TMDB community built movie and TV database
          </p>
          <img
            className="w-[100px] mt-3"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB Logo"
          />
        </div>
        <div className="main-heads">
          <h1 className="text-lg font-semibold text-white">FRONTEND LIBRARY</h1>
          <p className="text-white mt-5 font-extralight text-base w-[230px]">
            This website is created using ReactJS, a JavaScript library for
            production.
          </p>
          <img
            className="w-[120px] mt-3"
            src="https://react.dev/images/uwu.png"
            alt="React Logo"
          />
        </div>
        <div className="main-heads">
          <h1 className="text-lg font-semibold text-white">
            ABOUT THE PROJECT
          </h1>
          <p className="text-white font-extralight mt-5 w-[250px]">
            NetflixGPT - An AI-Powered OTT Platform for Movie Recommendations 🎦
            with Live Demo.
          </p>
        </div>
        <div className="main-heads">
          <h1 className="text-lg font-semibold text-white">
            LETS GET CONNECTED
          </h1>
          <div className="flex space-x-6 mt-5">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={27} />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={27} />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={27} />
            </a>
          </div>

          <p className="mt-5 text-white font-extralight py-2 w-[250px] px-3 border boder-white rounded-lg flex">
            <FaEnvelope className="mr-2" size={20} />
            anikettamrakar0@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
