import React from 'react';

const VideosContext = React.createContext({
  currentSearch: '',
  fetchedVideos: [],
  favoriteVideos: [],
});

export default VideosContext;
