import React, { useReducer } from 'react';
import './Layout.styles.css';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';
import TopMenu from '../Menus/TopMenu/TopMenu.component';
import LeftMenu from '../Menus/LeftMenu/LeftMenu.component';

function Layout({ children }) {
  const [state, dispatch] = useReducer(DarkModeReducer, {
    darkMode: false,
  });

  return (
    <main className="container">
      <DarKModeContext.Provider value={{ state, dispatch }}>
        <TopMenu />
        <LeftMenu />
        {children}
      </DarKModeContext.Provider>
    </main>
  );
}

export default Layout;
