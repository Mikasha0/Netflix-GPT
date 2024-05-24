import React from "react";

const ResultNotFound = () => {
  return (
    <div className="bg-black h-[51vh] flex justify-center items-center">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-500 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zM5.03 4.47a.75.75 0 011.06-1.06l9 9a.75.75 0 01-1.06 1.06l-9-9a.75.75 0 010-1.06zm9 0a.75.75 0 00-1.06-1.06l-9 9a.75.75 0 001.06 1.06l9-9z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-white text-lg mt-4">Sorry! No results found.</p>
      </div>
    </div>
  );
};

export default ResultNotFound;
