import React from 'react';
import './VideosList.sass';

import VideoItem from './VideoItem.component';

const VideosList = (props) => {
  return (
    <div className="VideosList">
      {props.videos.map((video) => (
        <VideoItem key={video.etag} data={video} />
      ))}
    </div>
  );
};

export default VideosList;
