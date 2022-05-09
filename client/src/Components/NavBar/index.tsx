import React from 'react';
import { Menu } from 'antd';

function Nav() {
  return (
    <div className="nav-container">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </div>
  );
}
export default Nav;
