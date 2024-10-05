import { useState, useEffect } from 'react';
import { fetchProducts } from './apiService';

export const useProductSearch = (query, page = 1, limit = 10, sortBy = 'BEST_MATCH') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchProducts(query, page, limit, sortBy);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page, limit, sortBy]);

  return { data, error, loading };
};
