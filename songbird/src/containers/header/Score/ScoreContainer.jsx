import React from 'react';

import ScoreContainerStyled from './Styled/ScoreStyled';
import Score from '../../../components/header/Score';

const ScoreContainer = () => {
  return (
    <ScoreContainerStyled>
      <Score />
    </ScoreContainerStyled>
  );
};

export default ScoreContainer;
