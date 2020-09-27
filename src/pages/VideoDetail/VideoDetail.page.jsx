import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();

  return <div>Video detail page. Video ID = {id}</div>;
};

export default VideoDetail;
