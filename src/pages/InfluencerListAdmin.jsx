import React, {useEffect, useState } from 'react'
import { supabase } from '../utils/supaBase';
import InfluencerCard from '../components/InfluencerCard';
import { CartState } from '../context/Context';
import {  FaSearch } from 'react-icons/fa';


const InfluencerListAdmin = () => {

const{ filterState: { genderFilter, costFilter, searchQuery }, filterDispatch } = CartState()
const [influencers, setInfluencers] = useState([]);
const [error, setError] = useState();
const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      const { data, error } = await supabase
        .from('influencers')
        .select('*');

      if (error) {
        setError('Could not fetch data');
        setInfluencers([]);
      } else {
        setInfluencers(data);
        setError(null);
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, []);


  const transformInfluencers = () => {
    let sortedInfluencers = influencers; 

    if (searchQuery) {
      sortedInfluencers = sortedInfluencers.filter(influencer => influencer.Name.toLowerCase().includes(searchQuery))
    }
  
    return sortedInfluencers;
  }

  return (
    <>

      


    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 w-full'>
        {
            influencers && (transformInfluencers().map((item) => {
                return <InfluencerCard influencer={item}/>
            }))
        }
    </div>
    </>
  )
}

export default InfluencerListAdmin