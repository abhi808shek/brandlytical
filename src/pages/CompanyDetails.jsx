import React, { useState, useEffect } from 'react'
import InputField from '../components/InputField'
import { supabase } from '../utils/supaBase';
import styles from '../styles';

const CompanyDetails = () => {

    const [error, setError] = useState();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [gstno, setGstno] = useState('');
    const [comlocation, setComlocation] = useState('');
    const [socialmedia, setSocialmedia] = useState('');
    const [formError, setFormError] = useState(null)
    const [session, setSession] = useState();
  
  
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
  
      if (name === '' || designation === '' || comlocation === '' || socialmedia === '' || gstno === '') {
          setFormError('Please fill all fields correctly')
      } else {
          const { error } = await supabase
          .from('profiles')
          .update({ company_name: name, designaton: designation, location: comlocation, social_media: socialmedia, gst_no: gstno })
          .eq('id', session.user.id)
  
          if (error) {
              console.log(error)
              setFormError('Please fill in all the fields correctly.')
            } else {
              window.location.reload(true); 
            }
      }
      
  
  
  
    }

  return (
    <div>
            <div className='bg-white  md:w-[800px] sm:w-[650px] w-[400px]'>
            

            <div className={`   `}>
              <div className={` flex justify-center  flex-col items-center`}>
                <h1 className='text-black font-semibold md:text-[40px] text-[25px] font-poppins'>Company Details</h1>
              </div>
            </div>

            <div className={` `}>
              <div className={` flex justify-center flex-col mt-[50px]`}>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5 pb-5'>


                    <div className='flex md:flex-row justify-center w-full flex-col items-center md:items-start'>
                    <div className='flex flex-col md:px-5 w-1/2'>

                    <InputField
                    label='FULL NAME'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <InputField
                    label='DESIGNATION'
                    id='designation'
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    />
        
                    </div>


                    <div className='flex flex-col md:px-5 w-1/2'>

                    <InputField
                    label='GST NO'
                    id='gst'
                    value={gstno}
                    onChange={(e) => setGstno(e.target.value)}
                    />

                    <InputField
                    label='LOCATION'
                    id='location'
                    value={comlocation}
                    onChange={(e) => setComlocation(e.target.value)}
                    />

                    <InputField
                    label='SOCIAL MEDIA HANDLE'
                    id='socialmedia'
                    value={socialmedia}
                    onChange={(e) => setSocialmedia(e.target.value)}
                    />
                  
                    </div>
                    </div>
                    

                    <button className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                    Save Changes 
                    </button>
                    {formError && <p className="error text-red-600 pt-4">{formError}</p>}
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetails