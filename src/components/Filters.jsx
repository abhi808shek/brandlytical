import React, { useState, useEffect } from 'react'
import RadioInput from './RadioInput'
import CheckboxInput from './CheckboxInput'
import { Range } from 'react-range'
import Select from 'react-select';
import { supabase } from '../utils/supaBase';
import { useNavigate } from 'react-router-dom';

const Filters = ({ campaignId, filters }) => {
  const navigate = useNavigate();


  const [campaign, setCampaign] = useState(filters.campaign_type);
  const [promotion, setPromotion] = useState(filters.promotion);
  const [deliverable, setDeliverable] = useState(filters.deliverable);
  const [followers, setFollowers] = useState(filters.followers);
  const [gender, setGender] = useState(filters.gender);
  const [cities, setCities] = useState([]);
  const [budget, setBudget] = useState([filters.budgetlow, filters.budgethigh]);
  const [niche, setNiche] = useState("");
  const [formError, setFormError] = useState("");
  const [session, setSession] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const cityOptions = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
  ]


  useEffect(() => {
    const fetchCampaigns = async () => {
      const { data, error } = await supabase
        .from('campaign')
        .select('*')
        .eq('id', campaignId)

      if (error) {
        setError('Could not fetch data');
      } else {
        console.log(data)
        setError(null);
        setLoading(false);
      }
    }

    fetchCampaigns();
  }
  )

  async function handleFilterSubmit(event) {
    event.preventDefault()
    const { error } = await supabase
          .from('campaign')
          .update({
            campaign_type: campaign,  
            promotion: promotion, 
            deliverable: deliverable, 
            // niche: niche, 
            followers: followers, 
            gender: gender,
            budgetlow: budget[0],
            budgethigh: budget[1],
          })
          .eq('id', campaignId)
  
          if (error) {
            alert(error.error_description || error.message)
          }
          if(!error) {
            window.location.reload()
          }
  }


  const handleOptionChange = (value, selectedOptions, setSelectedOptions, maxInputs) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else if (selectedOptions.length < maxInputs) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };




  return (
    <div className='flex flex-col items-center overflow-y-scroll h-[500px] md:w-[1000px] w-full'>
        <h1 className='font-poppins text-2xl'>Filters</h1>
        <form className='w-full relative text-center' onSubmit={handleFilterSubmit}>
            {formError && <p className="error text-red-600 pt-4">{formError}</p>}
              
            <>
            <div className='flex flex-col text-center w-full '>
                
                </div>




                <div className='flex flex-col my-10 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>Campaign Type</h1>
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
                </>



                

                  <>
                    
                
                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>What Are You Promoting?</h1>
                <div className='flex md:flex-row flex-col w-full md:px-24 sm:px-56 ss:px-32 xs:px-24 px-8'>

                <RadioInput 
                  name={'promotion'}
                  value={'Cosmetics'}
                  label={'Cosmetics'}
                  onChange={(e) => setPromotion(e.target.value)}
                  checked={promotion === "Cosmetics"}
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Accessories'}
                  label={'Accessories'}
                  onChange={(e) => setPromotion(e.target.value)}
                  checked={promotion === "Accessories"}
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Fashion'}
                  label={'Fashion'}
                  onChange={(e) => setPromotion(e.target.value)}
                  checked={promotion === "Fashion"}
                />
                <RadioInput 
                  name={'promotion'}
                  value={'Food and Beverages'}
                  label={'Food and Beverages'}
                  onChange={(e) => setPromotion(e.target.value)}
                  checked={promotion === "Food and Beverages"}
                />
                </div>
                </div>


                {filters.platform === 'instagram' && (
                    <div className='flex flex-col my-20 text-center w-full'>
                      <h1 className='mb-4 font-semibold text-[20px]'>Deliverables</h1>
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

                  {filters.platform === 'youtube' && (
                  <div className='flex flex-col my-20 text-center w-full'>
                    <h1 className='mb-4 font-semibold text-[20px]'>Deliverables</h1>
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
                {filters.platform === 'twitter' && (
                  <div className='flex flex-col my-20 text-center w-full'>
                    <h1 className='mb-4 font-semibold text-[20px]'>Deliverables</h1>
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

                <div className='flex  flex-col justify-center items-center md:px-40 sm:px-56 ss:px-32 xs:px-24 px-8'>

                  <div className='flex flex-col my-6 text-center w-full '>
                  <h1 className='mb-4 font-semibold text-[20px]'>Followers Range</h1>
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
                  <h1 className='font-semibold text-[20px]'>Gender</h1>
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


                
                  <>

                
                <div className='flex flex-col my-20 text-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>Budget</h1>
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

                <div className='flex flex-col my-20 text-center justify-center w-full'>
                <h1 className='mb-4 font-semibold text-[20px]'>Location</h1>
                <div className='flex flex-row w-full justify-center md:px-0 sm:px-56 ss:px-32 xs:px-24 px-8'>
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
                
                <button className='bg-[#D10269] text-white  p-2 sm:px-14 px-10 rounded-md '>Filter</button>
                </div>
                
                

                </>

                
                
                
            </form>
    </div>
  )
}

export default Filters