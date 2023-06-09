import React from 'react'
import styles from '../styles'
import tilted from '../assets/logo_tilted.svg'
import im4 from '../assets/about_img4.svg'
import im3 from '../assets/about_img3.svg'
import im2 from '../assets/about_img2.svg'
import im1 from '../assets/about_img1.png'
import facebook from '../assets/Facebook.png'
import youtube from '../assets/Youtube.png'
import like from '../assets/like.png'
import snapchat from '../assets/Snapchat.png'
import twitter from '../assets/Twitter.png'
import insta from '../assets/Instagram.png'
import wp from '../assets/Whatsapp.png'

const About = () => {
  return (
    <section id='home' className={`flex flex-col sm:py-20 py-6 text-center justify-center min-h-[800px] relative`}>

        <div className='md:px-44 sm:px-16 px-6'>
        <h1 className='flex-1 font-semibold lg:text-[54px] sm:text-[34px] text-[25px] font-spectral text-black '>
            Who We Are?
        </h1>

        <p className='font-normal sm:text-[20px] mt-8 sm:mt-10 text-[15px] font-poppins'>
        Brandlytical, India's biggest and honest digital influencer and social media marketing company consists of skillful experts and creators. We are here to lighten up the load from your shoulders. We subsist to craft content, build connections, promote brand awareness and generate revenue for our clients.
        </p>
        </div>
        
        <div className='flex items-center flex-col'>
          <div className='flex items-center sm:flex-row flex-col'>
          <img src={im4} className='md:absolute md:right-12 md:bottom-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={insta} className='md:absolute md:right-[55px] md:bottom-[220px] w-[70px] h-[70px]' />
          <img src={wp} className='md:absolute md:right-[110px] md:bottom-[220px] w-[35px] h-[35px]' />
          <img src={im3} className='md:absolute md:right-72 md:bottom-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={snapchat} className='md:absolute md:right-[470px] md:bottom-[50px] w-[60px] h-[60px]' />
          <img src={twitter} className='md:absolute md:right-[450px] md:bottom-[30px] w-[40px] h-[40px]' />
          </div>

          <div className='flex items-center sm:flex-row flex-col'>
          <img src={im1} className='md:absolute md:left-14 md:top-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={youtube} className='md:absolute md:left-14 md:top-52 w-[70px] h-[70px]' />
          <img src={like} className='md:absolute md:left-[95px] md:top-[245px] w-[60px] h-[60px]' />
          <img src={im2} className='md:absolute md:left-72 md:top-8  md:w-[220px] md:h-[220px] w-[150px] h-[150px] md:mx-0 mx-8 md:mt-0 mt-16' />
          <img src={facebook} className='md:absolute md:left-[300px] md:top-[200px] w-[50px] h-[50px]' />
          </div>
        </div>
        
    </section>
  )
}

export default About