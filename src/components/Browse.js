import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import usePopularTvSeries from "../hooks/usePopularTvSeries";

const Browse = () => {
  const toggleGptSearch = useSelector((store) => store?.GPT?.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularTvSeries();
  return (
    <>
      <Header />
      {toggleGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
      <Footer />
    </>
  );
};

export default Browse;
