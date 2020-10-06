import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SuggestedVideoDetail from '../SuggestedVideoDetail.component';
import mockVideos from '../../../testUtils/mockData/videos';

function renderSuggestedVideoDetail(id, data) {
  return render(
    <BrowserRouter>
      <SuggestedVideoDetail id={id} data={data} />
    </BrowserRouter>
  );
}

describe('SuggestedVideoDetail', () => {
  const video = mockVideos[0];

  it('displays suggested video basic information', () => {
    const { videoId } = video.id;
    const videoData = video.snippet;
    renderSuggestedVideoDetail(videoId, videoData);

    expect(screen.getByTestId('title')).toHaveTextContent(videoData.title);
    expect(screen.getByTestId('detail-link').href).toContain(`/video/${videoId}`);
    expect(screen.getByTestId('thumbnail')).toHaveStyle(
      `backgroundImage: url("${videoData.thumbnails.medium.url}"),`
    );
  });
});
