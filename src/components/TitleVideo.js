import React from "react";
import { FaPlay } from "react-icons/fa";

const TitleVideo = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-36 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-sm">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-7 text-lg rounded-lg  hover:bg-opacity-80">
          <div className="flex">
            <FaPlay className="mt-2 mr-2" size={13}/>
            Play
          </div>
        </button>
        <button className="mx-3 bg-gray-500 text-white p-2 px-7 text-lg rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleVideo;
