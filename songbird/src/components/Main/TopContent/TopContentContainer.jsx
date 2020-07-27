import React, { useState, useEffect } from 'react';
import TopContentContainerStyled from './Styled/TopContentContainerStyled';
import TopImage from './TopImage';
import TopAnswer from './TopAnswer';
import TopPlayer from './TopPlayer';

const TopContentContainer = () => {
  return (
    <TopContentContainerStyled>
      <TopImage></TopImage>
      <TopAnswer />
      <TopPlayer />
    </TopContentContainerStyled>
  );
};

export default TopContentContainer;
