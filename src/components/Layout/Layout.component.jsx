import React, { useReducer, useEffect } from 'react';
import './Layout.sass';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';
import VideosContext from '../../state/VideosContext';
import VideosReducer from '../../state/VideosReducer';
import MenusComponent from '../Menus/Menus.component';

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
    videosDispatch({
      type: 'LOAD_FAVORITES_FROM_STORAGE',
    });
  }, []);

  const darkModeContextValue = { state: darkModeState, dispatch: darkModeDispatch };
  const videosContextValue = { state: videosState, dispatch: videosDispatch };

  return (
    <main className={`layout ${darkModeState.darkMode && 'darkMode'}`}>
      <DarKModeContext.Provider value={darkModeContextValue}>
        <VideosContext.Provider value={videosContextValue}>
          <MenusComponent />
          {children}
        </VideosContext.Provider>
      </DarKModeContext.Provider>
    </main>
  );
}

export default Layout;
