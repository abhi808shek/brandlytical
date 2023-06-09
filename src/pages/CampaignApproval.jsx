import React, { useEffect } from 'react'
import { supabase } from '../utils/supaBase'
import { useState } from 'react';
import ApproveCampaign from '../components/ApproveCampaign';

const CampaignApproval = () => {
    const [campaign, setCampaign] = useState(null);
    const [error, setError] = useState();
    
    useEffect(() => {
  
      async function fetchCampaigns() {
        
          const { data, error } = await supabase
            .from('campaign')
            .select('*')
            .eq('verified', false)
            .eq('completed', true)
            
              
  
            if (error) {
                setError('Could not fetch data')
                setCampaign(null)
              } else {
                setCampaign(data) 
                setError(null)
                console.log(data) 
              }
        
      }
  
      fetchCampaigns();
  
    }, [])
  
  
  
    return (
      <div className='flex flex-col'>
      <h1 className='font-poppins text-xl pb-10'>Pending Campaigns</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          { 
          (campaign && campaign.map(item => (
          <ApproveCampaign campaign={item} key={item.id} approved={false}/> 
        )))
        }
      </div>
      </div>
    )
  }

export default CampaignApproval