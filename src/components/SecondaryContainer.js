import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies)
  return (
    <div className="bg-black">
        <div className="-mt-52  relative z-index-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={nowPlayingMovies}/>
        <MovieList title={"Most Popular"} movies={nowPlayingMovies}/>
        <MovieList title={"Anime"} movies={nowPlayingMovies}/>
        </div>
    </div>
  );
};

export default SecondaryContainer;
