import React from 'react';
import PropTypes from 'prop-types';
import LatNameStyled from './Styled/LatNameStyled';

const LatName = ({ species }) => {
  return <LatNameStyled>{species}</LatNameStyled>;
};

LatName.propTypes = {
  species: PropTypes.string.isRequired,
};

export default LatName;
