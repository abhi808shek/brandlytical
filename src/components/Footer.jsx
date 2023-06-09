import React from 'react'
import insa from '../assets/instagram.svg'

const Footer = () => {



  return (
    <section id='footer' className={`flex flex-col pt-56 sm:px-4 px-6 md:items-start items-center md:text-start text-center`}>


        <div className='flex sm:flex-row flex-col lg:pl-[400px] md:pl-[200px]'>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>ABOUT US</p>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>OUR SERVICES</p>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>TEAM</p>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>CASE STUDY</p>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>PRESS RELEASE</p>
        <p className='px-3 font-bold lg:text-[18px] sm:text-[14px] text-[18p] md:py-0 py-2 text-white'>CONTACT US</p>
        </div>
        
        <div className='flex flex-col items-start mt-40 pb-20'>
        <div>
        <p className='px-3 font-bold text-[22px]'>Socialize</p>
        </div>
        <div className='flex flex-row'>
        <img src={insa} className='w-[100px] h-[100px] px-4' /> 
        <img src={insa} className='w-[100px] h-[100px] px-4' />
        <img src={insa} className='w-[100px] h-[100px] px-4' />
        </div>

        </div>
        
        
        
        
        
        
    </section>
  )
}

export default Footer