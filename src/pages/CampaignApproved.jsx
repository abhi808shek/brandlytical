import React, { useEffect } from 'react';
import { supabase } from '../utils/supaBase';
import { useState } from 'react';
import ApproveCampaign from '../components/ApproveCampaign';

const CampaignApproved = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchCampaigns() {
      const { data, error } = await supabase
        .from('campaign')
        .select('*')
        .eq('verified', true);

      if (error) {
        setError('Could not fetch data');
        setCampaigns([]);
      } else {
        setCampaigns(data);
        setError(null);
        console.log(data);
      }
    }

    fetchCampaigns();
  }, []);

  return (
    <div className='flex flex-col'>
    <h1 className='font-poppins text-xl pb-10'>Approved Campaigns</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {campaigns.map((campaign) => (
        <ApproveCampaign campaign={campaign} key={campaign.id} approved={true} />
      ))}
    </div>
    </div>
  );
};

export default CampaignApproved;
