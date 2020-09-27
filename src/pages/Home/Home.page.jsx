import React, { useContext, useEffect, useState } from 'react';
import './Home.sass';

import { useAuth } from '../../providers/Auth';
import VideosContext from '../../state/VideosContext';
import youtubeAPI from '../../utils/youtube';

import VideosList from '../../components/VideosList/VideosList.component';

function HomePage() {
  const { authUser } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const { state } = useContext(VideosContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchedVideos = youtubeAPI.searchBy(state.currentSearch);
    setVideos(fetchedVideos);
  }, [state.currentSearch]);

  return (
    <section className="homepage">
      <h1>Hello {authUser ? authUser.name : 'Stranger'}</h1>
      <VideosList videos={videos} />
    </section>
  );
}

export default HomePage;
