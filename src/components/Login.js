import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { checkValidData, validateEmail } from "../utils/validate";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { updateProfile } from "firebase/auth";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();
  const [signedIn, setSignedIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const validEmail = useRef(null);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);
  const [forgot, setForgot] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value,
      signedIn
    );
    setErrors(message);
    if (message) return;
    //signIn or signUp
    if (!signedIn) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
            navigate("/profile");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setAuthError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/profile");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleReset = () => {
    const emailValid = validateEmail(validEmail?.current?.value);
    setErrors(emailValid);
    if (emailValid) return;
    sendPasswordResetEmail(auth, validEmail?.current?.value)
      .then(() => {
        alert("check your gmail");
        setForgot(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorCode + "-" + errorMessage);
      });
  };

  return (
    <>
      <div>
        <Header />
        <img
          className=" hidden md:block lg:block relative concord-img vlv-creative md:h-[60vh] lg:h-full"
          src={BACKGROUND_IMAGE}
          alt="logo"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-6/12 lg:w-4/12 lg:absolute md:absolute px-12 py-10 bg-black mx-auto left-0 right-0 md:rounded-lg lg:rounded-lg md:bg-opacity-80 lg:bg-opacity-80 md:top-[100px] lg:top-20"
        >
          <h1 className="text-white font-bold text-3xl mb-5 pt-10 md:pt-0 lg:pt-0">
            {forgot ===false ? (
              "Forgot Password ?"
            ) : (
              <>{signedIn === false ? "Sign Up" : "Sign In"}</>
            )}
            
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
          {forgot && (
            <>
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
              {authError ? (
                <p className="text-red-500 mt-1">{authError}</p>
              ) : null}
              <button
                className="p-2 my-4 bg-red-700 w-full text-white font-semibold rounded-md "
                onClick={handleButtonClick}
              >
                {signedIn === false ? "Sign Up" : "Sign In"}
              </button>
            </>
          )}
          {forgot === false && (
            <>
              <input
                ref={validEmail}
                type="text"
                placeholder="Email Address"
                className="w-full text-white p-4 my-4 rounded-md bg-black bg-opacity-40 border border-gray-200"
              />
              {errors?.email ? (
                <p className="text-red-500 mb-3">{errors?.email}</p>
              ) : null}
              <button
                className="p-2 my-2 bg-red-700 w-full text-white font-semibold rounded-md "
                onClick={handleReset}
              >
                Reset
              </button>
              {authError ? (
                <p className="text-red-500 mt-1">{authError}</p>
              ) : null}
            </>
          )}
          {signedIn ===true?<p
            className="text-white text-sm font-extralight cursor-pointer"
            onClick={() => setForgot(!forgot)}
          >
            {forgot ? "Forgot Password ?" : "◄ back"}
          </p>: null}
          {forgot &&     <h2 className="text-gray-400 mt-6">
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
          </h2>} 
      
          <p className="text-gray-400 text-xs mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-500 font-bold"> Learn more.</span>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
