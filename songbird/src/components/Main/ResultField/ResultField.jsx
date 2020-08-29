import React, { useContext } from 'react';
import { ContextApp } from '../../../store/reducer';
import ResultFieldStyled from './Styled/ResultFieldStyled';
import DefaultText from './DefaultText';
import TopImage from '../TopContent/TopImage';
import Name from './Name';
import LatName from './LatName';
import TopPlayer from '../TopContent/TopPlayer';
import Description from './Description';

const ResultField = () => {
  const { state } = useContext(ContextApp);

  return (
    <ResultFieldStyled>
      {state.isAnswer ? (
        <>
          <TopImage imageSrc={state.answer.image} className={'answer'} />
          <Name name={state.answer.name} />
          <LatName species={state.answer.species} />
          <TopPlayer audioSrc={state.answer.audio} />
          <Description description={state.answer.description} />
        </>
      ) : (
        <DefaultText />
      )}
    </ResultFieldStyled>
  );
};

export default ResultField;
