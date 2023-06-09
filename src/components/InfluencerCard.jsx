import React, { useState } from 'react'
import CardModal from './CardModal'
import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supaBase';

const InfluencerCard = ({ influencer }) => {

  const navigate = useNavigate();

  const[isOpen, setIsOpen] = useState(false);
  const[deleteModal, setDeleteModal] = useState(false);

  async function handleDelete() {
    const { error } = await supabase
  .from('influencers')
  .delete()
  .eq('influencer_id', influencer.influencer_id)

  if(!error) {
    window.location.reload()
  }
  } 

  return (
    <div className='flex flex-col p-4 bg-[#FFF7F1] rounded-md mb-5'>
    <div className='flex flex-col items-center font-poppins text-center gap-y-1'>
        <p>{influencer.Name}</p>
        <p>{influencer.gender},  {influencer.Age}</p>
        <p>{influencer.Location}</p>
        <p className='pt-4'>{influencer.Niche}</p>

        <div className='flex flex-row mt-5'>
        <div className='flex flex-col border-r-2'>
        <BsInstagram color='#d62976' size={24} className='mx-5'/>
        <p className='font-poppins text-sm mt-2'>11k</p>
        </div>

        <div className='flex flex-col border-r-2'>
        <BsFacebook color='#3b5998' size={24} className='mx-5'/>
        <p className='font-poppins text-sm mt-2'>11k</p>
        </div>

        <div className='flex flex-col'>
        <BsTwitter color='#00acee' size={24} className='mx-5'/>
        <p className='font-poppins text-sm mt-2'>11k</p>
        </div>


        
        
        
        </div>

        <div className='flex flex-row mt-5'>
        <button
        onClick={() => {
        setIsOpen(true)
        setDeleteModal(true)
        }
          
        }
        >
        <BsTrash color='red' size={24} className='mx-3'/>
        </button>
        
        <button
        onClick={() => {
          navigate('/dashboardadmin/influencers/edit')
        }}
        >
        <TbEdit color='black' size={24} className='mx-3'/>
        </button>
        
        </div>

        <div className='flex flex-row'>

        </div>

      <button className='pt-4 font-poppins text-md text-[#D10269] '
      onClick={() => {
        setIsOpen(true)
        setDeleteModal(false)
        }}
      >
      view details</button>
      </div>
      



    { !deleteModal && 
      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
    <p>Name: {influencer.Name}</p>
    <p>Location: {influencer.Location}</p>
    <p>Gender: {influencer.gender}</p>
    </CardModal>
    }

    { deleteModal && 
      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
      <p>Are you sure you want to delete this influencer</p>
      <button
      className='bg-[#D10269] p-2 px-10 mt-4
        rounded-sm  text-white sm:text-[15px] text-[12px]'
      onClick={handleDelete}
      >
        delete
      </button>
    </CardModal>
    }
    
      
    </div>
  )
}

export default InfluencerCard