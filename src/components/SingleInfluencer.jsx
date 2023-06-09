import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context'
import { FaPhone } from 'react-icons/fa'
import CardModal from './CardModal'
import { supabase } from '../utils/supaBase'

const SingleInfluencer = ({ influencer }) => {


  const {state : { cart }, dispatch, } = CartState()
  const [isOpen, setIsOpen] = useState(false);
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
    <div className='flex flex-col p-4 bg-[#FFF7F1] rounded-md mb-5'>
    <div className='flex flex-col items-center font-poppins text-center gap-y-1'>
        <p>{influencer.Name}</p>
        <p>{influencer.gender},  {influencer.Age}</p>
        <p className='flex flex-row items-center gap-x-2'><FaPhone/> {influencer.phone}</p>
        <p className='pt-4'>{influencer.content}</p>

        {
        cart.some(p=>p.influencer_id === influencer.influencer_id) ? (
          <button 
          className='bg-[#f09ac5] text-white text-[13px] px-5 p-2 rounded-md w-40 mt-4'
          onClick={() => {
            dispatch({
              type: 'REMOVE_FROM_CART',
              payload: influencer,
            });
          }}>Remove from cart</button>
        ) : (
          <button 
          className='bg-[#D10269] text-white text-[13px] px-6 p-2 rounded-md w-40 mt-4' 
          onClick={() => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: influencer,
            });
          }}>Add to cart</button>
        )
      }
      <button className='pt-4 font-poppins text-md text-[#D10269] '
      onClick={() => {setIsOpen(true)}}
      >
      view details</button>
    </div>
      
    
    <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
    <p>Name: {influencer.Name}</p>
    <p>Location: {influencer.Location}</p>
    <p>Gender: { influencer.gender}</p>
    <p>Cost: {showCost && influencer.post_cost}</p>
    </CardModal>
    
    </div>
    )}
    </>
  ) 
}

export default SingleInfluencer