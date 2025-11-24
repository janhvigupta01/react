import React from 'react'
import {AppContext} from "./AppContext"
import { useContext } from 'react'
const Footer = () => {
    const {theme} =useContext(AppContext);
  return (
    <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
      this is a footer
    </div>
  )
}

export default Footer
