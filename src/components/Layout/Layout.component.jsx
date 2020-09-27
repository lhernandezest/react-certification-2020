import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import './Layout.sass';
import { colors } from '../../utils/constants';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';
import VideosContext from '../../state/VideosContext';
import VideosReducer from '../../state/VideosReducer';
import MenusComponent from '../Menus/Menus.component';

const Container = styled.main`
  background: ${colors.BG_SITE};
  color: ${colors.FONT_SITE};
`;

function Layout({ children }) {
  const [darkModeState, darkModeDispatch] = useReducer(DarkModeReducer, {
    darkMode: false,
  });

  const [videosState, videosDispatch] = useReducer(VideosReducer, {
    currentSearch: 'Wizeline',
    fetchedVideos: [],
    favorites: [],
  });

  useEffect(() => {
    videosDispatch('LOAD_FROM_STORAGE');
  }, []);

  const darkModeContextValue = { state: darkModeState, dispatch: darkModeDispatch };
  const videosContextValue = { state: videosState, dispatch: videosDispatch };

  return (
    <Container className="layout">
      <DarKModeContext.Provider value={darkModeContextValue}>
        <VideosContext.Provider value={videosContextValue}>
          <MenusComponent />
          {children}
        </VideosContext.Provider>
      </DarKModeContext.Provider>
    </Container>
  );
}

export default Layout;
