import React from 'react'
import studio6 from"../assets/studio10.png"

import studio3 from"../assets/studio12.png"
import studio4 from"../assets/studio13.png"
import studio5 from"../assets/studio14.png"
import studio2 from"../assets/studio15.png"
import studio1 from"../assets/studio11.png"
const Studio = () => {
  return (
    <div id='pramotion' className='h-[auto]  sm:w-[80%] w-[95%] m-auto mb-[40px] mt-[30px]'>
        <p className='font-[cormorant-garamond] text-black text-6xl   leading-96 tracking-normal text-center'>Brandlytical Studio</p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-4 w-[100%] m-auto mt-10   h-[auto]'>
        <div className="bg-gray-200  animate-[pulse_2s_ease-in-out_infinite]   ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio1} alt="Image 1" />
  </div>
  <div className="bg-gray-200  animate-[pulse_2s_ease-in-out_infinite]  ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio2} alt="Image 2" />
  </div>
  <div className="bg-gray-200  animate-[pulse_3s_ease-in-out_infinite]   ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio3} alt="Image 3" />
  </div>
  <div className="bg-gray-200  animate-[pulse_4s_ease-in-out_infinite]   ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio4} alt="Image 4" />
  </div>
  <div className="bg-gray-200   animate-[pulse_5s_ease-in-out_infinite]  ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio5} alt="Image 5" />
  </div>
  <div className="bg-gray-200    animate-[pulse_2s_ease-in-out_infinite]  ">
    <img className="w-full h-full hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0px] cursor-pointer object-cover" src={studio6} alt="Image 6" />
  </div>
  
        </div>
        <div className="p-[10px] mt-[80px] mb-[80px] hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[210px]  cursor-pointer  text-center w-[220px]   m-auto bg-[#7A1848] rounded-md   text-white "  >Book a Studio</div>

    </div>
  )
}

export default Studio