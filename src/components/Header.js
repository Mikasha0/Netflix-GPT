import React, { useState, useEffect } from "react";
import avatar from "../utils/image/netflix-blue-avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
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

  return (
    <div className="fixed w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={LOGO} alt="app-name" />
      {userData ? (
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <img src={avatar} className="w-9" alt="user-avatar" />
          </div>
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 bg-black rounded-md shadow-lg z-20"
              style={{ width: "80px" }}
            >
              <button
                className="block p-3 text-sm text-left py-2 text-white bg-black rounded-md font-semibold hover:rounded-md"
                style={{ width: "80px" }}
                onClick={signOutUser}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
