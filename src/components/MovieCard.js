import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import no_image from "../utils/image/no_image.png"

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex justify-center items-center w-40 pr-2 pb-3 overflow-hidden">
      <div className="transform transition-transform duration-300 hover:scale-110">
        {posterPath == null ? (
          <img
            src={no_image}
            alt="no_poster"
            className="w-full h-auto"
          />
        ) : (
          <img
            src={IMG_CDN_URL + posterPath}
            alt="Movie Card"
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
