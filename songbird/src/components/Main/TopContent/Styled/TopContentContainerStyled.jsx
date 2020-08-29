import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const TopContentContainerStyled = styled.div`
  font-size: 24px;
  color: #6550de;
  width: 100%;
  height: 100%;
  display: grid;
  grid-area: imageAndPlayer;
  grid-template-columns: 30% 70%;
  grid-template-rows: 30% 70%;
  grid-template-areas:
    'image answer'
    'image player';

  @media ${DEVICE.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 20% 50% 30%;
    grid-template-areas:
      'answer'
      'image'
      'player';
  }
`;

export default TopContentContainerStyled;
