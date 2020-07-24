import styled from 'styled-components';
import logo from '../../../assets/img/logo.svg';

const LogoContainerStyled = styled.div`
  background-image: url(${logo});
  width: 200px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 10px;
`;

export default LogoContainerStyled;
