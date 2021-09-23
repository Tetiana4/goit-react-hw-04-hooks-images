import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, onClick }) {
  return (
    <Item>
      <Image
        data-large={image.largeImageURL}
        onClick={onClick}
        src={image.webformatURL}
        className="ImageGalleryItem-image"
        alt="image description"
        data-src={image.largeImageURL}
      />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  selectedImg: PropTypes.func,
  toggleModal: PropTypes.func,
};
