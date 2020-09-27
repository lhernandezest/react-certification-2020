import React, { useState, useContext, useEffect } from 'react';

import VideosContext from '../../state/VideosContext';

const VideoDetailComponent = ({ video = {} }) => {
  const { state, dispatch } = useContext(VideosContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const findFavorite = (targetVideo) =>
    !!state.favorites.find((favorite) => targetVideo.etag === favorite.etag);

  useEffect(() => {
    setIsFavorite(!!findFavorite(video));
  }, [video]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: video.etag,
      });

      return setIsFavorite(false);
    }

    dispatch({
      type: 'ADD_FAVORITE',
      payload: video,
    });
    setIsFavorite(true);
  };

  return (
    <div className="VideoDetail-video">
      <iframe title="video" width="100%" height="500px" src={video.url} />
      <div className="titleContainer">
        <h2>{video.title}</h2>
        <div
          className="addFavoriteContainer"
          onClick={handleFavoriteToggle}
          aria-hidden="true"
        >
          {isFavorite ? 'Remove from' : 'Add to'} Favorites
        </div>
      </div>
      <p className="descriptionContainer">{video.description}</p>
    </div>
  );
};

export default VideoDetailComponent;
