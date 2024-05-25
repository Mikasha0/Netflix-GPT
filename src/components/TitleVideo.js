import React from "react";
import { FaPlay } from "react-icons/fa";

const TitleVideo = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-20 md:pt-36 md:px-24 px-6  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-1/4 py-6 text-sm">{overview}</p>
      <div>
        <button className="bg-white text-black p-1 px-3 md:p-2 md:px-7 text-base md:text-lg rounded-lg  hover:bg-opacity-80 mt-5">
          <div className="flex">
            <FaPlay className="mt-1 md:mt-2 mr-2" size={13}/>
            Play
          </div>
        </button>
        <button className=" hidden md:inline-block mx-3 bg-gray-500 text-white p-2 px-7 text-lg rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleVideo;
