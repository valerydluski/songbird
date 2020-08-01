import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AnswerOptionStyled from './Styled/AnswerOptionStyled';
import { ContextApp } from '../../../store/reducer';

const AnswerOption = ({ name, answer }) => {
  const { state, dispatch } = useContext(ContextApp);
  return (
    <AnswerOptionStyled
      onClick={() => {
        if (!state.isCorrect) {
          dispatch({
            type: 'change_answer',
            payload: {
              answer: answer,
            },
          });
          dispatch({
            type: 'change_isAnswer',
            payload: {
              isAnswer: true,
            },
          });
          if (name === state.correctAnswer.name) {
            dispatch({
              type: 'isCorrect',
              payload: {
                isCorrect: true,
              },
            });
          }
        }
      }}
    >
      {name}
    </AnswerOptionStyled>
  );
};

AnswerOption.propTypes = {
  name: PropTypes.string.isRequired,
  answer: PropTypes.instanceOf(Object).isRequired,
};

export default AnswerOption;
