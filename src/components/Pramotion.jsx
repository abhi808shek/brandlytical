import React from 'react'
import "../Styles/Home.css"
 
import sLink from '../assets/sLink.png'
import twitter from '../assets/Twitter.png'
import wp from '../assets/Whatsapp.png'
import yellowImg from '../assets/Rectangle311.png'
import blueImg from '../assets/Rectangle312.svg'
import redImg from '../assets/Rectangle313.svg'
import { Link } from 'react-router-dom'
const Pramotion = () => {
  return (
    <div id='pramotion' className=' hover:scale-95 mb-[140px]   transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[79%] relative w-[80%] m-auto  '> 
    <div  className='promotionTextDiv '>
        <div className='promotionTextDivMain'>
        <p className=" ml-[10px]  w-485 h-156 left-[calc(50% - 485px/2 - 452.5px)] top-[3269px] font-[cormorant-garamond]   text-64 leading-78 text-black"  >Ready To Run</p>
        <p className="  ml-[10px] w-485 h-156 left-[calc(50% - 485px/2 - 452.5px)] top-[3269px] font-[cormorant-garamond]   text-64 leading-78 text-black">Your Campaign?</p>
        {/* <button class="custom-btn btn-16 font-[DM Sans] ">Start Now</button> */}
        <div className="p-[10px] hover:scale-95 hover:shadow-lg  transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[210px] ml-[15px] cursor-pointer  text-center w-[180px] mt-[30px]  bg-[#7A1848] rounded-md   text-white "  >Start Now</div>

        <div className='absolute   flex items-end bottom-0 left-[20px]   h-[100px]'>
            <div className=' w-fit  '>
                <img src={redImg} className="h-[40px]  w-[42px] rotate-[270deg] mt=[40px] ml-[-10px]"  alt="redImg"/>
                <img src={yellowImg} alt="yellow" className="w-[40px] h-[80px] rotate-[-90deg]  mb-[-18px] ml-[10px] mt-[-15px] "/> 
            </div>
            <div>
                <img src={blueImg} alt="" className='  w-[50px] h-[40px] rotate-180  mx-4 ml-[25px]' />
            </div>
        </div>
       
        </div>
       

<div className='PramotionCardDiv'>
    <div className="    cursor-pointer">
        <p className='font-[Cormorant Garamond] z-50 '>Brand Awareness/Promotion</p>
    </div>
    <div  className="       cursor-pointer">
        <p className='font-[Cormorant Garamond]' >Estimated ROI Prediction</p>
    </div>
    <div className="       cursor-pointer">
        <p className='font-[Cormorant Garamond]'>Successful Campaign Execution</p>
    </div>
    <div className="       cursor-pointer">
        <p className='font-[Cormorant Garamond]'>Performance Analysis</p>
    </div>
</div>
 
<img src={wp} className=' absolute cursor-pointer  z-0  animate-[bounce_7s_ease-in-out_infinite] right-0 top-0 mr-[30px] mt-[50px]   w-[50px] h-[50px]' />
        <Link to='https://www.linkedin.com/in/brandlytical-media-ab94811a7/'>
        <img src={sLink} className='absolute z-0 bg-opacity-40  cursor-pointer animate-[bounce_5s_ease-in-out_infinite] mr-[10px] mt-[60px]  right-0 top-0   w-[40px] h-[40px]' />

        </Link>
        
          <img src={twitter} className=' absolute  z-0  bg-opacity-60 cursor-pointer animate-[bounce_3s_ease-in-out_infinite] mr-[40px] mt-[80px]  right-0 top-0 w-[30px] h-[30px]' />
 

    </div>
     
    
    </div>
  )
}

export default Pramotion