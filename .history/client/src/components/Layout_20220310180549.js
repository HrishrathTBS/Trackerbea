import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box sx={{ display: 'flex' }} md={12}>
          {<Outlet />}
          <Filter />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
