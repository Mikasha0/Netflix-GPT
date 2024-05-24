import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import usePopularTvSeries from "../utils/usePopularTvSeries";

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
