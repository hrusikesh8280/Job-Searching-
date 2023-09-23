import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import LandingPage from './LandingPage';
import JobList from './Job/JobList';
import JobApplicationSuccess from './Job/JobApplicationSuccess';

const AllRoutes = () => {
  // Check for login details in localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {user ? (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs/:language" element={<JobList />} />
          <Route path="/success" element={<JobApplicationSuccess />} />
        </>
      ) : (
        <Route path="/" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};

export default AllRoutes;
