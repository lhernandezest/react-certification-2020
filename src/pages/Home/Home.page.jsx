import React, { useContext } from 'react';
import './Home.styles.css';

import VideosContext from '../../state/VideosContext';

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(VideosContext);

  return (
    <section className="homepage">
      <h1>Searching for {state.currentSearch}</h1>
    </section>
  );
}

export default HomePage;
