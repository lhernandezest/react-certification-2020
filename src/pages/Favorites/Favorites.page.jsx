import React, { useContext } from 'react';
import './Favorites.sass';

import VideosContext from '../../state/VideosContext';

const Favorites = () => {
  const { state } = useContext(VideosContext);

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {state.favorites.map((favorite) => (
          <li key={favorite.etag}>{favorite.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
