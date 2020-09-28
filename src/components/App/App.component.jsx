import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DarkModeReducer from '../../state/DarkModeReducer';
import DarKModeContext from '../../state/DarkModeContext';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import VideoDetailPage from '../../pages/VideoDetail';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  // const [darkModeState, darkModeDispatcher] = useReducer(DarkModeReducer, {
  //   darkMode: false,
  // })

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Private path="/favorites">
              <FavoritesPage />
            </Private>
            <Private path="/video/:id">
              <VideoDetailPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
