import React from 'react';
import PropTypes from 'prop-types';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import RestartButtonContainer from './RestartButtonContainer';

const ModalResult = ({ toggleMode }) => {
  return (
    <OverlayStyled className="overlay">
      <ModalStyled>
        <RestartButtonContainer toggleMode={toggleMode} />
      </ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};

export default ModalResult;
