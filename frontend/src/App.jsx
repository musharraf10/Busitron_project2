import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ErrorBoundary from './components/ErrorBoundry';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import LandingHome from './components/LandingPage/LandingHome';
// import PaymentManagementPage from './pages/PaymentManagementPage.jsx'

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
          <Route path="/login" element={<AuthForm />} />
          <Route path="/admin" element={<Home props={user} />} />
          {/* <PaymentManagementPage/> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

// https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/order-dashboard

// https://mui.com/toolpad/core/templates/nextjs-dashboard
