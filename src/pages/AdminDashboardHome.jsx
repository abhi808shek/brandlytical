import React, {useState, useEffect} from 'react'
import { supabase } from '../utils/supaBase';
import ApproveCampaign from '../components/ApproveCampaign';
import ApproveCard from '../components/ApproveCard';
import { Link, useNavigate } from 'react-router-dom';


const AdminDashboardHome = () => {

  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState();
  const [profiles, setProfiles] = useState(null);
  const [finishedCampaigns, setFinishedCampaigns] = useState([])
  const [agencyProfiles, setAgencyProfiles] = useState(null);

  useEffect(() => {
    async function fetchCampaigns() {
      const { data, error } = await supabase
        .from('campaign')
        .select('*')
        .eq('verified', true)
        .limit(2);

      if (error) {
        setError('Could not fetch data');
        setCampaigns([]);
      } else {
        setCampaigns(data);
        setError(null);
        console.log(data);
      }
    }
    async function fetchFinishedCampaigns() {
        const { data, error } = await supabase
          .from('campaign')
          .select('*')
          .eq('verified', true)
          .limit(2);
  
        if (error) {
          setError('Could not fetch data');
          setFinishedCampaigns([]);
        } else {
          setFinishedCampaigns(data);
          setError(null);
          console.log(data);
        }
      }
    async function fetchProfiles() {
      
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('verified', false)
          .eq('type', 'brand')
          .limit(2);
            

        if (error) {
          setError('Could not fetch data')
          setProfiles(null)
        } else {
          setProfiles(data) 
          setError(null)
          console.log(data)
        }
      
    }

    async function fetchAgencyProfiles() {
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('verified', false)
        .eq('type', 'agency')
        .limit(2);
          

      if (error) {
        setError('Could not fetch data')
        setAgencyProfiles(null)
      } else {
        setAgencyProfiles(data) 
        setError(null)
        console.log(data)
      }
    
  }

    fetchFinishedCampaigns();
    fetchCampaigns();
    fetchProfiles();  
    fetchAgencyProfiles();
  }, []);


  return (
    <div className='flex flex-col'>
        <div className=''>
            <div className='flex flex-row justify-between text-center'>
            <h1 className='font-poppins sm:text-xl text-md'>Live Campaigns</h1>
            <h1 className='md:pr-20'><Link to="/dashboardadmin/approvedcampaign" className='text-red-300'>view all</Link></h1>
            </div>
            <div className='flex md:flex-row flex-col 
            lg:w-[1100px] md:w-[950px] md:max-h-[315px] max-h-[2000px]  justify-start py-5'>
        
            {campaigns && campaigns.map((campaign) => (
                <ApproveCampaign campaign={campaign} key={campaign.id} approved={true} />
            ))}
            
            {!campaigns && <p>loading</p>}
            </div>
            <div className='flex md:flex-row flex-col md:gap-x-10 md:mt-10'>
                <div className='flex flex-col gap-y-14'>
                <div>
                <div className='flex flex-row justify-between text-center'>
                <h1 className='font-poppins sm:text-xl text-md mb-5 '>Agency Pending Approval</h1>
                <h1 className='md:pr-10'><Link to="/dashboardadmin/agency">view all</Link></h1>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    (agencyProfiles && agencyProfiles.map(item => (
                    <ApproveCard profile={item} key={item.id}/> 
                    )))
                    }
                </div>
                </div>

                <div>
                <div className='flex flex-row justify-between text-center'>
                <h1 className='font-poppins sm:text-xl text-md mb-5 '>Brand Pending Approval</h1>
                <h1 className='md:pr-10'><Link to="/dashboardadmin/brand">view all</Link></h1>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    (profiles && profiles.map(item => (
                    <ApproveCard profile={item} key={item.id}/> 
                    )))
                    }
                </div>
                </div>
                </div>


                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between '>
                    <h1 className='font-poppins sm:text-xl text-md mb-5 '>Completed Campaigns</h1>
                    <h1 className='md:pr-10'><Link to="/dashboardadmin/approvedcampaign">view all</Link></h1>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                    {finishedCampaigns.map((campaign) => (
                    <ApproveCampaign campaign={campaign} key={campaign.id} approved={true} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboardHome