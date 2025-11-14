import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
const Nav = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch()
  let items=useSelector(state=>state)
  
  return (
    <>
      <div className="text-white bg-black w-full h-[60px] flex items-center justify-between gap-4 px-5 lg:px-20">
        <div
          onClick={() => navigate("/")}
          className=" w-[30%]  flex items-center gap-2  "
        >
          <FaShopify className="  text-xl" />
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
          <p className="absolute right-0 top-1">{items.cart.length}</p>
        </div>
      </div>

      <div className="w-full h-[35px] bg-gray-800 text-white flex justify-center items-center gap-4 shadow-gray-400 shadow-lg font-semibold">
        <Link to="/">
          <div className="cursor-pointer">Home</div>
        </Link>
        <Link to="/shop">
          <div className="cursor-pointer">Shop</div>
        </Link>
        <Link to="/cart">
          <div className="cursor-pointer">Cart</div>
        </Link>
        <Link to="/contact">
          <div className="cursor-pointer">Contact</div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
