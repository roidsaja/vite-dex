import React from 'react';
import { Outlet } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../../styles/globalStyles';

import Nav from '../Nav';

const Layout: React.FC = () => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Nav />
      <Outlet />
    </NextUIProvider>
  );
};

export default Layout;
