import React from 'react';
import DrawerLeft from '../Components/DrawerLeft';

function Layout({children, titleDrawer, menuDrawer}) {

  return (
    <div>
      <DrawerLeft title={titleDrawer} menu={menuDrawer}/>
      {children}
    </div>
  );
}

export default Layout;