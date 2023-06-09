import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import ScrollList from '../components/ScrollList';
import { supabase } from '../utils/supaBase';
import { useNavigate } from 'react-router-dom';
import CompleteCampaign from '../components/CompleteCampaign';
import plus from '../assets/plus.svg'
import { useWindowDimensions } from '../utils/useWindowDimensions';


const UserCampaigns = () => {
  // const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const { userState, userDispatch } = CartState();

  const [campaigns, setCampaigns] = useState(null)
  const [error, setError] = useState(null)
  const [session, setSession] = useState(null)

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session && session.user.id)

      async function fetchCampaigns() {
        const { data, error } = await supabase
        .from('campaign')
        .select('*')
        .eq('uid', session.user.id)
        
          
    
      if (error) {
        setError('Could not fetch data')
        setCampaigns(null)
        
      } else {
        setCampaigns(data) 
        setError(null)
        console.log(data)
      }
      }
  
      fetchCampaigns();
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    
    
    


  },[])



  return (
    <div className='flex flex-col'>

    <div className='mb-10 flex flex-row text-xl'>
    <button 
    className='font-poppins font-normal'
    onClick={() => {
          navigate('/dashboard/selectcampaigntype', {
            state : {
              userId: session.user.id
            }
          })
        }}><span className='flex flex-row items-center'>
        Create a new campaign <img src={plus} className='pl-2'></img></span> 
        </button>
    
    </div>
        
        


        <h1 className='font-poppins text-xl md:text-start text-center'>To Complete Campaigns</h1>

        <div className={`flex md:flex-row flex-col overflow-x-scroll md:scrollbar
        scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded-md
         lg:w-[1200px] md:w-[1000px] md:max-h-[315px] max-h-[2000px] justify-start py-5 mb-20`}>
        {campaigns && campaigns.map((item) => {
          if(!item.completed  ) {
            return <CompleteCampaign campaign={item} active={true}/>
          }
          
        })}
        </div>


        <h1 className='font-poppins text-xl mt-1 md:text-start text-center'>Active Campaigns</h1>

        <div className='flex md:flex-row flex-col overflow-x-scroll md:scrollbar 
        scrollbar-thumb-gray-500 scrollbar-track-gray-200
        lg:w-[1200px] md:w-[1000px] md:max-h-[315px] max-h-[2000px]  justify-start py-5 mb-20'>
        {campaigns && campaigns.map((item) => {
          if(item.verified && !item.finished) {
            return <CompleteCampaign campaign={item} active={false}/>
          }
          
          
        })}
        </div>

        <h1 className='font-poppins text-xl mt-1 md:text-start text-center'>Past Campaigns</h1>

        <div className='flex md:flex-row flex-col overflow-x-scroll md:scrollbar 
        scrollbar-thumb-gray-500 scrollbar-track-gray-200
        lg:w-[1200px] md:w-[1000px] md:max-h-[315px] max-h-[2000px]  justify-start py-5'>
        {campaigns && campaigns.map((item) => {
          if(item.finished ) {
            return <CompleteCampaign campaign={item} active={false}/>
          }
          
          
        })}
        </div>

        
    </div>
  )
}

export default UserCampaigns