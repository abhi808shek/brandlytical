import React from 'react'
import { CartState } from '../context/Context'
import { supabase } from '../utils/supaBase'
import { useState } from 'react'
import { useEffect } from 'react'

const SingleInfluencerCart = ({ influencer }) => {

    const { state , dispatch, } = CartState()

  const total = influencer.reel_cost + influencer.post_cost

  const [session, setSession] = useState();
  const [profile, setProfile] = useState();
  const [error, setError] = useState();
  const [showCost, setShowCost] = useState();

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session && session.user.id)

      async function fetchProfiles() {
        const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        
          
    
      if (error) {
        setError('Could not fetch data')
        setProfile(null)
        
      } else {
        setProfile(data) 
        setError(null)
        showCostManipulate(data[0].type)
      }
      }
  
      fetchProfiles();
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    
    
    


  },[])

  async function showCostManipulate(type) {
    if(type === 'agency') {
      setShowCost(false)
    } else {
      setShowCost(true)
    }
  }

  return (
        <>
        {profile && (
        <div className='flex flex-col justify-center pb-10'>
            <span className='flex flex-row items-center pb-2'><div className='bg-gray-300 rounded-full p-4 mr-2'></div> 
            <p>{influencer.Name}</p></span>
            <div className={showCost ? 'block' : 'hidden'}>
            <p className='flex flex-row justify-between pb-2'>Reels₹ 
            <span className='text-opacity-40 text-black'>Rs.{influencer.reel_cost}</span></p>
            <p className='flex flex-row justify-between border-b-2 border-black border-opacity-20 pb-2 mb-2'>Story₹ 
            <span className='text-opacity-40 text-black'>Rs.{influencer.post_cost}</span></p>
            <p className='flex flex-row justify-between border-b-2 border-black border-opacity-20 pb-2 mb-2'>
            <p className='text-[18px]'>Total</p>
            <span className='text-[#7A1848]'>Rs.{total}</span></p>
            </div>
            <button 
            className='bg-gray-600 text-white text-[13px] px-6 p-2 rounded-md'
            onClick={() => {
                dispatch({
                type: 'REMOVE_FROM_CART',
                payload: influencer,
                });
            }}>Remove from cart</button>
        </div> )}
        </>
  ) 
}

export default SingleInfluencerCart