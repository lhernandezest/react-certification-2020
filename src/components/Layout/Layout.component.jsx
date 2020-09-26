import React, { useReducer } from 'react';
import styled from 'styled-components';
import './Layout.sass';
import { colors } from '../../utils/constants';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';
import MenusComponent from '../Menus/Menus.component';

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
        <MenusComponent />
        {children}
      </DarKModeContext.Provider>
    </Container>
  );
}

export default Layout;
