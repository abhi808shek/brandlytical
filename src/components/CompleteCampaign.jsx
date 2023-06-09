import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardModal from './CardModal';

const CompleteCampaign = ({ campaign, active }) => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const [verifiedModal, setVerifiedModal] = useState(false);

  return (
    <div className={`md:mr-10 ${active ? 'bg-[#FEE1BA]' :' bg-[#FD3599] bg-opacity-20'}  sm:p-8 p-4 lg:min-w-[450px] md:min-w-[400px] sm:min-w-[300px]   rounded-xl md:my-0 my-6`} >
      <p className='font-normal font-poppins sm:text-[18px] text-[13px] py-1'>Campaign Type : {campaign.campaign_type ? campaign.campaign_type : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[18px] text-[13px] py-1'>Platform : {campaign.platform ? campaign.platform : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[18px] text-[13px] py-1 flex flex-wrap'>
      Deliverable : {campaign.deliverable ? 
        campaign.deliverable.map((item) => {
          return <p>{`${item},`} </p>
        })
        : 'empty'}
      </p>

      <div className='flex flex-row items-center'>
      {campaign.completed ? ( campaign.verified ? 
        <button className='mt-4 bg-[#409b2e] p-2 px- rounded-lg mr-5 text-white sm:text-[15px] text-[12px]' 
        onClick={() => {
          setIsOpen(true)
          setVerifiedModal(true)
        }}
        >Verified</button> : 
        <button className='mt-4 bg-[#bc1e1e] p-2 px-4 rounded-lg mr-5 text-white sm:text-[15px] text-[12px]' 
        >Pending Verification</button>) : 
      <button className='mt-4 bg-[#D10269] p-2 px-4 rounded-lg mr-5 text-white sm:text-[15px] text-[12px]' 
      onClick={() => {
        navigate('/dashboard/selectinfluencers', {
            state : {
                campaignId : campaign.id
            }
        })
      }}
      >Click here to Complete</button>}
      
      </div>

      <button className='pt-4 font-poppins text-md text-[#D10269]' onClick={() => {
        setIsOpen(true)
        setViewDetails(true)
        }}>view details</button>


       { viewDetails &&
        <CardModal open={isOpen} onCLose={() => {
        setIsOpen(false)
        setViewDetails(false)
        }} showClose={true}>
        <div className='h-[400px] sm:w-full w-[200px]  overflow-y-scroll'>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Campaign Type : {campaign.campaign_type ? campaign.campaign_type : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Platform : {campaign.platform ? campaign.platform : 'empty'}</p>
      <span className='font-normal font-poppins sm:text-[17px] text-[13px] py-1 flex flex-wrap'>Deliverable : {campaign.deliverable ? 
      campaign.deliverable.map((item) => {
          return  <>{`${item},`}</>
          
        })
       : 'empty'}</span>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1 flex flex-wrap'>Influencers : {campaign.influencers ? 
      campaign.influencers.map((item) => {
          return <p>{`${item},`} </p>
          
        })
       : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Start Date : {campaign.startdate ? campaign.startdate : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>End Date : {campaign.enddate ? campaign.enddate : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Promotion : {campaign.promotion ? campaign.promotion : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1 flex flex-wrap'>Influencer Gender prefered: {campaign.gender ? 
      campaign.gender.map((item) => {
          return <p>{`${item},`} </p>
          
        })
       : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Campaign Budget rs. : {campaign.budgetlow ? campaign.budgetlow : 'empty'} - {campaign.budgethigh ? campaign.budgethigh : 'empty'}</p>
       <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Influencer follower range : {campaign.followers[0] ? campaign.followers[0] : 'empty'} - {campaign.followers[1] ? campaign.followers[1] : 'empty'}</p>
      </div>
        </CardModal>
        
       } 

      
      { verifiedModal &&
        <CardModal open={isOpen} onCLose={() => {
        setIsOpen(false)
        setVerifiedModal(false)
        }} showClose={true}>
        <p>Your campaign has been verified the team will contact you shortly!</p>


        </CardModal>
      }

        




    </div>  
  )
}

export default CompleteCampaign