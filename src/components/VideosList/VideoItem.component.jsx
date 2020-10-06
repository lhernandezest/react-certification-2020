import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DarKModeContext from '../../state/DarkModeContext';

const VideoItem = ({ id, data }) => {
  const { state } = useContext(DarKModeContext);

  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnails.medium.url}")`,
  };

  return (
    <Link
      key={id}
      data-testid="detail-link"
      className={`VideosList-item ${state.darkMode && 'darkMode'}`}
      to={`/video/${id}`}
    >
      <div
        data-testid="thumbnail"
        className="VideosList-item-thumbnail"
        style={thumbnailStyle}
      />
      <div className="VideosList-item-content">
        <h2 data-testid="title">{data.title}</h2>
        <p data-testid="description">{data.description}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
