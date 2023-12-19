import React, { useState, useEffect } from 'react';
import DrawerLeft from '../Components/DrawerLeft';


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
      <FilterTouristSpot />
    </div>
  );
}

export default Home;