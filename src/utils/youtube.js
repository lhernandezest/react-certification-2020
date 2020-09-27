// TODO Actual implementation of YotubeAPI
// import useAPI from '../hooks/useYoutubeAPI';
import mockVideos from './mockData/videos';
import { includesNoCaseSensitive } from './fns';

const youtubeAPI = {
  searchBy: (query) =>
    mockVideos.filter((video) => includesNoCaseSensitive(video.title, query)),
  searchById: (id) => mockVideos.find((video) => video.etag === id),
};

export default youtubeAPI;
