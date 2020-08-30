import React from 'react';
import PropTypes from 'prop-types';
import ImageStyled from './Styled/ImageStyled';

const ImageBird = ({ imageSrc, className }) => {
  return <ImageStyled src={imageSrc} alt="bird" className={className}></ImageStyled>;
};

ImageBird.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ImageBird;
