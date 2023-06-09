import React, { useState, useEffect } from 'react'
import InputField from '../components/InputField'
import { supabase } from '../utils/supaBase';
import styles from '../styles';
import CardModal from '../components/CardModal';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [formError, setFormError] = useState(null)
    const [session, setSession] = useState();
    const[isOpen, setIsOpen] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()

        if(newPassword === confirmPassword) {
            if(newPassword !== '' || confirmPassword !== '') {
                await supabase.auth.updateUser({ password: newPassword })
                setIsOpen(true)
            } else {
                setFormError('Please fill in all the fields correctly.')
            }
            
        } else {
            setFormError('Please fill in all the fields correctly.')
        }
    }

    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut() 
      navigate('/login')
    }


    
  return (
    <div>
            <div className='bg-white flex flex-col items-center mt-20   md:w-full sm:w-[650px] w-[400px]'>
            

            <div className={`   `}>
              <div className={` flex justify-center   flex-col items-center`}>
                <h1 className='text-black font-semibold md:text-[40px] text-[25px] font-poppins'>Change Password</h1>
              </div>
            </div>

            <div className={` `}>
              <div className={` flex justify-center flex-col mt-[50px]`}>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5 pb-5'>


                    <div className='flex md:flex-row justify-center w-full flex-col items-center md:items-start'>
                    <div className='flex flex-col md:px-5 w-1/2'>

                    <InputField
                    label='SET NEW PASSWORD'
                    id='newpassword'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />

        
                    </div>


                    <div className='flex flex-col md:px-5 w-1/2'>

                    <InputField
                    label='CONFIRM PASSWORD'
                    id='confirmpassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                  
                    </div>
                    </div>
                    

                    <button className='text-white font-[500] text-[16px] p-2 md:px-20 px-10 bg-[#D10269]  mt-10 text-center rounded-md'>
                    Change Password 
                    </button>
                    {formError && <p className="error text-red-600 pt-4">{formError}</p>}
                </form>
              </div>
            </div>
        </div>

        <CardModal open={isOpen} onCLose={() => {setIsOpen(false)}}>
        <p className='font-poppins font-bold text-center'>Your password has been changed succesfully!</p>
        <button onClick={() => {
            setIsOpen(false)
            handleSignOut();
            }}
            className='mt-4 bg-[#D10269] p-2 px-10 rounded-sm  text-white sm:text-[15px] text-[12px]'
            >OK</button>
        </CardModal>
    </div>
  )
}

export default ChangePassword