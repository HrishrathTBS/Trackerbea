import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <h1>Filter Data</h1>
        {<Outlet />}
      </div>
    </>
  );
};

export default Layout;
