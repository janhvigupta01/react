import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
const Content = () => {
    const {theme} =useContext(AppContext);
  return (
    <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
      this is a content page
    </div>
  )
}

export default Content
