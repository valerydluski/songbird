import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Button from '../../../components/Main/Button/Button';
import { ContextApp } from '../../../store/reducer';
import shuffleArray from '../../../utils/shuffleArray';
import birdsData from '../../../data/data';

const ButtonContainer = ({ toggleMode }) => {
  const { state, dispatch } = useContext(ContextApp);
  const nextLevel = () => {
    if (state.isCorrect) {
      dispatch({
        type: 'change_level',
        payload: {
          level: state.level + 1,
        },
      });
      dispatch({
        type: 'correct_answer',
        payload: {
          correctAnswer: shuffleArray(birdsData[state.level + 1])[0],
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
    } else {
      toast.info('Вы не дали верный ответ');
    }
  };
  const lastLevel = () => {
    if (state.isCorrect) {
      toggleMode(true);
    } else {
      toast.info('Вы не дали верный ответ');
    }
  };
  const handler = () => {
    state.level === 5 ? lastLevel() : nextLevel();
  };
  return (
    <Button
      handler={handler}
      text={state.level === 5 ? 'Закончить игру' : 'Следующий уровень'}
      className={state.isCorrect === true ? 'active' : 'not-active'}
    />
  );
};

ButtonContainer.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default ButtonContainer;
