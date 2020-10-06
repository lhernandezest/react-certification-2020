import React from 'react';
import { Link } from 'react-router-dom';

const SuggesterVideoDetail = ({ id, data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnails.default.url}")`,
  };

  return (
    <div>
      <Link data-testid="detail-link" className="VideoDetail-suggested-item" to={`/video/${id}`}>
        <div data-testid="thumbnail" className="thumbnail" style={thumbnailStyle} />
        <div data-testid="title" className="details">{data.title}</div>
      </Link>
    </div>
  );
};

export default SuggesterVideoDetail;
