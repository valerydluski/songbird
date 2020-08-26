import styled from 'styled-components';
import pattern from '../../../assets/img/pattern.svg';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${pattern});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export default OverlayStyled;
