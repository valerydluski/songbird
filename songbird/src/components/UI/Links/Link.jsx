import React from 'react';
import PropTypes from 'prop-types';
import LiStyled, { AStyled } from './Styled/LinksStyled';

const Link = ({ name, className }) => {
  return (
    <LiStyled>
      <AStyled href="#" className={className}>
        {name}
      </AStyled>
    </LiStyled>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Link;
