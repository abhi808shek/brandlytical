import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { navLinks } from '../constants'
import arrowUp from '../assets/arrow-up.svg'
import { useEffect } from 'react'
import { supabase } from '../utils/supaBase'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from '../context/Context'


const Navbar = () => {

  const { userState, userDispatch } = CartState();

  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

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

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut() 
    userDispatch({
      type: 'LOGOUT'
    })
    navigate('/login')
  }

  return (
    <nav className={`pb-36 sm:pb-0 w-full flex justify-between items-center navbar bg-red-400`}>
      <Link to={'/'}>
      <img src={logo} className='w-[117px] h-[128px]'/>
      </Link>
      

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
      { !session && ( <>
        <li className='text-[#FD3599] font-normal cursor-pointer text-[16px] mr-10'>
        <Link to={'/signupas'}>
        <button>Signup</button>
        </Link>
        </li>
        <li className='text-black font-normal cursor-pointer text-[16px] bg-white p-2 px-8 border-b-4 border-[#FD3599] flex flex-row'>
        <Link to={'/login'}>
        <button>Login</button>
        </Link>
        </li>
        </>
      )

      }
      {session && <li className='text-black font-normal cursor-pointer text-[16px] bg-white p-2 px-8 border-b-4 border-[#FD3599] flex flex-row'>
        <button onClick={handleSignOut}>Logout</button>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>
        </li>}
        
        
        
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar sm:hidden`}>
      <ul className='list-none flex justify-end items-center flex-1 flex-col'>
      { !session && ( <>
        <li className='text-[#FD3599] font-normal cursor-pointer text-[16px] mr-10'>
        <Link to={'/signupas'}>
        <button>Signup</button>
        </Link>
        </li>
        <li className='text-black font-normal cursor-pointer text-[16px] bg-white p-2 px-8 border-b-4 border-[#FD3599] flex flex-row'>
        <Link to={'/login'}>
        <button>Login</button>
        </Link>
        </li>
        </>
      )

      }
      {session && <li className='text-black font-normal cursor-pointer text-[16px] bg-white p-2 px-8 border-b-4 border-[#FD3599] flex flex-row'>
        <button onClick={handleSignOut}>Logout</button>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>
        </li>}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar