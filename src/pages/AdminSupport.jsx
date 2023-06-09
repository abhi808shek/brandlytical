import React, { useState, useEffect } from 'react'
import InputField from '../components/InputField'
import { supabase } from '../utils/supaBase';
import styles from '../styles';
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from '../components/DropDown';
import CardModal from '../components/CardModal';

const AdminSupport = () => {

  const [error, setError] = useState();
  const [issues, setIssues] = useState('');
  const [brand_agency, setBrand_agency] = useState('');
  const [campaign, setCampaign] = useState('');
  const [session, setSession] = useState();
  const [formError, setFormError] = useState(null)
  const [profiles, setProfiles] = useState();
  const [brandagencyOptions, setBrandagencyOptions] = useState([]);
  const [campaignOptions, setCampaignOptions] = useState([]);
  const [created_by, setCreated_by] = useState();
  const [loading, setLoading] = useState();
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
  
    setBrandagencyOptions(options);
    setLoading(false);
    console.log(brandagencyOptions);

  }

  async function setCampaignData(campaigns) {
    const { data, error } = await supabase
          .from('campaign')
          .select('*')
          .eq('uid', campaigns)

        if (error) {
          setError('Could not fetch data')
          setCampaignOptions(null)
        } else {
          console.log(data)
          
          const options = data.map(item => ({
            value: item.id,
            label: item.campaign_type
          }));
        
          setCampaignOptions(options);
          setLoading(false);
          console.log(campaignOptions);
        }
  }


  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session && session.user.id)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  },[])

  async function handleSubmit(event) {
    event.preventDefault()

    if (campaign === '' || brand_agency === '' || issues === '') {
        setFormError('Please fill all fields correctly')
    } else {
        console.log(issues, brand_agency, campaign)

        const { error } = await supabase
        .from('support')
        .insert({ 
          created_by: created_by, 
          created_for: brand_agency,
          campaign_id: campaign,
          description: issues,
         })
         if (error) {
          setError(error.error_description)
         } 

         setIsOpen(true)
    }
    

  }


  return (
    <div>
            <div className='bg-white  md:w-[800px] sm:w-[650px] w-[280px] '>
            

            <div className={`   `}>
              <div className={` flex justify-center  flex-col items-center`}>
                <h1 className='text-black font-normal md:text-[35px] text-[25px] font-poppins'>Support</h1>
              </div>
            </div>

            <div className={` `}>
              <div className={` flex justify-center flex-col mt-[50px]`}>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5 pb-5'>


                    <div className='flex justify-center w-full flex-col items-center md:items-start'>
                    <div className='flex md:flex-row flex-col md:px-5 w-full justify-between'>

                    <DropDown
                        selectoptions={brandagencyOptions}
                        value={brand_agency}
                        onChange={(e) => {
                          setBrand_agency(e.target.value);
                          setCampaignData(e.target.value);
                          }}
                        label={'Select Brand/Agency'}
                    />
                    
                    
                    

                    <DropDown
                        selectoptions={campaignOptions}
                        value={campaign}
                        onChange={(e) => {setCampaign(e.target.value);}}
                        label={'Select Campaign'}
                    />
                    
                    

                    </div>


                    <div className='flex flex-col md:px-5 w-full mt-8'>
                    <label className='font-poppins text-lg pb-2'>Explain your Issues *</label>
                    <textarea
                    value={issues}
                    onChange={(e) => setIssues(e.target.value)}
                    className='border border-[#FFD397] rounded-sm p-2 mb-4 h-48 resize-none'
                    ></textarea>

                    </div>
                    </div>
                    

                    <button className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-8  text-center rounded-md'>
                    Send
                    </button>
                    {formError && <p className="error text-red-600 pt-4">{formError}</p>}
                </form>
              </div>
            </div>
        </div>

        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={false}>
        <p className='font-poppins font-bold'>{error ? error : 'Issue succesfully sent!'}</p>
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

export default AdminSupport