import React from 'react';
import { BarLoader } from 'react-spinners';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <BarLoader color="#00BFFF" height={5} width={150} />
  </div>
);

export default LoadingSpinner;