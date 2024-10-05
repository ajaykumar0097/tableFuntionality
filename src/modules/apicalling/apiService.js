import axios from 'axios';

const API_KEY = '03a416bdf1msh57fd2cf99bf018cp190a61jsn00c9a29e8dbd';
const API_HOST = 'real-time-product-search.p.rapidapi.com';

const apiService = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const fetchProducts = async (query, page = 1, limit = 10, sortBy = 'BEST_MATCH') => {
  try {
    const response = await apiService.get('/search-v2', {
      params: {
        q: query,
        country: 'us',
        language: 'en',
        page,
        limit,
        sort_by: sortBy,
        product_condition: 'ANY',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
