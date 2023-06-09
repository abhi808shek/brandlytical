import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles'
import SignupAsComponent from '../components/SignupAsComponent'
import signupas_top from '../assets/signupas_top.png'
import signupas_bottom2 from '../assets/signupas_bottom2.png'
import signupas_bottom from '../assets/signupas_bottom.png'
import brandlogo from '../assets/logo.svg'
import tilted from '../assets/logo_tilted_light.svg'
import CampaignTypeComponent from '../components/CampaignTypeComponent'
import cmptype1 from '../assets/cmptype1.png'
import cmptype2 from '../assets/cmptype2.png'
import cmptype3 from '../assets/cmptype3.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { SelectCampaignTypeCard } from '../components/SelectCampaignTypeCard'

const SelectCampaignType = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // const userId = location.state.userId;


  return (
    <div className='bg-white w-full'>

        <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
          <div className={` flex flex-col justify-center  text-center items-center`}>
            <h1 className='text-[#7A1848] font-bold font-spectral italic md:text-3xl text-xl'>SELECT YOUR CAMPAIGN TYPE</h1>
          </div>
        </div>

          <section className={`flex md:flex-row gap-x-2 flex-col text-center md:px-16 pt-20 sm:px-0 px-6 items-center w-full`}>
          
            <SelectCampaignTypeCard 
              image={cmptype1}
              label={'Influencer Marketing'}
              redirectlink={'/dashboard/campaigntype'}
            />

            <SelectCampaignTypeCard 
              image={cmptype2}
              label={'Sponsorship Deals'}
              redirectlink={'/dashboard/campaigntype'}
            />

            <SelectCampaignTypeCard 
              image={cmptype3}
              label={'Song Integration'}
              redirectlink={'/dashboard/campaigntype'}
            />

           </section>

    </div>
  )
}

export default SelectCampaignType