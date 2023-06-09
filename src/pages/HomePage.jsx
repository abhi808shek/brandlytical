import React from 'react'
import styles  from '../styles'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Do from '../components/Do'
import Services from '../components/Services'
import GuideHeader from '../components/GuideHeader'
import Guide from '../components/Guide'
import Clients from '../components/Clients'
import CampaignHeader from '../components/CampaignHeader'
import Campaigns from '../components/Campaigns'
import Nav from '../components/Nav'
import ImageSlider from '../components/ImageSlider'
import NewImageSlider from '../components/NewImageSlider'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className=' w-full overflow-hidden relative'>
    

        <div className={`bg-[url('/src/assets/heroimg.svg')]  ${styles.flexCenter} w-full`}>
          <div className={`${styles.boxWidth}`}>
            <Nav/>
            <div className='pt-28'><Hero/></div>
          </div>
        </div>

        <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`} id='about'>
            <About />
          </div>
        </div>

        

        <div className={` ${styles.paddingX} ${styles.flexStart} bg-white`}>
          <div className={`${styles.boxWidth}`}>
            <Do />
            
          </div>
        </div>

        <div id='services'>
        <NewImageSlider />
        </div>
        

        

        {/* <div className={`${styles.paddingX} ${styles.flexStart} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Services />
          </div>
        </div> */}

        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <GuideHeader />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`} >
            <Guide />
          </div>
        </div>

        
        <div id='clients'>
        <Clients />
        </div>

        <div className={` ${styles.flexStart} relative`}>
          <div className={`${styles.boxWidth}`}>
            <CampaignHeader />
            <Campaigns />
          </div>
          
        </div>

        <div className='to-overlap flex flex-col sm:items-start items-center text-center p-20 bg-[#FE9ACC] rounded-3xl
        absolute bottom-[9%] sm:left-40 sm:right-40 left-20 right-20'>
              <p className='font-spectral font-bold sm:text-3xl text-xl'>Want to Hire Influencers?</p>
              <h1>
              <button className='text-white font-bold cursor-pointer sm:text-[16px] text-[12px] p-3 px-8 bg-black mt-8 text-center rounded-md'>
              Contact Us 
              </button>
              </h1>
              
          </div>

        <div className={`${styles.paddingX} ${styles.flexStart} bg-[#D10269]`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

        

    </div>
  )
}

export default HomePage