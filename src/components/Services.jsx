import React from 'react'
import { layout } from '../styles'
import bill from '../assets/bill.png'
import styles from '../styles'
import card from '../assets/card.png'

const Services = () => {
  return (
    <>
    <section id='services'  className={`${layout.sectionReverse} sm:px-20 px-6`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] relative z-[5] mt-4 sm:mt-16'/>
        </div>

        

        <div className={`${layout.sectionInfo}`}>
            <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>01</h1>
            <h2 className={styles.heading2}>
            Influencer Marketing</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            </p>
        </div>
    </section>

    <section id='services'  className={`${layout.section} sm:px-20 px-6`}>
        <div className={layout.sectionInfo}>
        <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>02</h1>
        <h2 className={styles.heading2}>
            Brand integration</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        </p>
        </div>

        <div className={`${layout.sectionImg}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] mt-4 sm:mt-16'/>
        </div>

    </section>

    <section id='services'  className={`${layout.sectionReverse} sm:px-20 px-6`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] relative z-[5] mt-4 sm:mt-16'/>
        </div>

        

        <div className={`${layout.sectionInfo}`}>
            <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>03</h1>
            <h2 className={styles.heading2}>
            Active Events</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            </p>
        </div>
    </section>

    <section id='services'  className={`${layout.section} sm:px-20 px-6`}>
        <div className={layout.sectionInfo}>
        <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>04</h1>
        <h2 className={styles.heading2}>
            Sponsorship Deals</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        </p>
        </div>

        <div className={`${layout.sectionImg}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] mt-4 sm:mt-16'/>
        </div>

    </section>

    <section id='services'  className={`${layout.sectionReverse} sm:px-20 px-6`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] relative z-[5] mt-4 sm:mt-16'/>
        </div>

        

        <div className={`${layout.sectionInfo}`}>
            <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>05</h1>
            <h2 className={styles.heading2}>
            Product and Ad Shots</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            </p>
        </div>
    </section>

    <section id='services'  className={`${layout.section} sm:px-20 px-6`}>
        <div className={layout.sectionInfo}>
        <h1 className='font-spectral font-extrabold text-opacity-60 sm:text-[64px] text-[#FFF9F1] text-[36px] xs:leading-[76.8px] leading-[66.8px] w-full'>06</h1>
        <h2 className={styles.heading2}>
            Podcast Management</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>    
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        </p>
        </div>

        <div className={`${layout.sectionImg}`}>
            <img src={bill} alt='a' className='w-[100%] h-[100%] mt-4 sm:mt-16'/>
        </div>

    </section>


    </>
  )
}

export default Services