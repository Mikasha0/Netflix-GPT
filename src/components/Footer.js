import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black  p-10 px-[150px]  border-t-4 border-gray-800">
      <div className="flex w-full">
        <div className="main-heads  w-3/12">
          <h1 className="text-lg font-semibold  text-white">
            FRONTEND LIBRARY
          </h1>
          <p className="text-white mt-5 font-extralight text-base">
            This website is created using ReactJS, a Javascript Library for
            production.
          </p>
          <img
            className="w-[120px] mt-3"
            src="https://react.dev/images/uwu.png"
            alt="TMDB_Logo"
          />
        </div>
        <div className="main-heads  w-3/12">
          <h1 className="text-lg font-semibold  text-white">CREDIT</h1>
          <p className="text-white mt-3 font-extralight text-base">
            Namaste React Course and the master behind it <span className="font-semibold">Akshay Saini Sir</span>
          </p>
          <img
            className="w-full mt-3"
            src="https://namastedevprod.s3.ap-south-1.amazonaws.com/banner+and+logos/name.png"
            alt="TMDB_Logo"
          />

          <p className="text-white font-extralight mt-5">
            TMDB community built movie and TV database
          </p>
          <img
            className="w-[100px] mt-3"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB_Logo"
          />
        </div>
        <div className="main-heads  w-3/12">
          <h1 className="text-lg font-semibold  text-white">
             ABOUT THE PROJECT
          </h1>
        </div>
        <div className="main-heads  w-3/12">
          <h1 className="text-lg font-semibold  text-white">
            LETS CONNECT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
