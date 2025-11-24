import React, { useState, useEffect } from "react";

const App = () => {
  const students = ["Aisha", "Rohan", "Mehak", "Kabir", "Zoya", "Arjun"];

  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(students);

  useEffect(() => {
    const result = students.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(result);
  }, [search]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Student Search Filter</h1>

      <input
        type="text"
        placeholder="Search student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="space-y-2">
        {filteredList.map((name, index) => (
          <li
            key={index}
            className="text-lg p-3 bg-gray-100 rounded shadow-sm"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
