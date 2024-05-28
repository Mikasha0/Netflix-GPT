import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate
  const sendPasswordREset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      // ..
      alert("check your gmail");
    });
    navigate("/")
  };

  return (
    <div className="w-full">
      <h1 className="text-center">Forgot password</h1>
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-1/4 mt-3 p-2 border border-gray-400 block rounded-lg "
        />
        <button onClick={sendPasswordREset}>Reset</button>
      </form>
    </div>
  );
};

export default Reset;
