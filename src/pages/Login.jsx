import React from 'react'
import styles from '../styles'
import Navbar from '../components/Navbar'
import FormInput from '../components/FormInput'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { supabase } from '../utils/supaBase'
import login_img from '../assets/login_img_png.png'
import { CartState } from '../context/Context'

const Login = () => {

  const { userState, userDispatch } = CartState();

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  async function handleLogin(event) {
    event.preventDefault()

    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

    if (error) {
      alert(error.error_description || error.message)
    } else {
        // console.log('auth')
        // console.log(data.user.id)
        
        checkAdmin(data.user.id);
    } 
    setLoading(false)
    
  }

  async function checkAdmin(uid) {
        const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', uid)
        
          

      if (error) {
        setError('Could not fetch data')
        setProfile(null)
      } else {
        setProfile(data) 
        setError(null)
        console.log('loggedin')
        console.log(data)
      }

      redirect(data);
      
  }

  function redirect(data) {
    console.log(data[0].admin)
  }

  function redirect(data) {
    console.log('redirect func called')
    // if(data[0].admin || data[0].type === 'team') {
    //   userDispatch({
    //     type: 'LOGIN',
    //     payload : data[0].id
    //   })
    //   navigate('/dashboardadmin')
    // } else {
      userDispatch({ 
        type: 'LOGIN',
        payload : data[0].id
      })
      navigate('/evalprofile', {
        state: {
          userId: data[0].id,
        }
      })

      
    // }
  }

  const handleSignOut = async () => {
    
    const { error } = await supabase.auth.signOut()
  }

  return (
    <div className='flex md:flex-row flex-col w-full h-full'>

    <div className='bg-white overflow-hidden md:w-3/5 w-full'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
            <h1 className='text-black font-bold md:text-[40px] text-[30px] font-poppins'>LOGIN</h1>
            <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>SIGNUP TO GET EXCLUSIVE DATA...</p>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth} flex justify-center text-center flex-col mt-[50px]`}>
                <form onSubmit={handleLogin} className='flex flex-col items-center w-full mb-5 pb-5 lg:px-20 md:px-18 sm:px-28 px-16'>


                <div className='flex flex-col my-3 text-start w-full'> 
                <label htmlFor='email' className='py-2 pr-5 font-poppins font-normal text-[20px] text-black'>EMAIL</label>
                <input 
                type="text"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className= 'border-[1px] border-[#7A1848] rounded-md p-3 border-opacity-40'
                />
                </div>
                
                <div className='flex flex-col my-3 text-start w-full'> 
                <label htmlFor='password' className='py-2 pr-5 font-poppins font-normal text-[20px] text-black'>PASSWORD</label>
                <input 
                type="text"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className= 'border-[1px] border-[#7A1848] rounded-md p-3 border-opacity-40'
                />
                </div>
    
                
                
      
                <button className='text-white font-[700] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                Login 
                </button>
                
            </form>

            <button
            className='mb-10'
            onClick={() => {
              navigate('/forgotpassword')
            }}
            >forgot password</button>
                
          </div>
        </div>
    </div>
    

    <div className='flex h-[300px] md:w-2/5 w-full fixed right-0 md:visible invisible'>
      <img src={login_img} className='w-screen h-screen'></img>
    </div>
    </div>
  )
}

export default Login