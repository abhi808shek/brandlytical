import React, { useEffect } from 'react'
import styles from '../styles'
import tilted from '../assets/logo_tilted.svg'
import im4 from '../assets/bhuvam.svg'
import im3 from '../assets/rm.svg'
import im2 from '../assets/newImg3.svg'
import im1 from '../assets/newimg1.png'
import facebook from '../assets/Facebook.png'
import youtube from '../assets/Youtube.png'
import like from '../assets/like.png'
import snapchat from '../assets/Snapchat.png'
import twitter from '../assets/Twitter.png'
import insta from '../assets/Instagram.png'
import wp from '../assets/Whatsapp.png'
import heart1 from '../assets/heart1.svg'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id='home' className={`flex flex-col sm:py-20 py-6 text-center justify-center min-h-[800px] relative`}>

        <div className='md:px-44 sm:px-16 px-6'>
        <h1 className='flex-1   lg:text-[54px] sm:text-[34px] text-[25px] font-[Cormorant Garamond] text-black '>
            Who We Are?
        </h1>

        <p className='  font-[dm-sans] sm:text-[20px] mt-8 sm:mt-10 text-[10px]  '>
        At <span className='text-red-500'>BRANDLYTICAL MEDIA </span> , we are passionate about connecting brands with influential creators to drive revenue and achieve impactful results. Here you can get the right influencers with the right results for your campaigns. We understand the power of influencer marketing in today's digital landscape, and our platform is designed to help businesses harness that power to maximize their revenue potential.        </p>
        </div>
        
        <div className='flex items-center flex-col'>
          <div className='flex items-center sm:flex-row flex-col'>
          <img  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" src={im4} className=' hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) cursor-pointer hover:h-[210px] hover:w-[210px] md:absolute md:right-12 md:bottom-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={insta} className=' animate-[bounce_5s_ease-in-out_infinite] md:absolute md:right-[55px] md:bottom-[220px] w-[70px] h-[70px]' />
          <img src={wp} className='  animate-[bounce_3s_ease-in-out_infinite] md:absolute md:right-[110px] md:bottom-[220px] w-[35px] h-[35px]' />
          <img data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" src={im3} className= '  hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) cursor-pointer hover:h-[210px] hover:w-[210px] md:absolute md:right-72 md:bottom-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={snapchat} className=' animate-[bounce_3s_ease-in-out_infinite] md:absolute md:right-[470px] md:bottom-[50px] w-[60px] h-[60px]' />
          <img src={twitter} className=' animate-[bounce_4s_ease-in-out_infinite] odd:md:absolute md:right-[450px] md:bottom-[30px] w-[40px] h-[40px]' />
          </div>

          <div className='flex items-center sm:flex-row flex-col'>
          <img   data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" src={im1} className='  hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) cursor-pointer hover:h-[210px] hover:w-[210px]  md:absolute md:left-14 md:top-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={youtube} className=' animate-[bounce_3s_ease-in-out_infinite] md:absolute md:left-14 md:top-52 w-[70px] h-[70px]' />
          <img src={like} className=' animate-[bounce_4s_ease-in-out_infinite] md:absolute md:left-[95px] md:top-[245px] w-[60px] h-[60px]' />
          <img data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" src={im2} className='  hover:scale-95   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) cursor-pointer hover:h-[210px] hover:w-[210px] md:absolute md:left-72 md:top-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={facebook} className=' animate-[bounce_3s_ease-in-out_infinite] md:absolute md:left-[300px] md:top-[200px] w-[50px] h-[50px]' />
          <img src={heart1} className=' rotate-30 animate-[ping_7s_ease-in-out_infinite] md:absolute md:right-[100px] md:top-[100px] w-[50px] h-[50px]' />
          <img src={heart1} className=' animate-[ping_5s_ease-in-out_infinite] md:absolute md:right-[140px] md:top-[140px] w-[40px] h-[40px]' />
          <img src={heart1} className=' animate-[ping_3s_ease-in-out_infinite] md:absolute md:right-[90px] md:top-[150px] w-[30px] h-[30px]' />

          </div>
        </div>
        
    </section>
  )
}

export default About