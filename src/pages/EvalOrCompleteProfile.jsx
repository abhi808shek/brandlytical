import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../utils/supaBase';
import { useState, useEffect } from 'react';
import styles from '../styles';
import Navbar from '../components/Navbar';
import { checkValuesAgainstBoundaries } from 'react-range';
import login_img from '../assets/login_img_png.png'
import InputField from '../components/InputField';
import { CartState } from '../context/Context'

const EvalOrCompleteProfile = () => {
  const { userState, userDispatch } = CartState();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;

  const [profile, setProfile] = useState();
  const [error, setError] = useState();
  const [website, setWebsite] = useState();
  const [socialmedia, setSocialmedia] = useState();
  const [comlocation, setComlocation] = useState();
  const [type, setType] = useState();


  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut() 
    userDispatch({
      type: 'LOGOUT'
    })
    navigate('/login')
  }

  useEffect(() => {
    
    async function fetchProfile() {

      const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          
            

        if (error) {
          setError('Could not fetch data')
          setProfile(null)
        } else {
          // if(!data[0].completed) {
          //   setType(data[0].type)
          //   setProfile(data) 
          //   setError(null)
          // }
          
          // else {
            // navigate('/dashboard', {
            //   state: {
            //     userId: userId,
            //   }
            // })
            
          // }
          if(data[0].completed) {
            if(data[0].admin || data[0].type === 'team') {
              userDispatch({
                type: 'LOGIN',
                payload : data[0].id
              })
              navigate('/dashboardadmin')
            } else {
                navigate('/dashboard', {
                  state: {
                    userId: userId,
                  }
                })
            }
          }

          else {
            setType(data[0].type)
            setProfile(data) 
            setError(null)
          }

        }
    }

    fetchProfile();

  }, [userId])

  async function handleSubmit(event) {
    event.preventDefault()

    const { error } = await supabase
    .from('profiles')
    .update({ completed: true, website: website,
       social_media: socialmedia, location: comlocation })
    .eq('id', userId)

    if (error) {
        alert(error.error_description || error.message)
      } else {
        console.log(userId)
        handleSignOut();
      }
    console.log(comlocation, website, socialmedia)
  }



    
  

  return (
    <>
    
    {profile && (<div>
      {profile[0].verified && 
        <div className='flex md:flex-row flex-col w-full h-full'>

        <div className='bg-white overflow-hidden md:w-3/5 w-full'>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar/>
              </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
              <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
                <h1 className='text-black font-bold md:text-[40px] text-[25px] font-poppins'>COMPLETE ACCOUNT!</h1>
                <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>SIGNUP TO GET EXCLUSIVE DATA...</p>
              </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
              <div className={`${styles.boxWidth} flex justify-center flex-col mt-[50px]`}>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5 pb-5'>

                    {(type === 'brand' || type === 'agency') &&
                    
                    <div className='flex md:flex-row justify-center w-full flex-col items-center md:items-start'>
                    <div className='flex flex-col px-5 w-1/2'>

                    <InputField
                    label='COMPANY WEBSITE'
                    id='website'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    />

                    <InputField
                    label='LOCATION'
                    id='comlocation'
                    value={comlocation}
                    onChange={(e) => setComlocation(e.target.value)}
                    />
        
                    </div>


                    <div className='flex flex-col px-5 w-1/2'>


                    <InputField
                    label='SOCIAL MEDIA HANDLE'
                    id='socialmedia'
                    value={socialmedia}
                    onChange={(e) => setSocialmedia(e.target.value)}
                    />
                  
                    </div>
                    </div>
                  }

                    <button className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                    Signup 
                    </button>
                </form>
              </div>
            </div>
        </div>


        <div className='flex h-[300px] md:w-2/5 w-full fixed right-0'>
          <img src={login_img} className='w-screen h-screen'></img>
        </div>
        </div>
      
      
      
      } 

      {!profile[0].verified && (
        <>
        {
          profile[0].declined && (
            <>
            <div className='flex md:flex-row flex-col w-full h-full'>

        <div className='bg-white overflow-hidden md:w-3/5 w-full'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
            <h1 className='text-black font-bold md:text-[40px] text-[25px] font-poppins'>YOUR PROFILE HAS BEEN DECLINED </h1>
            <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>please contact the support team</p>
            <div className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                Declined 
            </div>
          </div>
        </div>
        </div>

        

        <div className='flex h-[300px] md:w-2/5 w-full fixed right-0 md:visible invisible'>
            <img src={login_img} className='w-screen h-screen'></img>
            </div>
        </div>
            </>
          )
        }


        {
          !profile[0].declined && (
            <>
            <div className='flex md:flex-row flex-col w-full h-full'>

            <div className='bg-white overflow-hidden md:w-3/5 w-full'>
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar/>
              </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
              <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
                <h1 className='text-black font-bold md:text-[40px] text-[25px] font-poppins'>WE ARE EVALUATING YOUR PROFILE </h1>
                <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>In order to make sure our brand holds up a standard, Our system does not allow access to any profiles</p>
                <div className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                    Pending 
                </div>
              </div>
            </div>
            </div>



            <div className='flex h-[300px] md:w-2/5 w-full fixed right-0 md:visible invisible'>
            <img src={login_img} className='w-screen h-screen'></img>
            </div>
            </div>
            </>
          )
        }
        
            </>
          )} 
        </div>
    )}
    
    </>
  )
  }


export default EvalOrCompleteProfile