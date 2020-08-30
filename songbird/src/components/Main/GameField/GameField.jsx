import React from 'react';
import PropTypes from 'prop-types';
import GameFieldStyled from './Styled/GameFieldStyled';
import AnswerOption from './AnswerOption';

const GameField = ({ birdsArray }) => {
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
