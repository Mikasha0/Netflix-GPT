import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { GITHUB, INSTAGRAM, NAMASTEDEV_LOGO, REACT_LOGO, TMDB_LOGO } from "../utils/constants";

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
            src={NAMASTEDEV_LOGO}
            alt="Akshay Saini"
          />
          <p className="text-white font-extralight mt-5 w-[250px]">
            TMDB community built movie and TV database
          </p>
          <img
            className="w-[100px] mt-3"
            src={TMDB_LOGO}
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
            src={REACT_LOGO}
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
              href={GITHUB}
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
              href={INSTAGRAM}
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
