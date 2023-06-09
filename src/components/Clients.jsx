import React from 'react'
import barbie from '../assets/barbie.svg'
import bobbi from '../assets/bobbi.svg'
import baskin from '../assets/baskin.svg'
import ashok from '../assets/ashok.svg'
import castrol from '../assets/castrol.svg'
import crompton from '../assets/crompton.svg'
import fevicol from '../assets/fevicol.svg'
import uni from '../assets/uno.svg'
import mac from '../assets/mac.svg'


const Clients = () => {
  return (
    <div>
    <section id='guideheader' className={`flex flex-col text-center bg-clients-bg items-center justify-center px-10`}>
        
        <h1 className='flex-1 font-bold sm:text-[64px] text-[40px] font-spectral text-black pt-10'>
        Our Clients
        </h1>
        
        
        
        <div className='flex flex-col md:py-20 py-8 px-10 items-center'>
        <div className='flex md:flex-row flex-col items-center justify-center md:px-10 max-w-[450px]'>
        <img src={barbie} alt='a' className='md:w-[60%] md:h-[60%] w-[40%] h-[40%] sm:mr-8 mt-8 sm:mt-8 mr-0'/> 
        <img src={bobbi} alt='a' className='md:w-[60%] md:h-[60%] w-[40%] h-[40%] sm:mr-8 mt-8 sm:mt-4   mr-0'/>
        <img src={baskin} alt='a' className='md:w-[60%] md:h-[60%] w-[40%] h-[40%] sm:mr-8 mt-8 sm:mt-4 mr-0'/>
        <img src={ashok} alt='a' className='md:w-[60%] md:h-[60%] w-[40%] h-[40%] sm:mr-8 mt-8 sm:mt-4 mr-0'/>
        </div>
        
        
        </div>
        
        
    </section>

    </div>
  )
}

export default Clients