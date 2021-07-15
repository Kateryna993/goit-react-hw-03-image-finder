import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul>
      <ImageGalleryItem images={images} onClickImage={onClickImage} />
    </ul>
  );
};

export default ImageGallery;
