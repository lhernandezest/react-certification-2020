import React from 'react';

const VideoDetailComponent = ({ video = {} }) => {
  return (
    <div className="VideoDetail-video">
      <iframe title="video" width="100%" height="500px" src={video.url}></iframe>
      <div className="titleContainer">
        <h2>{video.title}</h2>
        <div className="addFavoriteContainer">
          Agregar a Favoritos
        </div>
      </div>
      <p className="descriptionContainer">
        {video.description}
      </p>
    </div>
  );
};

export default VideoDetailComponent;
