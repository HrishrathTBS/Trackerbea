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
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {<Outlet />}
          <Filter />
        </Box>
      </div>
    </>
  );
};

export default Layout;
