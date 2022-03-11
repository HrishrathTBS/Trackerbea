import React from 'react';
import { Outlet } from 'react-router-dom';
import Filter from './Filter';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <div>
          <SideBar />
        </div>
        <Filter />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Layout;
