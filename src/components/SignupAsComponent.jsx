import React from 'react'
import { Link } from 'react-router-dom'

const SignupAsComponent = ({ text, link }) => {
  return (
    <>
        
        <Link className='md:w-1/3 sm:w-1/2 w-2/3 md:h-[300px] sm:h-[250px] 
        h-[200px] md:mx-4 mx-0 md:my-10 my-5 flex flex-col items-center justify-center p-4
        border-[1px] border-[#5D35FD66]' to={`/${link}`}>
            <p className='font-[700] lg:text-[24px] md:text-[20px] text-[20px]'>{text}</p>
        </Link>
       
    
    </>
  )
}

export default SignupAsComponent