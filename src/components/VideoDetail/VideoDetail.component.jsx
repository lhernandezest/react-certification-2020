import React from 'react';

const VideoDetailComponent = ({ video = {} }) => {
  return (
    <div>
      <h1>Video detail page. Video ID = {video.etag}</h1>
      <div>title: {video.title}</div>
      <div>description: {video.description}</div>
    </div>
  );
};

export default VideoDetailComponent;
