import React, { useState } from 'react'
import { CartState } from '../context/Context'
import SingleInfluencerCart from './SingleInfluencerCart'
import { supabase } from '../utils/supaBase'
import { useNavigate } from 'react-router-dom'
import CardModal from './CardModal'
import ApproveModalUI from './ApproveModalUI'

const InfluencerCart = ({ id }) => {

  const { state: { cart }, dispatch, filterDispatch } = CartState()
  let total = 0
  const [cartInfluencers, setCartInfluencers] = useState([])
  const [session, setSession] = useState(null)
  const navigate = useNavigate();
  const[isOpen, setIsOpen] = useState(false)


  async function submitCampaign() {
    let temp = []
    cart.map((item) => {
      temp.push(item.Name)
    })
    console.log(temp)

    
  
      const { error } = await supabase
      .from('campaign')
      .update({ influencers: temp, completed : true })
      .eq('id', id)
  
      if (error) {
          alert(error.error_description || error.message)
        } else {
          dispatch({
            type: 'CLEAR_CART'
          })
          filterDispatch({
            type: 'CLEAR_FILTERS'
          })
          navigate('/dashboard')
        }
    
    
  }

  return (
    <div className='flex flex-col h-[500px] overflow-y-auto w-72 bg-[#FFF9F1] p-10'>
        {cart.map((influencer) => {
            {total += (influencer.reel_cost + influencer.post_cost)}
            return (
                
                <>
                <SingleInfluencerCart influencer={influencer}/>
                
                </>
            )
        })}
        <p className='flex flex-row justify-between text-[#7A1848] text-[20px] font-[500]'><span>Subtotal</span><span>{total}</span></p>
        <button 
        onClick={() => {setIsOpen(true)}}
        className='bg-[#D10269] text-white  p-2 px-8 rounded-md text-sm absolute bottom-16 right-20 left-20'

        >Submit Campaign</button>

        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
        <ApproveModalUI
          title={'ARE YOU SURE YOU WANT TO ADD?'}
          subtitle={'If you choose to add, your application will be submitted to our Brandlytical Team'}
          handleApprove={submitCampaign}
        />
        </CardModal>
    </div>
  )
}

export default InfluencerCart