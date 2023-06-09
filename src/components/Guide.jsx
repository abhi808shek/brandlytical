import React from 'react'
import im1 from '../assets/guideim1.svg'
import im2 from '../assets/guideim2.svg'
import im3 from '../assets/guideim3.svg'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/Twitter.png'
import snap from '../assets/Snapchat.png'
import insta from '../assets/Instagram.png'

const Guide = () => {
  return (
    <section className={`flex sm:flex-row flex-col text-center items-center w-full sm:pb-40 pb-16`}>

        <div className='w-[200px] h-[220px] md:w-[500px] md:h-[730px] sm:w-[400px]  sm:mx-8 mx-0 sm:my-0 mb-40 flex flex-col items-center justify-center relative py-20'>
            <img src={im1} className='w-[800px] h-[800px]' />  
            <p className='font-poppins font-bold md:text-[24px] sm:text-[18px] text-[14px] absolute md:bottom-80 bottom-20 px-4'>SIGN UP/ LOGIN TO START</p>
            <img src={facebook} className='w-[90px] h-[90px] absolute lg:bottom-11 bottom-32 md:left-12 left-5 md:block hidden' /> 
            <img src={twitter} className='w-[70px] h-[70px] absolute lg:bottom-7 bottom-28 md:left-0 left-3 md:block hidden' /> 
            <img src={snap} className='w-[40px] h-[40px] absolute lg:bottom-0 bottom-20 md:left-16 left-5 md:block hidden' /> 
        </div>

        <div className='w-[200px] h-[220px] md:w-[500px] md:h-[730px] sm:w-[440px]  sm:mx-8 mx-0 sm:my-0 mb-40 flex flex-col items-center justify-center relative py-20'>
        <img src={im2} className='w-[800px] h-[800px]' />  
        <p className='font-poppins font-bold md:text-[24px] sm:text-[16px] text-[12px] absolute md:bottom-60 bottom-6 px-4'>upload your brief with specification
        Depending on your brief, select the best creators</p>
        </div>

        <div className=' w-[200px] h-[220px] md:w-[500px] md:h-[730px] sm:w-[440px]  sm:mx-8 mx-0 sm:my-0 mb-40 flex flex-col items-center justify-center relative py-20'>
        <img src={im3} className='w-[800px] h-[800px]' />  
        <p className='font-poppins font-bold md:text-[24px] sm:text-[18px] text-[14px] absolute md:bottom-80 bottom-20 px-4'>SELECT AND SUBMIT</p>
        <img src={twitter} className='w-[70px] h-[70px] absolute lg:top-7 lg:right-7 top-14 right-3  md:block hidden' /> 
        <img src={insta} className='w-[100px] h-[100px] absolute lg:top-20 lg:right-0 top-28 right-0 md:block hidden' /> 
        </div>
    </section>
  )
}

export default Guide