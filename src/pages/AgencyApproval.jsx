import React from 'react'
import { supabase } from '../utils/supaBase'
import { useState, useEffect } from 'react';
import ApproveCard from '../components/ApproveCard';
import SideBar from '../components/SideBar';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useRef } from 'react';
import ScrollList from '../components/ScrollList';

const AgencyApproval = () => {

  const [profiles, setProfiles] = useState(null);
  const [error, setError] = useState();
  
  useEffect(() => {

    async function fetchProfiles() {
      
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('verified', false)
          .eq('type', 'agency')
          
            

        if (error) {
          setError('Could not fetch data')
          setProfiles(null)
        } else {
          setProfiles(data) 
          setError(null)
          console.log(data)
        }
      
    }

    fetchProfiles();  

  }, [])

  return (
    <div>
    <h1 className='font-poppins text-xl mb-10 '>Agency Pending Approval</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-4'>
    {
          (profiles && profiles.map(item => (
          <ApproveCard profile={item} key={item.id} declined={item.declined}/> 
        )))
        }
    </div>
        
    </div>
  )
}

export default AgencyApproval