import React from 'react';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClickImage }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id}>
          <img
            src={webformatURL}
            alt=""
            onClick={() => onClickImage({ largeImageURL })}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
  onClickImage: PropTypes.func,
};

export default ImageGalleryItem;
