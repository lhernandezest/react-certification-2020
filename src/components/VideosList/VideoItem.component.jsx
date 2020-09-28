import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import DarKModeContext from '../../state/DarkModeContext';

const VideoItem = ({ data }) => {
  const { state } = useContext(DarKModeContext);

  const thumbnailStyle = {
    backgroundImage: `url("${data.thumbnail}")`,
  };

  return (
    <Link className={`VideosList-item ${state.darkMode && 'darkMode'}`} to={`/video/${data.etag}`}>
      <div className="VideosList-item-thumbnail" style={thumbnailStyle} />
      <div className="VideosList-item-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </Link>
  );
};

export default VideoItem;
