import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
import { Outlet } from 'react-router-dom';
import { FaHeadphones, FaIdCard, FaLaptop, FaSignOutAlt } from 'react-icons/fa';
import { HiOfficeBuilding, HiSpeakerphone } from 'react-icons/hi';
import { RiMenuFoldLine, RiMenuUnfoldLine, RiPriceTag3Line } from 'react-icons/ri';
import { MdPassword } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { BsPersonVcardFill } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import { supabase } from '../utils/supaBase';


const { Header, Sider, Content } = Layout;

const UserDashboard = ({ signOut, handleCampaign }) => {


  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState();
  const [error, setError] = useState();

  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        fetchProfile(session.user.id)
  
      })
    
  }, [])

  async function fetchProfile(uid) {
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
  }
  
}

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    const handleMenuClick = ({ key }) => {
      if (key === '/dashboard/signout') {
        signOut();
      } else if (key === '/dashboard/campaign') {
        handleCampaign();
        navigate(key);
      } else {
        navigate(key);
      }
    };
  
    const [width, setWidth] = useState(window.innerWidth);
  
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
  
    const siderWidth = width < 576 ? 220 : 270;
  return (
    <Layout style={{ minHeight: '100vh' }} className='h-screen'>
    <Sider trigger={null} collapsible collapsed={collapsed} 
       theme='light' className='' width={siderWidth} >
      <div className="logo " />
      <Menu
        
        className={`bg-[#FFEFF7] bg-opacity-50 h-screen py-4 w-[${siderWidth}px]  `}
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        onClick={handleMenuClick}
        selectedKeys={[window.location.pathname]}
        items={[
            {
              label: profile ? profile[0].type : 'loading', 
              key:'/dashboard'
            },
            {
              label: "Dashboard", 
              icon: <FaLaptop />,
              key:'/dashboard'
            },
            {
              label: "My Campaigns", 
              icon: <HiSpeakerphone />,
              key:'/dashboard/campaign'
            },
            {
              label: "Select New Campaign", 
              icon: <HiSpeakerphone />,
              key:'/dashboard/selectcampaigntype'
            },
            {
              label: "Influencer Marketing Campaign", 
              icon: <HiSpeakerphone />,
              key:'/dashboard/campaigntype'
            },
            {
              label: "Manage Reports", 
              icon: <TbReport />,
              key:'/dashboard/report'
            },
            {
              label: "Support", 
              icon: <FaHeadphones />,
              key:'/dashboard/support'
            },
            {
              label: "Manage Profile", 
              key:'/dashboard/manage',
              children: [
                {
                  key: '/dashboard/managepersonal',
                  icon: <BsPersonVcardFill />,
                  label: 'Personal Details',
                },
                {
                  key: '/dashboard/managecompany',
                  icon: <GrOrganization />,
                  label: 'Company Details',
                },
                {
                  key: '/dashboard/changepassword',
                  icon: <MdPassword />,
                  label: 'Change Password',
                },
              ],
              },
            {
              label: "Sign Out", 
              icon: <FaSignOutAlt />,
              key:'/dashboard/signout'
            },
            
          ]}
      />
    </Sider>
    <Layout className='w-full'>
      <Header style={{ background: '#fff', padding: 0, margin: 0 }} className='w-full h-[100px] flex flex-row items-center'>
        <Button
          type="secondary"
          className='bg-[#D10269] ml-3 text-xl '
          icon={collapsed ? <RiMenuUnfoldLine/> : <RiMenuFoldLine />}
          onClick={toggleCollapsed}
          style={{ width: 45, height: 45,  alignItems: 'center', paddingTop: 12, paddingLeft: 12  }}
        />
        <h1 className='ml-10 md:text-2xl text-lg font-poppins'>Hello {profile ? profile[0].company_name : 'loading...'}</h1>
         
        
      </Header>
      <Content className='bg-white flex flex-col items-center overflow-y-scroll h-full p-10'>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
  )
}

export default UserDashboard