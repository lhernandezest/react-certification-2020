import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import youtubeAPI from '../../utils/youtube';
import LoadingComponent from '../../components/Generic/Loading.component';
import VideoDetailComponent from '../../components/VideoDetail/VideoDetail.component';

const VideoDetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchedVideo = youtubeAPI.searchById(+id); // '+' converts to number
    setVideo(fetchedVideo);
  }, [id]);

  const getRenderComponent = () => {
    if (video) return <VideoDetailComponent video={video} />;

    return <LoadingComponent />;
  };

  return getRenderComponent();
};

export default VideoDetailPage;
