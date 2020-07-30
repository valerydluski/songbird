import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Styled/ButtonStyled';

const Button = ({ text, handler }) => {
  return <ButtonStyled onClick={handler}>{text}</ButtonStyled>;
};

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
};

Button.defaultProps = {
  text: 'Следующий уровень',
  handler: () => {},
};

export default Button;
