import React, { useContext } from 'react';
import './Home.styles.css';

import { useAuth } from '../../providers/Auth';
import VideosContext from '../../state/VideosContext';

function HomePage() {
  const { authUser } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(VideosContext);

  return (
    <section className="homepage">
      <h1>Hello {authUser ? authUser.name : 'Stranger'}</h1>
      <h2>Searching for {state.currentSearch}</h2>
    </section>
  );
}

export default HomePage;
