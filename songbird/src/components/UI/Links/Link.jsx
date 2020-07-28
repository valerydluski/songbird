import React from 'react';
import PropTypes from 'prop-types';
import LiStyled, { AStyled } from './Styled/LinksStyled';

const Link = ({ name }) => {
  return (
    <LiStyled>
      <AStyled href="#">{name}</AStyled>
    </LiStyled>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Link;
