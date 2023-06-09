import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supaBase'
import ApproveCard from '../components/ApproveCard';
import UserReportCard from '../components/UserReportCard';
import UserSupportCard from '../components/UserSupportCard';

const UserSupportData = () => {

    const [support, setSupport] = useState();
    const [error, setError] = useState();
    const [session, setSession] = useState();
    const [creatorProfile, setCreatorProfile] = useState();
  
    useEffect(() => {
  
      supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
          console.log(session && session.user.id)
  
  
      async function fetchSupports() {
        
          const { data, error } = await supabase
            .from('support')
            .select('*')
            .eq('created_for', session.user.id)
            
          if (error) {
            setError('Could not fetch data')
            setSupport(null)
          } else {
            setSupport(data) 
            setError(null)
            console.log(data)

            
          }
        
      }
  
      fetchSupports();  
  })
  
  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
  })
  
    }, [])
  return (
    <div className='items-center flex flex-col w-full'>
    <h1 className='font-poppins text-xl mb-10 '>Support</h1>
    <div className='grid  grid-cols-1 gap-y-4 w-full'>
    {
          (support && support.map(item => (
          <UserSupportCard support={item} key={item.id} /> 
        )))
        }
    </div>
        
    </div>
  )
}

export default UserSupportData