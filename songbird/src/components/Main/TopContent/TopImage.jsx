import React from 'react';
import PropTypes from 'prop-types';
import TopImageStyled from './Styled/TopImageStyled';
import ImageBird from '../../UI/Image/Image';

const TopImage = ({ imageSrc, className }) => {
  return (
    <TopImageStyled>
      <ImageBird imageSrc={imageSrc} className={className}></ImageBird>
    </TopImageStyled>
  );
};

TopImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TopImage.defaultProps = {
  className: '',
};

export default TopImage;
