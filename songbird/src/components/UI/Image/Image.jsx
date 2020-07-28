import React from 'react';
import PropTypes from 'prop-types';
import ImageStyled from './Styled/ImageStyled';

const ImageBird = ({ imageSrc }) => {
  return <ImageStyled src={imageSrc} alt="bird"></ImageStyled>;
};

ImageBird.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ImageBird;
