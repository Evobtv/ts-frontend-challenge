import { useCallback, useEffect, useState } from 'react';
import { Info } from '../../interfaces/info';
import { info } from '../../services/requests';

const useInfo = () => {
  const [infoData, setInfoData] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchInfo = useCallback(async () => {
    setLoading(true);
    const { options, url } = info();

    try {
      const result = await fetch(url, options);
      const data = await result.json();
      setInfoData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return {
    data: infoData,
    loading,
    error
  };
};

export default useInfo;
