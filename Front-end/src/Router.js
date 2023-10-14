import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './pages/Layout/index';
import TouristSpot from './pages/TouristSpot/index';
import CardPrincipalTable from './Components/CardPrincipalTable';
export function Router() {
  const urlParams = new URLSearchParams(window.location.search);
  const idEdit = urlParams.get('id');

  return (
    <Routes>
      <Route path="/Home" element={<Layout children={<CardPrincipalTable />} menuDrawer='Cadastrar Ponto Turístico' titleDrawer={"Ponto Turístico"} />} />
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/PontoTuristico" element={<Layout children={<TouristSpot />} menuDrawer='Ir para home' titleDrawer={idEdit ? 'Editar ponto turístico' : 'Cadastrar ponto turístico' } />} />
    </Routes>
  );
}