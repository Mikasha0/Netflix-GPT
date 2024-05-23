import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
const GPTSearch = () => {
  return (
    <>
      <div>
        <img
          className="absolute w-full h-[50vh] object-cover concord-img vlv-creative bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/e09be4a6-58f5-4b58-855c-b6678e6f44bd/NP-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </>
  );
};

export default GPTSearch;
