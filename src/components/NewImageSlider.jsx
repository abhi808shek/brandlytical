import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/imageslider1.svg";

const NewImageSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 1,
      partialVisibilityGutter: 500, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1400, min: 650 },
      items: 1,
      partialVisibilityGutter: 250, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
  };
  const influncerList = [
    {
      image: "bg-slider-img1",
      title: "  Influencer Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      image: "bg-slider-img1",
      title: "  Influencer Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      image: "bg-slider-img1",
      title: "  Influencer Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      image: "bg-slider-img1",
      title: "  Influencer Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
    {
      image: "bg-slider-img1",
      title: "  Influencer Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    },
  ];
  return (
    <div>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        keyBoardControl={true}
        showDots={true}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        itemClass="mb-20 lg:pl-40 md:pl-28 sm:pl-20 xs:pl-11 pl-0 flex sm:items-start items-center "
        dotListClass="text-purple-200"
      >
        {influncerList?.map((elem) => (
          <div
            className={`flex flex-col rounded-md ${elem?.image} lg:w-[800px] lg:h-[500px] sm:w-[550px] sm:h-[400px] w-[400px] h-[500px] relative items-center md:px-24 px-10 text-center`}
          >
            <p className="lg:pt-80 pt-80 sm:pt-60 pb-2 font-bold md:text-[30px] text-[25px]">
             {elem?.title}
            </p>
            <p className="text-black text-opacity-70 font-bold">
            {elem?.description}
            </p>
          </div>
        ))}

      
      </Carousel>
    </div>
  );
};

export default NewImageSlider;
