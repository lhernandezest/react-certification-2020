import React, { useReducer } from 'react';
import styled from 'styled-components';
import './Layout.sass';
import { colors } from '../../utils/constants';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';
import TopMenu from '../Menus/TopMenu/TopMenu.component';
import LeftMenu from '../Menus/LeftMenu/LeftMenu.component';

const Container = styled.main`
  background: ${colors.BG_SITE};
  color: ${colors.FONT_SITE};
`;

function Layout({ children }) {
  const [state, dispatch] = useReducer(DarkModeReducer, {
    darkMode: false,
  });

  return (
    <Container className="layout">
      <DarKModeContext.Provider value={{ state, dispatch }}>
        <TopMenu />
        <LeftMenu />
        {children}
      </DarKModeContext.Provider>
    </Container>
  );
}

export default Layout;
