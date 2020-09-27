import React from 'react';

const VideosContext = React.createContext({
  currentSearch: '',
  favoriteVideos: [],
});

export default VideosContext;
