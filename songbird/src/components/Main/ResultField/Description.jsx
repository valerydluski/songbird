import React from 'react';
import PropTypes from 'prop-types';
import DescriptionStyled from './Styled/DescriptionStyled';

const Description = ({ description }) => {
  return <DescriptionStyled>{description}</DescriptionStyled>;
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
