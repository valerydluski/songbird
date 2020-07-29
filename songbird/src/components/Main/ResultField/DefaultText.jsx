import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_TEXT } from '../../../config';
import DefaultTextStyled from './Styled/DefaultTextStyled';

const DefaultText = ({ defaultText }) => {
  return <DefaultTextStyled>{defaultText}</DefaultTextStyled>;
};

DefaultText.propTypes = {
  defaultText: PropTypes.string,
};

DefaultText.defaultProps = {
  defaultText: DEFAULT_TEXT,
};

export default DefaultText;
