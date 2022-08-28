import axios from 'axios';

const imagesFetch = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '27524707-2a0c8c68731d19490670e3324';
  const url = `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default imagesFetch;
