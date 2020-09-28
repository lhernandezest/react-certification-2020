import React from 'react';

import SuggestedVideoDetail from './SuggestedVideoDetail.component';

const SuggestedVideos = ({ videos }) => {
  return (
    <div className="VideoDetail-suggested">
      {videos.map((video) => (
        <SuggestedVideoDetail key={video.etag} id={video.etag} data={video.snippet} />
      ))}
    </div>
  );
};

export default SuggestedVideos;
