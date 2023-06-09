import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supaBase'
import ApproveCard from '../components/ApproveCard';
import UserReportCard from '../components/UserReportCard';

const UserReports = () => {


  const [reports, setReports] = useState();
  const [error, setError] = useState();
  const [session, setSession] = useState();

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        console.log(session && session.user.id)


    async function fetchReports() {
      
        const { data, error } = await supabase
          .from('reports')
          .select('*')
          .eq('created_for', session.user.id)
          
        if (error) {
          setError('Could not fetch data')
          setReports(null)
        } else {
          setReports(data) 
          setError(null)
          console.log(data)
        }
      
    }

    fetchReports();  
})

supabase.auth.onAuthStateChange((_event, session) => {
  setSession(session)
})

  }, [])



  return (
    <div className='items-center flex flex-col'>
    <h1 className='font-poppins text-xl mb-10 '>Reports</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-y-4'>
    {
          (reports && reports.map(item => (
          <UserReportCard report={item} key={item.id} /> 
        )))
        }
    </div>
        
    </div>
  )
}

export default UserReports