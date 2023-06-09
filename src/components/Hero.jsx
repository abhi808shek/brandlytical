import React, { useEffect,useRef  } from "react";
import styles from "../styles";
import name from "../assets/logo_with_name.svg";
import logo from "../assets/logo_tilted.svg";
import B2 from "../assets/B2.png";
// import { init } from "ityped";
import "../Styles/Hero.css"
import "../Styles/Home.css";
const Hero = () => {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 2000,
  //     backSpeed: 70,
  //     strings: ["to our revenue- driven"],
  //   });
  // }, []);
  return (
    <section
      id="home"
      className={`flex md:h-[100vh] md:flex-row flex-col bg-[url('/src/assets/home1.png')] bg-center bg-cover ${styles.paddingY} items-center w-full relative`}
    >
      <div
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
      ></div>
      <div
        className={`flex-1 ss:${styles.flexStart} flex-col xl:px-0 sm:pl-10  md:text-start text-center md:items-start items-center min-w-[900px]`}
      >
        <div className="flex flex-col justify-between w-full md:items-start items-center">
          <p   className=" text-black font-normal text-[64px]   font-[cormorant-garamond] md:text-6xl text-2xl font-boldleading-tight tracking-normal text-left">
            Welcome
            <span   className="bg-[#FFD397]   ml-[10px] rounded-full">
               to our revenue- dr
            </span> 
            <span>iven</span>
            </p>
            <br className="sm:hidden block" />
            <p className=" text-black font-normal mt-[20px] text-[64px]  font-[cormorant-garamond] md:text-6xl text-2xl font-boldleading-tight tracking-normal text-left">
            Influencer marketing plateform!
            </p>
            
            <br className="sm:block hidden" />
          
          <div className="ml-8  md:ml-2 w-[100vw] flex flex-col items-start">
          <p className="mt-[27px] md:text-[32px] sm:text-[20px] flex justify-center md:item-center items-start     marker: font-dm-sans font-normal leading-[190%] text-black ">
            Assess{" "}
            <span className=" px-2 bg-purple-400 bg-opacity-40 rounded-full transform -rotate-x">
              {" "}
              your revenue potential
            </span>
          </p>
          <p className="  marker: font-dm-sans font-normal md:text-[32px] sm:text-[20px] leading-[190%] text-black">
            {" "}
            before committing funds
          </p>
          </div>
          
          <div className="p-[10px] hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[210px] ml-[15px] cursor-pointer  text-center w-[220px] mt-[30px]  bg-[#7A1848] rounded-md   text-white "  >Contact us</div>

          {/* <button className="custom-btn btn-15 border-2    "> Contact us</button> */}
        </div>
      </div>

      <div className={`md:relative absolute right-[4px] bottom-[30px] flex-1 md:my-0 my-10 md:block`}>
        <img
          src={B2}
          className="  md:w-[300px] md:h-[310px] w-[100px]"
          style={{
            animation: 'floatAnimation 4s ease-in-out infinite'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
