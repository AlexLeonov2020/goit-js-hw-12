import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export default async function getImagesByQuery(query, page) {
  // Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
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
    const data = response.data.hits;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error, response.status);
    throw error;
  }
}