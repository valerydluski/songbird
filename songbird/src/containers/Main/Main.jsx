import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data';
import MainStyled from './Styled/MainStyled';
import TopContentContainer from '../../components/Main/TopContent/TopContentContainer';
import GameField from '../../components/Main/GameField/GameField';
import shuffleArray from '../../utils/shuffleArray';
import ResultField from '../../components/Main/ResultField/ResultField';

const Main = ({ birdsArray }) => {
  const [correctAnimal, changeAnimal] = useState(shuffleArray(birdsArray)[0]);

  return (
    <MainStyled>
      <TopContentContainer correctAnimal={correctAnimal} />
      <GameField birdsArray={birdsArray} />
      <ResultField />
    </MainStyled>
  );
};

Main.propTypes = {
  birdsArray: PropTypes.instanceOf(Array),
};

Main.defaultProps = {
  birdsArray: data[0],
};

export default Main;
