import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AnswerOptionStyled from './Styled/AnswerOptionStyled';
import { ContextApp } from '../../../store/reducer';

const AnswerOption = ({ name, answer }) => {
  const { state, dispatch } = useContext(ContextApp);
  const [isAnswered, setIsAnswered] = useState(false);
  const [className, setClassName] = useState('');
  return (
    <AnswerOptionStyled
      className={className}
      onClick={() => {
        if (!state.isCorrect && !isAnswered) {
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
            dispatch({
              type: 'change_score',
              payload: {
                score: state.score + state.countAnswer * 10,
              },
            });
            setClassName('correct');
          } else {
            setClassName('not-correct');
            dispatch({
              type: 'change_count_answer',
              payload: {
                countAnswer: state.countAnswer - 1,
              },
            });
            setIsAnswered(true);
          }
        } else {
          dispatch({
            type: 'change_answer',
            payload: {
              answer: answer,
            },
          });
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
