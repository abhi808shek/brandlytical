import React, { useEffect } from "react";
import redImg from "../assets/Rectangle311.png";
import yellowImg from "../assets/Rectangle312.svg";
import blueImg from "../assets/Rectangle313.svg";
import styles from "../styles";
import AOS from "aos";
import "aos/dist/aos.css";
const Cords = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className=" md:w-[80%] w-[95%]    m-auto mt-5 mb-5">
        {/* head section  */}
        <div>
          <h3 className="md:text-[3rem] text-start text-[2rem] md:text-center font-[cormorant-garamond]   mb-[20px]">
            What Makes Us Different
          </h3>
          <p className="text-[1.5rem]  font-normal text-start md:text-center font-[DM sans] text-black  mb-[40px]">
            Unleash the Influencer Marketing Revolution: <br />
            Dominate Your Industry with{" "}
            <span className="font-[Cormorant Garamond]  text-black  ">
              OUR UNPARELLED EXPERTISE
            </span>
          </p>
        </div>
        <div className=" md:flex   sm:grid-cols-2 xs:grid-cols-1 m-auto sm:grid   md:gap-4 gap-4">
          <div className="min-h-[400px] shadow-lg   w-[95%] md:w-[350px]    cursor-pointer   m-auto bg-[#fff8ee] relative">
            {/* <div className="flex absolute     top-0 left-0   "
           
             style={{
              // animation: 'LRfloatAnimation 3s ease-in-out infinite'
            }}>
              <img
                src={redImg}
                className="h-[60px] w-[50px] mx-1 z-0"
                alt="redImg"
              />
              <img src={blueImg} alt="yellow" className="h-[30px] w-[35px]" />
            </div> */}
            <img
              src={yellowImg}
              className="absolute   top-0 right-0 w-[60px] h-[50px] rotate-180"
              alt=""
              style={
                {
                  // animation: 'LRfloatAnimation 3s ease-in-out infinite'
                }
              }
            />
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
              className="mt-[86px] text-start ml-[20px] mb-[35px] text-[32px] Cormorant font-[600]  "
            >
              ROI Prediction Tool
            </h3>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
              className="text-[20px] leading-[31px] ml-[20px] text-start font_sanse"
            >
              We help you get the most out of your influencer marketing
              campaigns by predicting your ROI before you start.
            </p>
            {/* blue icon */}
            <div className="flex absolute  bottom-0 left-0 rotate-180">
              <img
                src={blueImg}
                className="h-[30px] w-[35px]  mx-1 rotate-90"
                alt="redImg"
              />
              <img src={redImg} alt="yellow" className="h-[60px] w-[50px]" />
            </div>
          </div>

          <div className="min-h-[400px] shadow-lg      cursor-pointer  w-[95%] md:w-[350px]  m-auto bg-[#fff8ee] relative">
            <div
              style={
                {
                  // animation: 'LRfloatAnimation 3s ease-in-out infinite'
                }
              }
              className="flex absolute   top-0 right-0 z-0"
            >
              <img
                src={blueImg}
                className="h-[30px] w-[35px] mx-1 rotate-90"
                alt="redImg"
              />
              <img src={redImg} alt="yellow" className="h-[60px] w-[50px]" />
            </div>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
              className="mt-[86px] text-start ml-[20px] mb-[35px] text-[32px] Cormorant font-[600] "
            >
              Start with Rs. 50,000 budget
            </h3>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
              className="text-[20px] leading-[31px] ml-[25px] text-start font_sanse"
            >
              We have resources for all types of budgets and audiences.
            </p>
            <img
              src={yellowImg}
              className="absolute   bottom-0 left-0 w-[60px] h-[50px]"
              alt=""
            />
          </div>

          <div className="min-h-[400px]  shadow-lg w-[95%]     cursor-pointer  md:w-[350px]  m-auto bg-[#fff8ee] relative">
            <div className="flex absolute  top-0 left-0 ">
              <img src={redImg} alt="yellow" className="h-[60px]   w-[50px]" />

              <img
                src={blueImg}
                className="h-[30px] w-[35px]  mx-1 "
                alt="redImg"
              />
            </div>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
              className="mt-[86px] text-start ml-[20px] mb-[35px] text-[32px] Cormorant font-[600] "
            >
              {" "}
              Influencer Powerhouse
            </h3>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
              className="text-[20px] leading-[31px] ml-[25px] text-start font_sanse"
            >
              We provide access to a network of over 1 million influencers in
              our database to help you find the perfect influencer.
            </p>
            <img
              src={yellowImg}
              className="absolute   bottom-0 right-0 w-[60px] h-[50px] rotate-180"
              alt=""
              style={
                {
                  // animation: 'LRfloatAnimation 3s ease-in-out infinite'
                }
              }
            />
          </div>

          <div className="min-h-[400px] w-[95%] shadow-lg      cursor-pointer  md:w-[350px]  m-auto bg-[#fff8ee] relative">
            <div className="flex absolute  bottom-0 right-0 rotate-180">
              <img
                src={blueImg}
                className="h-[30px] w-[35px] mx-1 rotate-90"
                alt="redImg"
              />
              <img src={redImg} alt="yellow" className="h-[60px] w-[50px]" />
            </div>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1200"
              className="mt-[86px] text-start ml-[20px] mb-[35px] text-[32px] Cormorant font-[600] "
            >
              24/7 <br /> support{" "}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
              className="text-[20px] leading-[31px] ml-[25px] text-start font_sanse"
            >
              We offer 24/7 support so that you can always get help with your
              influencer marketing campaign{" "}
            </p>
            <img
              src={yellowImg}
              className="absolute  top-0 left-0 w-[60px] h-[50px]"
              alt=""
              style={
                {
                  // animation: 'LRfloatAnimation 3s ease-in-out infinite'
                }
              }
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.flexCenter} absolute animate-[pulse_3s_ease-in-out_infinite] bg-[#5D35FD] rounded-full w-[50px] h-[50px] bottom-60 left-[35%] bg-opacity-40 sm:block hidden`}
      ></div>
      <div
        className={`${styles.flexCenter} absolute animate-[pulse_4s_ease-in-out_infinite] bg-[#5D35FD] rounded-full w-[40px] h-[40px] bottom-60 left-[35%] sm:block hidden`}
      ></div>
    </>
  );
};

export default Cords;
