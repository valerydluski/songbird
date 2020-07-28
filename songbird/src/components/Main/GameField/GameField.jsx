import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameFieldStyled from './Styled/GameFieldStyled';
import AnswerOption from './AnswerOption';
import { ContextApp } from '../../../store/reducer';

const GameField = ({ birdsArray }) => {
  const { state, dispatch } = useContext(ContextApp);
  return (
    <GameFieldStyled>
      {birdsArray.map((bird) => {
        return <AnswerOption name={bird.name} key={bird.name} answer={bird} />;
      })}
    </GameFieldStyled>
  );
};

GameField.propTypes = {
  birdsArray: PropTypes.instanceOf(Array).isRequired,
};

export default GameField;
