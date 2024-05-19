import React, { useState } from "react";
import avatar from "../utils/image/netflix-blue-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="app-name"
      />
      {userData? (<div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <img src={avatar} className="w-9" alt="user-avatar" />
        </div>
        {dropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-20"
            style={{ width: "80px" }}
          >
            <button
              className="block p-3 text-sm text-left  py-2 text-gray-700 hover:bg-gray-100 font-semibold hover:rounded-md"
              onClick={signOutUser}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>):null}
      
    </div>
  );
};

export default Header;
