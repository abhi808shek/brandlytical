import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image35 from "../assets/image35.png";
import image34 from "../assets/image34.png";
import image36 from "../assets/image36.png";
import image37 from "../assets/image37.png";
import image38 from "../assets/image38.png";
import image39 from "../assets/image39.png";
import image40 from "../assets/image40.png";
import image41 from "../assets/image41.png";
import image42 from "../assets/image42.png";
import image43 from "../assets/image43.png";
import image44 from "../assets/image44.png";
import image45 from "../assets/image45.png";
import image46 from "../assets/image46.png";
import image48 from "../assets/image48.png";
import image47 from "../assets/image47.png";
import image49 from "../assets/image49.png";
import image50 from "../assets/image50.png";
import image51 from "../assets/image51.png";
import image52 from "../assets/image52.png";
import image53 from "../assets/image53.png";
import image54 from "../assets/image54.png";
import image55 from "../assets/image55.png";
import image56 from "../assets/image56.png";
import image57 from "../assets/image57.png";
import image58 from "../assets/image58.png";
import image59 from "../assets/image59.png";
import image60 from "../assets/image60.png";
const FooterSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const influncerList = [
    {
      image: image34,
    },
    {
      image: image35,
    },
    {
      image: image36,
    },
    {
      image: image37,
    },
    {
      image: image38,
    },
    {
      image: image39,
    },
    {
      image: image40,
    },
    {
      image: image41,
    },
    {
      image: image42,
    },
    {
      image: image43,
    },
    {
      image: image44,
    },
    {
      image: image45,
    },
    {
      image: image46,
    },
    {
      image: image47,
    },
    {
      image: image48,
    },
    {
      image: image49,
    },
    {
      image: image50,
    },
    {
      image: image51,
    },
    {
      image: image52,
    },
    {
      image: image53,
    },
    {
      image: image54,
    },
    {
      image: image55,
    },
    {
      image: image56,
    },
    {
      image: image57,
    },
    {
      image: image58,
    },
    {
      image: image59,
    },
    {
      image: image60,
    } 
  ];

  const itemStyle = {
    margin: "auto",
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        // keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={0}
        infinite={true}
        itemClass="carousel-item"
        dotListClass="text-purple-200"
      >
        {influncerList?.map((elem, index) => (
          <div key={index} className="carousel-item-content" style={itemStyle}>
            <div
              className={`flex object-cover    flex-col rounded-md   m-auto  w-[100px]  h-[50px]    relative items-center   text-center`}
            >
              <img
                src={elem.image}
                alt=""
                style={{ width: "100%", height: "100%", margin: "auto" }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FooterSlider;
