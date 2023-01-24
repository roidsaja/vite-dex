import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';

const Layout: React.FC = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
