import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ children }) {
  return <Gallery>{children}</Gallery>;
}

ImageGallery.propTypes = {
  children: PropTypes.object,
};
