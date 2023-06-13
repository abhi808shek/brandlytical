import React from 'react'
import styles from '../styles'
import Navbar from '../components/Navbar'
import FormInput from '../components/FormInput'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { supabase } from '../utils/supaBase'
import login_img from '../assets/login_img_png.png'
import { CartState } from '../context/Context'
import CardModal from '../components/CardModal'
import mainLoginImg from "../assets/mainLoginImg.PNG"
const ForgotPassword = () => {

  const { userState, userDispatch } = CartState();

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  async function resetPass(event) {
    event.preventDefault()
    console.log(email)
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/resetpassword',
      })
      setIsOpen(true)
  }


  return (
    <div className='flex md:flex-row  h-[100vh] flex-col w-full  '>

    <div className=' bg-[#FFF9F1] h-[100vh ] overflow-hidden md:w-3/5 w-full'>
        {/* <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div> */}

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
            <h1 className='text-black font-bold md:text-[40px] text-[30px] font-poppins'>FORGOT PASSWORD</h1>
            <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>ENTER YOUR REGISTERED EMAIL</p>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth} flex justify-center text-center flex-col mt-[50px]`}>
                <form onSubmit={resetPass} className='flex flex-col items-center w-full mb-5 pb-5 lg:px-20 md:px-18 sm:px-28 px-16'>


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
                
    
                
                
      
                <button className='text-white font-[700] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                Send Link 
                </button>
                
            </form>
                
          </div>
        </div>
    </div>
    

    <div className='flex h-[300px] md:w-2/5 w-full fixed right-0 md:visible invisible'>
      <img src={mainLoginImg} className='w-screen h-screen'></img>
    </div>

    <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}} showClose={true}>
        <p className='font-poppins font-bold text-center'>Email has been sent succesfully!</p>
        
        </CardModal>
    </div>
  )
}

export default ForgotPassword