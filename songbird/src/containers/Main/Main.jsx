import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data';
import MainStyled from './Styled/MainStyled';
import TopContentContainer from '../../components/Main/TopContent/TopContentContainer';
import GameField from '../../components/Main/GameField/GameField';
import ResultField from '../../components/Main/ResultField/ResultField';
import { ContextApp } from '../../store/reducer';
import ButtonContainer from './Button/ButtonContainer';
import ModalResult from '../modal/ResultModal';

const Main = ({ birdsArray }) => {
  const { state } = useContext(ContextApp);
  const [isGameFinished, toggleGameMode] = useState(false);

  return (
    <MainStyled>
      {isGameFinished ? (
        <ModalResult toggleMode={toggleGameMode}></ModalResult>
      ) : (
        <>
          <TopContentContainer correctAnimal={state.correctAnswer} />
          <GameField birdsArray={birdsArray[state.level]} />
          <ResultField />
          <ButtonContainer toggleMode={toggleGameMode} />
        </>
      )}
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
