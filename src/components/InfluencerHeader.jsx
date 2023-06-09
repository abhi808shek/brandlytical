import React, { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import Select from 'react-select';
import RangeDropdown from './RangeDropdown';
import { Range } from 'react-range';
import { FaGripLines, FaSearch } from 'react-icons/fa';
import { CartState } from '../context/Context';
import plus from '../assets/plus.svg'
import chat from '../assets/chat.svg'
import InfluencerCart from './InfluencerCart';
import CardModal from './CardModal';
import Filters from './Filters';
import { HiShoppingCart } from 'react-icons/hi';
import { MdFilterListAlt } from 'react-icons/md';

const InfluencerHeader = ({ campaignId, filters }) => {
  const [ShowCart, setShowCart] = useState(false);

  const { filterState: { genderFilter, costFilter, searchQuery }, filterDispatch, state: { cart }, dispatch } = CartState();
  console.log(genderFilter, costFilter, searchQuery)
  


  const [cost, setCost] = useState([costFilter[0], costFilter[1]]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [cities, setCities] = useState();
  const [gender, setGender] = useState([]);

  const cityOptions = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
  ]


  const genderOptions = [
    { value: 'Male', label: 'male' },
    { value: 'Female', label: 'female' },
    { value: 'Other', label: 'other' },
  ]


  return (
    <div className='flex absolute top-0 flex-col bg-white w-full'>
        <div className='flex md:flex-row flex-col items-center text-[18px] pb-10 justify-between'>
        
        <div className='flex flex-row items-center'>
        <FaSearch />
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
        
        {/* <div className='flex flex-row items-center gap-x-4'>
        <img src={chat}></img>
        <h1>Create new Campaign</h1>
        <button><img src={plus}></img></button>
        </div> */}

        <div className='flex flex-row gap-x-10 items-center justify-center md:mt-0 mt-10 text-lg font-poppins'>
        <button onClick={() => {
            setIsOpen(true)
            setShowCart(true)
            }}
            className='flex flex-row items-center'
            ><HiShoppingCart size={36}/> Cart </button>
          <button onClick={() => {
            setIsOpen(true)
            setShowCart(false)
            }}
            className='flex flex-row items-center'
            ><MdFilterListAlt size={36} /> Filters </button>  

        </div>
        
        </div>

        

          {
            ShowCart && <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
          <InfluencerCart id={campaignId}/>
          </CardModal>
          }

          {
            !ShowCart && <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
            <Filters  campaignId={campaignId} filters={filters}/>
          </CardModal>
          }
  
    </div>
  )
}

export default InfluencerHeader