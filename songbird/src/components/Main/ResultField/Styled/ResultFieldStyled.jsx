import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const ResultFieldStyled = styled.div`
  color: #6550de;
  font-size: 24px;
  grid-area: resultField;
  display: grid;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  height: 100%;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 10% 30% 40%;
  grid-template-areas:
    'image name'
    'image latName'
    'image player'
    'description description';

  @media ${DEVICE.laptop} {
    grid-template-columns: 40% 60%;
    grid-template-rows: 20% 20% 30% 30%;
    grid-template-areas:
      'image name'
      'image latName'
      'player player'
      'description description';
  }
`;

export default ResultFieldStyled;
