import React from "react";
import insa from "../assets/instagram.svg";
import fw from "../assets/fw22.svg";
import fi from "../assets/fi22.svg";
import yellowImg from "../assets/Rectangle311.png";
import blueImg from "../assets/Rectangle312.svg";
import yellowImg2 from "../assets/yellow2img.png";
import blueImg2 from "../assets/blue2img.png";
 import {Link} from "react-router-dom"
import Fshweta from"../assets/Fshweta.png"
import Fimg21 from"../assets/Fimg21.png"
import Franveer from"../assets/Franveer.png"
const Footer = () => {
  return (
    <section
      id="footer"
      className={`flex h-[100vh] w-full relative mt-[200px]  flex-col bg-[#7A1848] pt-56 sm:px-4 px-6 md:items-start items-center md:text-start text-center`}
    >
      <div className="m-auto w-[80%] justify-between  right-0 left-0 flex bg-[#FFC9E4] flex-wrap   absolute rounded-xl mt-[-150px] top-0">
        <div className="flex flex-col items-start md:w-[30%] w-[90%] md:m-[70px] m-[20px]    ">
          <div>
            <p className="px-3 font-bold font-[DM Sans] text-black text-[22px]">Socialize</p>
          </div>
          <div className="flex flex-row">
            <div className="p-4  m-[10px] cursor-pointer animate-spin border-2 border-[#7A1848]  border-dotted  rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <img src={insa} className="w-[100%]  h-[100]%" />
            </div>
            <div className="p-4  m-[10px] cursor-pointer animate-spin border-2 border-[#7A1848]  border-dotted  rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <img src={fw} className="w-[100%]    cursor-pointer h-[100]%" />
            </div>
            <div className="p-4  m-[10px] animate-spin cursor-pointer border-2 border-[#7A1848]  border-dotted rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <img src={fi} className="w-[100%]    cursor-pointer   h-[100]%" />
            </div>
          </div>
        </div>
        <div className=" h-[300px] w-[100%]  md:w-[30%]">
        <div className="absolute">
            <img src={Fimg21} alt="" />
          </div>
         
          <div className="absolute w-[100px] h-[150px]   ml-[140px]">
            <img src={yellowImg} className="h-[100%]  m-auto w-[100%]" alt="" />
          </div>
         <div className="absolute w-[120px] h-[120px] mt-[30px]  right-0">
            <img src={Fshweta} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
             <div className="absolute w-[100px] h-[70px] mt-[130px]   ">
            <img src={blueImg2} className="animate-[bounce_2s_ease-in-out_infinite] h-[100%] m-auto w-[100%]" alt="" />
          </div> 
          <div className="absolute w-[60px] h-[60px] mt-[210px] ">
            <img src={yellowImg2} className="animate-[bounce_2s_ease-in-out_infinite] h-[100%] m-auto w-[100%]" alt="" />
          </div> 
           <div className="absolute animate-[bounce_2s_ease-in-out_infinite] rotate-90 w-[60px] h-[150px]  bottom-0 right-0">
            <img src={blueImg} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
          <div className="absolute animate-[bounce_2s_ease-in-out_infinite] rotate-90 w-[110px] h-[110px] ml-[140px] mb-[20px]  bottom-0  ">
            <img src={Franveer} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
           
        </div>
      </div>
      <div className="flex flex-col w-full mb-10 md:h-[100%] h-[50%] m-auto justify-center md:justify-between   ">
        <div className="flex item-end w-auto sm:flex-row sm:w-[100%]    flex-col lg:pl-[400px] md:pl-[200px]">
         
         <Link to='#about'>
          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white">
            ABOUT US
          </p>
          </Link>
          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            OUR SERVICES
          </p>
          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            TEAM
          </p>
          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            CASE STUDY
          </p>
          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            PRESS RELEASE
          </p>
          <p className="px-3 font-[DM Sans] cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            CONTACT US
          </p>
        </div>

        <div className="     text-white  w-full">
          <hr className="w-full" />
          <p  className="font-[DM Sans] text-white">Copyrights @2023 Brandlytical</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
