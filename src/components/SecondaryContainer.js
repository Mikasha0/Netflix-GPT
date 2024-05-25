import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const popularTvSeries = useSelector((store) => store?.movies?.popularTvSeries);

  return (
    <div className="bg-black">
      <div className="-mt-4 md:-mt-20 lg:-mt-52  relative z-index-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Popular TV Series"} movies={popularTvSeries} />
        <div className="pb-4">
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
