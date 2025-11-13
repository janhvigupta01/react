import React from "react";
const Card = ({name,image,price}) => {
  return (
    
        <div className="w-[300px] h-[450px] flex  items-center gap-4 flex-col p-3 rounded-lg shadow-lg shadow-gray-600 py-4">
      <img src={image} alt="" className="h-[60%] w-full "/>
      <div className="flex flex-col gap-1 mr-15">
        <span>{name}</span>
        <span>Rs {price}/-</span>
        <button className="bg-black text-white rounded-lg flex justify-center items-center py-2 w-24 font-semibold">Add +</button>
      </div>
    </div>
   
         
    
   
  );
};

export default Card;
