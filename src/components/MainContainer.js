import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import TitleVideo from "./TitleVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if(movies ===null){
    return <p>...Loading</p>
  }
  const mainMovie = movies[18];
  console.log(mainMovie)
  console.log(mainMovie)
  const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <TitleVideo title={original_title} overview={overview}/>
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
