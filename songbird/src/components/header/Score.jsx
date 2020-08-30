import React, { useContext } from 'react';
import ScoreStyled from './Styled/ScoreStyled';
import { ContextApp } from '../../store/reducer';

const Score = () => {
  const { state } = useContext(ContextApp);
  return <ScoreStyled>Счёт: {state.score}</ScoreStyled>;
};

export default Score;
