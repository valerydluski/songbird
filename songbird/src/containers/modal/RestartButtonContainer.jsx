import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Main/Button/Button';
import { ContextApp } from '../../store/reducer';
import shuffleArray from '../../utils/shuffleArray';
import birdsData from '../../data/data';

const RestartButtonContainer = ({ toggleMode }) => {
  const { dispatch } = useContext(ContextApp);
  const handler = () => {
    toggleMode(false);
    dispatch({
      type: 'change_level',
      payload: {
        level: 0,
      },
    });
    dispatch({
      type: 'correct_answer',
      payload: {
        correctAnswer: shuffleArray(birdsData[0])[0],
      },
    });
    dispatch({
      type: 'change_isAnswer',
      payload: {
        isAnswer: false,
      },
    });
    dispatch({
      type: 'isCorrect',
      payload: {
        isCorrect: false,
      },
    });
    dispatch({
      type: 'change_count_answer',
      payload: {
        countAnswer: 5,
      },
    });
    dispatch({
      type: 'change_score',
      payload: {
        score: 0,
      },
    });
  };
  return <Button handler={handler} className="modalPageButton" text="Начать заново" />;
};

RestartButtonContainer.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default RestartButtonContainer;
