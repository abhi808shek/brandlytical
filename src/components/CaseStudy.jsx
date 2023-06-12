import React from 'react'
import c1 from "../assets/c1.svg"
import c2 from "../assets/c2.svg"

const CaseStudy = () => {
  return (
    <div className='CaseStu' id='casestudy'>
        <p className="font-[cormorant-garamond] font-normal text-[44px] text-center text-black">Case Studies</p>
        <div className='CaseStuImgDiv'>
            <div>
            <div className='hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px]'>
                <img src={c1} alt="" />
            </div>
            <p className=' text-[20px]  font-bold text-black  '>mcaffeineofficial</p>
            </div>
            <div>
            <div className='hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:h-[200px]'>
                <img src={c2} alt="" />
            </div>
            <p className=' text-[20px] font-bold text-black'>olayindia</p>
            </div>
        </div>
        <div className="p-[10px] animate-[bounce_2s_ease-in-out_infinite]  cursor-pointer  text-center w-[220px] mt-[30px] m-auto bg-[#7A1848] rounded-md   text-white "  >View all</div>

    </div>
  )
}

export default CaseStudy