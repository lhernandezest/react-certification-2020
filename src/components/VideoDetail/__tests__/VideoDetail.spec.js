import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideosContext from '../../../state/VideosContext';
import VideosReducer from '../../../state/VideosReducer';

import VideoDetail from '../VideoDetail.component';
import mockVideos from '../../../testUtils/mockData/videos';

function renderVideoDetail(video, initialState) {
  function handleDispatch(type, payload) {
    this.state = VideosReducer(this.state, {
      type,
      payload,
    });
  }

  const context = {
    state: initialState,
    dispatch: handleDispatch.bind(initialState),
  };

  return render(
    <BrowserRouter>
      <VideosContext.Provider value={context}>
        <VideoDetail video={video} />
      </VideosContext.Provider>
    </BrowserRouter>
  );
}

describe('VideoDetail', () => {
  const video = mockVideos[0];

  it('display information of the video when it is not in favorites ', () => {
    const { snippet } = video;
    renderVideoDetail(video, { favorites: [] });

    const favoritesToggle = screen.getByTestId('favorites-toggle');

    expect(screen.getByTestId('title')).toHaveTextContent(snippet.title);
    expect(screen.getByTestId('description')).toHaveTextContent(snippet.description);
    expect(favoritesToggle).toHaveTextContent('Add to Favorites');

    fireEvent.click(favoritesToggle);
    expect(favoritesToggle).toHaveTextContent('Remove from Favorites');

    fireEvent.click(favoritesToggle);
    expect(favoritesToggle).toHaveTextContent('Add to Favorites');
  });

  it('display information of the video when it is in favorites ', () => {
    const { snippet } = video;
    renderVideoDetail(video, { favorites: [video] });

    const favoritesToggle = screen.getByTestId('favorites-toggle');

    expect(screen.getByTestId('title')).toHaveTextContent(snippet.title);
    expect(screen.getByTestId('description')).toHaveTextContent(snippet.description);
    expect(favoritesToggle).toHaveTextContent('Remove from Favorites');
  });
});
