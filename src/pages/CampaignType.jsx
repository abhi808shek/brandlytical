import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import RadioInput from '../components/RadioInput';
import { AiOutlineArrowLeft  } from "react-icons/ai";
import { Range } from 'react-range'
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supaBase';
import CheckboxInput from '../components/CheckboxInput';
import CheckBoxIconInput from '../components/CheckBoxIconInput';
import Select from 'react-select';
import { footerLinks } from '../constants';
import { CartState } from '../context/Context';
import instagram from '../assets/instacampaign.svg'
import youtube from '../assets/ytcampaign.svg'
import twitter from '../assets/twittercampaign.svg'
import linkedin from '../assets/linkedin.svg'
import { data } from 'autoprefixer';
import CardModal from '../components/CardModal';
import ApproveModalUI from '../components/ApproveModalUI';

const DELIVERABLES = {
  reel : 'Reel',


}

const CampaignType = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // const userId = location.state.userId;

  const [campaign, setCampaign] = useState("");
  const [platform, setPlatform] = useState('');
  const [promotion, setPromotion] = useState('');
  const [deliverable, setDeliverable] = useState([]);
  const [followers, setFollowers] = useState([500, 6000000]);
  const [gender, setGender] = useState([]);
  const [cities, setCities] = useState([]);
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [progress, setProgress] = useState(1);
  const [budget, setBudget] = useState([500, 100000]);
  const [niche, setNiche] = useState("");
  const [formError, setFormError] = useState("");
  const [session, setSession] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState();
  const [error, setError] = useState();

  const cityOptions = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
  ]

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session && session.user.id)
      fetchProfile(session.user.id)

    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      fetchProfile(session.user.id)
    })

    async function fetchProfile(userId) {
      const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
      
      if (error) {
          setError('Could not fetch data')
          setProfile(null)
      } else {
        setProfile(data)
      }
    }
    
  }, [])

  const handleOptionChange = (value, selectedOptions, setSelectedOptions, maxInputs) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else if (selectedOptions.length < maxInputs) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  
  const handleCityChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setCities(selectedOptions);
  };

  const { filterState : { genderFilter, costFilter, searchQuery }, filterDispatch, userState } = CartState();


  async function handleSubmit(e) {
    e.preventDefault()
    // console.log(campaign, promotion, deliverable, gender, city, startdate, enddate)
    // console.log(platform, budget[0], budget[1])
    console.log(platform, cities, deliverable)

    if (platform === '' || campaign === '' || startdate === '' || enddate === '' || 
    promotion === '' || deliverable === '' || gender === [] || cities === []) {
        setFormError('Please fill in all the fields correctly.')
    } else {
      filterDispatch({
        type: "BY_GENDER",
        payload : gender
      })
  
      console.log(userState)
  
      
  
      const { error } = await supabase
          .from('campaign')
          .insert({
            
            uid: session.user.id, 
            platform: platform,  
            campaign_type: campaign, 
            startdate: startdate, 
            enddate: enddate, 
            promotion: promotion, 
            deliverable: deliverable, 
            niche: niche, 
            followers: followers, 
            gender: gender,
            budgetlow: budget[0],
            budgethigh: budget[1],
            verified: false,
            location: cities,
            completed: false
          })
  
          if (error) {
            alert(error.error_description || error.message)
          }
          if(!error) {
            console.log(data[0])
            
            setIsOpen(true)
            // navigate('/selectinfluencers', {
            //   state : {
            //     campaignId: data[0].id
            //   }
            // })
          }
    }

    


  }


  function handleNext() {
    if(progress <= 2 && progress >=1)  {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setProgress(progress + 1)
      setFormError("")
    }
  }

  function handleBack() {
    if(progress <= 3 && progress >=2)  {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setProgress(progress - 1)
      setFormError("")
    }
  }


  return (
    
    <div className='flex'>
      
      
      <div className='flex flex-col p-5 w-full items-start z-0'>
        

        <div className='flex flex-col w-full items-center'>

          <div className='flex md:flex-row flex-col gap-x-16 p-4 pt-10 justify-center items-center'>
            <div className={`rounded-2xl font-normal text-[16px] text-black p-3 px-8 duration-300 ease-in-out md:my-0 my-4 ${progress === 1 ? 'bg-[#FFD397] text-black' : 'bg-[#FFF2E1] text-[#FFBD66]'}`}>General Information</div>
            <div className={`rounded-2xl font-normal text-[16px] text-black p-3 px-8 duration-300 ease-in-out md:my-0 my-4 ${progress === 2 ? 'bg-[#FFD397] text-black' : 'bg-[#FFF2E1] text-[#FFBD66]'}`}>Additional Information</div>
            <div className={`rounded-2xl font-normal text-[16px] text-black p-3 px-8 duration-300 ease-in-out md:my-0 my-4 ${progress === 3 ? 'bg-[#FFD397] text-black' : 'bg-[#FFF2E1] text-[#FFBD66]'}`}>Pricing and Location</div>
          </div>

          <div className='w-full'>
            <form className='w-full relative text-center' onSubmit={handleSubmit}>
            {formError && <p className="error text-red-600 pt-4">{formError}</p>}
            {progress === 1 && (
              
            <>
            <div className='flex flex-col my-20 text-center w-full '>
                <h1 className='mb-4 font-semibold text-[20px]'>1. Select Platform</h1>
                <div className='flex md:flex-row flex-col w-full md:px-32 sm:px-56 ss:px-32 xs:px-24 px-8'>

                <RadioInput 
                  name={'platform'}
                  value={'instagram'}
                  // label={'instagram'}
                  onChange={(e) => setPlatform(e.target.value)}
                  icon={instagram}
                  checked={platform === "instagram"}
                />

                <RadioInput 
                  name={'platform'}
                  value={'youtube'}
                  // label={'instagram'}
                  onChange={(e) => {
                  setPlatform(e.target.value)
                  setDeliverable([])}}
                  icon={youtube}
                  checked={platform === "youtube"}
                />

                <RadioInput 
                  name={'platform'}
                  value={'twitter'}
                  // label={'instagram'}
                  onChange={(e) => {
                    setPlatform(e.target.value)
                    setDeliverable([])
                    }}
                  icon={twitter}
                  checked={platform === "twitter"}
                />

                <RadioInput 
                  name={'platform'}
                  value={'linkedin'}
                  // label={'instagram'}
                  onChange={(e) => {
                    setPlatform(e.target.value)
                    setDeliverable([])
                    }}
                  icon={linkedin}
                  checked={platform === "linkedin"}
                />

                <RadioInput 
                  name={'platform'}
                  value={'other'}
                  label={'other'}
                  onChange={(e) => {
                    setPlatform(e.target.value)
                    setDeliverable([])
                    }}
                  
                  checked={platform === "other"}
                />

                
                </div>
                </div>




                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>2. Select Campaign Type</h1>
                <div className='flex md:flex-row flex-col w-full md:px-16 sm:px-56 ss:px-32 xs:px-24 px-8'>

                <RadioInput 
                  name={'campaign'}
                  value={'Paid'}
                  label={'Paid'}
                  onChange={(e) => setCampaign(e.target.value)}
                  checked={campaign === "Paid"}
                />

                <RadioInput 
                  name={'campaign'}
                  value={'Barter'}
                  label={'Barter'}
                  onChange={(e) => setCampaign(e.target.value)}
                  checked={campaign === "Barter"}
                />
                <RadioInput 
                  name={'campaign'}
                  value={'Affiliate Program'}
                  label={'Affiliate Program'}
                  onChange={(e) => setCampaign(e.target.value)}
                  checked={campaign === "Affiliate Program"}
                />
                <RadioInput 
                  name={'campaign'}
                  value={'E-commerce Review'}
                  label={'E-commerce Review'}
                  onChange={(e) => setCampaign(e.target.value)}
                  checked={campaign === "E-commerce Review"}
                />
                <RadioInput 
                  name={'campaign'}
                  value={'Brand Ambassador'}
                  label={'Brand Ambassador'}
                  onChange={(e) => setCampaign(e.target.value)}
                  checked={campaign === "Brand Ambassador"}
                />
                
                </div>
                </div>

                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-8 font-semibold text-[20px]'>3. Timeline</h1>
                <div className='flex md:flex-row flex-col w-full justify-center md:px-0 sm:px-56 ss:px-32 xs:px-24'>

                <input 
                type="date"
                id='start'
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                className= 'border-2 border-[#FD359999] rounded-md p-3 border-opacity-60 mx-8 my-4'
                />

                <input 
                type="date"
                id='end'
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                className= 'border-2 border-[#FD359999] rounded-md p-3 border-opacity-60 mx-8 my-4'
                />
                </div>
                </div>
                </>

                )}



                {progress === 2 && (

                  <>
                    
                
                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>4. What Are You Promoting?</h1>
                <div className='flex md:flex-row flex-col w-full md:px-24 sm:px-56 ss:px-32 xs:px-24 px-8'>

                <RadioInput 
                  name={'promotion'}
                  value={'Cosmetics'}
                  label={'Cosmetics'}
                  onChange={(e) => setPromotion(e.target.value)}
                  
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Accessories'}
                  label={'Accessories'}
                  onChange={(e) => setPromotion(e.target.value)}
                  // icon={FiArrowLeftCircle}
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Fashion'}
                  label={'Fashion'}
                  onChange={(e) => setPromotion(e.target.value)}
                  // icon={FiArrowLeftCircle}
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Food and Beverages'}
                  label={'Food and Beverages'}
                  onChange={(e) => setPromotion(e.target.value)}
                  // icon={FiArrowLeftCircle}
                />
                </div>
                </div>


                {platform === 'instagram' && (
                    <div className='flex flex-col my-20 text-center w-full'>
                      <h1 className='mb-4 font-semibold text-[20px]'>5. Deliverables</h1>
                      <div className='flex md:flex-row flex-col w-full md:px-24 sm:px-56 ss:px-32 xs:px-24 px-8'>

                        <CheckboxInput  
                          name={'deliverable'}
                          value={'Reels'}
                          label={'Reels'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("Reels")}
                        />
                        <CheckboxInput  
                          name={'deliverable'}
                          value={'Story'}
                          label={'Story'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("Story")}
                        />
                        <CheckboxInput  
                          name={'deliverable'}
                          value={'Video Story'}
                          label={'Video Story'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("Video Story")}
                        />
                        <CheckboxInput  
                          name={'deliverable'}
                          value={'igtv'}
                          label={'igtv'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("igtv")}
                        />
                        <CheckboxInput  
                          name={'deliverable'}
                          value={'Static post'}
                          label={'Static post'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("Static post")}
                        />
                        <CheckboxInput  
                          name={'deliverable'}
                          value={'carousel'}
                          label={'carousel'}
                          onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                          checked={deliverable.includes("carousel")}
                        />
                      </div>
                    </div>
                  )}

                  {platform === 'youtube' && (
                  <div className='flex flex-col my-20 text-center w-full'>
                    <h1 className='mb-4 font-semibold text-[20px]'>5. Deliverables</h1>
                    <div className='flex md:flex-row flex-col w-full md:px-24 sm:px-56 ss:px-32 xs:px-24 px-8'>

                      <CheckboxInput  
                        name={'deliverable'}
                        value={'Integration video'}
                        label={'Integration video'}
                        onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                        checked={deliverable.includes("Integration video")}
                      />
                      <CheckboxInput  
                        name={'deliverable'}
                        value={'Dedicated video'}
                        label={'Dedicated video'}
                        onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                        checked={deliverable.includes("Dedicated video")}
                      />
                      <CheckboxInput  
                        name={'deliverable'}
                        value={'Youtube shorts'}
                        label={'Youtube shorts'}
                        onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                        checked={deliverable.includes("Youtube shorts")}
                      />
                    </div>
                  </div>
                )}
                {platform === 'twitter' && (
                  <div className='flex flex-col my-20 text-center w-full'>
                    <h1 className='mb-4 font-semibold text-[20px]'>5. Deliverables</h1>
                    <div className='flex md:flex-row flex-col w-full md:px-24 sm:px-56 ss:px-32 xs:px-24 px-8'>

                      <CheckboxInput  
                        name={'deliverable'}
                        value={'tweet static'}
                        label={'tweet static'}
                        onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                        checked={deliverable.includes("tweet static")}
                      />
                      <CheckboxInput 
                        name={'deliverable'}
                        value={'video tweet'}
                        label={'video tweet'}
                        onChange={(e) => handleOptionChange(e.target.value, deliverable, setDeliverable, 3)}
                        checked={deliverable.includes("video tweet")}
                      />
                    </div>
                  </div>
                )}

                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>6. Select Creator’s Niche</h1>
                <div className='flex md:flex-row flex-col w-full md:px-0 sm:px-56 ss:px-32 xs:px-24'>
                  
                </div>
                </div>

                <div className='flex  flex-col justify-center items-center md:px-40 sm:px-56 ss:px-32 xs:px-24 px-8'>

                  <div className='flex flex-col my-6 text-center w-full '>
                  <h1 className='mb-4 font-semibold text-[20px]'>7. Followers Range</h1>
                  <div className='flex flex-row w-full justify-center '>
                  <div className='md:w-96 w-52'>
                  <Range
                  step={1}
                  min={500}
                  max={6000000}
                  values={followers}
                  onChange={(e) => setFollowers(e)}
                  renderTrack={({ props, children }) => (
                    <div {...props} className="h-2 flex w-full bg-gray-300 rounded-md">
                      {children}
                      <div
                        className="bg-[#D10269] rounded-full"
                        style={{
                          position: 'absolute',
                          width: `${(followers[1] - followers[0]) * 100 / (6000000 - 500)}%`,
                          height: '100%',
                          left: `${(followers[0] - 500) * 100 / (6000000 - 500)}%`,
                          zIndex: -1,
                          
                        }}
                      />
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="h-6 w-6 bg-white rounded-full shadow flex justify-center items-center"
                    >
                      <div className="h-5 w-5 bg-white rounded-full border-purple-400" />
                    </div>
                  )}
                />

                <p className="mt-4">Followers: {followers[0]} - {followers[1]}</p>
                </div>
                
                  </div>
                  </div>

                  <div className='flex flex-col my-6 text-center w-full'>
                  <h1 className='font-semibold text-[20px]'>8. Gender</h1>
                  <div className='flex md:flex-row flex-col w-full '>
                  <CheckboxInput 
                    name={'gender'}
                    value={'Male'}
                    label={'Male'}
                    onChange={(e) => handleOptionChange(e.target.value, gender, setGender, 3)}
                    checked={gender.includes("Male")}
                  />
                  <CheckboxInput 
                    name={'gender'}
                    value={'Female'}
                    label={'Female'}
                    onChange={(e) => handleOptionChange(e.target.value, gender, setGender, 3)}
                    checked={gender.includes("Female")}
                  />
                  <CheckboxInput 
                    name={'gender'}
                    value={'Other'}
                    label={'Other'}
                    onChange={(e) => handleOptionChange(e.target.value, gender, setGender, 3)}
                    checked={gender.includes("Other")}
                  />
                  </div>
                  </div>
                </div>

                </>
                )}

                {progress === 3 && (

                  <>

                {profile && 
                
                
                <div className={profile[0].type === 'agency' ? 
                'hidden' : 
                'flex flex-col my-20 text-center w-full'
                }>
                <h1 className='mb-4 font-semibold text-[20px]'>9. Budget</h1>
                <div className='flex flex-col w-full md:px-8 sm:px-56 ss:px-32 xs:px-24 px-8 items-center'>
                
                <div className='md:w-96 w-52'>
                

                  <Range
                  step={1}
                  min={500}
                  max={100000}
                  values={budget}
                  onChange={(e) => setBudget(e)}
                  renderTrack={({ props, children }) => (
                    <div {...props} className="h-2 flex w-full bg-gray-300 rounded-md">
                      {children}
                      <div
                        className="bg-[#D10269] rounded-full"
                        style={{
                          position: 'absolute',
                          width: `${(budget[1] - budget[0]) * 100 / (100000 - 500)}%`,
                          height: '100%',
                          left: `${(budget[0] - 500) * 100 / (100000 - 500)}%`,
                          zIndex: -1,
                          
                        }}
                      />
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="h-6 w-6 bg-white rounded-full shadow flex justify-center items-center"
                    >
                      <div className="h-5 w-5 bg-white rounded-full border-purple-400" />
                    </div>
                  )}
                />
                </div>
                <p className="mt-2">Budget: {budget[0]} - {budget[1]}</p>

                </div>
                </div>
                }

                <div className='flex flex-col my-20 text-center justify-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>10. Location</h1>
                <div className='flex flex-row w-full justify-center md:px-0 sm:px-56 ss:px-32 xs:px-24 px-8'>
                {/* <select 
                id='location' 
                onChange={(e) => setCity(e.target.value)} 
                className= 'border-2 border-[#FD359999] rounded-md border-spacing-8 p-3 px-8'>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                </select> */}
                <div>
     
      
                <Select
                options={cityOptions}
                isMulti
                value={cities}
                onChange={(cities) => {
                  const values = cities.map((option) => option.value);
                  setCities(cities)
                  }}
                placeholder="Select cities..."
              />
       
     
       
      
      
                </div>
                </div>
                </div>

                


                


                <div className='flex flex-col text-center justify-center items-center md:px-8 sm:px-56 ss:px-32 xs:px-24 px-8'>
                
                <button className='bg-[#D10269] text-white sm:p-3 sm:px-16 p-2 px-8 rounded-md'>Submit</button>
                </div>
                
                

                </>
                )}

                
                
                
            </form>
            <div className='flex flex-row my-6 text-center items-center justify-between px-10 w-full'>
                {progress === 1 ? null : 
                <button 
                 className=' text-[#D10269] font-bold flex flex-row items-center sm:text-[20px] text-[15px]'
                onClick={handleBack}><span className='pr-1'><AiOutlineArrowLeft /></span> <span>Back</span></button>}

                {progress <= 2 ? 
                <button 
                className='bg-[#D10269] text-white sm:p-3 sm:px-16 p-2 px-8 rounded-md'
                onClick={handleNext}>Next</button> 
                : null }

                </div>
          </div>

        </div>
        

      </div>

      <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={false}>
      <ApproveModalUI
        title={'Your Campaign filters has been set!'}
        subtitle={'Please click on confirm, you will be redirected to the campaigns page. Then click on complete campaign to select influencers and submit your campaign request!'}
        handleApprove={() => {
          navigate('/dashboard/campaign')
        }}
      />
      </CardModal>
    </div>
  )  
} 

export default CampaignType