import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const GPTMovieSuggestion = () => {
  const searchedResult = useSelector((store)=> store?.movies?.searchedResultMovies);
  console.log(searchedResult)
  return (
    <div className="bg-black h-[51vh]">
    <div className="mt-[55px]  relative z-index-20">
      <MovieList title={"Search Result"} movies={searchedResult} />
    </div>
  </div>  )
}

export default GPTMovieSuggestion