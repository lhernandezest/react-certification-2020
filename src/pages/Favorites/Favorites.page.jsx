import React, { useContext } from 'react';
import './Favorites.sass';

import VideosContext from '../../state/VideosContext';
import VideosList from '../../components/VideosList/VideosList.component';

const Favorites = () => {
  const { state } = useContext(VideosContext);

  const renderComponent = () => {
    if (state.favorites.length > 0) {
      return <VideosList videos={state.favorites} />;
    }

    return <span>You haven&apos;t added any video to your favorites yet</span>;
  };

  return (
    <div className="FavoritesPage">
      <h1>Favorites</h1>
      {renderComponent()}
    </div>
  );
};

export default Favorites;
