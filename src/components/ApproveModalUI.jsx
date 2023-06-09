import React from 'react'
import styles from '../styles';
import heart from '../assets/heart.svg'

const ApproveModalUI = ({ title, subtitle, handleApprove }) => {
  return (
    <div className='sm:w-full w-[220px]'>
      <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[50px] h-[50px] ml-20 bottom-20 bg-opacity-40 lg:visible invisible`}></div>
      <div className={`${styles.flexCenter} absolute bg-[#5D35FD] rounded-full w-[40px] h-[40px] ml-24 bottom-16 lg:visible invisible`}></div>
      <img src={heart} className='absolute bottom-10 right-5 lg:visible invisible'></img>
      <div className='flex flex-col items-center justify-center text-center w-full lg:min-w-[800px] lg:min-h-[400px]'>
      <h1 className='text-[#7A1848] md:text-2xl text-lg font-poppins pb-5 text-center'>{title}</h1>
      <p className='font-poppins pb-8 md:text-lg text-sm'>{subtitle}</p>
      <div className='flex flex-row sm:space-x-32 space-x-10'>
      {
        <button className='mt-4 bg-[#D10269] p-2 px-10 rounded-sm  text-white sm:text-[15px] text-[12px]' 
      onClick={handleApprove}>Confirm</button>
      }
      </div>
      </div>
    </div>
  )
}

export default ApproveModalUI