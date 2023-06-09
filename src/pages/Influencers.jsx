import React, { useState, useEffect } from 'react'
import InfluencerHeader from '../components/InfluencerHeader'
import { CartState } from '../context/Context'
import SingleInfluencer from '../components/SingleInfluencer'
import InfluencerCart from '../components/InfluencerCart'
import { useLocation } from 'react-router-dom'
import { supabase } from '../utils/supaBase'
import CardModal from '../components/CardModal'
import Filters from '../components/Filters'

const Influencers = () => {

  const location = useLocation();
  const campaignId = location.state.campaignId
  const{ state : { cart } , isLoading, filterState: { genderFilter, costFilter, searchQuery } } = CartState()
  const [influencers, setInfluencers] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [campaignFilters, setCampaignFilters] = useState();
  





  useEffect(() => {
    const fetchCampaigns = async () => {
      const { data, error } = await supabase
        .from('campaign')
        .select('*')
        .eq('id', campaignId)

      if (error) {
        setError('Could not fetch data');
      } else {
        fetchInfluencers(data);
        setCampaignFilters(data[0])
        console.log(data[0].platform)
        console.log(data)
        setError(null);
        setLoading(false);
      }
    }






    const fetchInfluencers = async ( campaignData ) => {
      const { data, error } = await supabase
        .from('influencers')
        .select('*')
        .in('gender', campaignData[0].gender)

      if (error) {
        setError('Could not fetch data');
        setInfluencers([]);
      } else {
        setInfluencers(data);
        console.log(data)
        setError(null);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const transformInfluencers = () => {
    let sortedInfluencers = influencers; 

    if (searchQuery) {
      sortedInfluencers = sortedInfluencers.filter(influencer => influencer.Name.toLowerCase().includes(searchQuery))
    }
  
    return sortedInfluencers;
  }

  

  return (
    <div className='py-10 flex flex-col relative w-full'>
        
          {campaignFilters &&
            <InfluencerHeader campaignId={campaignId} filters={campaignFilters}/>
          }
          
          
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 md:mt-14 mt-28 max-h-screen overflow-y-scroll'>
        {influencers && (transformInfluencers().map((single) => { 
          return <SingleInfluencer influencer={single}/>
        }))}
        </div>  
        
    
    </div>
  )
}

export default Influencers