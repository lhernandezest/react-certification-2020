import React from 'react';

import './Layout.styles.css';
import TopMenu from '../Menus/TopMenu.component';
import LeftMenu from '../Menus/LeftMenu.component';

function Layout({ children }) {
  return (
    <main className="container">
      <TopMenu />
      <LeftMenu />
      {children}
    </main>
  );
}

export default Layout;
