import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TopContentContainerStyled from './Styled/TopContentContainerStyled';
import TopImage from './TopImage';
import TopAnswer from './TopAnswer';
import TopPlayer from './TopPlayer';
import { ContextApp } from '../../../store/reducer';

const TopContentContainer = ({ correctAnimal }) => {
  const { state, dispatch } = useContext(ContextApp);
  console.log('TopContentContainer -> state', state);
  const isCorrectAnswer = () => {
    if (state.answer.name === correctAnimal.name) return state.answer.name;
    return '******';
  };

  return (
    <TopContentContainerStyled>
      <TopImage></TopImage>
      <TopAnswer answerText={isCorrectAnswer()} />
      <TopPlayer audioSrc={correctAnimal.audio} />
    </TopContentContainerStyled>
  );
};

TopContentContainer.propTypes = {
  correctAnimal: PropTypes.instanceOf(Object).isRequired,
};

export default TopContentContainer;
