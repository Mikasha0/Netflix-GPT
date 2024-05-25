import React, { useState, useEffect } from "react";
import avatar from "../utils/image/netflix-blue-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { IoSearchOutline } from "react-icons/io5";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [onScroll, setOnScroll] = useState(false);
  useEffect(() => {
    const handleScroll =()=>{
      if (window.scrollY > 0) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
    });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  return (
    <div
      className={`fixed w-full px-8 py-1 bg-gradient-to-b from-black z-20 flex items-center justify-between ${
        onScroll === true ? "bg-black" : ""
      }`}
    >
      <img className="w-36" src={LOGO} alt="app-name" />
      {userData ? (
        <>
          <div className="relative">
            <div className="flex">
              <button
                className="text-sm text-white mr-4 border border-white px-2 rounded-lg "
                onClick={handleGPTSearchClick}
              >
                <div className="flex">
                  <IoSearchOutline className="mt-1 mr-1" size={15} />
                  GPT
                </div>
              </button>
              <div className="cursor-pointer" onClick={handleDropdownToggle}>
                <img src={avatar} className="w-9" alt="user-avatar" />
              </div>
            </div>

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 bg-black rounded-md shadow-lg z-20"
                style={{ width: "80px" }}
              >
                <button
                  className="block p-3 text-sm text-left py-2 text-white bg-black rounded-md font-extralight hover:rounded-md"
                  style={{ width: "80px" }}
                  onClick={signOutUser}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
