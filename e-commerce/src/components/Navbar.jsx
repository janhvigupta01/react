import React, { useContext } from "react";
import { FaShopify } from "react-icons/fa";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {CartItem} = useContext(AppContext);
  return (
    <div className="flex w-full h-16 bg-black text-white items-center justify-between px-8">
      {/* Logo Section */}
      <div className="flex gap-2 items-center">
        <FaShopify className="text-3xl text-green-400" />
        <p className="text-2xl font-bold">V-Shop</p>
      </div>

      {/* Search Box */}
      <div className="bg-white flex items-center px-3 rounded-full w-1/3 h-1/2">
        <input
          type="text"
          placeholder="Search Items"
          className="flex-1 bg-transparent outline-none text-black px-2"
        />
        <CiSearch className="text-black text-xl cursor-pointer" />
      </div>

      {/* Cart */}
      <div className="relative">
        <CiShoppingCart className="text-3xl cursor-pointer" />
        <p className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {
            CartItem.length
          }
        </p>
      </div>
     
    </div>
  );
};

export default Navbar;
