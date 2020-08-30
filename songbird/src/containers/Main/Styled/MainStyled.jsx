import styled from 'styled-components';
import { DEVICE } from '../../../config';

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 40% 50% 10%;
  grid-template-areas:
    'imageAndPlayer imageAndPlayer'
    'gameField resultField'
    'button button';
  width: 100%;
  height: 700px;

  @media ${DEVICE.laptop} {
    height: 1300px;
    grid-template-columns: 100%;
    grid-template-rows: 30% 20% 40% 10%;
    grid-template-areas:
      'imageAndPlayer'
      'gameField'
      'resultField'
      'button';
  }
`;

export default MainStyled;
