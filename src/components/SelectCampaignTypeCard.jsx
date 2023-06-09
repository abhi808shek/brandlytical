import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SelectCampaignTypeCard = ({ label, redirectlink, image }) => {


  const navigate = useNavigate();
  return (
    <div className='flex flex-col relative text-center'>
                <p className='font-semibold font-poppins lg:text-2xl text-lg
                absolute top-40 z-10 left-6 right-6'>{label}</p>
                <button className=' text-white font-[500] sm:text-[14px] text-10px absolute bottom-10 left-4 right-4 z-10
                p-2 sm:px-6 px-4 sm:mx-10 mx-6 bg-[#D10269] text-center rounded-md'
                onClick={() => {
                    navigate(redirectlink, {
                        // state: {
                        // userId: 's',
                        // }
                    })
                }}
                >Get Started</button>
                <img src={image} className='opacity-50 h-96'></img>
            </div>
  )
}
