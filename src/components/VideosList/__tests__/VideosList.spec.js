import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideosList from '../VideosList.component';
import mockVideos from '../../../testUtils/mockData/videos';
import { darkModeContext } from '../../../testUtils/mocks';

import DarKModeContext from '../../../state/DarkModeContext';

function renderVideosList(videos, contextValue) {
  return render(
    <BrowserRouter>
      <DarKModeContext.Provider value={contextValue}>
        <VideosList videos={videos} />
      </DarKModeContext.Provider>
    </BrowserRouter>
  );
}

describe('VideosList', () => {
  it('displays video basic information in dark mode', () => {
    renderVideosList(mockVideos, darkModeContext);

    expect(screen.getAllByTestId('detail-link').length).toBe(mockVideos.length);
  });
});
