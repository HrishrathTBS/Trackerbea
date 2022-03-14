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
        <h1>Filter data</h1>
        <Filter />
        {<Outlet />}
      </div>
    </>
  );
};

export default Layout;
