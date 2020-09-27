import { useState, useEffect } from 'react';

const useAPI = (request) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // TODO actual api request
    setResult(request);
  });

  return result;
};

export default useAPI;
