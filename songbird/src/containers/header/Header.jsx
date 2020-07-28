import React from 'react';
import HeaderStyled, { HeaderTopContent } from './Styled/HeaderStyled';
import Logo from '../../components/header/Logo';
import ScoreContainer from './Score/ScoreContainer';
import NavigationPanel from './NavigationPanel/NavigationPanel';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTopContent>
        <Logo />
        <ScoreContainer />
      </HeaderTopContent>
      <NavigationPanel />
    </HeaderStyled>
  );
};

export default Header;
