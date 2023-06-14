import React from 'react'
import styles from '../styles'
import Navbar from '../components/Navbar'
import FormInput from '../components/FormInput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../utils/supaBase'
import login_img from '../assets/login_img_png.png'
import InputField from '../components/InputField'
import LoginImg from '../assets/LoginImg.png'

const CreateAccountTeam = () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[designation, setDesignation] = useState('')
    const[phone, setPhone] = useState('')
    const[password, setPassword] = useState('')
   
   const navigate = useNavigate()  
   const [loading, setLoading] = useState(false)
   
    async function handleSubmit(event) {
         event.preventDefault()
   
         setLoading(true)
         const { data, error } = await supabase.auth.signUp({
           email: email,
           password: password,
         })
   
         if (error) {
         alert(error.error_description || error.message)
         } else {
           console.log(data.user.id)
           const { error } = await supabase
           .from('profiles')
           .insert({ 
             id: data.user.id, 
             company_name: name,  
             designation: designation, 
             email: email, 
             phone: phone, 
             verified: false,
             admin: false,
             completed: false,
             type: 'team'
           })
         }
         setLoading(false)
         navigate('/evalprofile', {
           state: {
             userId: data.user.id,
           }
         })
   
    }



  return (
    <div className='flex md:flex-row flex-col w-full h-[100vh]'>

    <div className='bg-white overflow-hidden md:w-3/5 w-full'>
        {/* <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div> */}

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={` flex justify-center md:mt-[100px] mt-[50px] flex-col items-center`}>
            <h1 className='text-black font-bold md:text-[40px] text-[25px] font-poppins'>CREATE AN ACCOUNT!</h1>
            <p className='font-poppins font-semibold text-[16px] text-opacity-40 text-black'>SIGNUP TO GET EXCLUSIVE DATA...</p>
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth} flex justify-center text-center flex-col mt-[50px]`}>
                <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5 pb-5'>


                <div className='flex md:flex-row justify-center w-full flex-col items-center md:items-start'>
                <div className='flex flex-col px-5 w-1/2'>
                
                <InputField
                label='NAME'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <InputField
                label='WORK EMAIL'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                label='DESIGNATION'
                id='designation'
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                />

              
             
                </div>


                <div className='flex flex-col px-5 w-1/2'>
                

                <InputField
                label='PHONE NO.'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />

                <InputField
                label='CREATE PASSWORD'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                
            
                </div>
                </div>
                

                <button className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                Signup 
                </button>
            </form>
            <p className='font-poppins text-gray-500'>OR SIGNUP AS</p>
            <div className='flex flex-row justify-between px-32 gap-x-10 mb-10 mt-10'>
            <button onClick={() => {
              navigate('/signupasbrand')
            }}
            className='border-2 px-16 p-2 border-[#7A1848] border-opacity-40'
            >BRAND</button>
            <button onClick={() => {
              navigate('/signupasagency')
            }}
            className='border-2 px-16 p-2 border-[#7A1848] border-opacity-40'
            >AGENCY</button>
            </div>
            <p className='font-poppins text-gray-500 mb-10 '>Already have an account?
            <a href='/login'
            className='text-purple-600'
            > login</a>
            </p>
          </div>
        </div>
    </div>
    

    <div className='flex h-[100vh] bg-[white] md:w-2/5 w-full fixed right-0 md:visible invisible'>
      <img src={LoginImg} className='w-screen h-screen'></img>
    </div>
    </div>
  )
}

export default CreateAccountTeam