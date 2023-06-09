import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ selectoptions, label, value, onChange, fullWidth }) => {
  return (
    <div className={fullWidth ? 'flex flex-col w-full  relative' : 'flex flex-col md:w-2/5  relative'}>
                    <label className='font-poppins text-lg pb-2'>{label}</label>
                    
                    <select
                    value={value}
                    onChange={onChange}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4 appearance-none focus:outline-none focus:border-blue-500'
                    >
                    <option value=''>for eg. abc</option>
                    {selectoptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    </select>
                    <div className='arrow-container absolute right-3 top-14  transform -translate-y-1/2 pointer-events-none'>
                    <MdKeyboardArrowDown className='h-4 w-4'/>
                    </div>
                    </div>
  )
}

export default DropDown