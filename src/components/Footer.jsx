import React from "react";
import insa from "../assets/instagram.svg";
import fw from "../assets/fw22.svg";
import fi from "../assets/fi22.svg";
import yellowImg from "../assets/Rectangle311.png";
import blueImg from "../assets/Rectangle312.svg";
import yellowImg2 from "../assets/yellow2img.png";
import blueImg2 from "../assets/blue2img.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Fshweta from "../assets/Fshweta.png";
import Fimg21 from "../assets/Fimg21.png";
import Franveer from "../assets/Franveer.png";
import styles from "../styles";

const Footer = () => {

const phoneNumber = '8800880730'; // Replace with the desired WhatsApp number

// Prefix the phone number with the country code, e.g., '91' for India
const countryCode = '91';
const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}`;

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <section
      id="footer"
      className={`flex md:h-[100vh] xs:h-auto ss:h-auto sm:h-[120vh] w-full relative mt-[200px]  flex-col bg-[#7A1848] pt-56 sm:px-4 px-6 md:items-start items-center md:text-start text-center`}
    >
      <div className="m-auto w-[80%] justify-between  right-0 left-0 flex bg-[#FFC9E4] flex-wrap   absolute rounded-xl mt-[-150px] top-0">
        <div className="flex flex-col items-start md:w-[30%] w-[90%] md:m-[70px] m-[20px]    ">
          <div>
            <p className="px-3 font-bold font-[DM Sans] text-black text-[22px]">
              Socialize
            </p>
          </div>
          <div className="flex flex-row">
            <div className="p-4  m-[10px]   cursor-pointer   border-2 border-[#7A1848]  border-dotted  rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <Link to="https://www.instagram.com/brandlytical/">
                <img src={insa} className="w-[100%]   h-[100]%" />
              </Link>
            </div>
            <div className="p-4  m-[10px]   cursor-pointer   border-2 border-[#7A1848]  border-dotted  rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <Link to="https://www.instagram.com/brandlytical_studio/?hl=en">
                <img src={insa} className="w-[100%]   h-[100]%" />
                {/* <p className="text-center font-bold mr-[10px] mt-[3px]">Studio</p> */}
              </Link>
            </div>
            <div className="p-4  m-[10px]    cursor-pointer   border-2 border-[#7A1848]  border-dotted  rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <Link to={whatsappLink}>
              <img src={fw} className="w-[100%]    cursor-pointer h-[100]%" />
              </Link>
            </div>
            <div className="p-4  m-[10px]      cursor-pointer border-2 border-[#7A1848]  border-dotted rounded-full w-[70px] h-[70px] bg-white">
              {" "}
              <Link to="https://www.facebook.com/brandlytical/">
                <img
                  src={fi}
                  className="w-[100%]    cursor-pointer   h-[100]%"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" h-[300px] w-[100%]  md:w-[30%]">
          <div className="absolute">
            <img src={Fimg21} alt="" />
          </div>

          <div className="absolute w-[60px] h-[100px]   ml-[140px]">
            <img src={yellowImg} className="h-[100%]  m-auto w-[100%]" alt="" />
          </div>
          <div className="absolute w-[120px] h-[100px] mt-[20px]  right-0">
            <img src={Fshweta} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
          <div className="absolute w-[100px] h-[70px] mt-[130px]   ">
            <img src={blueImg2} className="  h-[100%] m-auto w-[100%]" alt="" />
          </div>
          <div className="absolute w-[60px] h-[60px] mt-[210px] ">
            <img
              src={yellowImg2}
              className="  h-[100%] m-auto w-[100%]"
              alt=""
            />
          </div>
          <div className="absolute   rotate-90 w-[60px] h-[150px]  bottom-0 right-0">
            <img src={blueImg} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
          <div className="absolute   rotate-90 w-[110px] h-[110px] ml-[140px] mb-[20px]  bottom-0  ">
            <img src={Franveer} className="h-[100%] m-auto w-[100%]" alt="" />
          </div>
        </div>
      </div>
      {/* <div
        className={`${styles.flexCenter} absolute animate-[bounce_3s_ease-in-out_infinite] bg-[#5D35FD] rounded-full w-[50px] h-[50px] md:bottom-60 bottom-[60px] left-[40%] md:left-[35%] bg-opacity-40`}
      ></div>
      <div
        className={`${styles.flexCenter} absolute animate-[bounce_4s_ease-in-out_infinite] bg-[#5D35FD] rounded-full w-[40px] h-[40px] md:bottom-60 bottom-[60px] md:left-[35%] left-[40%]`}
      ></div>
      <div
        className={`${styles.flexCenter} absolute animate-[bounce_3s_ease-in-out_infinite] bg-[#D10269] first-letter:  rounded-full w-[30px] h-[30px]  md:bottom-14 md:left-[35%] left-[20px] bottom-[20px] bg-opacity-60`}
      ></div>
      <div
        className={`${styles.flexCenter} absolute animate-[bounce_4s_ease-in-out_infinite] bg-[#D10269] rounded-full w-[20px] h-[20px]  md:bottom-20 bottom-[20px] left-[20px] md:left-[35%] ml-1`}
      ></div> */}
      <div
        className={`flex-1 ss:${styles.flexStart} flex-col xl:px-0 sm:pl-10  md:text-start text-center md:items-start items-center min-w-[900px]`}
      ></div>
      <div className="flex flex-col w-full mb-10 md:h-[100%] h-[50%] m-auto justify-center md:justify-between   ">
        <div className="flex item-end w-auto sm:flex-row sm:w-[100%]    flex-col lg:pl-[400px] md:pl-[200px]">
          <a href="#about">
            <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white">
              ABOUT US
            </p>
          </a>

          <a href="#services">
            <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
              OUR SERVICES
            </p>
          </a>

          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            TEAM
          </p>
          <a href="#casestudy">
            <p className="px-3 cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
              CASE STUDY
            </p>
          </a>

          <p className="px-3 cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            PRESS RELEASE
          </p>
          <p className="px-3 font-[DM Sans] cursor-pointer hover:text-red-500 hover:underline  font-bold lg:text-[16px] sm:text-[14px] text-[16p] md:py-0 py-2 text-white">
            CONTACT US
          </p>
        </div>
        <div className=" p-[2%]  flex  md:flex-row flex-col justify-center md:gap-10 gap-2 item-start md:w-[100%] m-auto w-full ">
          <div className="  ">
            <p className="text-white font-[DM Sans] text-start  font-bold  text-[20px]">
              {" "}
              Phone:
            </p>
            <p className="text-white font-[DM Sans] text-start  text-[18px]">
              +918800880730
            </p>
          </div>
          <div>
            <p className="text-white font-[DM Sans] text-start  font-bold  text-[20px]">
              Send Email:
            </p>
            <p className="text-white font-[DM Sans] text-start cursor-pointer  text-[18px]">
              contact@brandlytical.in
            </p>
          </div>
          <div>
            <p className="text-white font-[DM Sans] text-start  font-bold  text-[20px]">
              Address:
            </p>
            <p className="text-white font-semi text-start  font-[DM Sans] text-[18px]">
              2nd floor, plot no. 264, Udyog Vihar Phase 1, Udyog Vihar, Sector
              20, Gurugram, Haryana 122016.
            </p>
          </div>
        </div>
        <div className="     text-white  w-full">
          <hr className="w-full" />
          <p className="font-[DM Sans] text-white">
            Copyrights @2023 Brandlytical
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
