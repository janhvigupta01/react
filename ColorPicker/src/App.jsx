import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [color, setColor] = useState("white");          // current color
  const [history, setHistory] = useState([]);           // last 5 colors
  const historyRef = useRef([]);                        // track previous history

  // Update history whenever color changes
  useEffect(() => {
    if (color !== "white") {
      const newHistory = [color, ...historyRef.current];  // add new color at start

      // Only keep last 5 colors
      const slicedHistory = newHistory.slice(0, 5);

      setHistory(slicedHistory);
      historyRef.current = slicedHistory;  // update ref
    }
  }, [color]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-2xl font-bold mb-6">Color Picker App</h1>

      {/* BOX */}
      <div
        className="w-64 h-32 mb-6 border rounded shadow"
        style={{ backgroundColor: color }}
      ></div>

      {/* Color Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setColor("red")}>
          Red
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setColor("blue")}>
          Blue
        </button>

        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setColor("green")}>
          Green
        </button>

        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>

      {/* History */}
      <h2 className="text-lg font-semibold">
        Color History:{" "}
        {history.length === 0
          ? "No colors selected"
          : history.join(" → ")}
      </h2>
    </div>
  );
};

export default App;
