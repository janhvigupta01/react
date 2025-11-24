import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";

const MessageBox = () => {
  const { userName } = useContext(AppContext);
  const msgRef = useRef();

  useEffect(() => {
    if (userName) {
      msgRef.current.focus();
    }
  }, [userName]);

  if (!userName) return null;

  return (
    <div className="bg-white p-4 shadow-lg rounded w-80">
      <input
        ref={msgRef}
        type="text"
        placeholder="Type a message..."
        className="border w-full p-2 rounded"
      />
    </div>
  );
};

export default MessageBox;
