import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ErrorBoundary from './components/ErrorBoundry';
import AuthForm from './components/Auth/AuthForm';
import AdminHome from './pages/admin/AdminHome';
import SubscriberHome from './pages/subscriber/SubscriberHome';
import LandingHome from './components/LandingPage/LandingHome';
import ForgotPassword from './components/Auth/ForgotPassword';
// import PaymentManagementPage from './pages/PaymentManagementPage.jsx'
import About from './components/Footer/About';
import Contact from './components/Footer/Contact';
import "./App.css"

const App = () => {


  const user = {
    name: 'Musharaf',
    role: 'admin',
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <LandingHome/>
              </ErrorBoundary>
            }
          />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />

          <Route path="/login" element={<AuthForm />} />
          <Route path="/admin" element={<AdminHome props={user} />} />
          <Route path="/subscriber" element={<SubscriberHome props={user} />} />
          {/* <PaymentManagementPage/> */}
          <Route path="/forget-password" element={<ForgotPassword />} /> 


        </Routes>
      </Router>
    </>
  );
};

export default App;

// https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/order-dashboard

// https://mui.com/toolpad/core/templates/nextjs-dashboard
