import { useState, useEffect } from 'react';
import { youtube } from '../utils/constants';

const { apiUrl } = youtube;

const useYoutubeAPI = (search) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);

  useEffect(() => {
    window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);

    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await window.gapi.client.request({
          path: `${apiUrl}/search?q=${search}&part=snippet&maxResults=20&type=video`,
        });

        // const response = { result: { items: [] } };  // Used to mock the request

        setData(response.result);
        setStatus('done');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    fetchData();
  }, [search]);

  return { status, data };
};

export default useYoutubeAPI;
