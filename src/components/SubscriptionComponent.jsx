import React from 'react'
import tick from '../assets/tick.svg'

const SubscriptionComponent = ({ title, price, f1, f2, f3, f4, f5 }) => {
  return (
    <div className='md:w-1/3 sm:w-1/2 w-2/3  md:mx-4 mx-0 md:my-10 my-5 flex flex-col p-4 rounded-lg
        bg-[#FFF9F1] relative lg:h-[530px]'>
            <h1 className='font-[500] text-[24px] text-black '>{title}</h1>
            <h1 className='font-[500] text-[24px] text-[#D10269] '>{price}</h1>
            <div className='ml-2 mb-10'>
                {f1 && <span className='font-[400] md:text-[16px] text-[14px] flex flex-row items-baseline text-start my-4'>
                <img src={tick} className='mr-2'></img>{f1}</span>}
                
                {f2 && <span className='font-[400] md:text-[16px] text-[14px] flex flex-row items-baseline text-start my-4'>
                <img src={tick} className='mr-2'></img>{f2}</span>}

                {f3 && <span className='font-[400] md:text-[16px] text-[14px] flex flex-row items-baseline text-start my-4'>
                <img src={tick} className='mr-2'></img>{f3}</span>}

                {f4 && <p className='font-[400] md:text-[16px] text-[14px] flex flex-row items-baseline text-start my-4'>
                <img src={tick} className='mr-2'></img>{f4}</p>}

                {f5 && <span className='font-[400] md:text-[16px] text-[14px] flex flex-row items-baseline text-start my-4'>
                <img src={tick} className='mr-2'></img>{f5}</span>}

                
            </div>
            
            <button className='absolute bottom-4 right-0 left-0 text-white font-[500] text-[16px] 
            p-2  px-6 mx-10 bg-[#D10269] text-center rounded-md'>Get Started</button>
    </div>
  )
}

export default SubscriptionComponent