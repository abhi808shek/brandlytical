import React from 'react'
import ReactDom from 'react-dom'
import { Transition } from '@headlessui/react';

const CardModal = ({ open, children, onCLose, showClose }) => {
  if(!open) return null
  return ReactDom.createPortal(
    <Transition
      show={open}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
    <>
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 z-[1000]'>
    <div className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000]
     p-[50px] bg-white rounded-md pb-20 duration-300 ease-in-out flex flex-col items-center'>

    
    {children}
    {showClose && 
      <button onClick={onCLose} 
    className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110
     hover:bg-indigo-500 duration-300 p-1 px-4 rounded-md  absolute bottom-3 w-28'>close</button>
    }
    
    </div>
    </div>
    </>
    </Transition>,
    document.getElementById('portal')
  )
}

export default CardModal