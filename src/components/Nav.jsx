import React from 'react'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import logo from '../assets/logo.svg'
import { useState, useEffect } from 'react'
import { Link, useNavigate ,useLocation } from 'react-router-dom'
import { supabase } from '../utils/supaBase'

const Nav = () => {
  const location = useLocation();
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
    navigate('/login')
  }
    let Links =[
        {name:"About us",link:"#about",},
        {name:"Our Services",link:"#services"},
        // {name:"Team",link:"/"},
        // {name:"Clients",link:"#clients"},
        {name:"Case Studies",link:"#casestudy"},
        {name:"Press Release",link:"#"},
      ];
      let [open,setOpen]=useState(false);

    return (
      <div className="w-full    flex justify-around pt-3 bg-white">
        <div className="md:flex w-full    items-center justify-between py-4 md:px-10 px-2">
          <div
            className="font-bold text-2xl  cursor-pointer flex items-center font-[DM Sans] 
        text-gray-800"
          >
            <span className="text-3xl     pt-2">
              <img src={logo} className="w-[255px]   h-[34px]" />
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <img
              src={open ? close : menu}
              alt="menu"
              className=" object-contain bg-[#D10269]  p-4 m-[10px] rounded-md"
            />
          </div>

          <ul
            className={`md:flex flex-row md:items-center justify-center md:bg-inherit bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className={`lg:ml-6 ml-4 lg:text-[18px] md:text-[14px] md:my-0 my-7 ${
                  location.pathname === link.link ? 'font-bold' : ''
                }`}
              >
                 <a
              href={link.link}
              className={`text-black hover:font-bold ${
                location.hash === link.link ? 'font-bold  underline text-[rgb(122,24,72)]' : ''
              }`}
            >
              {link.name}
            </a>
              </li>
            ))}
            {!session && (
              <>
                <li className="text-[#7A1848] font-bold cursor-pointer text-[16px] md:ml-8 lg:text-[18px] md:text-[14px] md:my-0 my-7">
                  <Link to={"/signupas"}>
                    <button>Sign up</button>
                  </Link>
                </li>
                <li className="md:text-white text-[#7A1848] font-bold cursor-pointer flex flex-row md:bg-[#7A1848] md:p-2 md:px-8 rounded-md md:ml-8 lg:text-[18px] md:text-[14px] md:my-0 my-7">
                  <Link to={"/login"}>
                    <button>Log In</button>
                  </Link>
                </li>
              </>
            )}
            {session && (
              <>
                <li className="md:text-white text-[#7A1848] font-bold cursor-pointer flex flex-row md:bg-[#7A1848] md:p-2 md:px-8 rounded-md md:ml-8 lg:text-[18px] md:text-[14px] md:my-0 my-7">
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
}

export default Nav