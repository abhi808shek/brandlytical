import React from 'react'

const SideBarItem = ({ iconName, item }) => {
  return (
    <l1>
    <a className='flex flex-row items-center'>
        <FiArrowLeftCircle size={45} className='mr-5'/>
        <p className='font-normal text-[25px]'>{item}</p>
    </a>
    </l1>
  )
}

export default SideBarItem