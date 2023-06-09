import React, { useEffect } from 'react'
import { supabase } from '../utils/supaBase'
import { useState } from 'react';
import ApproveCard from '../components/ApproveCard';
import SideBar from '../components/SideBar';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useRef } from 'react';
import ScrollList from '../components/ScrollList';

const Approval = () => {
  const [profiles, setProfiles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const cardListRef = useRef(null);
  const [campaign, setCampaign] = useState(null);
  
  useEffect(() => {

    async function fetchProfiles() {
      
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('verified', false)
          
            

        if (error) {
          setError('Could not fetch data')
          setProfiles(null)
        } else {
          setProfiles(data) 
          setError(null)
          console.log(data)
        }
      
    }

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
    fetchProfiles();  

  }, [])

  




  const handleScrollLeft = () => {
    cardListRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    cardListRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className='flex flex-row'>
      

      <div className='flex flex-col w-full sm:ml-0 ml-24 max-w-[1450px] md:items-stretch items-center'>

        <div className='md:p-10 pt-6'>
          <h1 className='font-poppins md:text-[24px] text-[18px] '>Campaign Pending Approval</h1>

          <div className='flex pt-10 pb-10' >
            <ScrollList data={campaign} iscampaign={true}/>
          </div>
          

        </div> 

        <div className='sm:p-10 pt-5 pb-10'>
          <h1 className='font-poppins text-[18px] '>Agency Pending Approval</h1>

          <div className='flex pt-10' >
            <ScrollList data={profiles} iscampaign={false}/>
          </div>
          

        </div>


        <div className='sm:p-10 pt-6 pb-10'>  
          <h1 className='font-poppins text-[18px] '>Brand Pending Approval</h1>

          <div className='flex pt-10' >
            <ScrollList data={profiles} iscampaign={false}/>
          </div>
          

        </div>


        

        
      </div>
    </div>

  )

  
}

export default Approval