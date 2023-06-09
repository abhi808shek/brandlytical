import React, { useState, useEffect, useDebugValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
import { Outlet } from 'react-router-dom';
import { FaHeadphones, FaIdCard, FaLaptop, FaSignOutAlt } from 'react-icons/fa';
import { HiOfficeBuilding, HiSpeakerphone } from 'react-icons/hi';
import { RiMenuFoldLine, RiMenuUnfoldLine, RiPriceTag3Line } from 'react-icons/ri';
import { MdPassword } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import { supabase } from '../utils/supaBase';
import { useLocation } from 'react-router-dom';
import InfluencerHeaderAdmin from './InfluencerHeaderAdmin';



const { Header, Sider, Content } = Layout;

const AdminDashboard = ({ signOut }) => {

  const location = useLocation();
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
    if (key === '/dashboardadmin/signout') {
      signOut();
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
          
          className={`bg-[#D10269] text-black bg-opacity-50 h-screen py-4 w-[${siderWidth}px] `}
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          theme="admin"
          onClick={handleMenuClick}
          selectedKeys={[window.location.pathname]}
          items={[
            {
              key: '/dashboardadmin',
              label: profile ? profile[0].type : 'loading',
              className: 'bg-white text-blue-500 '
            },
            {
              key: '/dashboardadmin',
              icon: <FaLaptop />,
              label: 'Dashboard',
              
            },
            {
              key: '/dashboardadmin/campaign',
              icon: <HiSpeakerphone />,
              label: 'Campaign Approval',
              children: [
                {
                  key: '/dashboardadmin/pendingcampaign',
                  label: 'Pending Campaigns',
                },
                {
                  key: '/dashboardadmin/approvedcampaign',
                  label: 'Approved Campaigns',
                },
              ],
            },
            {
              key: '/dashboardadmin/agency',
              icon: <HiOfficeBuilding />,
              label: 'Agency Approval',
            },
            {
              key: '/dashboardadmin/brand',
              icon: <RiPriceTag3Line />,
              label: 'Brand Approval',
            },
            {
              key: '/dashboardadmin/team',
              icon: <RiPriceTag3Line />,
              label: 'Team Approval',
            },
            {
              key: '/dashboardadmin/influencers',
              icon: <FaIdCard />,
              label: 'Influencers',
            },
            {
              key: '/dashboardadmin/addinfluencers',
              icon: <FaIdCard />,
              label: 'Add Influencers',
            },
            {
              key: '/dashboardadmin/report',
              icon: <FaIdCard />,
              label: 'Send Reports',
            },
            {
              label: "Manage Profile", 
              key:'/dashboardadmin/manage',
              children: [
                {
                  key: '/dashboardadmin/managepersonal',
                  icon: <BsPersonVcardFill />,
                  label: 'Personal Details',
                },
                {
                  key: '/dashboardadmin/changepassword',
                  icon: <MdPassword />,
                  label: 'Change Password',
                },
              ],
              },
            {
              key: '/dashboardadmin/support',
              icon: <FaHeadphones />,
              label: 'Support',
            },
            {
              key: '/dashboardadmin/signout',
              icon: <FaSignOutAlt />,
              label: 'Sign Out',
              danger: true,
            },
          ]}
        />
      </Sider>
      <Layout className='w-full'>
          {!(window.location.pathname === '/dashboardadmin/influencers') &&
            <Header style={{ background: '#fff', padding: 0 }} className='w-full h-[100px]  flex flex-row items-center'>
          
          <Button
            type="secondary"
            className='bg-[#D10269] ml-3 text-xl '
            icon={collapsed ? <RiMenuUnfoldLine/> : <RiMenuFoldLine />}
            onClick={toggleCollapsed}
            style={{ width: 45, height: 45,  alignItems: 'center', paddingTop: 12, paddingLeft: 12  }}
          />
          <h1 className='ml-10 md:text-2xl text-lg font-poppins'>hello {profile ? profile[0].company_name : 'loading...'}</h1>
          
          
        </Header>
          }


          {window.location.pathname === '/dashboardadmin/influencers' &&
            <Header style={{ background: '#fff', padding: 0 }} className='w-full sm:h-[150px] h-[200px] flex flex-col sm:items-start items-center'>
          <div className='flex flex-row mt-6 items-center'>
          <Button
            type="secondary"
            className='bg-[#D10269] ml-3 text-xl '
            icon={collapsed ? <RiMenuUnfoldLine/> : <RiMenuFoldLine />}
            onClick={toggleCollapsed}
            style={{ width: 45, height: 45,  alignItems: 'center', paddingTop: 12, paddingLeft: 12  }}
          />
          <h1 className='ml-10 md:text-2xl text-lg font-poppins'>hello {profile ? profile[0].company_name : 'loading...'}</h1>
          </div>
          
          <InfluencerHeaderAdmin/>
          
          
        </Header>
          }
        
        <Content className='bg-white flex flex-col items-center overflow-y-scroll h-full p-10'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
