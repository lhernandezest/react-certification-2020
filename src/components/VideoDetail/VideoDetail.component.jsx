import React, { useState, useContext, useEffect } from 'react';
import YouTube from 'react-youtube';

import VideosContext from '../../state/VideosContext';

const VideoDetailComponent = ({ video }) => {
  const { state, dispatch } = useContext(VideosContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const findFavorite = (targetVideo) =>
      !!state.favorites.find((favorite) => targetVideo.etag === favorite.etag);

    setIsFavorite(!!findFavorite(video));
  }, [state.favorites, video]);

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

  const videoOptions = {
    height: '500px',
    width: '100%',
  };

  return (
    <div className="VideoDetail-video">
      <YouTube
        videoId={video.id.videoId}
        opts={videoOptions}
      />
      <div className="titleContainer">
        <h2>{video.snippet.title}</h2>
        <div
          className="addFavoriteContainer"
          onClick={handleFavoriteToggle}
          aria-hidden="true"
        >
          {isFavorite ? 'Remove from' : 'Add to'} Favorites
        </div>
      </div>
      <p className="descriptionContainer">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetailComponent;
