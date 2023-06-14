import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "../assets/slider1.svg";
import "../Styles/Home.css";

const NewImageSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };
  const influncerList = [
    {
      image: `bg-slider-img1`,
      title: "  Influencer Marketing",
      description:
        "Our influencer marketing services utilise influencers' creativity and social acumen to offer your company a human voice. We pair you up with influencers who have substantial audiences in your target market and who provide interesting content that appeals to their readers.",
    },
    {
      image: "bg-slider-img3",
      title: "Podcast Management",
      description:
        "Our team provides comprehensive support and guidance throughout the entire process to ensure a successful podcast or talk show debut. Benefit from our extensive experience and professional studio setup as we help you bring your podcasting vision to life."
    },
    {
      image: "bg-slider-img2",
      title: "Song Integration",
      description:
        "Song Integration-Integrate Your Brand into a Song that Will Capture Hearts",
    },
    {
      image: "bg-slider-img4",
      title: "Sponsorship Deals",
      description:
        "Promote Your Brand in event of your choice with Sponsorship deals"
    },
     
  ];

  const itemStyle = {
    margin: "auto",
  };

  return (
    <div  className="  w-[100%]   md:w-[80%]  m-auto">
      <Carousel
        responsive={responsive}
        partialVisible={true}
        keyBoardControl={true}
        showDots={true}
        autoPlay={true} 
      autoPlaySpeed={3000}
      arrows={false}
        infinite={true}
        itemClass="carousel-item"
        dotListClass="text-purple-200"
      >
        {influncerList?.map((elem, index) => (
          <div key={index} className="carousel-item-content pb-10 cursor-pointer" style={itemStyle}>
            <div
              className={`flex flex-col 
                 rounded-md ${elem?.image} m-auto lg:w-[510px] lg:h-[400px] sm:w-[300px] sm:h-[450px] w-[300px] h-[500px] relative items-center   px-10 text-center   `}
            >
            {/* <div
              className={`flex flex-col rounded-md ${elem?.image} m-auto lg:w-[510px] lg:h-[400px] sm:w-[500px] sm:h-[400px] w-[400px] h-[500px] relative items-center md:px-24 px-10 text-center border-2 border-red-500`}
            > */}
                <img className={`absolute   lg:top-20 top-40 bottom-0 left-0 right-0 sm:top-40   w-full h-full`} src={Slider} />
              <p
                className="font-bold font-[DM Sans'] md:text-[30px] text-white z-50  text-[25px]"
                style={{ marginTop: "55%", marginBottom: "10px" }}
              >
                {elem?.title}
                
              </p>
              <p
                className="text-white font-[DM Sans] bg-text  w-full  text-[14px] font-bold     z-50"
                
             >
                {elem?.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewImageSlider;
