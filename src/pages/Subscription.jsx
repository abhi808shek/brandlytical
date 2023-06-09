import React, { useEffect, useState } from 'react'
import SubscriptionComponent from '../components/SubscriptionComponent'
import Navbar from '../components/Navbar'
import styles from '../styles'
import signupas_top from '../assets/signupas_top.png'
import signupas_bottom2 from '../assets/signupas_bottom2.png'
import signupas_bottom from '../assets/signupas_bottom.png'
import brandlogo from '../assets/logo.svg'
import tilted from '../assets/logo_tilted_light.svg'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { supabase } from '../utils/supaBase'

const Subscription = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  

  const [profile, setProfile] = useState()
  const [error, setError] = useState()

  useEffect(() => {

    async function fetchProfile() {
      const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
      
      if (error) {
          setError('Could not fetch data')
          setProfile(null)
      } else {
        setProfile(data)
        if(data[0].verified) {
          navigate('/dashboard', {
            state: {
              userId: userId,
            }
          })
        }
      }
    }

    fetchProfile();
  }, [userId])



  return (
    <>
      {profile && ( <>
            {
              !profile[0].verified &&
              <div className='bg-white w-full overflow-hidden relative '>
    <div className='z-5'>

      

      <div className='bg-[#FFD397] rounded-l-full absolute right-0 mt-36 sm:p-10 p-0 md:px-36 sm:px-20 px-0 '></div>
      <div className='bg-[#5D35FD] rounded-l-full rounded-b-full absolute right-0 top-0 sm:p-10 p-0 sm:py-16 py-0'></div>
      <div className='absolute top-0 right-24 sm:visible invisible lg:opacity-100 opacity-40'><img src={signupas_top}></img></div>
      <div className='absolute top-12 right-[500px] '><img src={tilted} className='md:w-32 w-0'></img></div>


      <div className='bg-[#FFD397] rounded-r-full absolute left-0 bottom-0 p-10 px-14 sm:visible invisible'></div>
      <div className='absolute bottom-0 left-32 sm:visible invisible'><img src={signupas_bottom2} className='w-24'></img></div>
      <div className='absolute bottom-24 left-0 sm:visible invisible'><img src={signupas_bottom} className='w-24'></img></div>
      </div>

        <div className={`z-50`}>
          <div className={` flex flex-col justify-center md:mt-[100px] mt-[20px] items-center text-center`}>
            <div className='md:absolute top-10 left-20'><img src={brandlogo}></img></div>
            <h1 className='text-black font-bold md:text-[38px] text-[30px] '>CHOOSE YOUR SUBSCRIPTION PLAN</h1>
            {/* <img src={tilted} className='w-32 md:w-0'></img> */}
          </div>
        </div>

        <div className={` `}>
          <div className={`${styles.boxWidth} flex justify-center`}>
          <section className={`flex lg:flex-row flex-col py-6 text-center md:px-32 sm:px-0 px-6 items-center w-full`}>
            
            <SubscriptionComponent 
            title='#01 STANDARD' 
            price='FREE' 
            f1='1 Login without team sharing'
            f2='1 Active campaigns'
            f3='5 Influencers database visibility per campaign'
            />
            <SubscriptionComponent 
            title='#01 STANDARD' 
            price='1999+GST' 
            f1='1 Login without team sharing'
            f2='2 Active campaigns'
            f3='1 Channel  (social media platform)'
            f4='10 Influencers database visibility per campaign'
            f5='Validity 1 month'
            />
            

            
            <SubscriptionComponent 
            title='#02 PRO' 
            price='3999+GST' 
            f1='Team account sharing with 2 team members'
            f2='4 Active campaigns'
            f3='2 Channel  (social media platform)'
            f4='50 Influencers database visibility per campaign'
            f5='Validity 3 month'
            />
            <SubscriptionComponent 
            title='#03 PREMIUM' 
            price='3999+GST' 
            f1='Team account sharing with 6 team members'
            f2='7 Active campaigns'
            f3='All Channel  (social media platform)'
            f4='Unlimited Influencers database visibility per campaign'
            f5='Validity 6 month'
            />
            
           </section>
          </div>
        </div>

    </div>
            }</>)
      }
    </>


  )
}

export default Subscription