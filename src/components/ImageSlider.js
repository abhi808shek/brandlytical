import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const ImageSlider = () => {

    // const responsive = {
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1400 },
    //       items: 2,
    //       partialVisibilityGutter: 200 // this is needed to tell the amount of px that should be visible.
    //     },
    //     tablet: {
    //       breakpoint: { max: 1400, min: 650 },
    //       items: 2,
    //       partialVisibilityGutter: 250 // this is needed to tell the amount of px that should be visible.
    //     },
    //     mobile: {
    //       breakpoint: { max: 650, min: 0 },
    //       items: 1,
    //       partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    //     }
    //   }

  return (
    <div className='flex sm:items-start items-center w-screen'>
        {/* <Carousel
        partialVisible={true}
        responsive={responsive}
        keyBoardControl={true}
        showDots={true}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        itemClass="my-40 lg:pl-40 md:pl-28 sm:pl-20 xs:pl-11 pl-0 flex sm:items-start items-center"
        dotListClass='text-purple-200'
        >

        <div className={`flex flex-col bg-slider-img1 lg:w-[400px] lg:h-[500px] sm:w-[550px] sm:h-[400px] w-[400px] h-[500px] relative items-center px-32 text-center`}>
        <p className='absolute bottom-40 font-bold text-[32px]'>Influencer Marketing</p>
        <p className='absolute bottom-24 px-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
        </div>

        <div className={`flex flex-col bg-slider-img1 lg:w-[800px] lg:h-[500px] sm:w-[550px] sm:h-[400px] w-[400px] h-[500px] relative items-center px-32 text-center`}>
        <p className='absolute bottom-40 font-bold text-[32px]'>Influencer Marketing</p>
        <p className='absolute bottom-24 px-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
        </div>


        <div className={`flex flex-col bg-slider-img1 lg:w-[800px] lg:h-[500px] sm:w-[550px] sm:h-[400px] w-[400px] h-[500px] relative items-center px-32 text-center`}>
        <p className='absolute bottom-40 font-bold text-[32px]'>Influencer Marketing</p>
        <p className='absolute bottom-24 px-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
        </div>


        
        </Carousel> */}
    </div>
  )
}

export default ImageSlider