import { useState, useEffect } from 'react';
import { youtube } from '../utils/constants';

const { apiUrl } = youtube;

const useAPI = (query) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await window.gapi.client.request({
          path: `${apiUrl}/${query}`,
        });
        setData(response.result);
        setStatus('done');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    fetchData();
  }, [query]);

  return { status, data };
};

export default useAPI;
