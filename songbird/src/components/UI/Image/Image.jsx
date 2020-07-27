import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageStyled from './Styled/ImageStyled';
import defaultImage from '../../../assets/img/defaultImage.jpg';

const ImageBird = ({ src }) => {
  return <ImageStyled src={src} alt="bird"></ImageStyled>;
};

ImageBird.propTypes = {
  src: PropTypes.string,
};

ImageBird.defaultProps = {
  src: defaultImage,
};

export default ImageBird;
