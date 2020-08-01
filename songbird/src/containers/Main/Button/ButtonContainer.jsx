import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../components/Main/Button/Button';
import { ContextApp } from '../../../store/reducer';
import shuffleArray from '../../../utils/shuffleArray';
import birdsData from '../../../data/data';

const ButtonContainer = () => {
  const { state, dispatch } = useContext(ContextApp);
  const handler = () => {
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
  return <Button handler={handler} />;
};

export default ButtonContainer;
