import React from 'react'
import { CartState } from '../context/Context';
import {  FaSearch } from 'react-icons/fa';
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const InfluencerHeaderAdmin = () => {

  const navigate = useNavigate();

  const{  filterDispatch } = CartState()
  return (
    <div className='flex sm:flex-row flex-col items-center justify-center bg-white w-full h-full'>
        <div className='flex flex-row items-center'>
        <FaSearch size={20} color='gray'/>
        <input
        className='mx-4 border-b-2 border-black border-opacity-40 md:w-[500px] sm:w-[400px] w-full'
        placeholder='influencer name'
        onChange={(e) => {
          filterDispatch({
            type : "BY_SEARCH",
            payload : e.target.value,
          })
        }}
        >
        </input>
        </div>

        <div>
        <button 
        className='mx-4 flex flex-row items-center bg-white md:w-40 w-full'
        onClick={() => {
            navigate('/dashboardadmin/addinfluencers')
        }}
        >
        <IoMdPersonAdd size={24} className='mr-2'/>
        <p className='font-poppins'> Add influencer</p>
        </button>
        </div>
        </div>
  )
}

export default InfluencerHeaderAdmin