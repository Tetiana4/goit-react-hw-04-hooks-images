import axios from 'axios';
import PropTypes from 'prop-types';

const getImagesByAxios = axios.create({
  baseURL: 'https://pixabay.com/api',
  method: 'GET',
  params: {
    key: '22656000-e53b2481d23a663acaf14b7cd',
    per_page: 12,
  },
});

export const fetchImages = async (imageName, page) => {
  const {
    data: { hits },
  } = await getImagesByAxios(
    `?q=${imageName}&page=${page}&image_type=photo&orientation=horizontal`,
  );
  return hits;
};

fetchImages.PropTypes = {
  imageName: PropTypes.string,
  page: PropTypes.number,
};
