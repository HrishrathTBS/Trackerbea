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
        <div style={{ display: 'flex' }}>
          {<Outlet />}
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Layout;
