import React from 'react';
import { Link } from 'react-router-dom';

const SuggesterVideoDetail = ({ id, data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnails.default.url}")`,
  };

  return (
    <div>
      <Link className="VideoDetail-suggested-item" to={`/video/${id}`}>
        <div className="thumbnail" style={thumbnailStyle} />
        <div className="details">{data.title}</div>
      </Link>
    </div>
  );
};

export default SuggesterVideoDetail;
