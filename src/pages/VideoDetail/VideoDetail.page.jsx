import React, { useEffect, useState, useContext } from 'react';
import './VideoDetail.sass';
import { useParams } from 'react-router-dom';
import VideosContext from '../../state/VideosContext';

import LoadingComponent from '../../components/Generic/Loading.component';
import VideoDetailComponent from '../../components/VideoDetail/VideoDetail.component';
import SuggestedVideos from '../../components/VideoDetail/SuggestedVideos.component';

const findVideoById = (videos, id) => videos.find((video) => video.etag === id);

const VideoDetailPage = () => {
  const { id } = useParams();
  const { state } = useContext(VideosContext);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const selectedVideo = findVideoById(state.fetchedVideos, id); // '+' converts to number
    setVideo(selectedVideo);
  }, [setVideo, state, id]);

  const getRenderComponent = () => {
    if (!video) {
      return <LoadingComponent />;
    }

    return (
      <div className="VideoDetail">
        <VideoDetailComponent video={video} />
        <SuggestedVideos videos={state.fetchedVideos} />
      </div>
    );
  };

  return getRenderComponent();
};

export default VideoDetailPage;
