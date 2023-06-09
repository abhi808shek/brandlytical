import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'
import SignupAsComponent from '../components/SignupAsComponent'
import signupas_top from '../assets/signupas_top.png'
import signupas_bottom2 from '../assets/signupas_bottom2.png'
import signupas_bottom from '../assets/signupas_bottom.png'
import brandlogo from '../assets/logo.svg'
import tilted from '../assets/logo_tilted_light.svg'

const SignupAs = () => {
  return (
    <div className='bg-white w-full overflow-hidden relative md:h-screen h-full'>
    <div className='z-5'>

      

      <div className='bg-[#FFD397] rounded-l-full absolute right-0 mt-36 sm:p-10 p-0 md:px-36 sm:px-20 px-0'></div>
      <div className='bg-[#5D35FD] rounded-l-full rounded-b-full absolute right-0 top-0 sm:p-10 p-0 sm:py-16 py-0'></div>
      <div className='absolute top-0 right-24 sm:visible invisible'><img src={signupas_top}></img></div>
      <div className='absolute top-12 right-[500px] '><img src={tilted} className='md:w-32 w-0'></img></div>


      <div className='bg-[#FFD397] rounded-r-full absolute left-0 bottom-0 p-10 px-14 sm:visible invisible'></div>
      <div className='absolute bottom-0 left-32 sm:visible invisible'><img src={signupas_bottom2} className='w-24'></img></div>
      <div className='absolute bottom-24 left-0 sm:visible invisible'><img src={signupas_bottom} className='w-24'></img></div>
      </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} z-10 `}>
          <div className={`${styles.boxWidth} flex flex-col justify-center md:mt-[100px] mt-[50px] items-center`}>
            <div className='md:absolute top-10 left-20'><img src={brandlogo}></img></div>
            <h1 className='text-black font-bold md:text-[38px] text-[30px] '>SIGN UP AS</h1>
            {/* <img src={tilted} className='w-32 md:w-0'></img> */}
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth} flex justify-center`}>
          <section className={`flex md:flex-row flex-col sm:py-20 py-6 text-center md:px-32 sm:px-0 px-6 items-center w-full`}>
            <SignupAsComponent text={"AGENCY"} link={'signupasagency'}/>
            <SignupAsComponent text={"BRAND"} link={'signupasbrand'}/>
            <SignupAsComponent text={"BRANDLYTICAL TEAM"} link={'signupasteam'}/>
           </section>
          </div>
        </div>

    </div>
  )
}

export default SignupAs