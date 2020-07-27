import React, { useState, useEffect } from 'react';
import TopImageStyled from './Styled/TopImageStyled';
import ImageBird from '../../UI/Image/Image';

const TopImage = () => {
  return (
    <TopImageStyled>
      <ImageBird></ImageBird>
    </TopImageStyled>
  );
};

export default TopImage;
