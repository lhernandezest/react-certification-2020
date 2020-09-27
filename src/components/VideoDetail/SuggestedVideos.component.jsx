import React from 'react';

import SuggesterVideoDetail from './SuggesterVideoDetail.component';

const SuggestedVideos = ({ videos }) => {
  return (
    <div className="VideoDetail-suggested">
      {videos.map((video) => (
        <SuggesterVideoDetail data={video} />
      ))}
    </div>
  );
};

export default SuggestedVideos;
