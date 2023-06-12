import React from 'react'
import "../Styles/Home.css"
 
import sLink from '../assets/sLink.png'
import twitter from '../assets/Twitter.png'
import wp from '../assets/Whatsapp.png'
import yellowImg from '../assets/Rectangle311.png'
import blueImg from '../assets/Rectangle312.svg'
import redImg from '../assets/Rectangle313.svg'
const Pramotion = () => {
  return (
    <div id='pramotion' className=' hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:w-[79%] relative w-[80%] m-auto  '> 
    <div  className='promotionTextDiv '>
        <div className='promotionTextDivMain'>
        <p className="  w-485 h-156 left-[calc(50% - 485px/2 - 452.5px)] top-[3269px] font-cormorant-garamond font-semibold text-64 leading-78 text-black"  >Ready To Run</p>
        <p className="  w-485 h-156 left-[calc(50% - 485px/2 - 452.5px)] top-[3269px] font-cormorant-garamond font-semibold text-64 leading-78 text-black">Your Campaign?</p>
        <button class="custom-btn btn-16  ">Start Now</button>
        <div className='absolute  animate-[bounce_4s_ease-in-out_infinite] flex items-end bottom-0 left-[20px]   h-[100px]'>
            <div className='   w-fit  '>
                <img src={redImg} className="h-[40px] w-[42px] rotate-[270deg] mt=[70px] ml-[-10px]"  alt="redImg"/>
                <img src={yellowImg} alt="yellow" className="w-[40px] h-[80px] rotate-[-90deg] ml-[10px] mt=[10px] "/> 
            </div>
            <div>
                <img src={blueImg} alt="" className='  w-[50px] h-[40px] rotate-180  mx-4 ml-[35px]' />
            </div>
        </div>
       
        </div>
       

<div className='PramotionCardDiv'>
    <div className="  hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:p-[5] hover:shadow-lg animate-[bounce_4s_ease-in-out_infinite] cursor-pointer">
        <p>Brand Awareness/Promotion</p>
    </div>
    <div  className="  hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:p-[10] hover:shadow-lg  animate-[bounce_3s_ease-in-out_infinite] cursor-pointer">
        <p  >Estimated ROI Prediction</p>
    </div>
    <div className="  hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:p-[10] hover:shadow-lg  animate-[bounce_2s_ease-in-out_infinite] cursor-pointer">
        <p cursor-pointer>Successful Campaign Execution</p>
    </div>
    <div className="  hover:scale-95    transition duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) hover:m-[0] hover:shadow-lg  animate-[bounce_3s_ease-in-out_infinite] cursor-pointer">
        <p cursor-pointer>Performance Analysis</p>
    </div>
</div>
<img src={wp} className=' absolute cursor-pointer  animate-[bounce_7s_ease-in-out_infinite] right-0 top-0 mr-[30px] mt-[50px]   w-[50px] h-[50px]' />
          <img src={sLink} className='absolute cursor-pointer animate-[bounce_5s_ease-in-out_infinite] mr-[10px] mt-[60px]  right-0 top-0   w-[40px] h-[40px]' />
          <img src={twitter} className=' absolute bg-opacity-60 cursor-pointer animate-[bounce_3s_ease-in-out_infinite] mr-[40px] mt-[80px]  right-0 top-0 w-[30px] h-[30px]' />
    </div>
     
    
    </div>
  )
}

export default Pramotion