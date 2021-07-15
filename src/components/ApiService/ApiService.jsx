import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  const ApiKey = '21859348-c38bd78951db790eb6ef65701';

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
