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
  imageSrc: PropTypes.string,
};

TopImage.defaultProps = {
  imageSrc: 'https://zelenyjmir.ru/wp-content/uploads/2017/06/Lenivets-2.jpg',
};

export default TopImage;
