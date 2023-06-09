import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supaBase';
import CardModal from './CardModal';

const UserSupportCard = ({ support }) => {


  const [creatorProfile, setCreatorProfile] = useState();
  const [campaign, setCampaign] = useState();
  const [error, setError] = useState();
  const [senderModal, setSenderModal] = useState();
  const [isOpen, setIsOpen] = useState();


  useEffect(() => {
    async function fetchCreator() {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', support.created_by)

            if (error) {
                setError('Could not fetch data')
                setCreatorProfile(null)
              } else {
                setCreatorProfile(data[0]) 
                setError(null)
            }
    }

    async function fetchCampaign() {
        const { data, error } = await supabase
            .from('campaign')
            .select('*')
            .eq('id', support.campaign_id)

            if (error) {
                setError('Could not fetch data')
                setCampaign(null)
              } else {
                setCampaign(data[0]) 
                setError(null)
                console.log(data)
            }
    }

    fetchCreator();
    fetchCampaign();
  }, [])


  if(creatorProfile && campaign) {
    return (
        <div className='md:mr-10 bg-black bg-opacity-10 p-5 w-full  flex flex-col items-center rounded-md md:my-0 my-6 relative' >
        {creatorProfile &&
            <button 
        className='font-normal font-poppins text-[15px] py-1 text-[#D10269] flex' 
        onClick={
          () => {
            setIsOpen(true)
            setSenderModal(true)
            }}>
        <span>view sender</span></button>
        }
        {campaign &&
        <button 
        className='font-normal font-poppins text-[15px] py-1 text-[#D10269] flex' 
        onClick={
          () => {
            setIsOpen(true)
            setSenderModal(false)
            }}>
        <span>view campaign</span></button>
        }
        <p className='font-normal font-poppins sm:text-[17px] text-[15px] pt-8'>Issue description</p>
        <p className='font-normal font-poppins sm:text-[17px] text-[13px] pt-4'>{support.description ? support.description : 'empty'}</p>
    
        {
            senderModal &&
    
        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
        <div className='flex flex-col  h-[400px] sm:w-full w-[200px]  overflow-y-scroll flex-wrap'>
        <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Name : {creatorProfile.company_name ? creatorProfile.company_name : 'empty'}</p>
        <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1'>Contact at : {creatorProfile.email ? creatorProfile.email : 'empty'}</p>
        </div>
        
        </CardModal>
        }
    
    
        {
            !senderModal &&
    
            <CardModal open={isOpen} onCLose={() => {
            setIsOpen(false)
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
    
        
    
      </div>
      ) 
  } else {
    return <>loading</>
  }


}

export default UserSupportCard