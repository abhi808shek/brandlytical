import React from "react";
import Rimg1 from "../assets/Rimg1.png";
import Rimg2 from "../assets/Rimg2.png";
import Rimg3 from "../assets/Rimg3.png";
import Rimg4 from "../assets/Rimg4.png";
import Rimg from "../assets/Rback.png";

const Demo = () => {
  return (
    <div className="mt-[120px] mb-[120px] bg-[#FFEBF5] flex gap-10   shadow-lg md:w-[80%] w-[90%] h-[70vh] m-auto">
      <div className="  flex flex-col justify-around       text-start    border-black-500 w-[80%] h-[70%] m-auto">
        <p className="font-[cormorant-garamond]  w-[80%] ml-[60px]      text-start font-bold text-4xl leading-10 text-black">
          Ready To
          <br />
          Get Started?
        </p>
        <p className="font-[DM Sans] font-normal  text-start  w-[80%] ml-[60px] text-xl leading-13 text-black">
          See Your Campaign ROI Before
          <br />
           You Spend a Dime. 
        </p>
        <div className="p-[10px]    cursor-pointer ml-[60px] font-[DM Sans]  text-center w-[220px]   hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[200] hover:shadow-lg   bg-[#7A1848] rounded-md   text-white "  >Book a Demo</div>

      </div>
      <div className="  flex  relative    w-[80%] h-[100%] overflow-hidden m-auto">
        <div className="w-[50%] absolute top-0 left-[22%]  bottom-[-5%]">
          <div className="relative m-0 h-[220px] hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px] ml-[60px] ">
            <img src={Rimg} alt="" className="h-[250px]   cursor-pointer w-[200px] z-20" />
            <img
              src={Rimg4}
              alt=""
              className="h-[200px] w-[150px]   absolute cursor-pointer top-6 left-6 z-10 "
            />
          </div>
          <div className="relative m-0   h-[220px] mr-[60px] hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px] ">
            <img src={Rimg} alt="" className="h-[250px]   cursor-pointer  w-[200px] z-20" />
            <img
              src={Rimg2}
              alt=""
              className="h-[200px] w-[150px] absolute   file: cursor-pointer top-6 left-6 z-10 "
            />
          </div>
        </div>
        <div className="w-[50%] absolute top-[-5%]  bottom-0 right-[-5%]">
          <div className="relative hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px] m-0 h-[200px] ml-[60px] ">
            <img src={Rimg} alt="" className="h-[250px]   cursor-pointer w-[200px] z-20" />
            <img
              src={Rimg1}
              alt=""
              className="h-[200px] w-[150px] absolute   cursor-pointer  top-6 left-6 z-10 "
            />
          </div>
          <div className="relative m-0   h-[220px] mr-[60px] hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px] ">
            <img src={Rimg} alt="" className="h-[250px]    animate-ping_1s_infinite cursor-pointer  w-[200px] z-20" />
            <img
              src={Rimg3}
              alt=""
              className="h-[200px] w-[150px] absolute    top-6 left-6 z-10 "
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Demo;
