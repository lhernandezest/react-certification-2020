import React from 'react';

const VideosContext = React.createContext({
  currentSearch: '',
  fetchedVideos: [],
  favorites: [],
});

export default VideosContext;
