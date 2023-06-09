import React from 'react'
import kfc from '../assets/kfc.svg'
import fitshot from '../assets/fitshot.svg'
import smartveda from '../assets/smartveda.svg'
import SingleCampaign from './SingleCampaign'

const Campaigns = () => {
  return (
    <div className='w-full flex md:flex-row flex-col md:items-center items-center pb-96'>
          <SingleCampaign imageName={kfc} text={"#cizzachallenge"} />
          <SingleCampaign imageName={fitshot} text={"#takeyourshot"} />
          <SingleCampaign imageName={smartveda} text={"#smartveda"} />
        </div>
  )
}

export default Campaigns