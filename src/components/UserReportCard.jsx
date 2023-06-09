import React, { useEffect } from 'react'
import { useState } from 'react'
import CardModal from './CardModal'
import ApproveModalUI from './ApproveModalUI'
import { supabase } from '../utils/supaBase'
import { BsTrash } from 'react-icons/bs'

const UserReportCard = ({ report }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [changeRev, setChangeRev] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewReport, setViewReport] = useState(false)

  async function handleReview() {
    const { error } = await supabase
        .from('reports')
        .update({ 
          reviewed : !report.reviewed
        })
        .eq('id', report.id)

        if(error) {
          alert(error)
        } else {
          window.location.reload();
        }
  }

  async function handleDelete() {
  const { error } = await supabase
  .from('reports')
  .delete()
  .eq('id', report.id)

  if(!error) {
    window.location.reload()
  }
  } 

  return (
    <div className='md:mr-10 bg-black bg-opacity-10 p-5 sm:min-w-[290px] min-w-[220px]  rounded-md md:my-0 my-6 relative' >
    <div className='flex flex-row items-center text-center sm:gap-x-8 gap-x-3'>
    <button 
    className='font-normal font-poppins py-1 text-[#D10269] flex mb-4 sm:text-[17px] text-[13 px]'  
    onClick={
      () => {
        setIsOpen(true)
        setChangeRev(false)
        setDeleteModal(false)
        setViewReport(true)
        }}>
    <span>campaign report</span></button>
    <button
        onClick={() => {
        setIsOpen(true)
        setDeleteModal(true)
        setChangeRev(false)
        setViewReport(false)
        }
          
        }
        >
        <BsTrash color='red' size={24} className='mx-3 mb-4'/>
        </button>
    </div>
    
    <p className='font-normal font-poppins sm:text-[17px] text-[15px] pb-1'>Name : {report.name ? report.name : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[15px] py-1'>Date of Generation : {report.created_at ? report.created_at : 'empty'}</p>
    <div className='flex flex-row gap-x-3'>
    <p className='font-normal font-poppins sm:text-[17px] text-[15px] py-1'>Status : </p>
    {
      report.reviewed &&
      <button
      className='bg-[#CAFFB8] p-1 sm:px-7 px-3 border-2 border-[#1F761D] md:text-[17px] text-[13px] rounded-lg'
      onClick={() => {
        setIsOpen(true)
        setChangeRev(true)
        setDeleteModal(false)
        setViewReport(false)
      }}
      >Reviewed</button>
    }

    {
      !report.reviewed &&
      <button
      className='bg-[#F8FAAD] p-1 sm:px-7 px-3 border-2 border-[#C8A118] rounded-lg md:text-[17px] text-[13px]'
      onClick={() => {
        setIsOpen(true)
        setChangeRev(true)
        setDeleteModal(false)
        setViewReport(false)
      }}
      >Not reviewed</button>
    }
    </div>
    

    
    


    {
      viewReport && 
    <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
    <div className='flex flex-col  h-[400px] sm:w-full w-[200px]  overflow-y-scroll flex-wrap'>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Name : {report.name ? report.name : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Instagram Link : {report.ig_link ? report.ig_link : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Likes : {report.likes ? report.likes : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Reel views : {report.reel_views ? report.reel_views : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Reach : {report.reach ? report.reach : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Engagement : {report.engagement ? report.engagement : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Story Clicks : {report.story_clicks ? report.story_clicks : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Story Views : {report.story_views ? report.story_views : 'empty'}</p>
    <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>roi : {report.roi ? report.roi : 'empty'}</p>
    </div>
    
    </CardModal>
    }

     

    {
      changeRev && 
      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
    <ApproveModalUI
      title={'Are You Sure You want to change the status'}
      subtitle={report.reviewed ? 'The status will be changed to not reviewed' : 'The status will be changed to reviewed'}
      handleApprove={handleReview}
    />
    </CardModal>
    }

    { deleteModal && 
      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
      <p>Are you sure you want to delete this influencer</p>
      <button
      className='bg-[#D10269] p-2 px-10 mt-4
        rounded-sm  text-white sm:text-[15px] text-[12px]'
      onClick={handleDelete}
      >
        delete
      </button>
    </CardModal>
    }
    

  </div>
  )
}

export default UserReportCard