import React, { useEffect } from 'react'
import { supabase } from '../utils/supaBase'
import { useRef } from 'react'
import { useState } from 'react'
import CardModal from './CardModal'
import ApproveModalUI from './ApproveModalUI'

const ApproveCard = ({ profile, declined }) => {



  const [isOpen, setIsOpen] = useState(false)
  const [viewDetails, setViewDetails] = useState(false)
  const [viewApprove, setViewApprove] = useState();

  async function handleApprove() {
    console.log('approved')
    console.log(profile.id)
    const { error } = await supabase
    .from('profiles')
    .update({ verified: true })
    .eq('id', profile.id)

    if (error) {
        alert(error.error_description || error.message)
      } else {
        window.location.reload(true)
      }
  }

  async function handleDecline() {
    console.log('declined')

    const { error } = await supabase
    .from('profiles')
    .update({ declined: true })
    .eq('id', profile.id)

    if (error) {
        alert(error.error_description || error.message)
      } else {
        window.location.reload(true)
      }
  }


  return (

    


    <div className='md:mr-10 bg-black bg-opacity-10 p-5 sm:min-w-[290px] min-w-[220px]  rounded-md md:my-0 my-6 relative' >
      <button 
      className='font-normal font-poppins text-[15px] py-1 text-[#D10269] flex' 
      onClick={
        () => {
          setIsOpen(true)
          setViewDetails(true)
          }}>
      <span>view details</span></button>
      <p className='font-normal font-poppins sm:text-[17px] text-[15px] pb-1'>{profile.company_name ? profile.company_name : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] text-opacity-60 py-1'>{profile.email ? profile.email : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>{profile.designation ? profile.designation : 'empty'}</p>

      {!declined && 
      <div className='flex flex-row justify-between'>
      <button onClick={() => {
        setIsOpen(true)
        setViewDetails(false)
        setViewApprove(false)
        }}
        className='pt-4 text-[#D10269] font-bold'>Decline</button>
      <button onClick={() => {
        setIsOpen(true)
        setViewDetails(false)
        setViewApprove(true)
        }} 
        className='mt-4 bg-[#D10269] p-1   px-6 rounded-sm text-white'>Accept</button>
      
      </div>
    }

    {declined &&
      <p className='pt-4 text-[#D10269] font-bold'>Declined</p>
    }

      {viewDetails && 
        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
      <div className='flex flex-col  h-[400px] sm:w-full w-[200px]  overflow-y-scroll flex-wrap'>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Name : {profile.company_name ? profile.company_name : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Designation : {profile.designation ? profile.designation : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Email : {profile.email ? profile.email : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Agency : {profile.agency_name ? profile.agency_name : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Gst no : {profile.gst_no ? profile.gst_no : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Phone : {profile.phone ? profile.phone : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Website : {profile.website ? profile.website : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Social Media : {profile.social_media ? profile.social_media : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Location : {profile.location ? profile.location : 'empty'}</p>
      </div>
      
      </CardModal>
      }

      {!viewDetails && 
      (
        viewApprove ?
        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>

      <ApproveModalUI 
      title={'ARE YOU SURE YOU WANT TO APPROVE THE BRAND?'}
      subtitle={'If you choose to approve, the status will change ....'}
      handleApprove={handleApprove}
      
      />
      </CardModal> : 

      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>

      <ApproveModalUI 
      title={'ARE YOU SURE YOU WANT TO DECLINE THE BRAND?'}
      subtitle={'If you choose to decline, the status will change ....'}
      handleApprove={handleDecline}
      
      />
      </CardModal>
      )
      
      }

      

    </div>
  )
}

export default ApproveCard