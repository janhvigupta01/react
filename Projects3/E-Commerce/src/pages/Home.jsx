import React from 'react'
import bg from "../assets/bg0.gif"

const Home = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mt-4">
        <img 
          src={bg} 
          alt="Hero Banner"
          className="w-[90%] h-auto max-w-[1500px] object-cover rounded-lg shadow-gray-300 shadow-xl sm:rounded-none md:rounded-lg"
        />
      </div>
    </>
  )
}

export default Home
