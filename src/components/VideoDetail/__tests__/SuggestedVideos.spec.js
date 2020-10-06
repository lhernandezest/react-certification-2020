import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SuggestedVideos from '../SuggestedVideos.component';
import mockVideos from '../../../testUtils/mockData/videos';

function renderVideosList(videos) {
  return render(
    <BrowserRouter>
      <SuggestedVideos videos={videos} />
    </BrowserRouter>
  );
}

describe('SuggestedVideos', () => {
  it('displays video basic information in dark mode', () => {
    renderVideosList(mockVideos);

    expect(screen.getAllByTestId('detail-link').length).toBe(mockVideos.length);
  });
});
