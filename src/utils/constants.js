const youtube = {
  apiUrl: 'https://www.googleapis.com/youtube/v3',
  apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
};

const storageKeys = {
  AUTHENTICATED: 'authenticated_key',
  FAVORITE_VIDEOS: 'favorite_videos',
};

export { storageKeys, youtube };
