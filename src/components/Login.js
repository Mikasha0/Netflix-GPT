import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signedIn, setSignedIn] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState({});

  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrors(message);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/bcb20c8e-ba81-4a34-932c-1703f04d881e/NP-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/bcb20c8e-ba81-4a34-932c-1703f04d881e/NP-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/bcb20c8e-ba81-4a34-932c-1703f04d881e/NP-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/bcb20c8e-ba81-4a34-932c-1703f04d881e/NP-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        alt="logo"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute px-12 py-10 bg-black mx-auto left-0 right-0 rounded-lg bg-opacity-80 top-20"
      >
        <h1 className="text-white font-bold text-3xl mb-5">
          {signedIn === false ? "Sign Up" : "Sign In"}
        </h1>
        {signedIn === false ? (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full text-white p-4 rounded-md bg-black bg-opacity-40 border border-gray-200"
            />
            {errors?.name ? (
              <p className="text-red-500 mt-3">{errors?.name}</p>
            ) : null}
          </>
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full text-white p-4 my-4 rounded-md bg-black bg-opacity-40 border border-gray-200"
        />
        {errors?.email ? (
          <p className="text-red-500 mb-3">{errors?.email}</p>
        ) : null}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 text-white  mb-2 rounded-md bg-black bg-opacity-20 border border-gray-200"
        />
        {errors?.password ? (
          <p className="text-red-500 mt-1">{errors?.password}</p>
        ) : null}
        <button
          className="p-2 my-4 bg-red-700 w-full text-white font-semibold rounded-md "
          onClick={handleButtonClick}
        >
          {signedIn === false ? "Sign Up" : "Sign In"}
        </button>
        <h2 className="text-gray-400 mt-6">
          {signedIn === false ? "Already Registered? " : "New to Netflix? "}
          <button
            className="font-semibold text-white"
            onClick={(e) => {
              e.preventDefault();
              setSignedIn(!signedIn);
            }}
          >
            {signedIn === false ? "Sign in now" : "Sign up now"}
          </button>
        </h2>
        <p className="text-gray-400 text-xs mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-500 font-bold"> Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
