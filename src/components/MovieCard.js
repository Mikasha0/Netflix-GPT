import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex justify-center items-center w-40 pr-4 overflow-hidden">
      <div className="transform transition-transform duration-300 hover:scale-110">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MovieCard;
