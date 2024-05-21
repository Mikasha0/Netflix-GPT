import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
