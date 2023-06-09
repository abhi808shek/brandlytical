import React, { useState } from 'react'
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { AiOutlineLaptop,  } from "react-icons/ai";
import { RiFileUserLine, RiNewspaperLine, RiCustomerServiceFill } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";



const SideBar = () => {
  const [open, setOpen] = useState(false)
  const menus = [
    {}
  ]

  return (
        <div className={`${open ? 'w-60' : 'w-20'} h-screen duration-300 bg-pink-400 bg-opacity-100 flex flex-col items-center py-8 sm:sticky fixed top-0 left-0`} >
        {open ? <FiArrowLeftCircle size={50} onClick={() =>  setOpen(!open) } className='absolute cursor-pointer -right-6 top-9 '/>     
         : <FiArrowRightCircle size={50} onClick={() =>  setOpen(!open) } className='absolute cursor-pointer -right-6 top-9 '/>
        }
        <div className='flex gap-x-4 items-center'>
            <h1 className={`text-black origin-left font-bold text-[30px] duration-300 ${!open && 'scale-0' }`}>Your Name</h1>
        </div>
        <ul className={'pt-10'}>
            <li>
            <a className={`flex mt-7 items-center hover:bg-[#5D35FD] rounded-lg gap-x-2 cursor-pointer ${open ? 'p-4': 'p-3'}`}>
                <AiOutlineLaptop size={40} className='mr-5'/>
                <span className={`font-normal text-[20px] ${!open && 'hidden'} origin-left duration-200`}>Dashboard</span>
            </a>
            </li>
            <li>
            <a className={`flex mt-7 items-center hover:bg-[#5D35FD] rounded-lg gap-x-2 cursor-pointer ${open ? 'p-4': 'p-3'}`}>
                <RiFileUserLine size={40} className='mr-5'/>
                <span className={`font-normal text-[20px] ${!open && 'hidden'} origin-left duration-200`}>Discover Influencer</span>
            </a>
            </li>
            <li>
            <a className={`flex mt-7 items-center hover:bg-[#5D35FD] rounded-lg gap-x-2 cursor-pointer ${open ? 'p-4 ': 'p-3'}`}>
                <HiOutlineSpeakerphone size={40} className='mr-5'/>
                <span className={`font-normal text-[20px] ${!open && 'hidden'} origin-left duration-200`}>My Campaigns</span>
            </a>
            </li>
            <li>
            <a className={`flex mt-7 items-center hover:bg-[#5D35FD] rounded-lg gap-x-2 cursor-pointer ${open ? 'p-4': 'p-3'}`}>
                <RiNewspaperLine size={40} className='mr-5'/>
                <span className={`font-normal text-[20px] ${!open && 'hidden'} origin-left duration-200`}>Manage Reports</span>
            </a>
            </li>
            <li>
            <a className={`flex mt-7 items-center hover:bg-[#5D35FD] rounded-lg gap-x-4 cursor-pointer ${open ? 'p-4': 'p-3'}`}>
                <RiCustomerServiceFill size={40} className='mr-5'/>
                <span className={`font-normal text-[20px] ${!open && 'hidden'} origin-left duration-200`}>Support</span>
            </a>
            </li>
        </ul>
        </div>
    
  )
}

export default SideBar