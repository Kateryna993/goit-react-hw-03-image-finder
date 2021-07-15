import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from './ImageGalleryList.module.css';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem images={images} onClickImage={onClickImage} />
    </ul>
  );
};

export default ImageGallery;
