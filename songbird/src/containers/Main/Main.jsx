import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data';
import MainStyled from './Styled/MainStyled';
import TopContentContainer from '../../components/Main/TopContent/TopContentContainer';
import GameField from '../../components/Main/GameField/GameField';
import ResultField from '../../components/Main/ResultField/ResultField';
import { ContextApp } from '../../store/reducer';
import ButtonContainer from './Button/ButtonContainer';

const Main = ({ birdsArray }) => {
  const { state, dispatch } = useContext(ContextApp);

  return (
    <MainStyled>
      <TopContentContainer correctAnimal={state.correctAnswer} />
      <GameField birdsArray={birdsArray[state.level]} />
      <ResultField />
      <ButtonContainer />
    </MainStyled>
  );
};

Main.propTypes = {
  birdsArray: PropTypes.instanceOf(Array),
};

Main.defaultProps = {
  birdsArray: data,
};

export default Main;
