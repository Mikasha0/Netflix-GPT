import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTvSeries } from "../utils/movieSlice";
const usePopularTvSeries = () => {

  const dispatch = useDispatch();
  const popularTvSeries = useSelector((store) => store?.movies?.popularTvSeries);
  console.log(popularTvSeries)

  useEffect(() => {
    !popularTvSeries && getPopularTvSeries();
  }, []);

  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularTvSeries(json.results));
  };
};
export default usePopularTvSeries;
