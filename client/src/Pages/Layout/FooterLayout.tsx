import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, Footer } from '../../Components';
import { NavBarProps } from '../../utils';

function FooterLayout({ language, setLanguage }: NavBarProps) {
  return (
    <div>
      <Nav language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer language={language} />
    </div>
  );
}
export default FooterLayout;
