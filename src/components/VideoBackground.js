import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMoviesVideoForTrailer from "../utils/useMoviesVideoForTrailer";

const VideoBackground = ({ movieId }) => {
  useMoviesVideoForTrailer(movieId)  
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);


  return (
    <div className="overflow-hidden">
      <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
      title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
