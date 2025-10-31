import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import emptyImage from "../assets/emptycart.png";

const Cart = () => {
  const { CartItem, addItem, removeItem } = useContext(AppContext);

  return (
    <>
      {CartItem.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <img className="" src={emptyImage} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:p-16 p-8">
          {CartItem.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-lg shadow-lg flex items-center justify-between px-8 gap-6 p-4 bg-white"
            >
              {/* Image */}
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded"
                  alt={item.name}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
