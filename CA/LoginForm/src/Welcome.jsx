import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Welcome = () => {
  const { userName } = useContext(AppContext);

  if (!userName) return null;

  return (
    <h1 className="text-2xl font-bold mb-4">
      Welcome, <span className="text-blue-600">{userName}</span>!
    </h1>
  );
};

export default Welcome;
