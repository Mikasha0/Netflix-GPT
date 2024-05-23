import React, { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/movieSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const [searText, setSearchText] = useState("");
  const fetchSearchedMovies = async () => {
    const data =  await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searText}`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results)
    dispatch(addSearchedMovies(json.results))

  };
  const searchMovieButton = () => {
    fetchSearchedMovies();
  };

  return (
    <div className="relative pt-[200px] flex justify-center">
      <form className="w-1/2 flex" onSubmit={(e)=>e.preventDefault()}>
        <input
          className="search-input flex-1 rounded-l-lg rounded-r-lg border border-gray-300 focus:outline-none"
          type="text"
          placeholder="Search Here..."
          value={searText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button relative bg-black text-white font-semibold hover:bg-gray-800 h-11 px-6 rounded-l-lg rounded-r-lg"
          type="button"
          onClick={searchMovieButton}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
