import React from 'react';
import PropTypes from 'prop-types';
import NameStyled from './Styled/NameStyled';

const Name = ({ name }) => {
  return <NameStyled>{name}</NameStyled>;
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
