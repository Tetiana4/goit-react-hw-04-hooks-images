import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (imageName, page) => {
  const API_KEY = '22656000-e53b2481d23a663acaf14b7cd';
  const URL = `?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(URL);
  return response.data.hits;
};
