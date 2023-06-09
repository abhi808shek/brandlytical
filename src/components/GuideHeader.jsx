import React from 'react'
import styles from '../styles'

const GuideHeader = () => {
  return (
    <section id='guideheader' className={`flex flex-col sm:pt-20 md:pb-4 pt-10 text-center sm:px-32 px-6 relative pb-20`}>
        
        <h1 className='flex-1 font-bold lg:text-[64px] text-[34px]  font-spectral text-black pb-8'>
        Guide To Users
        </h1>

        <p className='flex-1 font-light md:text-[24px] text-[20px] font-poppins text-black'>
        THINK, PLAN, DO
        </p>

        <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[110px] h-[110px] top-20 right-6 bg-opacity-40 sm:block hidden`}></div>
        <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[70px] h-[70px] top-28 right-24 sm:block hidden`}></div>
        
        <div className='py-8'>
        </div>
        
        
        
    </section>
  )
}

export default GuideHeader