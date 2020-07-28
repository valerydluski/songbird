import React from 'react';
import PropTypes from 'prop-types';
import TopAnswerStyled from './Styled/TopAnswerStyled';

const TopAnswer = ({ answerText }) => {
  return <TopAnswerStyled>{answerText}</TopAnswerStyled>;
};

TopAnswer.propTypes = {
  answerText: PropTypes.string,
};

TopAnswer.defaultProps = {
  answerText: '******',
};

export default TopAnswer;
