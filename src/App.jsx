import React, { Children } from 'react'
import HomePage from './pages/HomePage'
import SignupAs from './pages/SignupAs'
import CreateAccount from './pages/CreateAccount';
import { BrowserRouter as Router, Link, NavLink, Route, Routes, useNavigate, useLocation, Outlet } from "react-router-dom";
import { supabase } from './utils/supaBase';
import Approval from './pages/Approval';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import EvalOrCompleteProfile from './pages/EvalOrCompleteProfile';
import CampaignType from './pages/CampaignType';
import Test from './pages/Test';
import CampaignSubmitted from './pages/CampaignSubmitted';
import Influencers from './pages/Influencers';
import Subscription from './pages/Subscription';
import CreateAccountAgency from './pages/CreateAccountAgency';
import SelectCampaignType from './pages/SelectCampaignType';
import UserCampaigns from './pages/UserCampaigns';
import {Layout, Menu} from 'antd'
import { CartState } from './context/Context';
import BrandApproval from './pages/BrandApproval';
import CampaignApproval from './pages/CampaignApproval';
import CampaignApproved from './pages/CampaignApproved';
import InfluencerListAdmin from './pages/InfluencerListAdmin';
import { AiFillAccountBook } from 'react-icons/ai';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ManageProfile from './pages/PersonalDetails';
import PersonalDetails from './pages/PersonalDetails';
import CompanyDetails from './pages/CompanyDetails';
import ChangePassword from './pages/ChangePassword';
import AdminDashboardHome from './pages/AdminDashboardHome';
import CreateAccountTeam from './pages/CreateAccountTeam';
import TeamApproval from './pages/TeamApproval';
import AdminSupport from './pages/AdminSupport';
import ThankyouPage from './pages/ThankyouPage';
import AddInfluencer from './pages/AddInfluencer';
import AgencyApproval from './pages/AgencyApproval';
import ForgotPassword from './pages/ForgotPassword';
import AdminReports from './components/AdminReports';
import UserReports from './pages/UserReports';
import UserSupportData from './pages/UserSupportData';
import BulkImport from './pages/BulkImport';
// import Navbar from './components/Navbar/Navbar';



const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { state: { cart }, dispatch, filterDispatch } = CartState()

  const { userState, userDispatch } = CartState();

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

  const handleMyCampaigns = async () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signupas" element={<SignupAs />} />
        <Route path="/signupasbrand" element={<CreateAccount />} />
        <Route path="/signupasagency" element={<CreateAccountAgency />} />
        <Route path="/signupasteam" element={<CreateAccountTeam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/resetpassword"
          element={!session ? <Login /> : <ChangePassword />}
        />
        {/* <Route path="/approval" element={<Approval /> }/> */}
        <Route
          path="/evalprofile"
          element={!session ? <Login /> : <EvalOrCompleteProfile />}
        />
        {/* <Route path="/campaigntype" element={<CampaignType /> }/>
    <Route path="/selectcampaigntype" element={<SelectCampaignType /> }/> */}
        {/* <Route path="/selectinfluencers" element={!session ? <Login/> : <Influencers /> }/> */}
        {/* <Route path="/campaignsubmitted" element={<CampaignSubmitted /> }/> */}
        <Route
          path="/subscribe"
          element={!session ? <Login /> : <Subscription />}
        />
        <Route
          path="/thankyou"
          element={!session ? <Login /> : <ThankyouPage />}
        />
      </Routes>

      <Routes>
        <Route
          path="/dashboard"
          element={
            !session ? (
              <Login />
            ) : (
              <UserDashboard
                signOut={handleSignOut}
                handleCampaign={handleMyCampaigns}
              />
            )
          }
        >
          <Route path="" element={<div>Home</div>}></Route>
          <Route
            path="campaign"
            element={!session ? <Login /> : <UserCampaigns />}
          ></Route>
          <Route path="report" element={<UserReports />}></Route>
          <Route path="support" element={<UserSupportData />}></Route>
          <Route path="signout" element={<div>Home</div>}></Route>
          <Route
            path="managepersonal"
            element={!session ? <Login /> : <PersonalDetails />}
          ></Route>
          <Route
            path="managecompany"
            element={!session ? <Login /> : <CompanyDetails />}
          ></Route>
          <Route
            path="changepassword"
            element={!session ? <Login /> : <ChangePassword />}
          ></Route>
          <Route
            path="campaigntype"
            element={!session ? <Login /> : <CampaignType />}
          />
          <Route
            path="selectcampaigntype"
            element={!session ? <Login /> : <SelectCampaignType />}
          />
          <Route
            path="selectinfluencers"
            element={!session ? <Login /> : <Influencers />}
          />
        </Route>
      </Routes>

      <Routes>
        <Route
          path="/dashboardadmin"
          element={
            !session ? <Login /> : <AdminDashboard signOut={handleSignOut} />
          }
        >
          <Route
            path=""
            element={!session ? <Login /> : <AdminDashboardHome />}
          ></Route>
          <Route
            path="campaign"
            element={!session ? <Login /> : <Approval />}
          ></Route>
          <Route
            path="pendingcampaign"
            element={!session ? <Login /> : <CampaignApproval />}
          ></Route>
          <Route
            path="approvedcampaign"
            element={!session ? <Login /> : <CampaignApproved />}
          ></Route>
          <Route
            path="agency"
            element={!session ? <Login /> : <AgencyApproval />}
          ></Route>
          <Route
            path="brand"
            element={!session ? <Login /> : <BrandApproval />}
          ></Route>
          <Route
            path="team"
            element={!session ? <Login /> : <TeamApproval />}
          ></Route>
          <Route
            path="influencers"
            element={!session ? <Login /> : <InfluencerListAdmin />}
          ></Route>
          <Route
            path="addinfluencers"
            element={!session ? <Login /> : <BulkImport />}
          ></Route>
          <Route
            path="report"
            element={!session ? <Login /> : <AdminReports />}
          ></Route>
          <Route
            path="support"
            element={!session ? <Login /> : <AdminSupport />}
          ></Route>
          <Route path="signout" element={<div>Home</div>}></Route>
          <Route
            path="managepersonal"
            element={!session ? <Login /> : <PersonalDetails />}
          ></Route>
          <Route
            path="changepassword"
            element={!session ? <Login /> : <ChangePassword />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App