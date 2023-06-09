import React, { useRef } from 'react';
import ApproveCard from './ApproveCard';
import ApproveCampaign from './ApproveCampaign';

const ScrollList = ({ data, iscampaign }) => {
  const scrollListRef = useRef(null);

  const handleScrollLeft = () => {
    scrollListRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollListRef.current.scrollBy({
      left: 900,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className=" flex flex-col w-full">
      <div className=" flex md:overflow-x-scroll overflow-y-auto max-h-[1000px] md:flex-row flex-col"  ref={scrollListRef}>
        {!iscampaign && 
          (data && data.map(item => (
          <ApproveCard profile={item} key={item.id}/> 
        )))
        }
        {iscampaign && 
          (data && data.map(item => (
          <ApproveCampaign campaign={item} key={item.id}/> 
        )))
        }
      </div>
      <div className="flex pt-10">
        <button onClick={handleScrollLeft} className=' bg-[#D10269] p-3 px-5 rounded-lg mr-5 text-white'>LEFT</button>
        <button onClick={handleScrollRight} className=' bg-[#D10269] p-3 px-5 rounded-lg text-white'>RIGHT</button>
      </div>
    </div>
  );
};

export default ScrollList;
