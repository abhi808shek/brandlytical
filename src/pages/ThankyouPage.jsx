import React from 'react'
import SubscriptionComponent from '../components/SubscriptionComponent'
import Navbar from '../components/Navbar'
import styles from '../styles'
import signupas_top from '../assets/signupas_top.png'
import signupas_bottom2 from '../assets/signupas_bottom2.png'
import signupas_bottom from '../assets/signupas_bottom.png'
import brandlogo from '../assets/logo.svg'
import tilted from '../assets/logo_tilted_light.svg'

const ThankyouPage = () => {
  return (
    <div className='bg-white w-full h-screen overflow-hidden relative '>
    <div className='z-5'>

      

      <div className='bg-[#FFD397] rounded-l-full absolute right-0 mt-36 sm:p-10 p-0 md:px-36 sm:px-20 px-0 '></div>
      <div className='bg-[#5D35FD] rounded-l-full rounded-b-full absolute right-0 top-0 sm:p-10 p-0 sm:py-16 py-0'></div>
      <div className='absolute top-0 right-24 sm:visible invisible lg:opacity-100 opacity-40'><img src={signupas_top}></img></div>


      <div className='bg-[#FFD397] rounded-r-full absolute left-0 bottom-0 p-10 px-14 sm:visible invisible'></div>
      <div className='absolute bottom-0 left-32 sm:visible invisible'><img src={signupas_bottom2} className='w-24'></img></div>
      <div className='absolute bottom-24 left-0 sm:visible invisible'><img src={signupas_bottom} className='w-24'></img></div>
      </div>

        <div className={`z-50 flex flex-col justify-center h-full`}>
          <div className={` flex flex-col w-full md:px-[400px] sm:px-[250px] px-[50px] justify-center md:mt-[100px] mt-[20px] items-center text-center`}>
            <h1 className='text-black font-normal font-spectral italic md:text-[38px] text-[30px] pb-20'>THANK YOU</h1>

            <div className='font-poppins font-semibold mf:text-lg text-sm '>
            <p className='py-4'>
            for submitting your requirements. We have received your request and will review the information you have provided. Our
             team will carefully assess your needs and get back to you as soon as possible with the next steps.
             </p>

            <p className='py-4'>
            We appreciate your interest and look forward to the possibility of working with you.
            </p>

            <p className='py-4'>Best regards,</p>
            
            <p className='py-4'>Your Name</p>
            </div>
            
            
          </div>
        </div>

        

    </div>
  )
}

export default ThankyouPage