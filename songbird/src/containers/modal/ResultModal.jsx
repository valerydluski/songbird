import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import RestartButtonContainer from './RestartButtonContainer';
import Description from '../../components/Main/ResultField/Description';
import { ContextApp } from '../../store/reducer';

const ModalResult = ({ toggleMode }) => {
  const { state } = useContext(ContextApp);

  return (
    <OverlayStyled className="overlay">
      <ModalStyled>
        <Description
          className="modalText"
          description={
            state.score === 300
              ? 'Поздравляю, вы набрали максимальное количество очков'
              : `вы набрали ${state.score} очков из 300`
          }
        />
        <RestartButtonContainer toggleMode={toggleMode} />
      </ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default ModalResult;
