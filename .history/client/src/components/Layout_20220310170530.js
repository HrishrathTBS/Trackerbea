import React from 'react';
import { Outlet } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <Header />
      <Filter />
      <div style={{ display: 'flex' }}>
        <SideBar />
        {<Outlet />}
      </div>
    </>
  );
};

export default Layout;
