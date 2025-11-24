import React, { useContext, useRef } from "react";
import { AppContext } from "./AppContext";
import MessageBox from "./MessageBox";

const Login = () => {
  const { setUserName } = useContext(AppContext);
  const inputRef = useRef();

  const handleLogin = () => {
    setUserName(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded w-80 mb-6">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter username"
        className="border w-full p-2 rounded mb-4"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
