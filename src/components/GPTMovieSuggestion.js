import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ResultNotFound from "./ResultNotFound";
const GPTMovieSuggestion = () => {
  const searchedResult = useSelector(
    (store) => store?.movies?.searchedResultMovies
  );
  if (searchedResult.length == 0) {
    return <ResultNotFound />;
  }

  return (
    <div className="bg-black h-[51vh]">
      <div className="relative z-index-20">
        <MovieList title={"Search Result"} movies={searchedResult} />
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
