import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import LandingPage from './components/LandingPage';
import ErrorBoundary from './components/ErrorBoundry';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
const user = {
  name: 'John Doe',
  role: 'Subscriber',
  profileImage: 'https://via.placeholder.com/80', // Placeholder image for profile
};

const useStyles = makeStyles({
  heroSection: {
    background: '#f0f4f8',
    padding: '60px 0',
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardMedia: {
    height: 200,
    width: '100%',
  },
  cardContent: {
    padding: '16px',
  },
  button: {
    marginTop: '20px',
  },
  footer: {
    backgroundColor: '#f0f4f8',
    padding: '20px 0',
    textAlign: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const user = {
    name: 'Musharaf',
    role: 'admin',
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/landingpage"
            element={
              <ErrorBoundary>
                <LandingPage />
              </ErrorBoundary>
            }
          />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/" element={<Home props={user} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;

// https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/order-dashboard

// https://mui.com/toolpad/core/templates/nextjs-dashboard
