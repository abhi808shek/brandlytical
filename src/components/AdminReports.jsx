import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supaBase';
import InputField from './InputField';
import DropDown from './DropDown';
import CardModal from './CardModal';

const AdminReports = () => {

  const [profiles, setProfiles] = useState();
  const [created_for, setCreated_for] = useState();
  const [name, setName] = useState(''); 
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [brandagencyOptions, setBrandAgencyOptions] = useState([]);
  const [iglink, setIglink] = useState('');
  const [likes, setLikes] = useState();
  const [reel_views, setReel_views] = useState();
  const [reach, setReach] = useState();
  const [enagagement, setEngagement] = useState();
  const [story_clicks, setStory_clicks] = useState();
  const [story_views, setStory_views] = useState();
  const [roi, setRoi] = useState();
  const [session, setSession] = useState();
  const [created_by, setCreated_by] = useState();
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session && session.user.id)
      setCreated_by(session.user.id)

    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setCreated_by(session.user.id)
    })

    async function fetchProfiles() {
      
        const { data, error } = await supabase
          .from('profiles')
          .select('*')

        if (error) {
          setError('Could not fetch data')
          setProfiles(null)
        } else {
          console.log(data)
          setData(data)
          
        }
      
    }

    fetchProfiles();
  }, [])


  function setData(data) {
    const options = data.map(item => ({
      value: item.id,
      label: item.company_name
    }));
  
    setBrandAgencyOptions(options);
    setLoading(false);
    console.log(brandagencyOptions);
  }
  



  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, created_for, story_clicks, created_by, likes, reel_views, reach, enagagement, story_views, roi, iglink)

    const { error } = await supabase
    .from('reports')
    .insert({ 
      created_by: created_by, 
      created_for: created_for,
      name: name,
      ig_link: iglink,
      likes: likes,
      reel_views: reel_views, 
      reach: reach,
      enagagement: enagagement,
      story_clicks: story_clicks,
      story_views: story_views,
      roi: roi,
      created_at: ((new Date()).toISOString()).toLocaleString('zh-TW')
     })

     if (error) {
      setError(error.error_description)
     }

     setIsOpen(true)
     
  }

  


  return (
    <div className='w-full md:px-20 sm:px-8 px-0 flex flex-col text-center'>

        <h1 className='font-poppins sm:text-2xl text-xl mb-8'>Create Report</h1>


        <form onSubmit={handleSubmit} >
  
        

        

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 w-full'>

        {
          !loading &&
          <DropDown
          selectoptions={brandagencyOptions}
          value={created_for}
          onChange={(e) => {setCreated_for(e.target.value);}}
          label={'Select Brand/Agency'}
          fullWidth={true}
          />
        }

                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Name</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    ></input>

                    </div>


                  <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Instagram Link</label>
                    <input
                    value={iglink}
                    onChange={(e) => setIglink(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    ></input>

                    </div>

                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Likes</label>
                    <input
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>


                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Reach</label>
                    <input
                    value={reach}
                    onChange={(e) => setReach(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>


                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Engagement</label>
                    <input
                    value={enagagement}
                    onChange={(e) => setEngagement(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>


                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Story Clicks</label>
                    <input
                    value={story_clicks}
                    onChange={(e) => setStory_clicks(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>


                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>Story Views</label>
                    <input
                    value={story_views}
                    onChange={(e) => setStory_views(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>

                    <div className='flex flex-col  w-full'>
                    <label className='font-poppins text-lg pb-2'>ROI</label>
                    <input
                    value={roi}
                    onChange={(e) => setRoi(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4  resize-none'
                    type='number'
                    ></input>

                    </div>

        </div>



        <button className='mt-10 bg-[#D10269] p-2 px-10 
        rounded-sm  text-white sm:text-[15px] text-[12px]'>Add Report</button>
        </form>

        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={false}>
        <p className='font-poppins font-bold'>{error ? error : 'Report succesfully sent!'}</p>
        <button className='mt-10 bg-[#D10269] p-2 px-10 
        rounded-sm  text-white sm:text-[15px] text-[12px]'
        onClick={() => {
          window.location.reload();
        }}
        >OK</button>
        </CardModal>
    </div>
  )
}

export default AdminReports