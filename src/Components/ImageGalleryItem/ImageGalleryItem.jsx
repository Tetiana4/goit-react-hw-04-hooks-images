import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ images, selectedImg, toggleModal }) {
  const handleSelectedImg = value => {
    selectedImg(value);
    toggleModal();
  };

  return images.map(image => (
    <Item key={image.id}>
      <Image
        src={image.webformatURL}
        alt=""
        data-src={image.largeImageURL}
        onClick={() => handleSelectedImg(image.largeImageURL)}
      />
    </Item>
  ));
}
