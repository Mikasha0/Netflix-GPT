import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
const useMoviesVideoForTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieVideoTrailer = useSelector((store) => store?.movies?.trailerVideo);


  const getMovieVideos = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const movieByTrailer = json.results.filter(
      (data) => data.type === "Trailer"
    );

    const trailer = movieByTrailer.length ? movieByTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !movieVideoTrailer && getMovieVideos();
  }, []);
};

export default useMoviesVideoForTrailer;
