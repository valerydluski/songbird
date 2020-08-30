import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Styled/ButtonStyled';

const Button = ({ text, handler, className }) => {
  return (
    <ButtonStyled onClick={handler} className={className}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'Следующий уровень',
  handler: () => {},
};

export default Button;
