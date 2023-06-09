import React from 'react'

const SingleCampaign = ({ imageName, text }) => {
  return (
    <div className=' flex flex-col relative justify-center text-center items-center pb-16'>
          <img src={imageName} alt='a' className='md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%] w-[45%] h-[45%]'/>
          <p className='text-black font-extrabold md:text-[36px] text-[30px] font-spectral mt-10'>{text}</p>
          <button className='text-white font-bold cursor-pointer text-[16px] p-3 px-10 bg-[#D10269] mt-8 text-center rounded-md'>
          Know More 
          </button>
          </div>
          
  )
}

export default SingleCampaign