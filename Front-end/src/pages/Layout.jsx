import React, { useState, useEffect, Children } from 'react';
import DrawerLeft from '../Components/DrawerLeft';

import { usePontosContext } from '../context/index';

function Layout({children, titleDrawer, menuDrawer}) {
  const [data, setData] = useState('');
  const { setVisualizar, pontos } = usePontosContext();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(!refresh);
  }, [pontos]);

  return (
    <div>
      <DrawerLeft title={titleDrawer} menu={menuDrawer}/>
      {children}
      {/* <CardPrincipalTable setData={() => setData()} /> */}
    </div>
  );
}

export default Layout;