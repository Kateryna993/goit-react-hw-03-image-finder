import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClickImage }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className={style.ImageGalleryItem}>
          <img
            className={style.ImageGalleryItemImage}
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
