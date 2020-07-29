import React from 'react';
import PropTypes from 'prop-types';
import TopImageStyled from './Styled/TopImageStyled';
import ImageBird from '../../UI/Image/Image';

const TopImage = ({ imageSrc }) => {
  return (
    <TopImageStyled>
      <ImageBird imageSrc={imageSrc}></ImageBird>
    </TopImageStyled>
  );
};

TopImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default TopImage;
