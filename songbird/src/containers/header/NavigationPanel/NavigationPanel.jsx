import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavigationPanelStyled from './Styled/NavigationPanelStyled';
import { LINKS } from '../../../config';
import Link from '../../../components/UI/Links/Link';
import { ContextApp } from '../../../store/reducer';

const NavigationPanel = ({ links }) => {
  const { state } = useContext(ContextApp);
  return (
    <NavigationPanelStyled>
      {links.map((el, index) => {
        return (
          <Link name={el.name} key={el.name} className={state.level === index ? 'active' : ''} />
        );
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
