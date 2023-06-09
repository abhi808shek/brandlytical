import React from 'react'
import styles from '../styles'
import name from '../assets/logo_with_name.svg'
import logo from '../assets/logo_tilted.svg'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} items-center w-full relative`}>
      <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[50px] h-[50px] ml-64 top-0 bg-opacity-40 sm:block hidden`}></div>
      <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[40px] h-[40px] ml-60 top-7 sm:block hidden`}></div>
      <div className={`${styles.flexCenter} absolute bg-[#D10269] rounded-full w-[40px] h-[40px]  bottom-14 left-[35%] sm:block hidden bg-opacity-60`}></div>
      <div className={`${styles.flexCenter} absolute bg-[#D10269] rounded-full w-[30px] h-[30px]  bottom-20 left-[35%] sm:block hidden ml-1`}></div>
      <div className={`flex-1 ss:${styles.flexStart} flex-col xl:px-0 sm:pl-10  md:text-start text-center md:items-start items-center min-w-[900px]`}>
        <div className='flex flex-col justify-between w-full md:items-start items-center'>
          <h1 className='flex-1 font-medium lg:text-[44px] sm:text-[38px] text-[34px] sm:leading-[80px] font-spectral text-black md:ml-24'>
          Collabo<span className='bg-[#FFD397] rounded-full'>rate to 
          Influence:</span> <br className='sm:hidden block'/>  
          Unleashing <br className='sm:block hidden'/> 
          the Power of <br className='sm:hidden block'/> 
          Partnership with our <br className='sm:block hidden'/> <br className='sm:hidden block'/>
          <span className='bg-[#5D35FD] rounded-full bg-opacity-40'>
          Influencer Mar</span>keting <br className='sm:block hidden'/> 
          </h1>
          <button className='text-white font-normal text-[16px] bg-[#D10269] p-3 px-8 mt-14 md:ml-24 w-34 rounded-md'>
          Contact us
          </button>
        </div>
      </div>

      <div className={`flex-1 md:my-0 my-10 md:block hidden`}>
        <img src={logo} className=":w-[300px] h-[310px]"/>
      </div>

    </section>
  )
}

export default Hero

