import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Profiles from './components/Profiles';
import Settings from './components/Settings';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/home" element={isAuthenticated ? <HomeWithHeaderFooter /> : <Navigate to="/" replace />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardWithHeaderFooter /> : <Navigate to="/" replace />} />
        <Route path="/reports" element={isAuthenticated ? <ReportsWithHeaderFooter /> : <Navigate to="/" replace />} />
        <Route path="/profiles" element={isAuthenticated ? <ProfilesWithHeaderFooter /> : <Navigate to="/" replace />} />
        <Route path="/settings" element={isAuthenticated ? <SettingsWithHeaderFooter /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

const HomeWithHeaderFooter = () => (
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

const DashboardWithHeaderFooter = () => (
  <>
    <Header />
    <Dashboard />
    <Footer />
  </>
);

const ReportsWithHeaderFooter = () => (
  <>
    <Header />
    <Reports />
    <Footer />
  </>
);

const ProfilesWithHeaderFooter = () => (
  <>
    <Header />
    <Profiles />
    <Footer />
  </>
);

const SettingsWithHeaderFooter = () => (
  <>
    <Header />
    <Settings />
    <Footer />
  </>
);

export default App;
