import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoItem from '../VideoItem.component';
import mockVideos from '../../../testUtils/mockData/videos';
import { darkModeContext, lightModeContext } from '../../../testUtils/mocks';

import DarKModeContext from '../../../state/DarkModeContext';

function renderVideoItem(id, data, contextValue) {
  return render(
    <BrowserRouter>
      <DarKModeContext.Provider value={contextValue}>
        <VideoItem id={id} data={data} />
      </DarKModeContext.Provider>
    </BrowserRouter>
  );
}

describe('VideoListItem', () => {
  const video = mockVideos[0];

  it('displays video basic information in dark mode', () => {
    const videoData = video.snippet;
    renderVideoItem(video.etag, videoData, darkModeContext);

    expect(screen.getByTestId('title')).toHaveTextContent(videoData.title);
    expect(screen.getByTestId('description')).toHaveTextContent(videoData.description);
    expect(screen.getByTestId('detail-link')).toHaveClass('darkMode');
    expect(screen.getByTestId('detail-link').href).toContain(`/video/${video.etag}`);
    expect(screen.getByTestId('thumbnail')).toHaveStyle(
      `backgroundImage: url("${videoData.thumbnails.medium.url}"),`
    );
  });

  it('displays in light mode', () => {
    const videoData = video.snippet;
    renderVideoItem(video.etag, videoData, lightModeContext);

    expect(screen.getByTestId('detail-link')).not.toHaveClass('darkMode');
  });
});
