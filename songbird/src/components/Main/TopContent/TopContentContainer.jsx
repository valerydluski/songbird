import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TopContentContainerStyled from './Styled/TopContentContainerStyled';
import TopImage from './TopImage';
import TopAnswer from './TopAnswer';
import TopPlayer from './TopPlayer';
import { ContextApp } from '../../../store/reducer';
import { DEFAULT_IMAGE } from '../../../config';

const TopContentContainer = ({ correctAnimal }) => {
  const { state } = useContext(ContextApp);
  const isCorrectAnswer = () => {
    if (state.isCorrect) return state.correctAnswer.name;
    return '******';
  };
  const isCorrectAnswerImage = () => {
    if (state.isCorrect) return state.correctAnswer.image;
    return DEFAULT_IMAGE;
  };

  return (
    <TopContentContainerStyled>
      <TopImage imageSrc={isCorrectAnswerImage()}></TopImage>
      <TopAnswer answerText={isCorrectAnswer()} />
      <TopPlayer audioSrc={correctAnimal.audio} />
    </TopContentContainerStyled>
  );
};

TopContentContainer.propTypes = {
  correctAnimal: PropTypes.instanceOf(Object).isRequired,
};

export default TopContentContainer;
