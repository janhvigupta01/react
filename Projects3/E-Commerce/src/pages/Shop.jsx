import React, { useState } from "react";
import { category } from "../Category";
import { dummydata } from "../dummydata";
import Card from "../components/card";
import { FaShopify } from "react-icons/fa";
const Shop = () => {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(category) {
  if(category==="All"){
    setCate(dummydata)
  }else{
    const updatedata = dummydata.filter((item) => item.category === category);
    setCate(updatedata);
  }
  }
  
  return (
    <div className="w-full h-full">
        <div className=" w-full h-12 text-4xl font-extrabold italic gap-2 mt-4 flex justify-center items-center">
            <h1>Shop </h1>
            <FaShopify/>
        </div>
        
      <div className="w-full py-6 flex flex-wrap items-center justify-center gap-8">
        {category.map((item, index) => (
          <div
            key={index}
            className=" w-36  
                       flex flex-col items-center justify-center text-center 
                       p-2 md:p-5 bg-white 
                       hover:scale-105 hover:shadow-lg hover:shadow-gray-400 
                       transition-all duration-200 ease-in-out rounded-xl"
            onClick={() => filterProducts(item.name)}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm md:text-base text-gray-700 font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {cate.map((item) => (
          <Card name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
