import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies } from "../utils/movieSlice";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
const GPTSearch = () => {
  const searchedResult = useSelector(
    (store) => store?.movies?.searchedResultMovies
  );
  const [searText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const fetchSearchedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searText}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchedMovies(json.results));
  };
  const searchMovieButton = () => {
    fetchSearchedMovies();
  };
  return (
    <>
      <div className="relative h-[50vh]">
        <img
          className="absolute inset-0 w-full h-[50vh] object-cover concord-img vlv-creative bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/e09be4a6-58f5-4b58-855c-b6678e6f44bd/NP-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
        <div className="flex relative justify-center pt-[100px] px-10 md:pt-[200px] lg:pt-[100px]">
          <h1 className="text-4xl font-extrabold text-white text-center ">
            Search movies, TV shows, and more
          </h1>
        </div>

        <div className="flex relative pt-[20px] justify-center md:ml-10">
          <form className="w-10/12 flex ml-10" onSubmit={(e) => e.preventDefault()}>
            <input
              className="search-input text-white bg-black bg-opacity-80 flex-1 rounded-l-lg rounded-r-lg border border-gray-300 focus:outline-none"
              type="text"
              placeholder="Search Here..."
              value={searText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-button  relative bg-red-600 text-white font-semibold hover:bg-gray-800 h-11 px-6 rounded-l-lg rounded-r-lg z-10"
              type="button"
              onClick={searchMovieButton}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {searchedResult === null ? null : <GPTMovieSuggestion />}
    </>
  );
};

export default GPTSearch;
