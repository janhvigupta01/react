import React from "react";
import { AppContext } from "./AppContext";
import Login from "./Login";
import Welcome from "./Welcome";
import MessageBox from "./MessageBox";

const App = () => {
  return (
   
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Login />
        <Welcome />
        <MessageBox />
      </div>
    
  );
};

export default App;
