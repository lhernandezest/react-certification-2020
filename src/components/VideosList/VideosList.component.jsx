import React from 'react';
import './VideosList.sass';

import VideoItem from './VideoItem.component';

const VideosList = (props) => {
  return (
    <div className="VideosList">
      {props.videos.map((video) => (
        <VideoItem key={video.etag} id={video.etag} data={video.snippet} />
      ))}
    </div>
  );
};

export default VideosList;
