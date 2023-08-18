import React, { useState, useEffect } from 'react';


import DrawerLeft from '../Components/DrawerLeft';
import CardPrincipalTable from '../Components/CardPrincipalTable';
import { usePontosContext } from '../context/index';

function Home() {
  const [data, setData] = useState('');
  const { setVisualizar, pontos } = usePontosContext();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(!refresh);
  }, [pontos]);

  return (
    <div>
      <DrawerLeft />
      <CardPrincipalTable setData={() => setData()} />
    </div>
  );
}

export default Home;