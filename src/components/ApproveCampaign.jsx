import React, { useState, useEffect } from 'react'
import { supabase } from '../utils/supaBase'
import { useRef } from 'react'
import { AiOutlineDownload  } from "react-icons/ai";
import CardModal from './CardModal';
import ApproveModalUI from './ApproveModalUI';

const ApproveCampaign = ({ campaign, approved }) => {

   const [isOpen, setIsOpen] = useState(false)
   const [showApproval, setShowApproval] = useState()
   const [profile, setProfile] = useState(null);
   const [error, setError] = useState();
 
   useEffect(() => {
     async function fetchProfile() {
       
       const { data, error } = await supabase
         .from('profiles')
         .select('*')
         .eq('id', campaign.uid)
         
           
 
       if (error) {
         setError('Could not fetch data')
         setProfile(null)
       } else {
         setProfile(data) 
         setError(null)
         console.log(data)
       }
     
   }

   fetchProfile();
   }, [])

    async function handleApprove() {
        console.log('approved')
    
        const { error } = await supabase
        .from('campaign')
        .update({ verified: true })
        .eq('id', campaign.id)

        
    
        if (error) {
            alert(error.error_description || error.message)
          } else {
            console.log('updated')
            const { data, error } = await supabase
            .rpc('increment', { x: 1, row_id: campaign.uid });
            if(error) {
              alert(error.error_description || error.message)
            } else {
              window.location.reload();
            }
          }
      }

  return (
    <div className='md:mr-10 shadow-md border-2 border-gray-300 sm:p-8 p-4 lg:min-w-[500px] sm:min-w-[370px] min-w-[220px] sm:min-h-[250px] min-h-[220px] rounded-md md:my-0 my-6' >
      <p className='font-normal font-poppins sm:text-[15px] text-[12px] py-1'>Campaign request by : {profile && profile[0].company_name}</p>
      <p className='font-normal font-poppins sm:text-[15px] text-[12px] py-1'>Campaign Type : {campaign.campaign_type ? campaign.campaign_type : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[15px] text-[12px] py-1 flex flex-wrap'>Objective : {campaign.deliverable ? 
      campaign.deliverable.map((item) => {
          return  <>{`${item},`}</>
          
        })
       : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[15px] text-[12px] py-1'>start date : {campaign.startdate ? campaign.startdate : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[15px] text-[12px] py-1'>start date : {campaign.enddate ? campaign.enddate : 'empty'}</p>

      <div className='flex flex-row items-center'>
      {!approved ? 
        <button className='mt-4 bg-[#D10269] p-2 px-4 rounded-lg mr-5 text-white sm:text-[15px] text-[12px]' 
        onClick={() => {
          setIsOpen(true)
          setShowApproval(true)
          }}>Approve</button>
        : 
        <button className='mt-4 bg-green-400 p-2 px-4 rounded-lg mr-5 text-white sm:text-[15px] text-[12px]'>
        Approved</button>
      }
      
      <button className='pt-4 text-[#D10269] flex flex-row items-center' 
      onClick={() => {
        setIsOpen(true)
        setShowApproval(false)
        }
      }><span className='pr-2 sm:text-[18px] text-[15px]'>Status</span><span><AiOutlineDownload size={24}/></span></button>
      </div>

      {!showApproval &&
        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
      <div className='flex flex-col gap-y-2 sm:w-full w-[220px]'>
      
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1' >Campaign request by : {profile && profile[0].company_name}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1' >Platform : {campaign.platform ? campaign.platform : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1' >campaign_type : {campaign.campaign_type ? campaign.campaign_type : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1' >promotion : {campaign.promotion ? campaign.promotion : 'empty'}</p>
      <p className='font-normal font-poppins sm:text-[17px] text-[13px] py-1 flex flex-wrap'>Influencers :  
      {campaign.influencers.map((item) => {
        return <>{`${item}, `}</>
      })}</p>
      
      </div>
    
      
      </CardModal>
      }

      {showApproval &&
      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
      

      <ApproveModalUI 
      title={'ARE YOU SURE YOU WANT TO APPROVE THE CAMPAIGN?'}
      subtitle={'If you choose to approve, the status will change ....'}
      handleApprove={handleApprove}
      
      />
      
    
      
      </CardModal>
      }
      

    </div>  
  )
}

export default ApproveCampaign