import React, { useState } from 'react'
import { supabase } from '../utils/supaBase'

const DashboardHome = () => {

    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
          console.log(session && session.user.id)

          
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
      }, [])


  return (
    <div>
        Home
    </div>
  )
}

export default DashboardHome