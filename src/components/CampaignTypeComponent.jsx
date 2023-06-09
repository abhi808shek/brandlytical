import React from 'react'

const CampaignTypeComponent = ({ imgUrl }) => {
  return (
    <div className='md:w-1/3 sm:w-1/2 w-2/3 md:h-[300px] sm:h-[250px] relative
        h-[200px] md:mx-4 mx-0 md:my-10 my-5 flex flex-col items-center justify-center p-4 bg-[url("/src/assets/cmptype1.png")] '>
            <p className='font-[700] lg:text-[24px] md:text-[20px] text-[20px]'>hello</p>

            <button className='absolute bottom-4 right-0 left-0 text-white font-[500] text-[16px] 
            p-2  px-6 mx-10 bg-[#D10269] text-center rounded-md'>Get Started</button>
    </div>
  )
}

export default CampaignTypeComponent