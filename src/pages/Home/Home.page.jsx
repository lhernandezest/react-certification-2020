import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import './Home.sass';

import { useAuth } from '../../providers/Auth';
import VideosContext from '../../state/VideosContext';

import VideosList from '../../components/VideosList/VideosList.component';
import useAPI from '../../hooks/useYoutubeAPI';
import LoadingComponent from '../../components/Generic/Loading.component';

const Error = styled.span`
  color: #de390b;
`;

function HomePage() {
  const { authUser } = useAuth();
  const { state, dispatch } = useContext(VideosContext);
  const { status, data } = useAPI(
    `search?q=${state.currentSearch}&part=snippet&maxResults=20&type=video`
  );

  useEffect(() => {
    if (!data) return;

    dispatch({
      type: 'SET_FETCHED_VIDEOS',
      payload: data.items,
    });
  }, [dispatch, data]);

  const renderComponent = () => {
    if (status === 'done') {
      return <VideosList videos={data.items} />;
    }

    if (status === 'error') {
      return <Error>Error retrieving videos</Error>;
    }

    return <LoadingComponent />;
  };

  return (
    <section className="homepage">
      <h1>Hello {authUser ? authUser.name : 'Stranger'}</h1>
      {renderComponent()}
    </section>
  );
}

export default HomePage;
