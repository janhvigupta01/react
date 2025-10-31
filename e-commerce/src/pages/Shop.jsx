import React from "react";
import { dummydata } from "../dummydata";

const Shop = () => {
  const change = () => alert("added Successfully");
  return (
    <div className="flex w-full justify-center items-center flex-wrap gap-6 mt-8">
      {dummydata.map((item, index) => (
        <div
          key={index}
          className="w-72 h-80 bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
        >
          <div className="w-full h-48 bg-gray-100">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt={item.title || "Product"}
            />
          </div>
          <div className="flex justify-between items-center px-4 mt-3">
            <p className="text-gray-900 font-medium">{item.name}</p>
            <p className="font-bold">{item.price}</p>
          </div>
          <div className="px-4 mt-3 mb-4">
            <button
              onClick={() => change()}
              className="w-full bg-blue-500 py-2 rounded-lg font-medium text-white hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
