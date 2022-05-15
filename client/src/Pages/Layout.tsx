import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../Components';
import { NavBarProps } from '../utils';

function Layout({ language, setLanguage }: NavBarProps) {
  return (
    <div>
      <Nav language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
