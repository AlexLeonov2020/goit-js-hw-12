import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get('', {
      params: {
        per_page: 15,
        page: page,
        key: '32683176-73c6d59407ba5f82078f92bf7',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}