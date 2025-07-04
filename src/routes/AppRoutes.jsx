import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../features/properties/pages/HomePage';
import PropertyDetailPage from '../features/properties/pages/PropertyDetailPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;