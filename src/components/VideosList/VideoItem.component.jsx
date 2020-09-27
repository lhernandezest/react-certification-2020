import React from 'react';
import { Link } from 'react-router-dom';

const VideoItem = ({ data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
  };

  return (
    <Link className="VideosList-item" to={`/video/${data.etag}`}>
      <div className="VideosList-item-thumbnail" style={thumbnailStyle} />
      <div className="VideosList-item-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
