import React from 'react';
import { Link } from 'react-router-dom';

const SuggesterVideoDetail = ({ data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
  };

  return (
    <Link className="VideoDetail-suggested-item" to={`/video/${data.etag}`}>
      <div className="thumbnail" style={thumbnailStyle}></div>
      <div className="details">{data.title}</div>
    </Link>
  );
};

export default SuggesterVideoDetail;
