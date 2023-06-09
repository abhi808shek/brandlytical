import React from 'react'

const FormInput = ({ text, id }) => {
  return (
            <div className='flex flex-col my-3 text-start w-full'> 
                <label htmlFor={id} className='py-2 pr-5 font-spectral font-normal text-[20px] text-black'>{text}</label>
                <input 
                type="text"
                id={id}
                className= 'border-2 border-[#7A1848] rounded-md p-3 border-opacity-40'
                />
            </div>
  )
}

export default FormInput