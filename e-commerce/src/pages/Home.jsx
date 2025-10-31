import React, { useContext, useEffect, useState } from "react";
import image from "../assets/bg0.gif";
import { categories, dummydata } from "../dummydata";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { addItem, CartItem } = useContext(AppContext);
  useEffect(() => {
    console.log("Cart updated:", CartItem);
  }, [CartItem]);

  const [data, setData] = useState(dummydata);
  const change = (cat) => {
    const filter = dummydata.filter((item) => item.category == cat);
    setData(filter);
  };
  const add = (id) => {
    addItem(id);
  };

  return (
    <div className="w-full mt-5 px-4 md:px-32">
      <div className="w-full h-[60vh] rounded-lg overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
        {categories.map((item) => (
          <div
            onClick={() => change(item.name)}
            key={item.id}
            className="w-32 h-60 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt=""
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-gray-700 font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center items-center flex-wrap gap-6 mt-8">
        {data.slice(0, 9).map((item, index) => (
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
                onClick={() => add(item.id)}
                className="w-full bg-blue-500 py-2 rounded-lg font-medium text-white hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
