import React from 'react'
import { NavLink } from 'react-router-dom'

const Nsvbar2 = () => {
  return (
    <div className='flex w-full h-16 bg-gray-800 text-white items-center justify-around px-8'>
     <div className='flex gap-4 items-center'>
         <NavLink to={"/"} className={({isActive })=>isActive  ? "text-red-500" : "text-white"}>Home</NavLink>
      <NavLink  className={({isActive })=>isActive  ? "text-red-500" : "text-white"} to={"/shop"}>Shop</NavLink>
      <NavLink className={({isActive })=>isActive  ? "text-red-500" : "text-white"} to={"/cart"}>Cart</NavLink>
      <NavLink  className={({isActive })=>isActive  ? "text-red-500" : "text-white"} to={"/contact"}>Contact</NavLink>
     </div>
    </div>
  )
}

export default Nsvbar2
