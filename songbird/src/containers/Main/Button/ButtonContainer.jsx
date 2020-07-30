import React, { useContext } from 'react';
import Button from '../../../components/Main/Button/Button';
import { ContextApp } from '../../../store/reducer';
import shuffleArray from '../../../utils/shuffleArray';
import birdsData from '../../../data/data';

const ButtonContainer = () => {
  const { state, dispatch } = useContext(ContextApp);
  const handler = () => {
    dispatch({
      type: 'change_level',
      payload: {
        level: state.level + 1,
      },
    });
    dispatch({
      type: 'correct_answer',
      payload: {
        correctAnswer: shuffleArray(birdsData[state.level])[0],
      },
    });
  };
  return <Button handler={handler} />;
};

export default ButtonContainer;
