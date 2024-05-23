import React from 'react';
import avatar from "../utils/image/netflix-blue-avatar.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const ProfilePage = () => {
  const userName = useSelector((store)=> store?.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/profile");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-white text-center mb-6'>Who's watching?</h1>
      <div onClick={()=> navigate("/browse")}>
        <img src={avatar} className="w-24" alt="user-avatar" />
      </div>
      <p className='text-xl text-white mt-2 '>{userName?.displayName}</p>
    </div>
  );
}

export default ProfilePage;
