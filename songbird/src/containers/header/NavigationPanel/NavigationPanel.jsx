import React from 'react';
import PropTypes from 'prop-types';
import NavigationPanelStyled from './Styled/NavigationPanelStyled';
import { LINKS } from '../../../config';
import Link from '../../../components/UI/Links/Link';

const NavigationPanel = ({ links }) => {
  return (
    <NavigationPanelStyled>
      {links.map((el) => {
        return <Link name={el.name} key={el.name} />;
      })}
    </NavigationPanelStyled>
  );
};

NavigationPanel.propTypes = {
  links: PropTypes.instanceOf(Array),
};

NavigationPanel.defaultProps = {
  links: LINKS,
};

export default NavigationPanel;
