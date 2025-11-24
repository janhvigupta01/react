import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const intervalRef = useRef(null);

  // Timer useEffect
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // cleanup
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Reset handler
  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded text-center w-80">
        <h1 className="text-2xl font-bold mb-6">Timer App</h1>

        <p className="text-4xl font-semibold mb-6">{seconds}s</p>

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded w-full mr-2"
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>

          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full mx-2"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded w-full ml-2"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
































// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   // useRef holds the previous value
//   const prevCountRef = useRef(0);

//   // When count changes, update previous count
//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
//       <div className="bg-white shadow-lg p-6 rounded text-center w-80">
//         <h1 className="text-2xl font-bold mb-4">Counter App</h1>

//         <p className="text-xl mb-2">
//           Current Count: <span className="font-semibold">{count}</span>
//         </p>

//         <p className="text-xl mb-4">
//           Previous Count:{" "}
//           <span className="font-semibold text-blue-600">
//             {prevCountRef.current}
//           </span>
//         </p>

//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => setCount(count + 1)}
//         >
//           Increase
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
