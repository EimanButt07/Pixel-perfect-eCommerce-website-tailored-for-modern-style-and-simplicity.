import React from 'react';
import { FaPlus } from "react-icons/fa";

const MainTopHeader = () => {
  return (
    <main className="bg-black w-full h-[38px] flex justify-center items-center relative">
      {/* Left */}
      <div className="flex justify-center items-center">
        <h3 className="text-white text-xs sm:text-sm">Sign up and get 20% off to your first order. </h3>
        <button className="text-white ml-3 text-xs sm:text-sm border-b-2 border-white hover:border-b-0 transition-all duration-300">Sign up Now</button>
      </div>
      <FaPlus className="text-white absolute right-[50px] hidden sm:block"/>
    </main>
  )
}

export default MainTopHeader
