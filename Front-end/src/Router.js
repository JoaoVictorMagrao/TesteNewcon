import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TouristSpot from './pages/TouristSpot';

export function Router() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/TouristSpot" element={<TouristSpot />}/>
    </Routes>
  );
}