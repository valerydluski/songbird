import React from 'react';
import PropTypes from 'prop-types';
import DescriptionStyled from './Styled/DescriptionStyled';

const Description = ({ description, className }) => {
  return <DescriptionStyled className={className}>{description}</DescriptionStyled>;
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Description.defaultProps = {
  className: '',
};

export default Description;
