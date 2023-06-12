import React from "react";
import styles from "../styles";

const Do = () => {
  return (
    <section
      id="about2"
      className={`flex  w-[80%] m-auto    flex-col sm:pt-20 sm:pb-4 pt-6 pb-4 sm:text-start text-center    pl-5  md:items-start items-center`}
    >
      <div className="flex relative w-full md:items-start items-center">
        <div className="md:items-start items-start  ">
          <h1
            className="flex-1 text-start font-normal md:text-[28px] text-[25px] font-[DM Sans] text-black"
          >
            WHAT WE CAN DO FOR YOU?
          </h1>
          <h1 className="flex-1 text-left   md:text-[50px] text-[40px] font-[Cormorant Garamond] text-black">
            Services We Can <br className="sm:block hidden" />
            Help You With
          </h1>
        </div>

        <div
          className={`${styles.flexCenter} animate-[ping_6s_ease-in-out_infinite] absolute bg-[#D10269] rounded-full w-[70px] h-[70px]  md:bottom-24 bottom-16 md:left-[700px] left-[500px] sm:block hidden bg-opacity-60`}
        ></div>
        <div
          className={`${styles.flexCenter} animate-[ping_4s_ease-in-out_infinite] absolute bg-[#D10269] rounded-full w-[45px] h-[45px]  md:bottom-20 bottom-12 md:left-[680px] left-[480px] sm:block hidden ml-1`}
        ></div>
      </div>
    </section>
  );
};

export default Do;
