import React from "react";
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
const Nav = () => {
  return (
    <>
    <div className="bg-black w-full h-[60px] flex justify-between items-center px-10 md:px-16">
      <div className="w-[20%] md:w-[10%] h-full  flex items-center justify-around text-2xl font-semibold text-white">
        <FaShopify />
        <p>V-Shop</p>
      </div>
      <div className="w-[350px] md:w-[600px] flex items-center gap-11 md:gap-60 bg-white rounded-4xl px-4">

        <input type="text" placeholder="search for items" className="  w-[250px] h-9 flex items-center md:w-[300px]   outline-none "/>
        <IoMdSearch className=" font-semibold text-2xl"/>
      </div>
      <div className="w-10  h-[60px] flex justify-center items-center rounded-md shadow-xl relative cursor-pointer">
       <CiShoppingCart className="text-white h-[30px] w-[30px] " />
       <span className="absolute top-0 right-0 text-white font-semibold">0</span>
      </div>
    </div>
    <div className="w-full h-[30px] bg-gray-900 text-white flex justify-center items-center gap-4 shadow-gray-400 shadow-lg">
        <div>Home</div>
        <div>Shop</div>
        <div>Cart</div>
        <div>Contact</div>
    </div>
    </>
  );
};

export default Nav;
