import React from 'react';
import { Outlet } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <SideBar />
        {<Outlet />}
        <Filter />
      </div>
    </>
  );
};

export default Layout;