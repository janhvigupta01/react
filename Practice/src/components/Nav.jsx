import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
const Nav = () => {
  return (
    <div className="text-white bg-black w-full h-[60px] flex items-center justify-between gap-4 px-5 lg:px-20">
      <div className=" w-[30%]  flex items-center gap-2  ">
        <FaShopify className="text-xl" />
        <p className="text-gray-100 font-medium text-xl">V-Shop</p>
      </div>
      <div className="w-[50%]  h-[80%] rounded-full bg-white text-black px-4 lg:px-10 flex items-center  ">
        <input
          type="text"
          placeholder="search..."
          className="rounded-full w-full h-full text-black outline-none text-xl"
        />
        <IoMdSearch className="text-2xl" />
      </div>
      <div className=" relative w-[20%] h-full flex items-center justify-end ">
        <CiShoppingCart className="text-2xl font-bold" />
         <p className="absolute right-0 top-1">0</p>
      </div>
    </div>
  );
};

export default Nav;
