import React from 'react';
import { Link } from 'react-router-dom';

const SuggesterVideoDetail = ({ data }) => {
  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
  };

  return (
    <div>
      <Link className="VideoDetail-suggested-item" to={`/video/${data.etag}`}>
        <div className="thumbnail" style={thumbnailStyle} />
        <div className="details">{data.title}</div>
      </Link>
    </div>
  );
};

export default SuggesterVideoDetail;
