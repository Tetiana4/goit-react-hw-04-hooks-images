import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ handleSelectedImg, images }) {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={handleSelectedImg}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  children: PropTypes.object,
};
