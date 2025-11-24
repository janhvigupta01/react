import React,{useContext} from 'react'
import {AppContext} from "./AppContext"
const Header = () => {
    const {theme}=useContext(AppContext);
  return (
    <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
      This is a Header
    </div>
  )
}

export default Header
