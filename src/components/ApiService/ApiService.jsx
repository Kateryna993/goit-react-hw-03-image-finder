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

// import axios from 'axios';

// const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 9 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20678910-4bf7e071ea6bce7ee5607a0cc&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
//     )
//     .then(response => response.data.hits);
// };

// export default { fetchImages };

// import axios from 'axios';
// /* eslint react/prop-types: 1 */

// const ApiKey = '21859348-c38bd78951db790eb6ef65701';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const fetchImages = (searchQuery, currentPage) => {
//   return axios
//     .get(
//       `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${ApiKey}`,
//     )
//     .then(response => response.data.hits);
// };

// export default fetchImages;

// //

// function fetchImages(searchQuery, currentPage, error) {
//   const ApiKey = '21859348-c38bd78951db790eb6ef65701';
//   return fetch(
//     `https://pixabay.com/api/?q=${searchQuery}&${currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
//   )
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .catch(error => error);
// }

// export default fetchImages;
