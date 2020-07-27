import React, { useState, useEffect } from 'react';
import MainStyled from './Styled/MainStyled';
import TopContentContainer from '../../components/Main/TopContent/TopContentContainer';

const Main = () => {
  return (
    <MainStyled>
      <TopContentContainer />
    </MainStyled>
  );
};

export default Main;
